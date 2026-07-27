const { app, BrowserWindow, dialog } = require('electron');
const { spawn } = require('node:child_process');
const http = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const root = path.resolve(__dirname, '..');
const runtime = path.join(root, 'runtime');
const endpoint = 'http://127.0.0.1:8766';
let backend;
let ownsBackend = false;
let mainWindow;

for (const folder of ['desktop-user-data', 'desktop-session-data', 'desktop-cache', 'desktop-logs', 'desktop-disk-cache']) {
  fs.mkdirSync(path.join(runtime, folder), { recursive: true });
}

app.setPath('userData', path.join(runtime, 'desktop-user-data'));
app.setPath('sessionData', path.join(runtime, 'desktop-session-data'));
app.setPath('cache', path.join(runtime, 'desktop-cache'));
app.setPath('logs', path.join(runtime, 'desktop-logs'));
app.commandLine.appendSwitch('disk-cache-dir', path.join(runtime, 'desktop-disk-cache'));

if (!app.requestSingleInstanceLock()) app.quit();

function isHealthy() {
  return new Promise(resolve => {
    const request = http.get(`${endpoint}/health`, response => {
      response.resume();
      resolve(response.statusCode === 200);
    });
    request.on('error', () => resolve(false));
    request.setTimeout(700, () => { request.destroy(); resolve(false); });
  });
}

async function ensureBackend() {
  if (await isHealthy()) return;
  const python = path.join(runtime, 'venv', 'Scripts', 'python.exe');
  const backendDir = path.join(root, 'backend');
  backend = spawn(python, ['-m', 'uvicorn', 'app.main:app', '--app-dir', backendDir, '--host', '127.0.0.1', '--port', '8766'], {
    cwd: root,
    windowsHide: true,
    env: {
      ...process.env,
      VAULT_PATH: 'D:\\Jerry的知识库',
      APP_DATA_DIR: path.join(runtime, 'data'),
      PYTHONPYCACHEPREFIX: path.join(runtime, 'pycache'),
    },
  });
  ownsBackend = true;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    await new Promise(resolve => setTimeout(resolve, 500));
    if (await isHealthy()) return;
  }
  throw new Error('本地军师服务没有成功启动。请检查 runtime 目录中的日志。');
}

async function createWindow() {
  try {
    await ensureBackend();
    mainWindow = new BrowserWindow({
      width: 1360,
      height: 900,
      minWidth: 1040,
      minHeight: 700,
      title: '复盘军师',
      backgroundColor: '#f4f2ed',
      webPreferences: { contextIsolation: true, nodeIntegration: false },
    });
    await mainWindow.loadURL(endpoint);
  } catch (error) {
    dialog.showErrorBox('复盘军师未启动', error.message);
    app.quit();
  }
}

app.whenReady().then(createWindow);
app.on('second-instance', () => {
  if (!mainWindow) return;
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.focus();
});
app.on('window-all-closed', () => app.quit());
app.on('before-quit', () => { if (ownsBackend && backend) backend.kill(); });
