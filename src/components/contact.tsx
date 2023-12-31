import  {  useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {  const formRef = useRef<HTMLFormElement | null>(null);
  const isSmallScreen = window.innerWidth <= 768; // You can adjust the breakpoint
  const initialRows = isSmallScreen ? 2 : 7;
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    setLoading(true);
//  console.log(form);

    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

        {
          from_name: form.name,
          to_name: "Harsh Goyal",
          from_email: form.email,
          to_email: "harshgoyal1415@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};
    

  return (
    <div
      className={` h-[100vh] xl:mt-12 mt-[-100px] flex xl:flex-row flex-col-reverse sm:gap-2 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1) as any}
        className='flex-[0.75] bg-black-100 h-[80%] sm:h-[85%] p-4 sm:p-8 rounded-2xl'
      >
        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4">

        <p className={` ${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 sm:mt-12 flex flex-col gap-2 sm:gap-8'
        >
          <label className='flex sm:flex-col flex-row items-center sm:items-start'>
            <span className='text-white font-medium mb-0 sm:mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex sm:flex-col flex-row items-center sm:items-start'>
            <span className='text-white font-medium mb-0 sm:mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={initialRows}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1) as any}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* EarthCanvas Here */}
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
