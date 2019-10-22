import React from 'react';
import "./Header.css"
import Button from "react-bootstrap/Button";
import {Image} from 'cloudinary-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <section id="header">
            <header className='header'>
                <div>
                    <Image className="headerImg" cloudName="spencerpauly" publicId="projects/youtubeicon_nvkes9.png" width="500" height="500" crop="fill"/>
                </div>

                <div>
                    <h1>Minimal Youtube Search App</h1>
                    <p>
                        This app lets you browse youtube in a minimal user interface without having to get served video recommendations.
                        It's built to help you stay on-task as you use youtube to learn new skills. Enjoy!
                    </p>
                    <Button href="#contact" variant="main">View Github Code</Button>
                </div>
               
                
                
            </header>
            <div className="socialMediaButtons">
                <a href="https://github.com/spencerpauly/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121" />
                        <FontAwesomeIcon icon={faGithub} className="githubIcon" inverse transform="shrink-8"/>
                    </span> 
                </a>
                <a href="https://www.linkedin.com/in/spencer-pauly-24803278/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121" />
                        <FontAwesomeIcon icon={faLinkedinIn} className="linkedinIcon" inverse transform="shrink-8"/>
                    </span> 
                </a>
                <a href="https://www.instagram.com/spencer_pauly/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121" />
                        <FontAwesomeIcon icon={faInstagram} className="instagramIcon" inverse transform="shrink-8"/>
                    </span>
                </a>
                <a href="https://open.spotify.com/user/1265902628/" rel="noopener noreferrer" target="_blank">
                    <span className="fa-layers fa-fw iconWrapper">
                        <FontAwesomeIcon icon={faCircle} color="#212121"/>
                        <FontAwesomeIcon icon={faSpotify} className="spotifyIcon" inverse transform="shrink-8"/>
                    </span> 
                </a>
            
            </div>
        </section>
    )
}
export default Header;