import { memo, useEffect, useState,useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from "swiper";
import './dostoevsky.css'
import "swiper/css";
import "swiper/css/pagination";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useMediaQuery from '../../useMediaQuery'
import {motion} from 'framer-motion'
const Dostoevsky =  memo(({Author,profile,data}) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isDesktop = useMediaQuery('(min-width: 1000px)');
    //960px
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1000px)');
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
    const [style, setStyle] = useState({opacity:0,zindex:30});
    const [Index, SetIndex] = useState(6);
    
    

  return (
    <div className='dostoevsky'>
        <div className="type">
        <h1>{Author}</h1>
      <img src={profile} alt="" loading="lazy" />
        </div>
        <Swiper
        slidesPerView={nmbr_slides}
        spaceBetween={30}
        slidesPerGroup={nmbr}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {
            data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        
                        <motion.div className="book" 
                        whileHover={{}}
                        onMouseEnter={e => {
                            SetIndex(index);
                            setStyle({opacity:1,zindex:0});
                        }}
                        onMouseLeave={e => {
                            setStyle({opacity:0,zindex:30})
                        }}
                        >
                            <LazyLoadImage className='img' src={item.profile}
                            width={'100%'} height={'100%'}
                            effect="blur"
                            alt="Image Alt"
                             />
                             
                            {
                                //test to show only for one index
                                index === Index ? 
                                <motion.a href="https://wa.me/+212771487686" className='button-wtsp1' animate={{opacity:style.opacity,zIndex:style.zindex}}>
                                
                                <motion.div initial={{backgroundColor:'#35ab14',borderColor:'#ffffff',color:'#ffffff'}}
                                 whileHover={{scale:1.1,backgroundColor:'#ffffff',borderColor:'#35ab14',color:'#35ab14'}}
                                  className='button-wtsp'>
                                    <WhatsAppIcon className='wts-icon'/>WhatsApp
                                </motion.div>
                             </motion.a>
                             : null
                            }
                             
                        </motion.div>
                        
                    </SwiperSlide>
                )
            }
            )}
      </Swiper>
    </div>
  )
}
)
export default Dostoevsky;