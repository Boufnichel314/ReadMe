import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import AnimatedPages from '../../Components/AnimatedPages'
import './contact.css'
import { useSelector } from "react-redux";
// npm i @emailjs/browser

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
    {/* <StyledContactForm> */}
      <div className="total" style = {style}>
      <div className="left">
      <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="input">
        <input type="text" placeholder="اسمك الكامل" name="user_name" />
        {/* <label>الاسم</label> */}
        </div>
        <div className="input">
        <input type="email" placeholder="البريد الالكتروني"  name="user_email" />
        {/* <label>البريد الالكتروني</label> */}
        </div>
        <div className="input">
        <textarea name="message" placeholder="رسالتك" />
        {/* <label>الرسالة</label> */}
        </div>
        <div class="wrapper">
        <input type="submit" value="ارسال" />
        </div>  
      </form>
      </div>
      <div className="background">
      <img className='img' src={require('../../images/cover.png')}  alt="Dostoevsky"/>
      </div>
      </div>
      <div className="right">
      <div className="back"></div>
      </div>
      </div>
    {/* </StyledContactForm> */}
    </AnimatedPages>
  );
};

export default Contact;