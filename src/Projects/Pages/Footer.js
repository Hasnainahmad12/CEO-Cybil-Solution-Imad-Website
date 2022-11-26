import React, { useState, useRef  } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../Constants/IndexImages';
// import { AppWrap, MotionWrap } from '../../wrapper';
import AppWrap from "../Wrapper/AppWrap";
import "../Styles/Footer.css";

const Footer = () => {
  //Email JS API is Added 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kj8einb', 'template_gdlqowh', form.current, 'yAzxC3-DjbCtoArTI')
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });

    //If This Button is Click the input feild is empty.
    setFirstName("");
    setUserEmail("");
    setMessage("");

  };

  const [done, setdone] = useState(false);

  //We Use Some States for the Form Feild, if user click the Form the input feild is automatically empty.
  const [FirstName, setFirstName] = useState();
  const [UserEmail, setUserEmail] = useState();
  const [Message, setMessage] = useState();

  
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hasnainbangash03@gmail.com" className="p-text">hasnainbangash03@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+923069396743" className="p-text">+92 3069396743</a>
        </div>
      </div>

      {/* Form Area  */}
        <div className="app__footer-form app__flex">
          <form className='app__form' ref={form} onSubmit={sendEmail} >
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="user_name" value={FirstName} required/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="user_email" value={UserEmail} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={Message}
              name="message"
              />
          </div>
          <button type="submit" value="Send"  className="p-text" >Send Message</button>
          <span>{ done && "Thanks For Your Mail."}</span>
        </form>
        </div>
    </>
  );
};


export default AppWrap(Footer, 'contact');