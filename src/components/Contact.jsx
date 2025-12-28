import React, { useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vxhzb5a",   // Your Service ID
        "template_ayl43pg",  // Your Template ID
        form.current,         // Ref to form
        "uP9N_9jTZECZySKg_"   // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("Message sent successfully! ✅");
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("Failed to send message. Please try again ❌");
        }
      );
  };

  return (
    <SectionWrapper id="contact">
      <div className="contact-wrapper">
        <div className="contact-card">

          {/* LEFT PANEL */}
          <div className="contact-left">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <small>Location</small>
                  <p>Guntur, Andhra Pradesh</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">✉️</span>
                <div>
                  <small>Email</small>
                  <p>2300032709cseh1@gmail.com</p>
                </div>
              </div>
            </div>

            <h4>Connect with me</h4>
            <div className="social-icons">
              <a href="https://github.com/priyankasml" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/mahalakshmi-priyanka-salaka-97a249328" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="contact-right">
            <h3>Send me a message</h3>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="row">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project or inquiry..."
                required
              ></textarea>

              <button type="submit">Send Message ➜</button>
              {messageStatus && <p className="status">{messageStatus}</p>}
            </form>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
