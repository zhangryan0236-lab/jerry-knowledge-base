---
tags:
  - 编程
  - Python
  - 概念
created: 2026-07-16
aliases:
  - Python
  - Python开发
  - 虚拟环境
---

## 一句话定义

Python 开发环境 = Python 解释器（翻译官）+ 代码编辑器（VS Code）+ 第三方库（工具箱）+ 虚拟环境（隔离空间）。

## 核心要点

### 开发环境的组成
| 组件 | 类比 | 作用 |
|------|------|------|
| 操作系统（Windows） | 厨房 | 运行的基础环境 |
| Python 解释器 | 翻译官 | 把 Python 代码翻译给电脑 |
| VS Code 编辑器 | 灶台刀具 | 写代码的工具 |
| 第三方库 | 调料 | 别人写好的功能包 |
| 虚拟环境（venv） | 独立的工具箱 | 隔离不同项目的依赖 |

### 虚拟环境为什么重要
每个项目可能有不同的依赖版本，装在一起会冲突：
```
项目 A 需要 requests 2.0
项目 B 需要 requests 3.0   ← 冲突！
```
虚拟环境让每个项目有自己的"工具箱"，互不影响。

### 常用命令
```bash
python -m venv venv              # 创建虚拟环境
venv\Scripts\activate            # 激活（Windows）
deactivate                       # 退出虚拟环境
pip install 库名                  # 安装包
pip install -r requirements.txt  # 从文件安装依赖
```

### VS Code 核心概念
VS Code 本身是"壳"，通过**扩展（Extension）** 加功能：
| 扩展 | 作用 |
|------|------|
| Python（官方） | 写/运行/调试 Python |
| GitLens | 增强 Git 功能 |
| Chinese | 中文界面 |

## 延伸概念

- [[wiki/概念/Git版本控制|Git 版本控制]] — 管理 Python 项目的代码版本
- [[wiki/概念/Node.js运行时|Node.js 运行时]] — 另一个重要的运行时环境（与 Python 并列）
- [[wiki/概念/调试方法论|调试方法论]] — 配置环境遇到问题时怎么排查

## 来源

- [[raw/学习日志/新手入门日志_VS_Code_Git_Python开发环境搭建]]
