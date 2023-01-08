import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "./Portfolio.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
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
                    <img src={Sidebar} ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} ></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} ></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio;