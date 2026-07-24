// ============================================================
// 学习看板 · 纯 DataviewJS 驱动 · 所有数据存 localStorage
// 打开本文件即可看到，无需切换浏览器
// ============================================================

// ---- 清理上次执行的定时器 ----
if (window.__dashIntervals) {
  window.__dashIntervals.forEach(clearInterval);
  window.__dashIntervals = [];
} else {
  window.__dashIntervals = [];
}
function si(fn, ms) {
  const id = setInterval(fn, ms);
  window.__dashIntervals.push(id);
  return id;
}

const C = document.getElementById('root');
C.innerHTML = '';

// ---- 注入样式 ----
const style = document.createElement('style');
style.textContent = `
.dsh *,.dsh *::before,.dsh *::after{box-sizing:border-box;margin:0;padding:0}
.dsh{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;color:#0a0a0a;background:linear-gradient(135deg,#c4c8d0 0%,#fef5d0 100%);min-height:100vh;padding:20px 28px 40px;line-height:1.5;-webkit-font-smoothing:antialiased}
.dsh button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.dsh input,.dsh textarea{font:inherit;color:inherit;background:none;border:none;outline:none}
.dsh ul,.dsh ol{list-style:none}
.dsh .serif{font-family:Georgia,'Times New Roman','SimSun',serif}

.dsh .topbar{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.55);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.6);border-radius:999px;padding:8px 18px;margin-bottom:24px;box-shadow:0 2px 12px rgba(0,0,0,.04)}
.dsh .topbar .logo{font-family:Georgia,serif;font-size:22px;letter-spacing:-.5px;padding:5px 16px;background:#fff;border-radius:999px;box-shadow:0 1px 6px rgba(0,0,0,.04)}
.dsh .topbar nav{display:flex;gap:4px;align-items:center}
.dsh .topbar nav a{font-size:13px;font-weight:500;color:#6b6b6b;padding:6px 14px;border-radius:999px;text-decoration:none;transition:all .2s}
.dsh .topbar nav a.active,.dsh .topbar nav a:hover{background:#0a0a0a;color:#fff}
.dsh .topbar .actions{display:flex;gap:6px;align-items:center}
.dsh .icon-btn{width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.04);transition:transform .2s}
.dsh .icon-btn:hover{transform:translateY(-2px)}
.dsh .icon-btn svg{width:16px;height:16px}
.dsh .avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#f9d849,#ffd64a);display:inline-flex;align-items:center;justify-content:center;font-weight:600;color:#1a1a1a;box-shadow:0 2px 8px rgba(0,0,0,.04);font-size:14px}

.dsh .cont{max-width:1400px;margin:0 auto}

.dsh .hero{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:24px;gap:20px;flex-wrap:wrap}
.dsh .hero h1{font-family:Georgia,serif;font-size:46px;font-weight:400;line-height:1.1;letter-spacing:-1px}
.dsh .hero .gt{color:#8b8b8b;font-size:15px;margin-top:4px}
.dsh .hero .sr{display:flex;gap:32px;align-items:flex-end}
.dsh .hero .si{text-align:center}
.dsh .hero .si .n{font-family:Georgia,serif;font-size:52px;line-height:1;letter-spacing:-1.5px}
.dsh .hero .si .l{font-size:12px;color:#8b8b8b;margin-top:4px}
.dsh .hero .si .n .dot{display:inline-block;width:24px;height:24px;background:#f9d849;border-radius:50%;margin-right:6px;position:relative;top:-3px}

.dsh .mets{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:20px;margin-bottom:20px}
.dsh .met{background:#fff;border-radius:18px;padding:20px;box-shadow:0 2px 10px rgba(0,0,0,.03)}
.dsh .met .h{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.dsh .met .nm{font-size:13px;font-weight:500}
.dsh .met .pc{font-family:Georgia,serif;font-size:26px;letter-spacing:-.5px}
.dsh .met .bar{height:8px;background:#ececec;border-radius:4px;overflow:hidden}
.dsh .met .fill{height:100%;background:#f9d849;border-radius:4px;transition:width .6s}

.dsh .g4{display:grid;grid-template-columns:1.05fr 1.4fr 1fr 1.2fr;gap:18px;margin-bottom:18px}
.dsh .g4b{display:grid;grid-template-columns:1.2fr 1.4fr 1.1fr .9fr;gap:18px}
.dsh .card{background:#fff;border-radius:18px;padding:20px;box-shadow:0 2px 10px rgba(0,0,0,.03);position:relative;transition:box-shadow .2s}
.dsh .card:hover{box-shadow:0 6px 20px rgba(0,0,0,.08)}
.dsh .card .ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.dsh .card .ct{font-size:15px;font-weight:600}
.dsh .card .csub{font-size:11px;color:#8b8b8b;font-weight:400;margin-top:1px}
.dsh .card .cbtn{width:30px;height:30px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:#f4f4f4;transition:background .2s}
.dsh .card .cbtn:hover{background:#f9d849}
.dsh .card .cbtn svg{width:13px;height:13px}

.dsh .motto{background:linear-gradient(180deg,#fff 0%,#fff8d6 100%);display:flex;flex-direction:column}
.dsh .motto-text{font-family:Georgia,serif;font-size:18px;line-height:1.4;color:#0a0a0a;flex:1;padding:14px 0;min-height:80px;display:flex;align-items:center;justify-content:center;text-align:center;word-break:break-word}
.dsh .motto-text.empty{color:#c0c0c0;font-style:italic;font-size:14px}
.dsh .motto-inp{width:100%;padding:10px 12px;background:rgba(255,255,255,.7);border-radius:10px;font-size:13px;border:1px solid rgba(0,0,0,.05);transition:all .2s;margin-bottom:14px}
.dsh .motto-inp:focus{background:#fff;box-shadow:0 0 0 2px #f9d849;border-color:transparent}
.dsh .motto-inp::placeholder{color:#a0a0a0}
.dsh .motto-stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding-top:14px;border-top:1px solid rgba(0,0,0,.06)}
.dsh .motto-stats .ms{text-align:center}
.dsh .motto-stats .msv{font-family:Georgia,serif;font-size:20px}
.dsh .motto-stats .msl{font-size:10px;color:#8b8b8b;margin-top:2px}

.dsh .study .tot{font-family:Georgia,serif;font-size:34px;line-height:1;margin-bottom:2px}
.dsh .study .tot small{font-size:16px;color:#8b8b8b}
.dsh .study .ls{font-size:11px;color:#8b8b8b;margin-bottom:18px}
.dsh .study .ca{display:flex;align-items:flex-end;justify-content:space-between;height:130px;padding:0 8px;position:relative;border-bottom:1px dashed #ececec}
.dsh .study .ca::before{content:'';position:absolute;left:0;right:0;top:50%;border-top:1px dashed #ececec}
.dsh .study .bc{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;position:relative}
.dsh .study .bar{width:10px;background:#0a0a0a;border-radius:3px;transition:height .4s}
.dsh .study .bar.tdy{background:#f9d849;width:14px}
.dsh .study .bar.emp{background:transparent;border:1px dashed #c8c8c8}
.dsh .study .bar .bv{position:absolute;top:-20px;font-size:10px;color:#8b8b8b;font-weight:500}
.dsh .study .dl{display:flex;justify-content:space-between;padding:6px 8px 0;font-size:10px;color:#8b8b8b}
.dsh .study .dl span{flex:1;text-align:center}

.dsh .pomo .pr{position:relative;width:190px;height:190px;margin:6px auto 16px}
.dsh .pomo .pr svg{transform:rotate(-90deg);width:100%;height:100%}
.dsh .pomo .pr .br{fill:none;stroke:#f0f0f0;stroke-width:8}
.dsh .pomo .pr .prr{fill:none;stroke:#f9d849;stroke-width:8;stroke-linecap:round;transition:stroke-dashoffset .5s linear}
.dsh .pomo .pr .dis{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.dsh .pomo .time{font-family:Georgia,serif;font-size:42px;line-height:1;letter-spacing:-1.5px}
.dsh .pomo .mode{font-size:11px;color:#8b8b8b;margin-top:5px}
.dsh .pomo .pcs{display:flex;gap:10px;align-items:center;justify-content:center}
.dsh .pomo .pbtn{width:44px;height:44px;border-radius:50%;background:#0a0a0a;color:#fff;display:inline-flex;align-items:center;justify-content:center;transition:transform .15s}
.dsh .pomo .pbtn:hover{transform:scale(1.05)}
.dsh .pomo .pbtn.sec{background:#f4f4f4;color:#0a0a0a}
.dsh .pomo .pbtn.sec:hover{background:#f9d849}
.dsh .pomo .pbtn svg{width:16px;height:16px}
.dsh .pomo .pct{text-align:center;margin-top:14px;font-size:12px;color:#8b8b8b}
.dsh .pomo .pct strong{color:#0a0a0a;font-family:Georgia,serif;font-size:16px}

.dsh .subj .spc{position:absolute;top:20px;right:54px;font-family:Georgia,serif;font-size:20px}
.dsh .subj .pb{display:flex;flex-direction:column;gap:12px;margin-top:6px}
.dsh .subj .si{display:flex;flex-direction:column;gap:5px}
.dsh .subj .sh{display:flex;justify-content:space-between;align-items:center;font-size:12px}
.dsh .subj .sh .sn{font-weight:500}
.dsh .subj .sh .sv{color:#8b8b8b;font-size:11px}
.dsh .subj .sb{height:16px;border-radius:5px;background:#d8d8d8;overflow:hidden;position:relative}
.dsh .subj .sf{height:100%;background:#f9d849;border-radius:5px;transition:width .5s}
.dsh .subj .srange{width:100%;height:4px;margin-top:3px;appearance:none;-webkit-appearance:none;background:#e0e0e0;border-radius:2px;outline:none;cursor:pointer}
.dsh .subj .srange::-webkit-slider-thumb{appearance:none;width:14px;height:14px;background:#0a0a0a;border-radius:50%;cursor:pointer}
.dsh .subj .adds{display:flex;align-items:center;justify-content:center;height:30px;border:1px dashed #d0d0d0;border-radius:6px;color:#8b8b8b;font-size:11px;margin-top:2px;transition:all .2s}
.dsh .subj .adds:hover{border-color:#f9d849;color:#0a0a0a;background:rgba(249,216,73,.15)}
.dsh .subj .sdel{background:none;border:none;color:#c0c0c0;cursor:pointer;font-size:14px;padding:0 4px;transition:color .2s}
.dsh .subj .sdel:hover{color:#e74c3c}

.dsh .todu .st{font-size:12px;font-weight:600;color:#6b6b6b;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center}
.dsh .todu .tl{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
.dsh .todu .ti{display:flex;align-items:center;gap:8px;padding:7px 9px;border-radius:7px;transition:background .2s}
.dsh .todu .ti:hover{background:#fafafa}
.dsh .todu .tc{width:17px;height:17px;border-radius:4px;border:1.5px solid #d0d0d0;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}
.dsh .todu .ti.done .tc{background:#0a0a0a;border-color:#0a0a0a;color:#f9d849}
.dsh .todu .tc svg{width:11px;height:11px;opacity:0;transition:opacity .15s}
.dsh .todu .ti.done .tc svg{opacity:1}
.dsh .todu .tt{font-size:12px;flex:1}
.dsh .todu .ti.done .tt{text-decoration:line-through;color:#8b8b8b}
.dsh .todu .tdel{opacity:0;transition:opacity .2s;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;color:#8b8b8b;font-size:14px;cursor:pointer;border:none;background:none}
.dsh .todu .ti:hover .tdel{opacity:1}
.dsh .todu .tdel:hover{color:#e74c3c}
.dsh .todu .tinp{width:100%;padding:9px 10px;background:#fafafa;border-radius:9px;font-size:12px;transition:background .2s;border:none;outline:none}
.dsh .todu .tinp:focus{background:#fff;box-shadow:0 0 0 1px #f9d849}
.dsh .todu .tinp::placeholder{color:#8b8b8b}

.dsh .insl{display:flex;flex-direction:column;gap:7px;max-height:130px;overflow-y:auto;padding-right:4px}
.dsh .insl::-webkit-scrollbar{width:4px}
.dsh .insl::-webkit-scrollbar-thumb{background:#e0e0e0;border-radius:2px}
.dsh .insl .ii{padding:7px 9px;background:#fefdf5;border-left:3px solid #f9d849;border-radius:5px;font-size:11px;position:relative}
.dsh .insl .ii .it{font-weight:500;margin-bottom:1px}
.dsh .insl .ii .im{color:#8b8b8b;font-size:10px}
.dsh .insl .ii .idel{position:absolute;right:5px;top:5px;width:15px;height:15px;display:none;align-items:center;justify-content:center;color:#8b8b8b;cursor:pointer;border:none;background:none;font-size:12px}
.dsh .insl .ii:hover .idel{display:inline-flex}
.dsh .insl .ii .idel:hover{color:#e74c3c}

.dsh .cal .clh{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.dsh .cal .mn{display:flex;gap:4px;align-items:center}
.dsh .cal .mn button{width:26px;height:26px;border-radius:50%;background:#f4f4f4;display:inline-flex;align-items:center;justify-content:center;font-size:11px;transition:background .2s;border:none;cursor:pointer}
.dsh .cal .mn button:hover{background:#f9d849}
.dsh .cal .ml{font-family:Georgia,serif;font-size:16px;margin:0 6px}
.dsh .cal .wr{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;font-size:10px;color:#8b8b8b;margin-bottom:6px}
.dsh .cal .dg{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
.dsh .cal .dy{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:12px;border-radius:7px;cursor:pointer;transition:all .15s}
.dsh .cal .dy:hover{background:#f4f4f4}
.dsh .cal .dy.oth{color:#c8c8c8}
.dsh .cal .dy.tdy{background:#0a0a0a;color:#f9d849;font-weight:600}
.dsh .cal .dy.sel{background:#f9d849;color:#0a0a0a;font-weight:600}
.dsh .cal .dy.ev::after{content:'';position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:#f9d849}
.dsh .cal .dy.tdy.ev::after{background:#fff}
.dsh .cal .evl{margin-top:10px;padding-top:10px;border-top:1px solid #ececec;font-size:11px;color:#6b6b6b}
.dsh .cal .ep{background:#f4f4f4;border-radius:7px;padding:5px 9px;margin-bottom:3px;font-size:11px;display:flex;justify-content:space-between;align-items:center}
.dsh .cal .ep .et{color:#8b8b8b;font-size:9px}

.dsh .ttask .th{font-family:Georgia,serif;font-size:20px;color:#0a0a0a}
.dsh .ttask .th .tss{font-size:10px;color:#8b8b8b;font-family:Inter,sans-serif;margin-left:3px}
.dsh .ttask .tkl{display:flex;flex-direction:column;gap:5px;max-height:220px;overflow-y:auto;padding-right:4px}
.dsh .ttask .tkl::-webkit-scrollbar{width:4px}
.dsh .ttask .tkl::-webkit-scrollbar-thumb{background:#e0e0e0;border-radius:2px}
.dsh .ttask .tkr{display:flex;align-items:center;gap:9px;padding:9px 11px;background:#0a0a0a;color:#fff;border-radius:9px;font-size:12px;transition:transform .15s}
.dsh .ttask .tkr:hover{transform:translateX(2px)}
.dsh .ttask .tkr .ticn{width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.12);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
.dsh .ttask .tkr .ticn svg{width:11px;height:11px;color:#f9d849}
.dsh .ttask .tkr .tmf{flex:1}
.dsh .ttask .tkr .tmf .tmt{font-weight:500}
.dsh .ttask .tkr .tmf .tms{font-size:9px;color:rgba(255,255,255,.6);margin-top:1px}
.dsh .ttask .tkr .tck{width:18px;height:18px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s}
.dsh .ttask .tkr .tck.done{background:#f9d849;border-color:#f9d849;color:#0a0a0a}
.dsh .ttask .tkr .tck svg{width:11px;height:11px;opacity:0}
.dsh .ttask .tkr .tck.done svg{opacity:1}
.dsh .ttask .tkinp{display:flex;gap:5px;margin-top:8px}
.dsh .ttask .tkinp input{flex:1;padding:7px 10px;background:#f4f4f4;border-radius:7px;font-size:12px;border:none;outline:none}
.dsh .ttask .tkinp input:focus{background:#fff;box-shadow:0 0 0 1px #f9d849}
.dsh .ttask .tkinp button{padding:7px 11px;background:#0a0a0a;color:#f9d849;border-radius:7px;font-size:11px;font-weight:500;border:none;cursor:pointer}

.dsh .wea{background:linear-gradient(160deg,#fff 0%,#fff3b0 100%);display:flex;flex-direction:column}
.dsh .wea .city{font-size:12px;color:#6b6b6b;margin-bottom:3px}
.dsh .wea .temp{font-family:Georgia,serif;font-size:52px;line-height:1;letter-spacing:-1.5px;margin-bottom:2px}
.dsh .wea .temp sup{font-size:20px;vertical-align:top}
.dsh .wea .cond{font-size:12px;color:#6b6b6b;margin-bottom:14px}
.dsh .wea .ico{font-size:44px;margin:2px 0 10px}
.dsh .wea .wst{margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:10px;border-top:1px solid rgba(0,0,0,.06)}
.dsh .wea .wst .wi{background:rgba(255,255,255,.6);border-radius:9px;padding:7px 9px}
.dsh .wea .wst .wi .wl{font-size:9px;color:#8b8b8b}
.dsh .wea .wst .wi .wv{font-family:Georgia,serif;font-size:14px;margin-top:1px}

.dsh .modal-mask{position:fixed;inset:0;background:rgba(0,0,0,.4);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;z-index:999}
.dsh .modal-mask.show{display:flex}
.dsh .modal{background:#fff;border-radius:18px;padding:28px;width:90%;max-width:460px;box-shadow:0 20px 60px rgba(0,0,0,.2)}
.dsh .modal h2{font-family:Georgia,serif;font-size:22px;margin-bottom:14px}
.dsh .modal .fld{margin-bottom:14px}
.dsh .modal label{font-size:11px;color:#8b8b8b;display:block;margin-bottom:5px}
.dsh .modal input,.dsh .modal select{width:100%;padding:9px 11px;background:#fafafa;border-radius:9px;font-size:13px;border:1px solid transparent}
.dsh .modal input:focus,.dsh .modal select:focus{background:#fff;border-color:#f9d849}
.dsh .modal .acts{display:flex;gap:6px;justify-content:flex-end;margin-top:20px}
.dsh .modal button{padding:9px 18px;border-radius:9px;font-size:12px;font-weight:500;border:none;cursor:pointer}
.dsh .modal .btn-p{background:#0a0a0a;color:#f9d849}
.dsh .modal .btn-s{background:#f4f4f4;color:#0a0a0a}
.dsh .modal .btn-d{background:#fff;color:#e74c3c;border:1px solid #fde0dd}

.dsh .notif{position:fixed;top:20px;right:20px;background:#0a0a0a;color:#f9d849;padding:14px 22px;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.2);z-index:998;font-size:13px;max-width:300px;animation:nf .3s ease}
@keyframes nf{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}

.dsh .inspire-card{display:flex;gap:20px;align-items:stretch;min-height:180px}
.dsh .inspire-card .img-zone{width:280px;flex-shrink:0;border-radius:12px;overflow:hidden;background:#f0f0f0;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;transition:all .2s;min-height:160px}
.dsh .inspire-card .img-zone:hover{box-shadow:0 4px 16px rgba(0,0,0,.1)}
.dsh .inspire-card .img-zone img{width:100%;height:100%;object-fit:cover;display:block}
.dsh .inspire-card .img-zone .img-placeholder{display:flex;flex-direction:column;align-items:center;gap:8px;color:#b0b0b0;font-size:13px}
.dsh .inspire-card .img-zone .img-placeholder svg{width:40px;height:40px;opacity:.4}
.dsh .inspire-card .img-zone .img-del{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.5);color:#fff;display:none;align-items:center;justify-content:center;font-size:14px;cursor:pointer}
.dsh .inspire-card .img-zone:hover .img-del{display:flex}
.dsh .inspire-card .img-zone .img-del:hover{background:#e74c3c}
.dsh .inspire-card .quote-zone{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}
.dsh .inspire-card .quote-zone .quote-text{font-family:Georgia,serif;font-size:22px;line-height:1.5;color:#0a0a0a;margin-bottom:8px;position:relative}
.dsh .inspire-card .quote-zone .quote-text::before{content:'\\201C';font-size:48px;color:#f9d849;position:absolute;left:-8px;top:-8px;line-height:1;z-index:-1}
.dsh .inspire-card .quote-zone .quote-from{font-size:12px;color:#8b8b8b;margin-bottom:12px}
.dsh .inspire-card .quote-zone .quote-acts{display:flex;gap:8px}
.dsh .inspire-card .quote-zone .qbtn{font-size:11px;padding:6px 14px;border-radius:999px;background:#f4f4f4;transition:all .2s}
.dsh .inspire-card .quote-zone .qbtn:hover{background:#f9d849}
.dsh .img-modal .img-url-inp{width:100%;padding:10px 12px;background:#fafafa;border-radius:10px;font-size:13px;border:1px solid transparent;margin-bottom:8px}
.dsh .img-modal .img-url-inp:focus{background:#fff;border-color:#f9d849;box-shadow:0 0 0 2px rgba(249,216,73,.3)}
.dsh .img-modal .img-hint{font-size:10px;color:#8b8b8b;margin-bottom:12px;line-height:1.5}
.dsh .img-modal .img-preview{border-radius:10px;overflow:hidden;max-height:200px;margin-bottom:10px;background:#f0f0f0}
.dsh .img-modal .img-preview img{width:100%;display:block;object-fit:contain;max-height:200px}

@media(max-width:1100px){.dsh .g4,.dsh .g4b{grid-template-columns:1fr 1fr}.dsh .mets{grid-template-columns:1fr 1fr}.dsh .inspire-card{flex-direction:column}.dsh .inspire-card .img-zone{width:100%;min-height:200px}}
@media(max-width:700px){.dsh{padding:12px}.dsh .g4,.dsh .g4b{grid-template-columns:1fr}.dsh .mets{grid-template-columns:1fr 1fr}.dsh .hero h1{font-size:32px}.dsh .hero .si .n{font-size:36px}}
`;

