import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const formContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const statusVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
};

const ContactMe = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const sendMail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus({ state: 'loading', message: '' });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      // Clear form on success
      formRef.current.reset();
      setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
      console.log(result.text);
    } catch (err) {
      console.error(err);
      setStatus({ state: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    }
  };

  const isSending = status.state === 'loading';

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-10" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.35}}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">Contact Me</h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            Enter your details and let’s talk about building useful tech.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendMail}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={formContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Honeypot to reduce spam */}
          <input type="text" name="_honeypot" className="hidden" tabIndex="-1" autoComplete="off" />

          <motion.div className="md:col-span-1" variants={item}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </motion.div>

          <motion.div className="md:col-span-1" variants={item}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </motion.div>

          <motion.div className="md:col-span-2" variants={item}>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What’s this about?"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </motion.div>

          <motion.div className="md:col-span-2" variants={item}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a bit about your project or question…"
              rows={6}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </motion.div>

          <motion.div className="md:col-span-2 flex items-center justify-center" variants={item}>
            <button
              type="submit"
              disabled={isSending}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${isSending ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'}`}
            >
              {isSending ? 'Sending…' : 'Send Message'}
            </button>
          </motion.div>

          {/* Status message */}
          <motion.div className="md:col-span-2" variants={item} aria-live="polite">
            <AnimatePresence mode="wait">
              {status.state === 'success' && (
                <motion.p
                  key="success"
                  className="mt-2 text-center text-emerald-700"
                  variants={statusVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {status.message}
                </motion.p>
              )}
              {status.state === 'error' && (
                <motion.p
                  key="error"
                  className="mt-2 text-center text-rose-600"
                  variants={statusVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {status.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;