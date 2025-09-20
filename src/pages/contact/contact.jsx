import React, { useState } from "react";
import Navbar from "../../navbar/navbar";
import styles from "./contact.module.css";
import ContactCard from "../../component/contactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending data to EmailJS:", formData); // Debugging
    emailjs
      .send(
        "service_qv9vfih",    
        "template_9fsezf8",   
        formData,
        "IPe9bvAWVsycGnW3K"     
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("❌ Failed to send message, try again later.");
      });
  };

  const openGmail = () => {
    window.open("https://mail.google.com", "_blank");
  }

  const openInsta = () => {
    window.open("https://www.instagram.com/raheel_rajp00t/", "_blank")
  }

  const openGithub = () => {
    window.open("https://github.com/Raheel049", "_blank")
  }

  const openLinkdln = () => {
    window.open("https://www.linkedin.com/in/raheel-ahmed-6a2a19264", "_blank")
  }


  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.contactCont}>
        <h1>
          Get in <span className={styles.touch}>Touch</span>
        </h1>
        <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>

        <div className={styles.contSendMsgCont}>
          <div className={styles.contactSorce}>
            <ContactCard iconName="Email" iconDes="raheel25031@gmail.com" icon={faEnvelope} />
            <ContactCard icon={faLocationDot} iconName="Location" iconDes="Karachi, Pakistan" />
            <ContactCard icon={faPhone} iconName="Phone" iconDes="+923058093023" />
          </div>

          
            <form onSubmit={handleSubmit} className={styles.sendMassege}>
              <div className={styles.input}>
                <label htmlFor="yourName">Your Name</label>
                <input
                  type="text"
                  placeholder="Raheel Ahmed"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>

              <div className={styles.input}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="raheel25031@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.input}>
                <label htmlFor="yourMassege">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">
                Send Message <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </button>
            </form>
          
        </div>

        
      </div>
      <div className={styles.footer}>
          <div>
            <p>&copy; Raheel Ahmed</p>
          </div>

          <div className={styles.footerIcon}>
            <FontAwesomeIcon icon={faEnvelope} onClick={openGmail} />
            <FontAwesomeIcon icon={faInstagram} onClick={openInsta} />
            <FontAwesomeIcon icon={faGithub} onClick={openGithub} />
            <FontAwesomeIcon icon={faLinkedin} onClick={openLinkdln} />
          </div>
          <div>
            <p>CRAFTING Multiple EXPERIENCES</p>
          </div>
        </div>
    </>
  );
};

export default Contact;
