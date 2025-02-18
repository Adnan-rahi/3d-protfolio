import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSVG";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();
  const form = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };
  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="cSection left">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let&apos;s keep in touch
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="">Name</label>
            <input type="text" name="user_username" placeholder="Example ..." />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Example@example.cc"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="">Message</label>
            <textarea
              name="user_message"
              rows={10}
              placeholder="Write Your Thoughts here..."
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
            Send
          </motion.button>
          {success && <span>Your Message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection right">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
