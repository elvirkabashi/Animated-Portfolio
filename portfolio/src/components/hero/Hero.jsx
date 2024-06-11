import { motion } from "framer-motion"
import "./hero.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration: 20,
        }
    }
}

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textConatiner" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>ELVIR KABASHI</motion.h2>
                <motion.h1 variants={textVariants}>Web developer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <a href="#Portfolio"><motion.button variants={textVariants}>See the Latest Works</motion.button></a>
                    <a href="#Contact"><motion.button variants={textVariants}>Contact Me</motion.button></a>
                </motion.div>
                <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="inital" animate="animate">
            FullSctack Web Applications
        </motion.div>
        <div className="imageContainer">
            <LazyLoadImage src={'/me.png'} alt="Elvir Kabashi" effect="blur"/>
        </div>
    </div>
  )
}

export default Hero