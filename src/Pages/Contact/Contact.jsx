import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import AnimatedPages from '../../Components/AnimatedPages'
import './contact.css'
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

  return (
    <AnimatedPages>
    <div className="contact-container">
    <StyledContactForm>
      <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="input">
        <input type="text" placeholder="اسمك الكامل" name="user_name" />
        <label>الاسم</label>
        </div>
        <div className="input">
        <input type="email" placeholder="البريد الالكتروني"  name="user_email" />
        <label>البريد الالكتروني</label>
        </div>
        <div className="input">
        <textarea name="message" placeholder="رسالتك" />
        <label>الرسالة</label>
        </div>
        <input type="submit" value="ارسال" />
      </form>
      </div>
    </StyledContactForm>
    </div>
    </AnimatedPages>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    border: 2px solid red;
    height: 100%;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      text-align: left;
      width: 100%;
      color: rgba(0, 206, 158, 1);
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      width: 30%;
    }
  }
`;