// ---- 创建根容器 ----
const D = document.createElement('div');
D.className = 'dsh';
C.appendChild(D);

// ---- 组件工具函数 ----
const $ = (s) => D.querySelector(s);
const $$ = (s) => D.querySelectorAll(s);

// ---- 通知（页面内弹出）----
function notify(title, body) {
  const div = document.createElement('div');
  div.className = 'notif';
  div.innerHTML = `<div style="font-weight:600;margin-bottom:4px">${title}</div><div style="color:rgba(255,255,255,.7);font-size:11px">${body}</div>`;
  D.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}

// ---- 数据存储 ----
const Store = {
  KEY: 'jerry-obsidian-dash-v2',
  defaults: {
    name: 'Jerry', role: '在校大学生 · 大三', city: '北京',
    pomoGoal: 8, weekGoal: 30, focusMin: 25, breakMin: 5,
    todos: [], inspirations: [],
    subjects: [
      { name: '高等数学', progress: 75 },
      { name: '英语', progress: 60 },
      { name: '计算机科学', progress: 45 },
    ],
    pomos: [], streak: { last: null, count: 0 }, todayTasks: [], motto: '',
    images: [], dailyQuote: { date: '', index: 0 },
  },
  data: null,
  load() {
    try { const r = localStorage.getItem(this.KEY); this.data = r ? { ...this.defaults, ...JSON.parse(r) } : { ...this.defaults }; }
    catch (e) { this.data = { ...this.defaults }; }
  },
  save() { localStorage.setItem(this.KEY, JSON.stringify(this.data)); },
  todayKey() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; },
  todayPomos() {
    const k = this.todayKey();
    return (this.data.pomos || []).find(p => p.date === k) || { date: k, count: 0, mins: 0 };
  },
  addPomo(mins) {
    const k = this.todayKey();
    let e = this.data.pomos.find(p => p.date === k);
    if (!e) { e = { date: k, count: 0, mins: 0 }; this.data.pomos.push(e); }
    e.count++; e.mins += mins;
    this.updateStreak();
    this.save();
  },
  updateStreak() {
    const today = this.todayKey();
    if (this.data.streak.last === today) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yk = `${y.getFullYear()}-${String(y.getMonth()+1).padStart(2,'0')}-${String(y.getDate()).padStart(2,'0')}`;
    this.data.streak.count = (this.data.streak.last === yk) ? this.data.streak.count + 1 : 1;
    this.data.streak.last = today;
  }
};

