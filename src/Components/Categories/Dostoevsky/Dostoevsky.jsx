import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import './dostoevsky.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useMediaQuery from '../../useMediaQuery'
export default function Dostoevsky(props) {
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
    console.log(props.data[0].name)
  return (
    <div className='dostoevsky'>
        <div className="type">
        <h1>{props.Author}</h1>
        <img className='img' src={props.profile} alt="Dostoevsky"/>
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
        {
            props.data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="book">
                            <img className='img' src={item.profile} alt="Dostoevsky"/>
                            <div className="book-info">
                            <h1>{item.name}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
            )}
      </Swiper>
    </div>
  )
}
