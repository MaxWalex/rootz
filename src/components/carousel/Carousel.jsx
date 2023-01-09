import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slide4 from '../../images/slide4.png';
import slide5 from '../../images/slide5.png';

import 'swiper/css';
import './carousel.scss';

function Carousel() {
    const navigationPrevRef = useRef()
    const navigationNextRef = useRef()

    const carouselData = [
        {
            name: 'Avoid plastic',
            text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            img: slide1,
            id: 1
        },
        {
            name: 'Choose organic',
            text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            img: slide2,
            id: 2
        },
        {
            name: 'Save watter',
            text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            img: slide3,
            id: 3
        },
        {
            name: 'Plant trees',
            text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            img: slide4,
            id: 4
        },
        {
            name: 'Save energy',
            text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
            img: slide5,
            id: 5
        }
    ]

  return (
    <section className='carousel'>
        <Swiper 
            slidesPerView={5}
            createElements={true}
            centeredSlides={true}
            loop={true}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            pagination={{ clickable: true, type: "fraction" }}
            modules={[Navigation, Pagination]}
        >
            {carouselData.map(({name, text, img, id}) => {
                return <SwiperSlide 
                            key={id}>
                            <div className='swiper_slide-img'>
                                <img src={img} />
                            </div>
                            <div className='swiper_slide-desc'>
                                <p>{name}</p>
                                <p>{text}</p>
                            </div>
                        </SwiperSlide>
            })}

            <div ref={navigationPrevRef}>
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.212403 7.46465L6.74633 0.721429C7.03304 0.42619 7.49754 0.42619 7.78497 0.721429C8.07168 1.01667 8.07168 1.49621 7.78497 1.79145L1.76931 7.99963L7.78425 14.2078C8.07095 14.503 8.07095 14.9826 7.78425 15.2786C7.49754 15.5738 7.03231 15.5738 6.74561 15.2786L0.211679 8.53535C-0.0706816 8.24317 -0.0706816 7.75609 0.212403 7.46465Z" fill="#1E1A20"/>
                </svg>
            </div>
            <div ref={navigationNextRef}>
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.7876 7.46465L1.25367 0.721429C0.966964 0.42619 0.502457 0.42619 0.215028 0.721429C-0.0716761 1.01667 -0.0716761 1.49621 0.215028 1.79145L6.23069 7.99963L0.215752 14.2078C-0.070952 14.503 -0.070952 14.9826 0.215752 15.2786C0.502457 15.5738 0.967688 15.5738 1.25439 15.2786L7.78832 8.53535C8.07068 8.24317 8.07068 7.75609 7.7876 7.46465Z" fill="#1E1A20"/>
                </svg>
            </div>
        </Swiper>
    </section>
  )
}

export default Carousel