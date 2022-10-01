import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import './dostoevsky.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useMediaQuery from '../../useMediaQuery'
export default function Dostoevsky() {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 960px)');
    const [nmbr, setNmbr] = useState(1);
    const [nmbr_slides, setNmbr_slides] = useState(1);
    useEffect(
        () => {
            if (isMobile) {
                setNmbr(1);
                setNmbr_slides(1.5);
            }
            if (isTablet) {
                setNmbr(2);
                setNmbr_slides(2.5);
            }
            if (isDesktop) {
                setNmbr(3);
                setNmbr_slides(3.5);
            }
        }, [isMobile, isTablet, isDesktop]
    )
  return (
    <div className='dostoevsky'>
        <div className="type">
        <h1>Fyodor Dostoevsky</h1>
        <img className='img' src={require('../../../images/dostoevsky_photo.jpg')} alt="Dostoevsky"/>
        </div>
        <Swiper
        slidesPerView={nmbr_slides}
        spaceBetween={30}
        slidesPerGroup={nmbr}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="book">            
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/down.jpeg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Down and out in paris and london</h1>   
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/homage.jpeg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/1984.jpeg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/gambler.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/gambler.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/gambler.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/gambler.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/gambler.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../Components/Categories/Dostoevsky/images/gambler.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>   
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