Store.load();

// ---- 励志语录池 ----
const QUOTES = [
  { text: '学如逆水行舟，不进则退。', from: '《增广贤文》' },
  { text: '千里之行，始于足下。', from: '《道德经》' },
  { text: '不积跬步，无以至千里；不积小流，无以成江海。', from: '《荀子》' },
  { text: '业精于勤，荒于嬉；行成于思，毁于随。', from: '韩愈' },
  { text: '书山有路勤为径，学海无涯苦作舟。', from: '韩愈' },
  { text: '天行健，君子以自强不息。', from: '《周易》' },
  { text: '宝剑锋从磨砺出，梅花香自苦寒来。', from: '《警世贤文》' },
  { text: '莫等闲，白了少年头，空悲切。', from: '岳飞' },
  { text: '少壮不努力，老大徒伤悲。', from: '《长歌行》' },
  { text: '三更灯火五更鸡，正是男儿读书时。', from: '颜真卿' },
  { text: '纸上得来终觉浅，绝知此事要躬行。', from: '陆游' },
  { text: '路漫漫其修远兮，吾将上下而求索。', from: '屈原' },
  { text: '博观而约取，厚积而薄发。', from: '苏轼' },
  { text: '黑发不知勤学早，白首方悔读书迟。', from: '颜真卿' },
  { text: '盛年不重来，一日难再晨。及时当勉励，岁月不待人。', from: '陶渊明' },
  { text: '非学无以广才，非志无以成学。', from: '诸葛亮' },
  { text: '学而不思则罔，思而不学则殆。', from: '《论语》' },
  { text: '知之者不如好之者，好之者不如乐之者。', from: '《论语》' },
  { text: '温故而知新，可以为师矣。', from: '《论语》' },
  { text: '三人行，必有我师焉。', from: '《论语》' },
  { text: '锲而不舍，金石可镂。', from: '《荀子》' },
  { text: '有志者，事竟成。', from: '《后汉书》' },
  { text: '志当存高远。', from: '诸葛亮' },
  { text: '绳锯木断，水滴石穿。', from: '《汉书》' },
  { text: '一日之计在于晨，一年之计在于春。', from: '《增广贤文》' },
  { text: '读书破万卷，下笔如有神。', from: '杜甫' },
  { text: '问渠那得清如许，为有源头活水来。', from: '朱熹' },
  { text: '故天将降大任于是人也，必先苦其心志，劳其筋骨。', from: '《孟子》' },
  { text: '穷且益坚，不坠青云之志。', from: '王勃' },
  { text: '长风破浪会有时，直挂云帆济沧海。', from: '李白' },
  { text: '天生我材必有用，千金散尽还复来。', from: '李白' },
  { text: '不要人夸好颜色，只留清气满乾坤。', from: '王冕' },
  { text: '千磨万击还坚劲，任尔东西南北风。', from: '郑燮' },
  { text: '欲穷千里目，更上一层楼。', from: '王之涣' },
  { text: '会当凌绝顶，一览众山小。', from: '杜甫' },
  { text: '不畏浮云遮望眼，自缘身在最高层。', from: '王安石' },
  { text: '山重水复疑无路，柳暗花明又一村。', from: '陆游' },
  { text: '沉舟侧畔千帆过，病树前头万木春。', from: '刘禹锡' },
  { text: '老骥伏枥，志在千里。烈士暮年，壮心不已。', from: '曹操' },
  { text: '人生自古谁无死，留取丹心照汗青。', from: '文天祥' },
  { text: '先天下之忧而忧，后天下之乐而乐。', from: '范仲淹' },
  { text: '为中华之崛起而读书。', from: '周恩来' },
  { text: '时间就像海绵里的水，只要愿挤，总还是有的。', from: '鲁迅' },
  { text: '世上无难事，只要肯登攀。', from: '毛泽东' },
  { text: '活到老，学到老。', from: '谚语' },
  { text: '一分耕耘，一分收获。', from: '谚语' },
  { text: '失败是成功之母。', from: '谚语' },
  { text: '笨鸟先飞早入林。', from: '谚语' },
  { text: '只要功夫深，铁杵磨成针。', from: '谚语' },
  { text: '今日事，今日毕。', from: '谚语' },
];

