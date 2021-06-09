import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./LandingPage.css";


// import Swiper core and required modules
import SwiperCore, {
  Parallax,Pagination,Navigation, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Parallax,Pagination,Navigation, Autoplay]);


export default function Carousel({url}) {  
    return (
    <>

    <Swiper 
        style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} 
        speed={600} 
        parallax={true} 
        pagination={{"clickable": true}} 
        navigation={true}
        autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }} 
        className="mySwiper"
    >

        <div 
            slot="container-start" 
            className="parallax-bg" 
            style={{'background-image': `url(${url})`}} 
            data-swiper-parallax="-23%">

        </div>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Slide 1</div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                quis feugiat.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Slide 2</div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                quis feugiat.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Slide 3</div>
            <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
            <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
                magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
                quis feugiat.</p>
            </div>
        </SwiperSlide>
    </Swiper>
    </>
    )
}