import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion";

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
                <a href="https://www.linkedin.com/in/elvir-kabashi-6464391bb/"><img src="/linkedin.png" alt="LI" /></a>
                <a href="https://github.com/elvirkabashi"><img src="/github.png" alt="Git" /></a>
                <a href="https://www.facebook.com/elvir.v.kabashi"><img src="/facebook.png" alt="FB" /></a>
                <a href="https://www.instagram.com/elvirkabashii_/"><img src="/instagram.png" alt="IG" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar