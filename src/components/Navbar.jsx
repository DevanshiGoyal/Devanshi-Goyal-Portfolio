import logo from '../assets/devanshigoyallogo.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-2">
            <div className="h-24 w-auto">
                <img src={logo} alt="logo" className="h-24 w-auto" />
            </div>   
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/devanshigoyal2610" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/DevanshiGoyal" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                
                <a href="https://twitter.com/DevanshiGoyal26" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
                <a
                href="https://codolio.com/DG"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110"
                >
                <img
                    src="https://codolio.com/codolio_assets/codolio.svg"
                    alt="Codolio"
                    className="h-6 w-6"
                />
                </a>
            </div>  

        </nav>
    )
};

export default Navbar;

