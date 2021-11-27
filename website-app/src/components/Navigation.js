import artstationLogo from '../Images/Logos/ArtStation-logomark-white.svg';
import instagramLogo from '../Images/Logos/Instagram-logomark-white.png';
import twitterLogo from '../Images/Logos/Twitter-logomark-white.svg';
import '../css/Navigation.css';

function Navigation() {
  return (
    <div id="navigation-container" className="">
        <div id="navigation-home"><a href="/">Brittany Biggs</a></div>
        <div id="navigation-description">3D Artist & Animator</div>

        <div id="navigation-portfolio-container">
            <div id="navigation-portfolio-title" className="navigation-link"><a href="/portfolio">PORTFOLIO</a></div>
            <div id="nav-portfolio-all" className="subnavigation-link"><a href="/portfolio">All</a></div>
            <div id='nav-portfolio-props' className="subnavigation-link"><a href="/portfolio-props">Props</a></div>
            {/* <div id='nav-portfolio-environments' className="subnavigation-link"><a href="/portfolio">Environments</a></div> */}
        </div>

        <div id="navigation-about" className="navigation-link"><a href="/about">ABOUT ME</a></div>
        
        <div id="navigation-bottom-container">
            <div id="navigation-socials-container">
                <div id="nav-socials-artstation" className="nav-social-item">
                    <img src={artstationLogo} alt="Art station" />
                </div>
                <div id="nav-socials-instagram" className="nav-social-item">
                    <img src={instagramLogo} alt="Instagram" />
                </div>
                <div id="nav-socials-twitter" className="nav-social-item">
                    <img src={twitterLogo} alt="Twitter" />
                </div>
            </div>
            <div id="navigation-copyright">&copy; All rights reserved</div>
        </div>
        
    </div>
  );
}

export default Navigation;
