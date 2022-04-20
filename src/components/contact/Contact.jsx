import { useState, useRef, useContext } from 'react';

import emailjs from '@emailjs/browser';

import './Contact.css';
import Phone from "./../../img/phone.png"
import Gmail from "./../../img/gmail.png"
import Address from "./../../img/address.png"
import Linkedin from "./../../img/linkedin.png"
import Instagram from "./../../img/instagram.png"
import Github from "./../../img/github.png"
import { ThemeContext } from '../../context';
import { COLOR_WHITE, COLOR_BLACK, COLOR_GREY, LINKEDIN_PROFILE_URL, INSTAGRAM_PROFILE_URL, GITHUB_PROFILE_URL } from "../../constant";

function Contact() {
    const darkMode = useContext(ThemeContext);
    const [done, setDone] = useState(false);
    const formRef = useRef();

    const submitHandle = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_a2mb2vu', 'template_spg42d6', formRef.current, 'y5nz7e0nwmSApalWj')
            .then((result) => {
                console.log(result.text);
                console.log('formRef', formRef.current.length);
                for (let i = 0; i < formRef.current.length; i++) {
                    formRef.current[i].value = '';
                }
                alert('mail sent');
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h4 className="contact-title">Get in Touch</h4>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="phone" className="contact-icon" />
                            +91 9893685642
                        </div>
                        <div className="contact-info-item">
                            <img src={Gmail} alt="email" className="contact-icon" />
                            amanjaiswal98936@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="address" className="contact-icon" />
                            Hyderabad, India
                        </div>
                        <div className="contact-info-item">
                            <a className="contact-icon-anchor" href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
                                <img src={Github} alt="github" className="contact-icon" />
                            </a>
                            <a className="contact-icon-anchor" href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noreferrer">
                                <img src={Instagram} alt="instagram" className="contact-icon" />
                            </a>
                            <a className="contact-icon-anchor" href={LINKEDIN_PROFILE_URL} target="_blank" rel="noreferrer">
                                <img src={Linkedin} alt="linkedin" className="contact-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className='contact-desc'>
                        <b>Always open to new opportunities.</b><br />you have a question or just want to say hi,<br />Let me know will get back to you!
                    </p>
                    <form ref={formRef} onSubmit={submitHandle}>
                        <input type="text" style={darkMode ? { color: COLOR_WHITE, backgroundColor: COLOR_GREY } : { color: COLOR_BLACK, backgroundColor: COLOR_WHITE }} placeholder="Name" name="user_name" />
                        <input type="text" style={darkMode ? { color: COLOR_WHITE, backgroundColor: COLOR_GREY } : { color: COLOR_BLACK, backgroundColor: COLOR_WHITE }} placeholder="Subject" name="user_subject" />
                        <input type="text" style={darkMode ? { color: COLOR_WHITE, backgroundColor: COLOR_GREY } : { color: COLOR_BLACK, backgroundColor: COLOR_WHITE }} placeholder="Email" name="user_email" />
                        <textarea rows={5} style={darkMode ? { color: COLOR_WHITE, backgroundColor: COLOR_GREY } : { color: COLOR_BLACK, backgroundColor: COLOR_WHITE }} placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;