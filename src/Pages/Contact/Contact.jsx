import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import AnimatedPages from '../../Components/AnimatedPages'
import Container from '@mui/material/Container';
import { useAlert } from 'react-alert'
import './contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
const alert = useAlert()
  return (
    <AnimatedPages>
      <div className="contact-page" style = {style}>
      <Container fixed>
        <div className="contact-form">
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
        <div class="wrapper input">
        <input type="submit" value="ارسال" onClick={() => {
        alert.show('تم ارسال الرسالة بنجاح')
      }} />
        </div>  
      </form>
      <div className="icons">
      <a href="https://www.facebook.com/readme314" target="_blank" rel="noreferrer">
      <FacebookIcon className="fb"/>
      </a>
      <a href="https://wa.me/+212771487686" target="_blank" rel="noreferrer">
      <WhatsAppIcon className="whts"/>
      </a>
      </div>
        </div>
        
        </Container>
      </div>
    </AnimatedPages>
  );
};

export default Contact;