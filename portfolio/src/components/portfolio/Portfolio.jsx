import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";


const items = [
  {
    id: 1,
    title: "Movie Management System: Administrator Dashboard",
    img: ["./dashboard1.png", "./dashboard.png", "./dashboard2.png", "./dashboard3.png","./dashboard4.png","./dashboard5.png"],
    dec: "This administrator dashboard stands as a testament to efficient content and user management in a dynamic online movie database, showcasing my skills in ASP .NET MVC and my commitment to creating effective, user-friendly digital solutions.",
    git: "https://github.com/elvirkabashi/MovieTime"
  },
  {
    id: 2,
    title: "MovieTime UI",
    img: ["./movietime1.png","./movietime2.png","./movietime3.png","./movietime4.png","./movietime.png","./movietime5.png"], // Changed to array
    dec: "The user interface in React.js stands as a testament to my commitment to creating engaging and user-centric digital experiences. By providing users with intuitive tools to manage their movie preferences and engage with the community, this segment contributes to the overall success of the Movie Management System, showcasing my proficiency in React.js and frontend development principles.",
    git: "https://github.com/elvirkabashi/MovieTimeUI/tree/main/ui"
  },
  {
    id: 3,
    title: "Book Rental Platform",
    img: ["./Elibrary.png"], // Changed to array
    dec: "The Book Rental Platform redefines the book rental experience, offering users a seamless and convenient way to access their favorite books. By leveraging the power of Spring Boot and React.js, coupled with seamless payment integration using Stripe, this project demonstrates my ability to engineer innovative solutions that prioritize user experience and functionality while embracing the latest technologies in the industry.",
    git: "https://github.com/elvirkabashi/Projekti-LAB1"
  }
];

const textVariants = {
  scrollButton: {
      opacity:0,
      x:10,
      transition:{
          duration:1,
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
                  <>
                    <SwiperSlide key={index}>
                      <img src={image} alt={`slide_image_${index}`} id='sldeimg'/>
                    </SwiperSlide>
                    
                  </>
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
            <motion.img src={'/swipe.png'} alt="swipe_gif" width={100} variants={textVariants} animate="scrollButton"/>
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

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Singel item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
