# onlinejudge3-common

OJ3 前后端共用模块。不允许有平台特异性代码（如 fs、window、document 等对象的引用）。此模块不需要单独 clone，作为 `onlinejudge3-fe` 以及 `onlinejudge3-be` 的子模块使用即可。

需要协同开发时，基于 `master` 新建和前后端开发同名的分支使用，上线时需要合并回 master。

> Tips：命令需要加环境变量 `IS_EXEC_FROM_PKG_SCRIPT=1` 来运行（防止开发环境模块扫描导致脚本直接被运行）。

## 目录功能说明

- `codes`：接口返回码定义，修改 `codes/codes.json` 后运行 `npm run gen:codes` 生成调用文件
- `configs`：公共配置
- `contracts`：后端接口的请求/响应约束定义，此目录下均为自动生成的供前端调用的代码，请勿手动修改，在后端项目通过 `npm run gen:contract` 即可根据 `app/${module}/${module}.contract.ts` 生成前端接口定义
- `enums`：公共枚举
- `interfaces`：公共接口
- `routes`：后端接口的路由配置，需要指定接口名以及其对应的请求方法、路径、请求/响应约束等配置
- `utils`：公共实用工具方法