// ---- HTML 模板 ----
const S = (s) => s.replace(/[<>&"']/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' }[c]));

// ---- 渲染函数（惰性求值，先定义模块后调用）----
function renderAll() {
  const tf = (id, text) => `<input id="${id}" placeholder="${text}" maxlength="100" />`;
  D.innerHTML = `
<div class="topbar">
  <div class="logo">📊 学习看板</div>
  <div class="actions">
    <button class="icon-btn" id="settingsBtn" title="设置"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button>
  </div>
</div>

<div class="cont">
  <section class="hero">
    <div>
      <h1 id="greeting">Welcome in, <span id="userName">Jerry</span></h1>
      <div class="gt" id="liveTime">--</div>
    </div>
    <div class="sr">
      <div class="si"><div class="n"><span class="dot"></span><span id="statDays">0</span></div><div class="l">学习日</div></div>
      <div class="si"><div class="n"><span class="dot"></span><span id="statPomodoros">0</span></div><div class="l">完成番茄</div></div>
      <div class="si"><div class="n"><span class="dot"></span><span id="statInspires">0</span></div><div class="l">灵感数</div></div>
    </div>
  </section>

  <section class="mets">
    <div class="met"><div class="h"><span class="nm">今日专注</span><span class="pc" id="metricToday">0%</span></div><div class="bar"><div class="fill" id="metricTodayBar" style="width:0%"></div></div></div>
    <div class="met"><div class="h"><span class="nm">本周目标</span><span class="pc" id="metricWeek">0%</span></div><div class="bar"><div class="fill" id="metricWeekBar" style="width:0%"></div></div></div>
    <div class="met"><div class="h"><span class="nm">学期进度</span><span class="pc" id="metricTerm">0%</span></div><div class="bar"><div class="fill" id="metricTermBar" style="width:0%"></div></div></div>
    <div class="met"><div class="h"><span class="nm">任务完成</span><span class="pc" id="metricTasks">0%</span></div><div class="bar"><div class="fill" id="metricTasksBar" style="width:0%"></div></div></div>
  </section>

  <section style="margin-bottom:18px">
    <div class="card inspire-card">
      <div class="img-zone" id="imgZone" title="点击添加图片">
        <div class="img-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>点击添加图片</span></div>
      </div>
      <div class="quote-zone">
        <div class="quote-text" id="quoteText">--</div>
        <div class="quote-from" id="quoteFrom">--</div>
        <div class="quote-acts">
          <button class="qbtn" id="quoteRefresh">🔀 换一句</button>
          <button class="qbtn" id="imgAddBtn">🖼 添加图片/视频</button>
          <span style="font-size:10px;color:#b0b0b0;margin-left:4px;display:flex;align-items:center" id="imgCount">0 个</span>
        </div>
      </div>
    </div>
  </section>

  <section class="g4">
    <div class="card motto">
      <div class="ch"><div class="ct">今日一句话</div><span style="font-size:11px;color:#8b8b8b">写给今天的自己</span></div>
      <div class="motto-text" id="mottoText">还没有写，点下方输入</div>
      <input class="motto-inp" id="mottoInput" placeholder="今天要做什么 / 想到了什么..." maxlength="80" />
      <div class="motto-stats">
        <div class="ms"><div class="msv" id="mottoPomodoros">0</div><div class="msl">今日番茄</div></div>
        <div class="ms"><div class="msv" id="mottoDays">0</div><div class="msl">连击天数</div></div>
        <div class="ms"><div class="msv" id="mottoHours">0.0</div><div class="msl">总学时</div></div>
      </div>
    </div>

    <div class="card study">
      <div class="ch">
        <div><div class="ct">Study Time</div><div class="csub">本周</div></div>
        <button class="cbtn" id="chartRefresh"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg></button>
      </div>
      <div class="tot"><span id="weekHours">0.0</span><small>h</small></div>
      <div class="ls">本周累计学习时长</div>
      <div class="ca" id="weekChart"></div>
      <div class="dl" id="weekLabels"></div>
    </div>

    <div class="card pomo">
      <div class="ch"><div class="ct">Pomodoro</div><button class="cbtn" id="pomoSettings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></button></div>
      <div class="pr"><svg viewBox="0 0 200 200"><circle class="br" cx="100" cy="100" r="90"></circle><circle class="prr" id="pomoRing" cx="100" cy="100" r="90" stroke-dasharray="565.48" stroke-dashoffset="0"></circle></svg><div class="dis"><div class="time" id="pomoTime">25:00</div><div class="mode" id="pomoMode">专注时间</div></div></div>
      <div class="pcs">
        <button class="pbtn sec" id="pomoReset"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg></button>
        <button class="pbtn" id="pomoToggle"><svg id="pomoIcon" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
        <button class="pbtn sec" id="pomoSkip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg></button>
      </div>
      <div class="pct">今日完成 <strong id="pomoTodayCount">0</strong> 个番茄 · <span id="pomoTodayMins">0</span> 分钟</div>
    </div>

    <div class="card subj">
      <div class="ch"><div><div class="ct">Subjects</div><div class="csub">学科进度</div></div></div>
      <div class="spc" id="subjectsAvg">0%</div>
      <div class="pb" id="subjectsList"></div>
      <button class="adds" id="subjectsAdd">+ 添加学科</button>
    </div>
  </section>

  <section class="g4b">
    <div class="card todu">
      <div class="ch">
        <div class="ct">Quick Capture</div>
        <span style="font-size:11px;color:#8b8b8b" id="todoCount">0 项</span>
      </div>
      <div class="st"><span>📋 待办</span><span style="color:#8b8b8b;font-weight:400">点击勾选完成</span></div>
      <div class="tl" id="todoList"></div>
      <input class="tinp" id="todoInput" placeholder="+ 添加待办（回车确认）" maxlength="100" />
      <div class="st" style="margin-top:16px"><span>💡 灵感库</span><span style="color:#8b8b8b;font-weight:400" id="inspireCount">0 条</span></div>
      <div class="insl" id="inspireList"></div>
      <input class="tinp" id="inspireInput" placeholder="+ 快速记录想法..." maxlength="200" style="margin-top:0" />
    </div>

    <div class="card cal">
      <div class="clh">
        <div class="ct">Calendar</div>
        <div class="mn">
          <button id="prevMonth">&lt;</button>
          <span class="ml" id="monthLabel">--</span>
          <button id="nextMonth">&gt;</button>
        </div>
      </div>
      <div class="wr"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div>
      <div class="dg" id="dayGrid"></div>
      <div class="evl" id="eventsList" style="display:none">
        <div style="font-weight:600;margin-bottom:6px" id="eventsTitle">--</div>
        <div id="eventsContent"></div>
      </div>
    </div>

    <div class="card ttask">
      <div class="ch">
        <div class="ct">Today's Focus</div>
        <div class="th"><span id="taskDone">0</span>/<span id="taskTotal">0</span><span class="tss">tasks</span></div>
      </div>
      <div class="tkl" id="taskList"></div>
      <div class="tkinp"><input id="taskInput" placeholder="添加今日任务..." maxlength="80" /><button id="addTaskBtn">+ Add</button></div>
    </div>

    <div class="card wea" id="weatherCard">
      <div class="city" id="weatherCity">加载中...</div>
      <div class="ico" id="weatherIcon">⛅</div>
      <div class="temp" id="weatherTemp">--<sup>°C</sup></div>
      <div class="cond" id="weatherCondition">--</div>
      <div class="wst">
        <div class="wi"><div class="wl">湿度</div><div class="wv" id="weatherHumidity">--%</div></div>
        <div class="wi"><div class="wl">风速</div><div class="wv" id="weatherWind">-- km/h</div></div>
      </div>
    </div>
  </section>
</div>

<div class="modal-mask" id="settingsModal">
  <div class="modal">
    <h2>⚙️ 设置</h2>
    <div class="fld"><label>姓名</label><input id="setName" placeholder="你的名字" /></div>
    <div class="fld"><label>身份 / 专业</label><input id="setRole" placeholder="例如：在校大学生 · 计算机科学" /></div>
    <div class="fld"><label>城市（用于天气查询）</label><input id="setCity" placeholder="例如：北京 / Shanghai" /></div>
    <div class="fld"><label>每日专注目标（番茄数）</label><input id="setPomoGoal" type="number" min="1" max="20" /></div>
    <div class="fld"><label>每周学习目标（小时）</label><input id="setWeekGoal" type="number" min="1" max="100" /></div>
    <div class="acts"><button class="btn-d" id="resetAll">清空所有数据</button><button class="btn-s" id="closeSettings">取消</button><button class="btn-p" id="saveSettings">保存</button></div>
  </div>
</div>

<div class="modal-mask" id="pomoSettingsModal">
  <div class="modal">
    <h2>🍅 番茄钟设置</h2>
    <div class="fld"><label>专注时长（分钟）</label><input id="setFocusMin" type="number" min="1" max="120" /></div>
    <div class="fld"><label>休息时长（分钟）</label><input id="setBreakMin" type="number" min="1" max="60" /></div>
    <div class="acts"><button class="btn-s" id="closePomoSettings">取消</button><button class="btn-p" id="savePomoSettings">保存</button></div>
  </div>
</div>

<div class="modal-mask img-modal" id="imgModal">
  <div class="modal">
    <h2>🖼 添加图片 / 视频</h2>
    <div class="fld"><label>链接（图片URL / 视频URL / YouTube / Bilibili）</label><input class="img-url-inp" id="imgUrlInput" placeholder="https://... 或放文件到知识库后用相对路径" /></div>
    <div class="img-preview" id="imgPreview" style="display:none"><img id="imgPreviewImg" alt="预览" /></div>
    <div class="img-hint">把文件放到 D:\Jerry的知识库\ 目录下，用 http://localhost:8765/文件名 引用。<br>支持：图片(.jpg .png .gif) / 视频(.mp4 .webm .mov) / YouTube / Bilibili / Vimeo 链接</div>
    <div class="acts"><button class="btn-s" id="closeImgModal">取消</button><button class="btn-p" id="saveImgUrl">添加</button></div>
  </div>
</div>
`;
}

renderAll();

// ---- 时钟 ----
function startClock() {
  function tick() {
    const d = new Date();
    const wd = ['日','一','二','三','四','五','六'];
    const pd = n => String(n).padStart(2,'0');
    const el = $('#liveTime'); if (!el) return;
    el.textContent = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日 星期${wd[d.getDay()]} · ${pd(d.getHours())}:${pd(d.getMinutes())}:${pd(d.getSeconds())}`;
    const h = d.getHours();
    let g = '欢迎回来';
    if (h < 6) g = '夜深了，记得休息';
    else if (h < 11) g = '早安';
    else if (h < 13) g = '中午好';
    else if (h < 18) g = '下午好';
    else g = '晚上好';
    const ge = $('#greeting'); if (ge) ge.innerHTML = `${g}, <span id="userName">${Store.data.name}</span>`;
  }
  tick();
  si(tick, 1000);
}

// ---- 统计刷新 ----
function refreshStats() {
  const ud = new Set(Store.data.pomos.map(p => p.date)).size;
  const tp = Store.data.pomos.reduce((s, p) => s + p.count, 0);
  const th = Store.data.pomos.reduce((s, p) => s + p.mins, 0) / 60;
  const ni = Store.data.inspirations.length;
  const sc = Store.data.streak.count;
  const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
  set('statDays', ud); set('statPomodoros', tp); set('statInspires', ni);
  set('mottoPomodoros', Store.todayPomos().count);
  set('mottoDays', sc);
  set('mottoHours', th.toFixed(1));
}

// ---- 指标刷新 ----
function refreshMetrics() {
  const tp = Store.todayPomos();
  const tpPct = Math.min(100, Math.round(tp.count / Store.data.pomoGoal * 100));
  let wm = 0;
  for (let i = 0; i < 7; i++) { const d = new Date(); d.setDate(d.getDate() - i); const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; const e = Store.data.pomos.find(p => p.date === k); if (e) wm += e.mins; }
  const wpPct = Math.min(100, Math.round(wm / 60 / Store.data.weekGoal * 100));
  const avg = Store.data.subjects.length ? Math.round(Store.data.subjects.reduce((s, x) => s + x.progress, 0) / Store.data.subjects.length) : 0;
  const tasks = Store.data.todayTasks; const done = tasks.filter(t => t.done).length;
  const tkPct = tasks.length ? Math.round(done / tasks.length * 100) : 0;
  const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
  const setW = (id, w) => { const e = $('#'+id); if (e) e.style.width = w; };
  set('metricToday', tpPct+'%'); setW('metricTodayBar', tpPct+'%');
  set('metricWeek', wpPct+'%'); setW('metricWeekBar', wpPct+'%');
  set('metricTerm', avg+'%'); setW('metricTermBar', avg+'%');
  set('metricTasks', tkPct+'%'); setW('metricTasksBar', tkPct+'%');
}

// ---- 本周柱状图 ----
function refreshChart() {
  const wd = ['日','一','二','三','四','五','六'];
  const today = new Date(); const tk = Store.todayKey();
  let data = [], total = 0;
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const e = Store.data.pomos.find(p => p.date === k);
    const hrs = e ? e.mins / 60 : 0;
    data.push({ k, hrs, tdy: k === tk, day: wd[d.getDay()] }); total += hrs;
  }
  const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
  set('weekHours', total.toFixed(1));
  const maxH = Math.max(2, ...data.map(d => d.hrs));
  const ca = $('#weekChart'); if (!ca) return;
  ca.innerHTML = data.map(d => {
    const h = d.hrs > 0 ? Math.max(8, (d.hrs / maxH) * 110) : 8;
    const cls = d.tdy ? 'tdy' : (d.hrs === 0 ? 'emp' : '');
    const vl = d.hrs > 0 ? `<div class="bv">${d.hrs.toFixed(1)}h</div>` : '';
    return `<div class="bc"><div class="bar ${cls}" style="height:${h}px">${vl}</div></div>`;
  }).join('');
  const dl = $('#weekLabels'); if (dl) dl.innerHTML = data.map(d => `<span>${d.day}</span>`).join('');
}
$('#chartRefresh')?.addEventListener('click', refreshChart);

// ---- 番茄钟 ----
let pomoInterval = null;
let pomoRemaining = Store.data.focusMin * 60;
let pomoMode = 'focus';
let pomoRunning = false;
const CIRC = 2 * Math.PI * 90;

function pomoTotalSec() { return (pomoMode === 'focus' ? Store.data.focusMin : Store.data.breakMin) * 60; }

function pomoRender() {
  const total = pomoTotalSec(), left = pomoRemaining;
  const m = Math.floor(left / 60), s = left % 60;
  const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
  set('pomoTime', `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`);
  set('pomoMode', pomoMode === 'focus' ? '专注时间' : '休息时间');
  const offset = CIRC * (left / total);
  const ring = $('#pomoRing'); if (ring) ring.style.strokeDashoffset = CIRC - offset;
  const tp = Store.todayPomos();
  set('pomoTodayCount', tp.count); set('pomoTodayMins', tp.mins);
}

function pomoToggle() {
  if (pomoRunning) pomoPause(); else pomoStart();
}

function pomoStart() {
  pomoRunning = true;
  const icon = $('#pomoIcon'); if (icon) icon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
  pomoInterval = setInterval(() => {
    if (pomoRemaining <= 0) { pomoComplete(); return; }
    pomoRemaining--;
    pomoRender();
  }, 1000);
}

function pomoPause() {
  pomoRunning = false;
  const icon = $('#pomoIcon'); if (icon) icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
  if (pomoInterval) clearInterval(pomoInterval);
}

function pomoReset() {
  pomoPause();
  pomoRemaining = pomoTotalSec();
  pomoRender();
}

function pomoComplete() {
  pomoPause();
  if (pomoMode === 'focus') {
    Store.addPomo(Store.data.focusMin);
    refreshStats(); refreshMetrics(); refreshChart();
    notify('🍅 专注完成！休息一下吧', `已完成 ${Store.data.focusMin} 分钟专注`);
    pomoMode = 'break'; pomoRemaining = Store.data.breakMin * 60;
  } else {
    notify('☕ 休息结束', '准备开始下一轮专注');
    pomoMode = 'focus'; pomoRemaining = Store.data.focusMin * 60;
  }
  pomoRender();
  try { const ctx = new (window.AudioContext || window.webkitAudioContext)(); const o = ctx.createOscillator(); const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination); o.frequency.value = 880; g.gain.value = 0.2; o.start(); setTimeout(() => { o.frequency.value = 660; }, 200); setTimeout(() => { o.stop(); ctx.close(); }, 500); } catch (e) {}
}

pomoRender();
$('#pomoToggle')?.addEventListener('click', pomoToggle);
$('#pomoReset')?.addEventListener('click', pomoReset);
$('#pomoSkip')?.addEventListener('click', pomoComplete);
$('#pomoSettings')?.addEventListener('click', () => {
  const fm = $('#setFocusMin'), bm = $('#setBreakMin');
  if (fm) fm.value = Store.data.focusMin;
  if (bm) bm.value = Store.data.breakMin;
  $('#pomoSettingsModal')?.classList.add('show');
});
$('#closePomoSettings')?.addEventListener('click', () => $('#pomoSettingsModal')?.classList.remove('show'));
$('#savePomoSettings')?.addEventListener('click', () => {
  Store.data.focusMin = parseInt($('#setFocusMin')?.value) || 25;
  Store.data.breakMin = parseInt($('#setBreakMin')?.value) || 5;
  Store.save();
  pomoReset();
  $('#pomoSettingsModal')?.classList.remove('show');
});

// ---- 学科 ----
function refreshSubjects() {
  const subs = Store.data.subjects;
  const list = $('#subjectsList'); if (!list) return;
  if (!subs.length) {
    list.innerHTML = '<div style="color:#8b8b8b;font-size:11px;text-align:center;padding:10px">还没有学科，点击下方添加</div>';
    const ae = $('#subjectsAvg'); if (ae) ae.textContent = '0%';
    return;
  }
  list.innerHTML = subs.map((s, i) => `
    <div class="si" data-subj-i="${i}">
      <div class="sh">
        <span class="sn" contenteditable="true" data-subj-name="${i}">${S(s.name)}</span>
        <span class="sv">${s.progress}%</span>
      </div>
      <div class="sb"><div class="sf" style="width:${s.progress}%"></div></div>
      <div style="display:flex;gap:4px;margin-top:2px">
        <input type="range" class="srange" min="0" max="100" value="${s.progress}" data-subj-range="${i}" />
        <button class="sdel" data-subj-del="${i}">×</button>
      </div>
    </div>
  `).join('');
  const avg = Math.round(subs.reduce((sum, x) => sum + x.progress, 0) / subs.length);
  const ae = $('#subjectsAvg'); if (ae) ae.textContent = avg + '%';
}
$('#subjectsAdd')?.addEventListener('click', () => {
  const n = prompt('学科名称：'); if (!n) return;
  Store.data.subjects.push({ name: n, progress: 0 }); Store.save(); refreshSubjects(); refreshMetrics();
});
// 事件委托：学科列表
$('#subjectsList')?.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.subjRange != null) {
    Store.data.subjects[+t.dataset.subjRange].progress = parseInt(t.value);
    Store.save(); refreshSubjects(); refreshMetrics();
  }
});
$('#subjectsList')?.addEventListener('blur', e => {
  const t = e.target;
  if (t.dataset.subjName != null) {
    Store.data.subjects[+t.dataset.subjName].name = t.textContent.trim() || '未命名';
    Store.save(); refreshSubjects();
  }
}, true);
$('#subjectsList')?.addEventListener('click', e => {
  const t = e.target.closest('[data-subj-del]');
  if (t) {
    Store.data.subjects.splice(+t.dataset.subjDel, 1);
    Store.save(); refreshSubjects(); refreshMetrics();
  }
});

// ---- 待办 ----
function refreshTodos() {
  const list = $('#todoList'); if (!list) return;
  const todos = Store.data.todos;
  if (!todos.length) { list.innerHTML = '<div style="color:#8b8b8b;font-size:11px;text-align:center;padding:6px">还没有待办</div>'; }
  else {
    list.innerHTML = todos.map((t, i) => `
      <div class="ti ${t.done ? 'done' : ''}">
        <div class="tc" data-todo-tog="${i}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
        <div class="tt">${S(t.text)}</div>
        <button class="tdel" data-todo-del="${i}">×</button>
      </div>
    `).join('');
  }
  const ct = todos.filter(t => !t.done).length;
  const tc = $('#todoCount'); if (tc) tc.textContent = ct + ' 项';
}
// 事件委托：待办
$('#todoList')?.addEventListener('click', e => {
  const t = e.target.closest('[data-todo-tog],[data-todo-del]');
  if (!t) return;
  const i = +Object.values(t.dataset).find(v => !isNaN(v));
  if (t.dataset.todoTog != null) {
    Store.data.todos[i].done = !Store.data.todos[i].done;
  } else if (t.dataset.todoDel != null) {
    Store.data.todos.splice(i, 1);
  }
  Store.save(); refreshTodos();
});
$('#todoInput')?.addEventListener('keypress', e => {
  if (e.key === 'Enter' && e.target.value.trim()) {
    Store.data.todos.unshift({ text: e.target.value.trim(), done: false, created: Date.now() });
    Store.save(); refreshTodos(); e.target.value = '';
  }
});

// ---- 灵感 ----
function refreshInspires() {
  const list = $('#inspireList'); if (!list) return;
  const items = Store.data.inspirations.slice(0, 10);
  if (!items.length) { list.innerHTML = '<div style="color:#8b8b8b;font-size:10px;text-align:center;padding:10px">还没有灵感 ✨</div>'; }
  else {
    list.innerHTML = items.map((it, i) => {
      const t = new Date(it.created);
      return `<div class="ii">
        <button class="idel" data-insp-del="${i}">×</button>
        <div class="it">${S(it.text)}</div>
        <div class="im">${t.getMonth()+1}/${t.getDate()} ${String(t.getHours()).padStart(2,'0')}:${String(t.getMinutes()).padStart(2,'0')}</div>
      </div>`;
    }).join('');
  }
  const ic = $('#inspireCount'); if (ic) ic.textContent = Store.data.inspirations.length + ' 条';
}
$('#inspireList')?.addEventListener('click', e => {
  const t = e.target.closest('[data-insp-del]');
  if (t) {
    Store.data.inspirations.splice(+t.dataset.inspDel, 1);
    Store.save(); refreshInspires(); refreshStats();
  }
});
$('#inspireInput')?.addEventListener('keypress', e => {
  if (e.key === 'Enter' && e.target.value.trim()) {
    Store.data.inspirations.unshift({ text: e.target.value.trim(), created: Date.now() });
    Store.save(); refreshInspires(); refreshStats(); e.target.value = '';
  }
});

// ---- 今日任务 ----
function refreshTasks() {
  const list = $('#taskList'); if (!list) return;
  const tasks = Store.data.todayTasks;
  list.innerHTML = tasks.map((t, i) => `
    <div class="tkr">
      <div class="ticn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div>
      <div class="tmf"><div class="tmt">${S(t.text)}</div><div class="tms">${t.done ? '已完成' : '进行中'}</div></div>
      <div class="tck ${t.done ? 'done' : ''}" data-task-tog="${i}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
    </div>
  `).join('') || '<div style="color:rgba(255,255,255,.5);font-size:11px;text-align:center;padding:10px">还没有任务</div>';
  const done = tasks.filter(t => t.done).length;
  const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
  set('taskDone', done); set('taskTotal', tasks.length);
  refreshMetrics();
}
$('#taskList')?.addEventListener('click', e => {
  const t = e.target.closest('[data-task-tog]');
  if (t) {
    Store.data.todayTasks[+t.dataset.taskTog].done = !Store.data.todayTasks[+t.dataset.taskTog].done;
    Store.save(); refreshTasks();
  }
});
$('#addTaskBtn')?.addEventListener('click', () => {
  const inp = $('#taskInput'); if (!inp || !inp.value.trim()) return;
  Store.data.todayTasks.unshift({ text: inp.value.trim(), done: false, created: Date.now() }); Store.save(); refreshTasks(); inp.value = '';
});
$('#taskInput')?.addEventListener('keypress', e => {
  if (e.key === 'Enter') { Store.data.todayTasks.unshift({ text: e.target.value.trim(), done: false, created: Date.now() }); Store.save(); refreshTasks(); e.target.value = ''; }
});

// ---- 日历 ----
let calCurrent = new Date();
let calSelected = null;
function refreshCalendar() {
  const y = calCurrent.getFullYear(), m = calCurrent.getMonth();
  const today = new Date(), tk = Store.todayKey();
  const ml = $('#monthLabel'); if (ml) ml.textContent = `${y}年${m+1}月`;
  const first = new Date(y, m, 1), last = new Date(y, m + 1, 0);
  const sw = first.getDay(), days = last.getDate();
  let html = '';
  const prev = new Date(y, m, 0).getDate();
  for (let i = sw - 1; i >= 0; i--) html += `<div class="dy oth" data-date="${y}-${String(m).padStart(2,'0')}-${String(prev-i).padStart(2,'0')}">${prev-i}</div>`;
  for (let d = 1; d <= days; d++) {
    const key = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isT = key === tk, isS = calSelected === key;
    const hasE = Store.data.pomos.find(p => p.date === key);
    let cls = 'dy'; if (isT) cls += ' tdy'; if (isS) cls += ' sel'; if (hasE) cls += ' ev';
    html += `<div class="${cls}" data-date="${key}" style="position:relative">${d}</div>`;
  }
  const ew = last.getDay();
  for (let i = 1; i < 7 - ew; i++) html += `<div class="dy oth" data-date="${y}-${String(m+2).padStart(2,'0')}-${String(i).padStart(2,'0')}">${i}</div>`;
  const dg = $('#dayGrid'); if (dg) dg.innerHTML = html;
  // 事件列表
  const sk = calSelected || tk;
  const evl = $('#eventsList'), evt = $('#eventsTitle'), evc = $('#eventsContent');
  if (!evl || !evt || !evc) return;
  const entry = Store.data.pomos.find(p => p.date === sk);
  if (!entry) { evl.style.display = 'none'; return; }
  evl.style.display = 'block'; evt.textContent = sk;
  evc.innerHTML = `<div class="ep"><span>🍅 完成 ${entry.count} 个番茄</span><span class="et">${entry.mins} 分钟</span></div>`;
}
// 事件委托（只在 dayGrid 上绑定一次）
const dg = $('#dayGrid');
if (dg) dg.addEventListener('click', e => {
  const day = e.target.closest('.dy'); if (!day) return;
  calSelected = day.dataset.date; refreshCalendar();
});
$('#prevMonth')?.addEventListener('click', () => { calCurrent.setMonth(calCurrent.getMonth() - 1); refreshCalendar(); });
$('#nextMonth')?.addEventListener('click', () => { calCurrent.setMonth(calCurrent.getMonth() + 1); refreshCalendar(); });

// ---- 天气 ----
async function refreshWeather() {
  const city = Store.data.city || '北京';
  const wc = $('#weatherCard');
  try {
    const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=zh&format=json`).then(r => r.json());
    if (!geo.results?.length) { showWeatherError('未找到城市'); return; }
    const { latitude: lat, longitude: lon, name, country } = geo.results[0];
    const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m`).then(r => r.json());
    const cur = w.current_weather;
    const now = new Date().toISOString().slice(0, 13) + ':00';
    const hi = w.hourly.time.findIndex(t => t === now);
    const hum = hi >= 0 ? w.hourly.relativehumidity_2m[hi] : '--';
    const cm = { 0: ['☀️','晴朗'], 1: ['🌤️','少云'], 2: ['⛅','多云'], 3: ['☁️','阴'], 45: ['🌫️','雾'], 48: ['🌫️','雾凇'], 51: ['🌦️','小毛雨'], 53: ['🌦️','毛雨'], 55: ['🌧️','大毛雨'], 61: ['🌧️','小雨'], 63: ['🌧️','中雨'], 65: ['🌧️','大雨'], 71: ['🌨️','小雪'], 73: ['🌨️','中雪'], 75: ['❄️','大雪'], 80: ['🌦️','阵雨'], 81: ['🌧️','强阵雨'], 82: ['⛈️','暴阵雨'], 95: ['⛈️','雷暴'], 96: ['⛈️','雷暴冰雹'], 99: ['⛈️','强雷暴'] };
    const c = cm[cur.weathercode] || ['⛅','未知'];
    const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
    const html = (id, v) => { const e = $('#'+id); if (e) e.innerHTML = v; };
    set('weatherCity', `${name}, ${country || ''}`); set('weatherIcon', c[0]);
    html('weatherTemp', `${Math.round(cur.temperature)}<sup>°C</sup>`);
    set('weatherCondition', c[1]); set('weatherHumidity', hum + '%');
    set('weatherWind', cur.windspeed.toFixed(1) + ' km/h');
    if (wc) wc.style.opacity = '1';
  } catch (e) { showWeatherError('网络错误'); }
}
function showWeatherError(msg) {
  const wc = $('#weatherCard');
  const set = (id, v) => { const e = $('#'+id); if (e) e.textContent = v; };
  set('weatherCity', msg); set('weatherTemp', '--');
  if (wc) wc.style.opacity = '1';
}

// ---- 设置 ----
$('#settingsBtn')?.addEventListener('click', () => {
  const set = (id, v) => { const e = $('#'+id); if (e) e.value = v; };
  set('setName', Store.data.name); set('setRole', Store.data.role);
  set('setCity', Store.data.city); set('setPomoGoal', Store.data.pomoGoal);
  set('setWeekGoal', Store.data.weekGoal);
  $('#settingsModal')?.classList.add('show');
});
$('#closeSettings')?.addEventListener('click', () => $('#settingsModal')?.classList.remove('show'));
$('#saveSettings')?.addEventListener('click', () => {
  const get = (id) => $('#'+id)?.value || '';
  Store.data.name = get('setName') || 'Jerry';
  Store.data.role = get('setRole') || '在校大学生';
  Store.data.city = get('setCity') || '北京';
  Store.data.pomoGoal = parseInt(get('setPomoGoal')) || 8;
  Store.data.weekGoal = parseInt(get('setWeekGoal')) || 30;
  Store.save();
  $('#settingsModal')?.classList.remove('show');
  refreshStats(); refreshMetrics(); refreshWeather();
});
$('#resetAll')?.addEventListener('click', () => {
  if (!confirm('确定要清空所有数据吗？此操作不可恢复。')) return;
  localStorage.removeItem(Store.KEY); location.reload();
});

// ---- 模态框关闭（点击遮罩）----
$$('.modal-mask').forEach(mask => {
  mask.addEventListener('click', e => { if (e.target === mask) mask.classList.remove('show'); });
});

// ---- 初始化所有 ----
startClock();
refreshStats();
refreshMetrics();
refreshChart();
refreshSubjects();
refreshTodos();
refreshInspires();
refreshTasks();
refreshCalendar();
refreshWeather();

// ---- 今日一句话 ----
function refreshMotto() {
  const t = $('#mottoText'); if (!t) return;
  const m = Store.data.motto || '';
  t.textContent = m || '还没有写，点下方输入';
  t.classList.toggle('empty', !m);
  const i = $('#mottoInput'); if (i) i.value = m;
}
$('#mottoInput')?.addEventListener('change', e => {
  Store.data.motto = e.target.value.trim();
  Store.save();
  refreshMotto();
});
$('#mottoInput')?.addEventListener('keypress', e => {
  if (e.key === 'Enter') { e.target.blur(); }
});
refreshMotto();

// ---- 每日励志（图片 + 语录）----
function getDateSeed() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) { h = ((h << 5) - h) + seed.charCodeAt(i); h |= 0; }
  return Math.abs(h) / 2147483647;
}

function refreshQuote() {
  const today = getDateSeed();
  if (Store.data.dailyQuote.date !== today) {
    Store.data.dailyQuote.date = today;
    Store.data.dailyQuote.index = Math.floor(seededRandom(today) * QUOTES.length);
    Store.save();
  }
  const q = QUOTES[Store.data.dailyQuote.index % QUOTES.length];
  const te = $('#quoteText'); const fe = $('#quoteFrom');
  if (te) te.textContent = q.text;
  if (fe) fe.textContent = '—— ' + q.from;
}

function randomQuote() {
  Store.data.dailyQuote.index = Math.floor(seededRandom(getDateSeed() + Math.random()) * QUOTES.length);
  Store.save();
  refreshQuote();
}

	function isVideoUrl(url) {
  return /\.(mp4|webm|mov|mkv|avi|ogg)(\?.*)?$/i.test(url) ||
    /youtube\.com|youtu\.be|bilibili\.com|vimeo\.com/i.test(url);
}

function mediaHTML(url) {
  var m;
  m = url.match(/youtube\.com\/watch\?v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  if (m) {
    var vid = m[1];
    return '<iframe src="https://www.youtube.com/embed/'+vid+'?autoplay=1&mute=1&loop=1&playlist='+vid+'" frameborder="0" allow="autoplay" allowfullscreen style="width:100%;height:100%;border:none"></iframe>';
  }
  m = url.match(/bilibili\.com\/video\/(BV\w+)/);
  if (m) {
    return '<iframe src="https://player.bilibili.com/player.html?bvid='+m[1]+'&autoplay=1&muted=1&loop=1" frameborder="0" allow="autoplay" allowfullscreen style="width:100%;height:100%;border:none"></iframe>';
  }
  m = url.match(/vimeo\.com\/(\d+)/);
  if (m) {
    return '<iframe src="https://player.vimeo.com/video/'+m[1]+'?autoplay=1&muted=1&loop=1" frameborder="0" allow="autoplay" allowfullscreen style="width:100%;height:100%;border:none"></iframe>';
  }
  if (isVideoUrl(url)) {
    return '<video src="'+S(url)+'" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>';
  }
  return '<img src="'+S(url)+'" style="width:100%;height:100%;object-fit:cover;display:block" />';
}

function refreshImages() {
  const zone = $('#imgZone');
  const countEl = $('#imgCount');
  const media = Store.data.images || [];
  if (countEl) countEl.textContent = media.length + ' 个';
  if (!zone) return;

  if (media.length === 0) {
    zone.innerHTML = '<div class="img-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>点击添加图片/视频</span></div>';
    return;
  }

  const today = getDateSeed();
  const idx = Math.floor(seededRandom(today + Store.data.dailyQuote.date) * media.length);
  const m = media[idx];
  zone.innerHTML = mediaHTML(m.url) + '<button class="img-del" id="imgDelBtn">×</button>';
}

$('#quoteRefresh')?.addEventListener('click', randomQuote);
$('#imgAddBtn')?.addEventListener('click', () => $('#imgModal')?.classList.add('show'));
$('#imgZone')?.addEventListener('click', e => {
  if (e.target.id === 'imgDelBtn') return;
  if (Store.data.images.length === 0) $('#imgModal')?.classList.add('show');
});

// 图片删除（事件委托）
$('#imgZone')?.addEventListener('click', e => {
  if (e.target.id !== 'imgDelBtn') return;
  e.stopPropagation();
  const today = getDateSeed();
  const media = Store.data.images;
  const idx = Math.floor(seededRandom(today + Store.data.dailyQuote.date) * media.length);
  media.splice(idx, 1); Store.save(); refreshImages();
});

// 图片 modal
$('#closeImgModal')?.addEventListener('click', () => $('#imgModal')?.classList.remove('show'));
$('#saveImgUrl')?.addEventListener('click', () => {
  const url = $('#imgUrlInput')?.value.trim();
  if (!url) return;
  Store.data.images.push({ url });
  Store.save();
  $('#imgUrlInput').value = '';
  $('#imgPreview')?.setAttribute('style', 'display:none');
  $('#imgModal')?.classList.remove('show');
  refreshImages();
  notify('✅ 已添加', '共 ' + Store.data.images.length + ' 个媒体');
});
$('#imgUrlInput')?.addEventListener('input', () => {
  const url = $('#imgUrlInput')?.value.trim();
  const preview = $('#imgPreview');
  const previewImg = $('#imgPreviewImg');
  if (url && preview && previewImg) {
    preview.setAttribute('style', 'display:block');
    previewImg.src = url;
  } else if (preview) {
    preview.setAttribute('style', 'display:none');
  }
});

refreshQuote();
refreshImages();

// 每 60 秒刷新统计和天气
si(() => { refreshStats(); refreshMetrics(); }, 60000);
si(refreshWeather, 600000);
