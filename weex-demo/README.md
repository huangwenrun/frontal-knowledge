# weex-demo
![splash](https://github.com/huangwenrun/frontal-knowledge/blob/master/weex-demo/screenshot/IMG_1211.PNG)


## How to start
This demo is based on weex.
so,you should ensure that installed the environment of weex ,A framework for building Mobile cross-platform UI: [http://alibaba.github.io/weex](http://alibaba.github.io/weex)

### Install dependencies
cd path/to/project and install dependencies.

```
npm install
```
进入项目根目录，执行install命令，安装package.json中相关的依赖。
### Development

* `npm run build`: build `src/main.we` into `build/main.js`
* `npm run dev`: watch file changes of `src/main.we` and automatically build into `build/main.js`
* `npm run serve`: preview in html5 renderer through `http://localhost:8080/`

*note: the entry file can be configured in `webpack.config.js`, learn more from [weex-loader](https://www.npmjs.com/package/weex-loader)*

Finally the generated code will be found in `src/build/` folder.

---

1,将.we源文件转换为对应的js文件，位于src/build目录。

```
npm run build
```
2，监控文件变化，改动代码后自动build，实时看效果。

```
npm run dev
```

3，开启本地server服务，端口可自定义，可用pc浏览器调试H5页面。

```
npm run serve
```

### debug and run

开启server后，浏览器输入http://localhost:8080/，可以预览页面。localhost改为自己电脑的ip地址，方便pc和app中查看效果。

1，在APP中渲染：

build后的目标代码，将对应的url生成二维码后，用官方的playground扫描二维码，可以在app中渲染： 
http://192.168.0.111:8080/src/build/UserLogin.js

2，在浏览器中预览页面效果：

http://192.168.0.111:8080/index.html?page=./src/build/UserLogin.js


---

### Overview 


[登录界面1](https://github.com/huangwenrun/frontal-knowledge/blob/master/weex-demo/screenshot/IMG_1211.PNG)


[登录界面2](https://github.com/huangwenrun/frontal-knowledge/blob/master/weex-demo/screenshot/IMG_1212.PNG)

[登录界面3](https://github.com/huangwenrun/frontal-knowledge/blob/master/weex-demo/screenshot/IMG_1213.PNG)

### Future 
demo虽小，也能显现weex项目的结构和特点，三端统一，write once，run everywhere.有常见的移动端交互，动画，事件。

weex的强大之处，有待研究，后续完善。