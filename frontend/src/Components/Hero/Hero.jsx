import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>

<div >
<div className='hero-hand-icon'>
    <p>New</p>
    <img src={hand_icon} alt=""/>
     </div>
     <p>Prouducts</p>
     <p>For Everyone</p>
</div>
<div className='hero-latest-btn'>
<div> New Tehologis </div>
<img src={arrow_icon}alt=''/>
</div>
      </div>
      <div className='hero-right'>
      <img src={hero_image}alt=''/>
      </div>
    </div>
  )
}

export default Hero
