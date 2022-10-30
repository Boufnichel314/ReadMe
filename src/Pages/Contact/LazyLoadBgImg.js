import React,  { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
    
const LazyLoadBgImg = ({src, className, children}) => {

    const lazyLoadRef = useRef();
    const [loadImage, setLoadImage] = useState(false);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: lazyLoadRef.current,
            start: "top bottom",
            onEnter: () => setLoadImage(true), 
        });      
    }, []);

    return (
        <div ref={lazyLoadRef} className={className} style={{backgroundImage: (loadImage ? "url(" + src  + ")" : '')}}>
            {children}
        </div>
    )
}

export default LazyLoadBgImg;