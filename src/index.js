import React from 'react';
import classNames from 'classnames';
import SlickCarousel from 'react-slick';
import '../css/styles.css';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    static defaultProps = {
        dots: true,         // 点
        autoplay: true,    // 自动切换
        infinite: true,     // 是否循环
        speed: 500,         // 动画速度
        fade: false,        // 淡入淡出
    }

    componentDidMount() {
        this.setState({
            items : this.props.data
        });
    }

    render () {
        var thiz = this;
        let props = this.props;
        if(this.props.children){
            return (
            <div className='f-carousel'>
                <SlickCarousel className={props.class} {...props} draggable={!props.fade}>
                    {props.children}
                </SlickCarousel>
            </div>
            )
        } else {
          let lis = [];
          this.state.items.forEach((rowData, index) => {
              if (this.props.link) {
                  var arr = this.props.link.match(/\[[^\]]*?\]/g), href=this.props.link;
                  if (arr) {
                      arr.forEach(function(val,key){
                          var arrVal=val.replace("[",'').replace("]",'');
                          href=href.replace(val,( typeof rowData[arrVal]!='undefined')?rowData[arrVal]:'');
                      })
                      lis.push(
                          <div key={index}><a href={href}><img src={rowData.src}/></a></div>
                      );
                  }
              }else {
                  lis.push(
                      <div key={index} onClick={this.props.click.bind(thiz,index)}><img src={rowData.src}/></div>
                  );
              }
          })
          if (lis.length == 0) {
              return <a className='loading-carousel'>loading...</a>;
          }else {
            return (
                <div className='f-carousel'>
                    <SlickCarousel className='slider' {...props} draggable={!props.fade}>
                        {lis}
                    </SlickCarousel>
                </div>
            );
          }
        }

    }
}
