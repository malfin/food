import React, {useState, useEffect} from 'react';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import axios from "axios"


import "swiper/css";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

    const [image, setImage] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/slider/')
            .then((result) => {
                setImage(result.data)
            })
    }, [])

    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={100}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
        >
            {image.map(item => (
                <SwiperSlide key={item.id}><img src={item.image} alt="" className={"w-100"}/></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;