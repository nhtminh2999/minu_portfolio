import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Card from './Card';

const WorkSwiper = (props) => {
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    setDataSource(props.dataSource)
  }, [props.dataSource])

  return (
    <Swiper
      speed={1000}
      loop={false}
      spaceBetween={50}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay]}
    >
      {dataSource && dataSource.map((data) => (
        <SwiperSlide key={data.id}>
          <Card {...data} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default WorkSwiper