### Carousel 轮播组件使用介绍
![Image](http://upload-images.jianshu.io/upload_images/2541263-955700175b6cb000.gif?imageMogr2/auto-orient/strip)

#### 安装
```bash
npm install react-zkcarousel --save-dev
```

#### 引入

```bash
import Carousel from 'react-zkcarousel';
```

#### 参数：

###### data （array）（必填）:  
轮播图请求下来的数据，其中src参数是必填项，是轮播图的图片地址。

#### 示例：
```js
let data = [
  {
    "src":"http://upload-images.jianshu.io/upload_images/2541263-0f5e6044449875e1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    "id":'6',
    "url":"http://localhost:8080/#/button"
  },
  {
    "src":"http://upload-images.jianshu.io/upload_images/2541263-5569e888aadf127a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    "url":"https://www.baidu.com"
  },
  {
    "src":"http://upload-images.jianshu.io/upload_images/2541263-8679200d007b79c9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
    "id":"4",
    "url":"http://localhost:8080/#/button"
  }
];
```
###### link （string）：
根据所传参数进行href的拼接，数据类型string

#### 示例  ：
```js
link='[url]/[id]' //router中的id传递
```
```js
link='[url]?id=[id]' //普通url中的id传递
```
上述示例中，组件会将传入的data中的id以及url拼接起来。语法规则：使用'[]'将参数括起来，'[]'中的参数会被data中的对应参数内容替换。链接中的连接符号如：'/'由用户自己定义写在'[]'参数之间。

###### dots （bool）：
显示控制点，默认为true

###### autoplay（bool）：
自动播放，默认为true

###### infinite（bool）：
是否循环，默认为true

###### speed（number）：
动画速度，默认500

###### fade（bool）：
淡入淡出，默认false

###### click （func）：
点击事件，当link参数没有配置时，必需实现click方法。事件回传两个参数。

```
1、点击的那张图的index；
2、点击事件event。
```

#### 示例：

```js
<Carousel data={data} autoplay link='[url]/[id]' click={this.handleItemClick}/>
```
```js
handleItemClick(index,href,event) {
    console.log(href);
}
```
### 运行示例：

```
npm install
```
```
npm start
```
访问路径：http://localhost:8080/example/
