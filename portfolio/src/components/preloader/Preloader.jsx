import { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '.'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    },[])

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Elvir,</span>
        <span>Kabashi,</span>
        <span>Portfolio.</span>
      </div>
    </div>
  )
}

export default Preloader