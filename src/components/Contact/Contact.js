import "./Contact.css";
import mailImage from "../../assets/mailimage_.jpg";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "portfolio_service",
        "portfolio_template",
        e.target,
        "user_DHtWvr4ZUbJiC6pqdIfLO"
      )
      .then(
        (result) => {
          toast("Mail Sent");
        },
        (error) => {
          toast("Error Mail Not Sent");
        }
      );
    e.target.reset();
  };

  return (
    <div className="maincontact" id="contact">
      <div className="container">
        <div className="heading__contact">
          <p>Contact</p>
        </div>
        <div className="contact__section">
          <div className="contactIcon">
            <img
              src={mailImage}
              alt="mymail"
              loading="lazy"
              className="imagecontact"
            />
          </div>
          <div className="contact__form">
            <form className="contact-forms" onSubmit={submitForm}>
              <input
                type="text"
                name="name"
                id="contactName"
                // value={name}
                placeholder="Enter your Name"
                // onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="emailsender"
                id="contactEmail"
                // value={email}
                placeholder="Enter your E-mail"
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                name="message"
                id="contactMessage"
                // value={message}
                cols="30"
                rows="5"
                placeholder="Message"
                // onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button className="submitBtn button-18" type="submit">
                Send
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
