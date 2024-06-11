import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const textVariants = {
    scrollButton: {
        opacity: 0,
        x: 10,
        transition: {
            duration: 1,
            repeat: Infinity,
        }
    }
}

const Singel = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

    return (
        <section className="section">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <div className="container">
                            <div>
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    loop={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 2.5,
                                    }}
                                    pagination={{ clickable: true }}
                                    navigation={{ clickable: true }}
                                    modules={[EffectCoverflow, Pagination, Navigation]}
                                    className="swiper_container"
                                >
                                    {item.img.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={image} alt={`slide_image_${index}`} id='sldeimg' />
                                        </SwiperSlide>
                                    ))}
                                    <div className="slider-controler">
                                        <div className="swiper-button-prev slider-arrow">
                                            <ion-icon name="arrow-back-outline"></ion-icon>
                                        </div>
                                        <div className="swiper-button-next slider-arrow">
                                            <ion-icon name="arrow-forward-outline"></ion-icon>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className='swipeimg'>
                        <motion.img src={'/swipe.png'} alt="swipe_gif" width={100} variants={textVariants} animate="scrollButton" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.dec}</p>
                        <a href={item.git}><button>Source Code</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

Singel.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        dec: PropTypes.string.isRequired,
        git: PropTypes.string.isRequired
    }).isRequired
};

export default Singel;
