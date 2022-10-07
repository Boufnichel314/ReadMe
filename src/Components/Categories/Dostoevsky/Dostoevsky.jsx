import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import './dostoevsky.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useMediaQuery from '../../useMediaQuery'
export default function Dostoevsky(props) {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 960px)');
    const [nmbr, setNmbr] = useState(1);
    const [nmbr_slides, setNmbr_slides] = useState(1);
    const [hover, setHover] = useState({display : 'flex'});
    const [editIndex, setEditIndex]= useState(null);
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
    const meskaf = ''
  return (
    <div className='dostoevsky'>
        <div className="type">
        <h1>{props.Author}</h1>
        {/* <img className='img' src={props.profile} alt="Dostoevsky"/> */}
        <LazyLoadImage src={props.profile}
        width={600} height={400}
        alt="Image Alt"
      />
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
                        <div display = {hover} className="book" onMouseOver={() => {setEditIndex(editIndex => editIndex === index ? null : index)}} >
                            {/* <img className='img' src={item.profile} alt="Dostoevsky"/> */}
                            {/* <h3>Ajouter</h3> */}
                            <LazyLoadImage className='img' src={item.profile}
                            width={'100%'} height={'100%'}
                            effect="blur"
                            alt="Image Alt"
                             />
                            <div className="book-info">
                            <h1>{item.name}</h1>
                            </div>
                            {/* <h3>Ajouter</h3> */}
                        </div>
                    </SwiperSlide>
                )
            }
            )}
      </Swiper>
    </div>
  )
}
