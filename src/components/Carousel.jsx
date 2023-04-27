import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import { useQuery } from 'react-query';
import api from '../api/api';
import AnimeItem from './AnimeItem';

function Carousel(props) {
    const { isLoading, error, data } = useQuery(props.name, api.FETCH_FROM_GRAPHQL[`FETCH_${props.name}`]);
    if (error) console.log("ERROR :- " + error);
    const responsiveness = {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        420: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1536: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
    };
    return (
        isLoading ? <></> :
            <div>
                <Swiper
                    breakpoints={responsiveness}
                    modules={[Navigation, A11y]}
                    navigation
                >
                    {data?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <AnimeItem id={item.id} genres={item.genres} title={item.title} format={item.format} image={item.coverImage.extraLarge} score={item.averageScore} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
    )
}

export default Carousel;