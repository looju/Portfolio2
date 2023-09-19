import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!form.email.match(validRegex)) {
      alert("Oops. Invalid email address. Please try again");
      setLoading(false);
      return;
    }
    else if (form.name == null) {
      alert("Please fill in your name");
      setLoading(false);
      return;
    }
    else if (form.message == null) {
      alert("Please fill in your message");
      setLoading(false);
      return;
    }
   else if (form.message == null && form.email == null && form.name == null) {
      alert("Please complete the form. Thanks");
      setLoading(false);
      return;
    } else {
      emailjs
        .send(
          "service_j16izcs",
          "template_myox25v",
          {
            from_name: form.name,
            to_name: "Omofade Oluwaloju",
            from_email: form.email,
            to_email: "omofade2019@gmail.com",
            message: form.message,
          },
          "tKH5XUaw1oxKGjZjU"
        )
        .then(
          () => {
            setLoading(false);
            alert(
              "Thank you. Glad to connect with you. I will get back to you as soon as i can."
            );
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Oopsy. Something went wrong. Can you try that again?");
          }
        );
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-rose-900 p-8 rounded-2xl"
      >
        <p className={[styles.sectionSubText, { color: "#fff" }]}>
          Let's connect!
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your mail address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
