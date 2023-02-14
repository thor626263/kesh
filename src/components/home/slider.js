import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Slider = () => {

    const [images, setImages] = useState([]);

    const homeApi = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (homeApi) {
            const imgs = [];
            homeApi.slider.media.forEach((item, index) => {
                // if (index !== 0) {
                imgs.push({ url: item });
                // }
            });
            setImages(imgs);
        };
    }, [homeApi]);

    useEffect(() => {
        if (images.length > 0) {
            changeSliderHeight();
        }
    }, [images]);

    const changeSliderHeight = () => {
        const slider = document.querySelector('.slider');
        slider.style.height = (slider.offsetWidth / 2.3) + 'px';
    }

    const getExtension = (filename) => {
        var parts = filename.split('.');
        return parts[parts.length - 1];
    }

    const isVideo = (url) => {
        var ext = getExtension(url);
        switch (ext.toLowerCase()) {
            case 'm4v':
            case 'avi':
            case 'mpg':
            case 'mp4':
                // etc
                return true;
        }
        return false;
    };

    window.onresize = () => {
        changeSliderHeight();
    };

    return (images.length > 0 ? (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            controller
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            // autoplay
            className='slider'
            rewind
            color=''
        >
            {images.map(item => (
                <SwiperSlide>
                    {isVideo(item.url) ? <div className='video'><video muted autoPlay loop><source src={item.url} ></source></video></div> : <div className='slider-item' style={{ background: `url(${item.url})` }} />}
                </SwiperSlide>
            ))}
        </Swiper>
    ) : <></>);
}

export default Slider;