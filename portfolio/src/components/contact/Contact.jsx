import { motion } from "framer-motion"
import "./contact.scss"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1
        }
    }
}

function Contact() {

    const formRef = useRef()


    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [name, setName] = useState(""); 

    const handleNameChange = (e) => { 
      setName(e.target.value);
    };


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ualxmzf', 'template_443tqtf', formRef.current, {
            publicKey: 'odkYcE2arNGmymEpV',
          })
          .then(
            () => {
                setError(false)
                setSuccess(true);
              console.log('SUCCESS!');
            },
            (error) => {
                setSuccess(false)
                setError(true)
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <motion.div className="contact" variants={variants}  initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>kabashielvir1@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Prishtina, Kosovo</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+383 49 187 214</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div 
            className="phoneSvg" 
            initial={{opacity:1}} 
            whileInView={{opacity:0}}  
            transition={{delay:2,duration:1}} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0c0c1d" height="450px" width="450px" version="1.1" id="Layer_1" viewBox="-51.2 -51.2 614.40 614.40" xmlSpace="preserve">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g> <g> <motion.path
                strokeWidth={1} 
                fill="none" 
                initial={{pathLength:0}}
                whileInView={{pathLength:1}}
                transition={{duration:2}}
                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256c56.917,0,110.805-18.283,156.352-53.333 c18.091-15.851,17.771-38.507,9.408-53.931c-5.291-9.771-13.355-16.448-22.741-19.733l4.288-4.8 c6.379-7.168,9.195-16.747,7.701-26.261c-1.493-9.515-7.125-17.749-15.424-22.635l-56.341-32.981 c-13.077-7.659-29.952-4.992-40.064,6.336l-12.501,14.059c-2.219,2.496-5.269,3.861-8.725,3.563 c-3.328-0.256-6.293-1.984-8.128-4.757l-68.672-103.616c-1.749-2.624-2.24-5.739-1.365-8.789c0.853-3.029,2.901-5.419,5.781-6.763 l19.648-9.131c13.803-6.379,21.227-21.739,17.664-36.523l-15.296-63.445c-2.24-9.365-8.512-17.131-17.173-21.312 c-8.683-4.203-18.645-4.288-27.392-0.235l-17.536,8.128c-25.92,12.032-45.013,34.752-52.373,62.357l-3.2,12.032 c-5.781,21.653-3.776,44.779,5.653,65.109l15.765,34.005c23.125,49.899,54.699,94.784,93.824,133.44l13.013,12.843 c19.328,19.093,44.928,30.101,72.064,30.976c1.173,0.043,2.368,0.064,3.541,0.064c23.573,0,46.144-7.723,64.64-21.717 c0.363-0.064,0.725,0.021,1.088-0.085c14.507-4.053,21.696,6.656,23.509,10.027c4.309,7.979,4.523,19.648-4.181,27.307 c-41.259,31.701-90.645,48.469-142.827,48.469c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.333,256,21.333 S490.667,126.613,490.667,256c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667 C512,114.837,397.163,0,256,0z M387.435,366.037l-9.28,10.411c-17.045,19.157-41.323,29.739-67.2,28.843 c-21.739-0.704-42.261-9.536-57.749-24.832l-13.013-12.864c-37.312-36.843-67.413-79.659-89.472-127.232l-15.765-34.005 c-7.339-15.829-8.896-33.792-4.416-50.645l3.2-12.032c5.717-21.461,20.565-39.147,40.747-48.491l17.536-8.128 c1.408-0.64,2.944-0.981,4.48-0.981c1.6,0,3.179,0.341,4.672,1.045c2.901,1.408,4.971,3.989,5.739,7.104l15.296,63.445 c1.195,4.928-1.28,10.048-5.888,12.181l-19.648,9.131c-8.469,3.925-14.805,11.349-17.344,20.331 c-2.539,8.981-1.045,18.603,4.117,26.389l68.651,103.616c5.547,8.32,14.421,13.525,24.405,14.229 c10.133,0.725,19.541-3.157,26.197-10.645l12.501-14.059c3.371-3.776,9.024-4.672,13.355-2.112l56.32,32.981 c2.773,1.643,4.651,4.395,5.141,7.552C390.507,360.448,389.568,363.648,387.435,366.037z"/> </g> </g> </g>
                </svg>
            </motion.div>

            <motion.form 
            ref={formRef}
            onSubmit={sendEmail}           
            initial={{opacity:0}} 
            whileInView={{opacity:1}}  
            transition={{delay:3,duration:1}} >
                <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    name="from_name"
                    onChange={handleNameChange}
                    value={name}
                />
                <input type="email" placeholder="Email" required name="reply_to"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Submit</button>
            </motion.form>
            <span>{error && "Error!"}</span>
            <span>{success && `Thank you for contacting me ${name}, wait for my reply. If you want a faster answer, contact this number: +383 49 187 214`}</span>
        </div>
    </motion.div>
  )
}

export default Contact
