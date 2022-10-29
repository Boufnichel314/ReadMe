import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import { pure } from 'recompose';
import AnimatedPages from '../../Components/AnimatedPages'
import { useAlert } from 'react-alert'
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
        alert.show('Your message has been sent')
      }} />
        </div>  
      </form>
        </div>
      </div>
    </AnimatedPages>
  );
};

export default pure(Contact);