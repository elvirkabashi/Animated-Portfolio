import { motion , useInView} from "framer-motion"
import "./services.scss"
import { useRef } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

function Services() {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div 
    className="services" 
    variants={variants} 
    initial="initial"
    ref={ref}
    animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow <br /> and more forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <LazyLoadImage src="/people.webp" alt="" effect="blur"/>
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Bussines.
                </h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Web Development</h2>
            <p>
                Create an online presence that stands out. We deliver customized web development solutions that are fast, responsive, and search-optimized.
            </p>
            <button>Explore More</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Custom Web Application</h2>
            <p>
                Build tailored web applications that meet your specific business needs. Our expertise in ASP.NET Core, React.js, and other cutting-edge technologies ensures efficient, scalable, and secure solutions.
            </p>
            <button>Discover More</button>
        </motion.div>

        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>SEO</h2>
            <p>
                Boost your site&apos;s visibility on search engines and attract more high-quality traffic with our advanced SEO strategies.
            </p>
            <button>Learn More</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black"}}>
            <h2>Website Maintenance</h2>
            <p>
                Keep your website updated, secure, and performing at its best with our website maintenance and update packages.
            </p>
            <button>Get Started</button>
        </motion.div>

        </motion.div>
    </motion.div>
  )
}

export default Services