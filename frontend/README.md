
# 安装
npm install

# 启动
npm start
```

# 内容
## 目录结构


frontend/
	|-api/
		|-example.js					* api 接口
	|-bin/
		|-www							* node 服务启动文件
	|-config/							* 配置文件存放位置
		|-empty.js
		|-helpers.js					* 配置文件的一些辅助方法
		|-webpack.common.js 			* webpack 打包的通用配置
		|-webpack.dev.js				* webpack 开发环境配置
		|-webpack.prod.js				* webpack 生产环境配置
	|-dist/								* 生产环境打包代码
		|-...
	|-routes/							* 路由文件夹
		|-router.js						* 路由入口文件
	|-src/								* 源文件存放位置，将这里的文件压缩合并输出到 dist 文件夹
		|-app/							* 网站内容存放文件夹
			|-assets/					* 静态资源文件
				|-css/					* 站点公共样式
				|-images/				* 站点公用资源
		|-index.html					* 网站首页
		|-polyfills.ts					* polyfill 文件
		|-vendor.ts						* 第三方内容文件
		|-main.ts						* angular2 入口
	|-package.json						* package.json 文件
	|-tsconfig.json						* typescript 配置
	|-tslint.json						* typescript lint 配置
	|-server.js							* node 服务器文件
	|-postcss.config.js 				* postcss 插件
	|-process.yml						* pm2 启动配置
		
```

## 命令

- **`npm start`** ：启动应用。他实际是同时运行了 `npm run server` 和`npm run server`这两个命令。
- **`npm run start:hmr`** ：启动 webpack 打包 angular2 源码并启动 `3000` 端口。
- **`npm run server`** ：启动 node 服务，端口 `4000`。
- **`npm run build:prod`** ：打包应用用于生产环境。
- **`npm run lint`** ：检查代码书写是否规范。
- **`npm run server:prod`** ：正式环境启动应用。
