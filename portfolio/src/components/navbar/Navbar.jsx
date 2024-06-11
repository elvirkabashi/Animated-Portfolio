import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Navbar() {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}
            >Elvir Kabashi
            </motion.span>

            <div className="social">
                <a href="https://www.linkedin.com/in/elvir-kabashi-6464391bb/"><LazyLoadImage src="/linkedin.png" alt="LI" effect="blur"/></a>
                <a href="https://github.com/elvirkabashi"><LazyLoadImage src="/github.png" alt="Git" effect="blur"/></a>
                <a href="https://www.facebook.com/elvir.v.kabashi"><LazyLoadImage src="/facebook.png" alt="FB" effect="blur"/></a>
                <a href="https://www.instagram.com/elvirkabashii_/"><LazyLoadImage src="/instagram.png" alt="IG" effect="blur"/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar