import "../style/Footer.css"
import logo from '../assets/public/logo1.png'
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

function Footer(){

    const navigate = useNavigate();

    const handleHome=()=>{
      navigate("/")
    }
  
    const handleAbout=()=>{
      navigate("/about-us")
    }
  
    const handleBlog=()=>{
      navigate("/blog")
    }
  
    const handleContact=()=>{
      navigate("/contact-us")
    }
  
   
  
  
  
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-topwrapper">
                    <main>
                        <img src={logo} />
                    </main>
                    <nav>
                        <ul>
                            <h6>Quick links</h6>
                            <li onClick={handleHome}>Home</li>
                            <li onClick={handleAbout}>About Us</li>
                            <li onClick={handleContact}>Contact Us</li>
                            <li onClick={handleBlog}>Blog</li>
                        </ul>
                        <ol>
                            <h6>Quick links</h6>
                            <li>Donate</li>
                            <li>Apply now</li>
                            <li>Events</li>
                            <li>Projects</li>
                        </ol>
                        <section>
                            <h6>Contact Info</h6>
                            <span>+2348121530907</span>
                            <span>attackagainstasthma@gmail.com</span>
                            <span>Privacy policy</span>
                        </section>
                    </nav>
                    <aside>
                        <span>Subscribe to get our latest updates</span>
                        <input type="text" placeholder="enter your email address" />
                        <button>Subscribe</button>
                    </aside>
                </div>
            </div>
            <div className="footer-bottom">
                <section>Copyright 2025 attackagainstasthma</section>
                <article>
                <FaYoutube cursor={'pointer'}/>
                <FaTwitter cursor={'pointer'}/>
                <FaFacebook cursor={'pointer'}/>
                <FaInstagram cursor={'pointer'}/>
                </article>
            </div>
        </div>
    )
}

export default Footer