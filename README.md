##项目简介
    react版通讯录App,使用webpack打包。

##环境配置
* 安装最新版本nodejs
* 全局安装: npm i -g webpack
* 本地安装: npm i webpack amazeui-react fastclick file-loader url-loader jsx-loader css-loader style-loader react react-dom extract-text-webpack-plugin js-sha1 lodash reqwest --save-dev

##项目目录结构
* `bin`: webpack打包完成后执行相关文件处理操作的脚本
* `src`: 开发环境代码
    * `components`：组件代码
    * `page`：页面代码
    * `lib`：公共代码
* `package.json`：配置了运行命令`npm run dev` , `npm run release` , `npm run watch` , `npm run release-gzip` , `npm run release-app`

##输出目录结构(dev/release)
* `css`：页面css输出目录
* `js`:页面JS输出目录
* `lib`:公共css,js输出目录
* `html`:页面html文件输出目录
* `res`:资源相关文件输出目录

##约定
* 入口js文件命名需拼接`.entry.`,例如`index.entry.js`
* `src/page`目录下的html文件不需要引入common.js,common.css以及相应的页面js,css，`webpackAfter.js`会完成相关处理
* js,css文件的引入规则为：js直接require文件名，如：`require('index')`;css需require文件名+Css，如：`require('indexCss')`
* webpack中加了相关配置可在项目代码中直接调用，例如 `__DEBUG__ && console.log("test")`
* 邮件(daihanqiao@126.com)
* QQ: 935483576

##关于作者
* 代汉桥：专注移动(APP)前端技术，做得了游戏，玩得了web，码得了脚本，写得了框架。撸过as3.0，lua，js，java，oc，php，python...(未完待续)