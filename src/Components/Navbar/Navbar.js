import Logo from '../../Assets/logo.jpg'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo" className='logo'/>
        <div className="nav-right">
            <ul className='link-list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Nfts</a></li>
                <li><a href="#">BTC Mining</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Crypto Loans</a></li>
            </ul>
            <Button text={'Demo'} color={'teal'}/>
            <Button text={'Create Account'} color={'blue'}/>
        </div>
    </div>
  )
}

export default Navbar