import React, { useEffect, useRef, useState } from 'react'
import api from '../api/api';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import { RiYoutubeFill, RiYoutubeLine } from 'react-icons/ri';

const Popular = () => {
    const { isLoading, queryErr, data } = useQuery('Popular', api.FETCH_FROM_GRAPHQL.FETCH_POPULAR);
    if (queryErr) console.log('ERROR in useQuery :- ' + queryErr);

    return (
        isLoading ? <></> :
            <div className='my-4 w-full'>
                <div>
                    <Swiper className='mx-auto max-w-[95%] rounded-sm'
                        modules={[Navigation, A11y]}
                        slidesPerView={1}
                        grabCursor
                    >
                        {data.map((item, index) => (
                            item.bannerImage !== null ?
                                <SwiperSlide key={index}>
                                    <div className='overflow-hidden max-h-[252px] lo-res-tablet:max-h-[362px] lo-res-laptop:max-h-[382px] laptop:max-h-[442px]'>
                                        <div className='h-[362px] lo-res-laptop:h-[382px] laptop:h-[442px] relative'>
                                            <a href={`/anime/${item.id}`}>
                                                <div className='relative h-2/3'>
                                                    <img className='absolute h-full w-full object-cover' src={item?.bannerImage} alt="" />
                                                    <div className='absolute bottom-0 mx-4'>
                                                        <a href={`https://youtube.com/watch?v=${item.trailer?.id}`} target='_blank' className='text-white text-lg font-pathway shadow transition-all flex items-center gap-x-1'><RiYoutubeFill className='text-4xl shadow-sm text-red-600 lo-res-laptop:hover:text-red-700' />Watch Trailer</a>
                                                    </div>
                                                </div>
                                                <div className='h-full overflow-hidden px-2 pt-2 '>
                                                    <div className='truncate text-red-500 text-lg tablet:text-xl lo-res-laptop:text-2xl pb-2'>{item.title?.english || item.title?.romaji}</div>
                                                    <div className='text-slate-300 text-sm'> {item?.description?.replace(/\s*\<.*?\>\s*/g, " ")}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide> : <></>
                        ))}
                    </Swiper>
                </div>
            </div>
    )
}

export default Popular;