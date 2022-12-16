import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Morbi sit amet elit placerat, commodo nisl vel, volutpat mi. Nunc eget ligula ipsum. Cras ut odio at nibh commodo finibus. Vestibulum sed ultrices massa. Morbi tincidunt pretium sollicitudin. Proin et vestibulum ex. Proin efficitur auctor tellus id lacinia. Vivamus scelerisque egestas ullamcorper. Nullam nec nisi viverra, convallis mauris at.',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Morbi sit amet elit placerat, commodo nisl vel, volutpat mi. Nunc eget ligula ipsum. Cras ut odio at nibh commodo finibus. Vestibulum sed ultrices massa. Morbi tincidunt pretium sollicitudin. Proin et vestibulum ex. Proin efficitur auctor tellus id lacinia. Vivamus scelerisque egestas ullamcorper. Nullam nec nisi viverra, convallis mauris at.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Morbi sit amet elit placerat, commodo nisl vel, volutpat mi. Nunc eget ligula ipsum. Cras ut odio at nibh commodo finibus. Vestibulum sed ultrices massa. Morbi tincidunt pretium sollicitudin. Proin et vestibulum ex. Proin efficitur auctor tellus id lacinia. Vivamus scelerisque egestas ullamcorper. Nullam nec nisi viverra, convallis mauris at.',
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Morbi sit amet elit placerat, commodo nisl vel, volutpat mi. Nunc eget ligula ipsum. Cras ut odio at nibh commodo finibus. Vestibulum sed ultrices massa. Morbi tincidunt pretium sollicitudin. Proin et vestibulum ex. Proin efficitur auctor tellus id lacinia. Vivamus scelerisque egestas ullamcorper. Nullam nec nisi viverra, convallis mauris at.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avaliações dos clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
        //  install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials