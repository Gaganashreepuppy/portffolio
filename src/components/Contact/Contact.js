import React, { useRef } from 'react';
import './Contact.css';
import linkedIn from '../../assets/linkedin.png';
// import resume from '../../assets/resume.png'
// import github from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const sendEmail = (e, form) => {
  e.preventDefault();

  emailjs
    .sendForm('service_ln6d6pd', 'template_4pn96h7', form.current, 'user_yourUserId') // Replace with your user_id
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Message failed to send. Please try again.');
      }
    );
};

function Contact() {
  const form = useRef(null); // Correctly invoking useRef

  return (
    <section id="contact">
      <div id="contacts">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out this form to reach out to me regarding any
          opportunities
        </span>
        <form
          className="contactForm"
          ref={form}
          onSubmit={(e) => sendEmail(e, form)} // Passing form as an argument
        >
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name" // Must match with template
          />
          <input
            type="email" // Changed to 'email' input type for email validation
            className="email"
            placeholder="Your email"
            name="from_email" // Must match with template
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your message"
          />
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={linkedIn} alt="linkedin" className="link" />
            {/* <img src={resume} alt="resume" className="link" />
            <img src={github} alt="github" className="link" /> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
