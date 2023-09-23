import GooglePlay from '../../Assets/google-play.jpg'
import GoogleApp from '../../Assets/google-app.jpg'
import Phone from '../../Assets/phone-img.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <h1>Secure Investing For Every Trader. <br/> Quickly Grow Your Money With Quant.</h1>
            <p>Quant is a handy market place to buy, sell and manage your stock portfolio, track your perfomances, take notes and find the right opportunity to invest.</p>
            <img src={GooglePlay} alt="google-play" className='google play'/>
            <img src={GoogleApp} alt="google-app" className='google app'/>
        </div>
        <div className="right">
            <img src={Phone} alt="phone" className='phone'/>
        </div>
    </div>
  )
}

export default Hero