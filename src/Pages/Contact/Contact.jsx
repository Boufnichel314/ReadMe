import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import AnimatedPages from '../../Components/AnimatedPages'
import './contact.css'
import { useSelector } from "react-redux";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfv5ubn",
        "template_zdf798p",
        form.current,
        process.env.REACT_APP_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const state = useSelector( state => state.userReducer.username )
const style = {
  display: 'flex',
}
if(state) {
  style.display = 'none'
}
else{
  style.display = 'flex'
}
  return (
    <AnimatedPages>
      {/* <div className="contact" style = {style}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input">
        <input type="text" placeholder="اسمك الكامل" name="user_name" />
        </div>
        <div className="input">
        <input type="email" placeholder="البريد الالكتروني"  name="user_email" />
        </div>
        <div className="input">
        <textarea name="message" placeholder="رسالتك" />
        </div>
        <div class="wrapper">
        <input type="submit" value="ارسال" />
        </div>  
      </form>
      </div>
      <div className="background">
      <img className='img' src={require('../../images/cover.png')}  alt="Dostoevsky"/>
      </div> */}
      <div className="contact-page">
        <div className="contact-form"></div>
      </div>
    </AnimatedPages>
  );
};

export default Contact;