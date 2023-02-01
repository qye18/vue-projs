# 初始化
  - vue-cli脚手架初始化项目
  国内需要用到 node+webpack+淘宝镜像

  - public：
    中的静态资源在webpack打包后被打包到dist文件夹中

  - assets：
    放多个组件公用的静态资源，会被webpack当做一个模块，打包到js文件里

  - 关闭eslint
  es6语法校验提示
    vue.config.js：
      lintOnSave:false

  
