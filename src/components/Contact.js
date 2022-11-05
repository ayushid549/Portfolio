import React,{ useRef } from 'react';
import './css/contact.css';
import Navbar from './Navbar';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    form.current.focus();
    
    emailjs.sendForm('service_v8f9m1k', 'template_d4kw0vm', form.current, 'MhiuAMio7lT7diYQz')
      .then((result) => {
          alert("message sent sucessfully");
      }, (error) => {
          alert("There is Error");

      });
    };

    return (
            <div className='contact-page'>
                <h1>Contact Me</h1>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>Say Hello!</h2>
                        <div className='inputfields'>
                            <input type="text" name="sender_name" placeholder='First Name' required></input>
                            <input type="text" name="last_name" placeholder='Last Name' required></input>
                            <input type="Email" name="sender_Email" placeholder='Email Address' required></input>
                            <textarea type="text" name="sender_message" placeholder='Write Message' required></textarea>
                            <button type="submit" >Send</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Contact;