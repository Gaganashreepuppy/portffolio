import React, { useRef } from 'react';
import './Contact.css';
import linkedIn from '../../assets/linkedin.png';
// import resume from '../../assets/resume.png'
// import github from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const sendEmail = (e, form) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_ln6d6pd',
      'template_4pn96h7',
      form.current,
      'Qfw42pZ32UTshl8cl'
    ) // Replace with your user_id
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
          Kindly complete this form to contact me about potential opportunities.
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
            <a
              href="https://www.linkedin.com/in/gaganashree-c-20967a26a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaTsLKnjdSNiAFFkfGDLHhw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="LinkedIn" className="link" />
            </a>

            {/* <img src={resume} alt="resume" className="link" />
            <img src={github} alt="github" className="link" /> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
