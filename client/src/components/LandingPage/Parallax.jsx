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
            "delay": 5000,
            "disableOnInteraction": false
          }} 
        className="mySwiper"
    >

        <div 
            slot="container-start" 
            className="parallax-bg" 
            style={{backgroundImage: `url(${url})`}} 
            data-swiper-parallax="-23%">

        </div>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Visual Health</div>
            <div className="subtitle" data-swiper-parallax="-200">How to take care on your eyes</div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    From childhood to old age, our vision evolves as our eyes are exposed to different situations and risks. 
                    With changing lifestyles, other risks are emerging which must be addressed through adopting new habits. 
                    Today, for example, urbanization has encouraged indoor living that increases cases of myopia. 
                    It’s also accepted that the continual use of digital screens causes eye strain and can encourage the development 
                    of certain visual defects. Solutions exist for these new situations. We need to raise awareness, 
                    regularly check vision and provide appropriate solutions that are accessible to everyone
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Prescriptions Registry</div>
            <div className="subtitle" data-swiper-parallax="-200">Load up your prescriptions</div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    When you look at your prescription for eyeglasses, you will see numbers listed under the headings of OS and OD. 
                    They are Latin abbreviations: OS (oculus sinister) means the left eye and OD (oculus dextrus) means the right eye. 
                    Occasionally, you will see a notation for OU, which means something involving both eyes.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Doctor's Account</div>
            <div className="subtitle" data-swiper-parallax="-200">Doctors can get an special account to store data</div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    The Greek roots of the word ophthalmology are <bold>ὀφθαλμός</bold> (ophthalmos, "eye") 
                    and <bold> -λoγία </bold> (-logia, "study, discourse"). 
                    The discipline applies to all animal eyes, whether human or not, since the practice and 
                    procedures are quite similar with respect to disease processes, 
                    while differences in anatomy or disease prevalence, whether subtle or substantial, 
                    may differentiate the two
                </p>
            </div>
        </SwiperSlide>
    </Swiper>
    </>
    )
}