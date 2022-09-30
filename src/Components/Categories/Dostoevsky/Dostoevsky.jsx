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
    useEffect(
        () => {
            if (isMobile) {
                setNmbr(1)
            }
            if (isTablet) {
                setNmbr(2)
            }
            if (isDesktop) {
                setNmbr(3)
            }
        }, [isMobile, isTablet, isDesktop]
    )
  return (
    <div className='dostoevsky'>
        <div className="type">
            <h1>Fyodor Dostoevsky</h1>
        </div>
        <Swiper
        slidesPerView={nmbr}
        spaceBetween={30}
        slidesPerGroup={nmbr}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="book">
            <img className='img' src={require('../../../images/SomeBooks/237350792_591694878876180_1370761944819857030_n.jpg')} alt="Dostoevsky"/>
            <div className="book-info">
                <h1>Crime and Punishment</h1>
                <p>Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866. It was later published in a single volume. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash.</p>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
