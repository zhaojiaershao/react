import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
export default class Banner extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true, //循环
      autoplay: {
        //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        delay: 3500,
        disableOnInteraction: false //户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true // 允许点击跳转
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="http://jz5158.com/public/images/banner-map/3.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="http://jz5158.com/public/images/banner-map/2.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="http://jz5158.com/public/images/banner-map/1.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="http://jz5158.com/public/images/banner-map/4.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="http://jz5158.com/public/images/banner-map/5.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="http://jz5158.com/public/images/banner-map/6.jpg" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    );
  }
}
