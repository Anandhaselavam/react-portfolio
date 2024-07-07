import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEarlybirds } from 'react-icons/fa';

const Navbar = () => {
  return ( 
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <a href="#" target="_blank" rel="noopener noreferrer">
                <FaEarlybirds size={40}/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/anandhaselvam-m-5b3585240/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Anandhaselavam" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/_shiv_adeez/?next=%2F" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
