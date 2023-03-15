import style from "../style/ContactForm.scss";
import emailjs from "@emailjs/browser";
import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const { theme } = useContext(ThemeContext);

  const notify = () => {
    toast.success("Message Send!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const errorNotify = () => {
    toast.error("Error Message Not Send", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_ID
      )
      .then(
        (result) => {
          notify();
        },
        (error) => {
          errorNotify();
        }
      );
  };

  return (
    <section
      id="contact"
      className="contact-container h-full overflow-x-hidden"
    >
      <div className="py-8 lg:py-16 px-16 mx-auto max-w-screen-md relative h-full mt-20">
        <h2 className="title mb-8 text-6xl tracking-tight font-extrabold text-center">
          Contact Me
        </h2>
        <p className="contact-text mb-8 lg:mb-16 font-bold text-center sm:text-xl">
          Want to leave a feedback about this awesome Portfolio? Want to pass me
          in interview? Please let me know. :)
        </p>
        <form ref={form} onSubmit={sendEmail} action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-large font-bold">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm text-sm rounded-lg w-full p-2.5"
              placeholder="name@SomeStuff.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-large font-bold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg"
              placeholder=""
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className=" block mb-2 text-sm font-large font-bold">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="send-button py-4 px-4 text-sm font-large font-bold text-center rounded-lg"
          >
            Send message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
