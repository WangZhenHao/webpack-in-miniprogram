# webpack工程化小程序

## 特点：

```
1: 区分环境变量

2：.wxml和.scss 引入图片的时候可以使用第三方cdn链接，区分环境路径 如：@IMGPATH

3：可以使用别名引入资源  @lib、 @components、@utils等等

4: axios请求

5: 区分打包  dist/dev   dist/prod  dist/test

6： minxins 混入 （未完成）
```

## 目录说明

```
│─build                                 
│     ├─webpack.config.base.js 
│     ├─webpack.config.base.loaders.js
│     ├─webpack.config.base.resolve.js
│     └─webpack.config.mini.js
│      
│     
│─src                             src 文件夹
│    ├─miniprogram                页面文件夹
│    │  ├─components              存放该项目的组件，在该项目通用的组件 
│    │  │      
│    │  ├─environments            环境变量配置
│    │  │ 
│    │  ├─images                  本地图片
│    │  │
│    │  ├─pages                   页面
│    │  │
│    │  └─utils                   项目公共代码
│    │          
│    │   
│    ├─ components                存放企业级组件如：vant，或者可以跨项目通用的组件
│    │          
│    │
│    └─ lib                        第三方库                    
│                                 
│                            
│                           
│                       
│
│
│
│─ images  外链图片，可以和cdn路径同步
│
│
│  .babelrc                           // babel的配置文件
│  .gitignore
│  package.json
│  README.md

```

## 使用yarn安装（npm安装可能会报错）
```
yarn install 

```

### 特别说明
1： [参考axios的写法，用法而封装的微信小程序requset请求](https://github.com/WangZhenHao/wx-axios)

2： [mini-program-webpack-loader](https://github.com/realywithoutname/mini-program-webpack-loader)

3: [小程序插件打包 demo](https://github.com/realywithoutname/mini-loader-plugin-demo)

### qq讨论群: 475870039