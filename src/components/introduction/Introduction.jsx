import './Introduction.css';
import Me from "./../../img/Profile_Picture.jpg"
// import Me from "./../../img/gmail.png"
import { ThemeContext } from '../../context';
import { useContext } from 'react';

function Introduction() {

    const darkMode = useContext(ThemeContext);
    return <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className='intro-hello'>Hello, My Name is</h2>
                <h1 className='intro-name'>Aman Jaiswal</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-item">I am a Frontend Developer</div>
                        <div className="intro-title-item">I work on Javascript and ReactJS</div>
                        <div className="intro-title-item">I build things for the web</div>
                        <div className="intro-title-item">I create digital products</div>
                    </div>
                </div>
                <p className="intro-description">
                    I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND EXPERIENCES. <br></br>
                    NATIONAL and INTERNATIONAL CUSTOMERS RELY ON ME FOR FRONT END IMPLEMENTATION OF THEIR DIGITAL PRODUCTS.
                </p>
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-bg">
                <img src={Me} alt='me' className='intro-image'></img>
            </div>
        </div>
    </div>
}
export default Introduction;