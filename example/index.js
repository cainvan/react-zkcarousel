import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../src/index';

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  handleItemClick(index,event) {
    console.log(event.target);
  }
  render() {
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
    return (
      <Carousel>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
        <div><h3>7</h3></div>
        <div><h3>8</h3></div>
      </Carousel>
    );
  }
};
ReactDOM.render(<MyCarousel/>, document.getElementById('content'));
