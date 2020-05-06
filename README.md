# onlinejudge3-common

OJ3 前后端共用模块。不允许有平台特异性代码（如 fs、window、document 等对象的引用）。

命令需要加环境变量 `IS_EXEC_FROM_PKG_SCRIPT=1` 来运行（防止开发环境模块扫描导致脚本直接被运行）。
