import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <p>© 2024 Edusity. All rights reserved.</p>
        <ul>
            <li className="hover2"><a href="https://www.instagram.com/its_yogiiii_22/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a></li>
            <li className="hover2"><a href="www.linkedin.com/in/pys123" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
            <li className="hover2"><a href="https://github.com/yogi-verma" target="_blank" rel="noreferrer"><FaGithubSquare /></a></li>
        </ul>
    </div>
  )
}

export default Footer