import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "./Portfolio.css";
import Sidebar from "../../img/Quora.jpg";
import Ecommerce from "../../img/Games.jpg";
import HOC from "../../img/face.jpg";
import MusicApp from "../../img/github.jpg";
import "swiper/css";
function Portfolio(){
    return(
        <div className="portfolio" id="portfolio">
            <span>Recent Projects</span>
            <span>Portfolio</span>
            <Swiper
            spaceBetween={0}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href="https://github.com/amitpareshmondal/sem5_project/tree/master" target="_blank"> <img src={Sidebar} ></img></a>
                   
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/amitpareshmondal" target="_blank">
                    <img src={MusicApp} ></img>
                    </a>
                    
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio;