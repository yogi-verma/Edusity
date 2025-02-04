import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import {useState} from 'react'
import { useEffect } from "react";
import {Link} from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo"/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li className="hover"><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li className="hover"><Link to='program' smooth={true} offset={-260} duration={500} >Programs</Link></li>
            <li className="hover"><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
            <li className="hover"><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
            <li className="hover"><Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li><Link className="btn" to='contact' smooth={true} offset={-240} duration={500}>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar