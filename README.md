# Nuxt
> 基于Vue2开发的项目基础框架

## Usage

### 开发人员
1. `$ yarn` 下载依赖包
2. `$ yarn run dev` 启动开发环境服务
3. `$ yarn run build` 项目构建 
4. `$ yarn run start` 启动基于构建后代码的服务

### 运维人员
1. 构建代码
    - `$ yarn` 下载所有依赖包
    - `$ yarn run build:prod` 项目构建 `build:test`,`build:pre`,`build:prod`
2. 部署代码至对应服务器
    - Copy `.nuxt/dist` 至 静态资源服务
    - Copy `.nuxt/`,`build/`,`static/`,`package.json`，`ecosystem.config.js` 至 Node.js server
3. 启动/重载Node.js服务
    - `$ yarn install --production` 安装生产环境依赖包
    - `$ yarn run deploy:prod`启动/重载服务 `deploy:test`,`deploy:pre`,`deploy:prod`