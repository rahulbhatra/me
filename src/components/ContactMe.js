import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiMail, FiTag, FiMessageSquare, FiCheck } from 'react-icons/fi';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Motion variants
const formContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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

  const isSending = status.state === 'loading';
  const isSuccess = status.state === 'success';
  const isError = status.state === 'error';

  const sendMail = async (e) => {
    e.preventDefault();
    if (!formRef.current || isSending) return;
    setStatus({ state: 'loading', message: '' });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      formRef.current.reset();
      setStatus({ state: 'success', message: 'Thanks! Your message has been sent.' });
      console.log(result.text);
    } catch (err) {
      console.error(err);
      setStatus({ state: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Subtle dot grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:24px_24px] dark:[background:radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-400/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Animated gradient frame */}
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl p-[2px] bg-gradient-to-r from-emerald-400 via-pink-400 to-cyan-400"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          {/* Glass card */}
          <motion.div
            className="rounded-[calc(theme(borderRadius.3xl)-2px)] bg-gradient-to-br from-white/80 to-[#FD4370]/20 dark:from-gray-900/70 dark:to-[#FD4370]/20 backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10 shadow-2xl"
            whileHover={{ rotateX: 0.5, rotateY: -0.5, scale: 1.002 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              {/* Title */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-pink-500 to-cyan-500 uppercase">
                  Contact Me
                </h2>
                <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-pink-400" />
                <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                  Enter your details and let’s talk about building useful tech.
                </p>
              </motion.div>

              {/* Form */}
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

                {/* Name */}
                <Field label="Name" id="name" name="name" icon={<FiUser className="h-5 w-5" />} required />

                {/* Email */}
                <Field label="Email" id="email" name="email" type="email" icon={<FiMail className="h-5 w-5" />} required />

                {/* Subject */}
                <Field label="Subject" id="subject" name="subject" icon={<FiTag className="h-5 w-5" />} className="md:col-span-2" required />

                {/* Message */}
                <Field label="Message" id="message" name="message" as="textarea" rows={6} icon={<FiMessageSquare className="h-5 w-5" />} className="md:col-span-2" required />

                {/* Submit */}
                <motion.div className="md:col-span-2 flex items-center justify-center" variants={item}>
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileTap={{ scale: 0.97 }}
                    className={`relative inline-flex items-center gap-2 justify-center rounded-xl px-6 py-3 font-semibold text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 overflow-hidden ${isSending ? 'bg-emerald-400 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 via-pink-600 to-cyan-600 hover:from-emerald-500 hover:via-pink-500 hover:to-cyan-500'}`}
                  >
                    {/* shimmer */}
                    {!isSending && (
                      <motion.span
                        className="pointer-events-none absolute inset-y-0 left-[-30%] w-1/3 bg-white/20 skew-x-[-20deg]"
                        initial={{ x: '-120%' }}
                        animate={{ x: '250%' }}
                        transition={{ repeat: Infinity, duration: 2.6, ease: 'linear' }}
                        aria-hidden
                      />
                    )}

                    <AnimatePresence initial={false} mode="wait">
                      {isSending && (
                        <motion.span
                          key="spinner"
                          className="inline-block h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, ease: 'linear', duration: 0.8 }}
                        />
                      )}
                      {isSuccess && (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                          className="flex items-center gap-1"
                        >
                          <FiCheck className="h-5 w-5" /> Sent!
                        </motion.span>
                      )}
                    </AnimatePresence>
                    <span>{isSending ? 'Sending…' : isSuccess ? 'Message Sent' : 'Send Message'}</span>
                  </motion.button>
                </motion.div>

                {/* Status message */}
                <motion.div className="md:col-span-2" variants={item} aria-live="polite">
                  <AnimatePresence mode="wait">
                    {isSuccess && (
                      <motion.p
                        key="success"
                        className="mt-3 text-center text-emerald-700 dark:text-emerald-400"
                        variants={statusVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                      >
                        {status.message}
                      </motion.p>
                    )}
                    {isError && (
                      <motion.p
                        key="error"
                        className="mt-3 text-center text-rose-600"
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

            {/* Confetti on success */}
            <AnimatePresence>
              {isSuccess && <ConfettiBurst />}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Floating-label input/textarea field with leading icon
const Field = ({ label, id, name, type = 'text', as = 'input', icon, className = '', required, rows }) => (
  <motion.div className={`relative ${className}`} variants={item}>
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
        {icon}
      </div>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          placeholder=" "
          className="peer mt-1 w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 pl-10 pr-3 py-3 text-gray-900 dark:text-gray-100 shadow-sm outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300 dark:border-gray-700 dark:placeholder-transparent"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder=" "
          className="peer mt-1 w-full rounded-xl border border-gray-300 bg-white dark:bg-gray-800 pl-10 pr-3 py-3 text-gray-900 dark:text-gray-100 shadow-sm outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-300 dark:border-gray-700 dark:placeholder-transparent"
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all duration-200 ease-out
                   peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
                   peer-focus:top-0 peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400
                   peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-2 peer-[&:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  </motion.div>
);

// Tiny confetti burst when success
const ConfettiBurst = () => {
  const pieces = Array.from({ length: 24 });
  const colors = ['#22c55e', '#06b6d4', '#f472b6', '#f59e0b', '#eab308', '#60a5fa'];
  return (
    <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" initial={false}>
      {pieces.map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-[2px]"
          style={{
            left: `${50 + (Math.random() * 40 - 20)}%`,
            top: '40%',
            backgroundColor: colors[i % colors.length],
          }}
          initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
          animate={{ opacity: 1, y: 220 + Math.random() * 120, x: (Math.random() - 0.5) * 320, rotate: Math.random() * 720 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 + Math.random() * 0.6, ease: 'easeOut' }}
        />
      ))}
    </motion.div>
  );
};

export default ContactMe;