// import React, { useState } from "react";
// import { GoDotFill } from "react-icons/go";
// import { GoHorizontalRule } from "react-icons/go";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     message: "",
//     captcha: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//   };

//    const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//       });

//   return (
//     <section
//       className="relative min-h-[500px] mb-0 md:mb-24 mx-6 sm:mx-20 rounded-xl overflow-visible bg-cover bg-center"
//       style={{ backgroundImage: "url(/Images/Bg/sky.jpg)" }}
//     >
//       <div className="absolute inset-0 bg-white/50 rounded-xl"></div>
//       <div className="container mx-auto relative z-10">
//         <div className="flex flex-wrap items-center">
//           {/* Left side - Form */}
//           <div
//             className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fadeIn"
//             style={{ animationDelay: "200ms" }}
//           >
//             <motion.div 
//              ref={ref}
//              initial={{ opacity: 0, x: -100 }}
//              animate={inView ? { opacity: 1, x: 0, y: 40 } : {}}
//              transition={{ delay: 0.3, duration: 0.5 }}
//             className="w-full ml-5 translate-y-5 mt-5">
//               <div className="bg-white rounded-lg shadow-lg p-6 md:p-12">
//                 <h2 className="text-2xl font-bold mb-3 font-family">Quick Contact Form</h2>
//                 <p className="mb-4 font-serif">
//                   We are committed to providing excellent service for our
//                   customers.
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="w-full">
//                     <div className="flex flex-wrap">
//                       <h2 className="mb-4 text-2xl font-semibold font-title w-full">
//                         Drop Message For Any Query
//                       </h2>

//                       {/* Name Field */}
//                       <div className="w-full md:w-1/2 md:pr-2 mb-4">
//                         <div className="mb-4">
//                           <label
//                             htmlFor="name"
//                             className="block mb-1 font-medium font-serif"
//                           >
//                             Your Name <span className="text-red-500">*</span>
//                           </label>
//                           <input
//                             className="w-full px-4 py-2 border font-family border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             id="name"
//                             type="text"
//                             name="name"
//                             placeholder="Your name here"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>

//                       {/* Email Field */}
//                       <div className="w-full md:w-1/2 md:pl-2 mb-4">
//                         <div className="mb-4">
//                           <label
//                             htmlFor="email"
//                             className="block mb-1 font-medium font-serif"
//                           >
//                             Your Email <span className="text-red-500">*</span>
//                           </label>
//                           <input
//                             className="w-full px-4 py-2 border font-family border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             id="email"
//                             type="email"
//                             name="email"
//                             placeholder="Your email here"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>

//                       {/* Subject Field */}
//                       <div className="w-full md:w-1/2 md:pr-2 mb-4">
//                         <div className="mb-4">
//                           <label
//                             htmlFor="subject"
//                             className="block mb-1 font-medium font-serif"
//                           >
//                             Your Subject <span className="text-red-500">*</span>
//                           </label>
//                           <input
//                             className="w-full px-4 py-2 border font-family border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             id="subject"
//                             type="text"
//                             name="subject"
//                             placeholder="Your subject here"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>

//                       {/* Phone Field */}
//                       <div className="w-full md:w-1/2 md:pl-2 mb-4">
//                         <div className="mb-4">
//                           <label
//                             htmlFor="phone"
//                             className="block mb-1 font-medium font-serif"
//                           >
//                             Contact Number
//                           </label>
//                           <input
//                             className="w-full px-4 py-2 border border-gray-300 font-family rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             id="phone"
//                             type="text"
//                             name="phone"
//                             placeholder="Your phone here"
//                             value={formData.phone}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>

//                       {/* Message Field */}
//                       <div className="w-full mb-4">
//                         <div className="mb-4">
//                           <label
//                             htmlFor="message"
//                             className="block mb-1 font-medium font-serif"
//                           >
//                             Message <span className="text-red-500">*</span>
//                           </label>
//                           <textarea
//                             className="w-full px-4 py-2 font-family border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             id="message"
//                             name="message"
//                             rows="3"
//                             placeholder="Tell us a few words"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                           ></textarea>
//                         </div>
//                       </div>

//                       {/* Captcha Field */}
//                       {/* <div className="w-full mb-4">
//                         <div className="mb-4">
//                           <div className="mb-4">
//                             <input 
//                               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                               id="type_the_word"
//                               type="text"
//                               name="captcha"
//                               placeholder="Type the below word"
//                               value={formData.captcha}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                         <div className="mb-4">
//                           <div className="border border-gray-300 p-2 inline-block bg-gray-100">
//                             <img src="/quform/images/captcha/courier-new-light.png" alt="Captcha" />
//                           </div>
//                         </div>
//                       </div> */}

//                       {/* Submit Button */}
//                       <div className="w-full mb-4">
//                         <div className="text-left">
//                           <button
//                             className="bg-blue-600 hover:bg-blue-700 text-white font-title font-medium py-2 px-6 rounded transition duration-300"
//                             type="submit"
//                           >
//                             Send Message
//                           </button>
//                         </div>
//                         <div className="text-left mt-2">
//                           <span className="inline-block"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right side - Contact Info */}
//           <div
//             className="w-full lg:w-1/2 animate-fadeIn"
//             style={{ animationDelay: "400ms" }}
//           >
//             <div className="lg:pl-6 xl:pl-20 h-[500px]">
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: 100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.5, duration: 0.7 }}
//               className="flex text-center items-center">
//               <GoDotFill className="w-4 h-4 text-yellow-500" />
//               <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
//               <span className="block mb-2 p-2 text-sm font-medium uppercase text-sky-600 font-title">
//                 Get In Touch
//               </span>
//               </motion.div>
//               <motion.h2 
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="mb-4 text-4xl font-semibold font-family">
//                 Join Us and Let's Have A Talk About Something Interesting!
//               </motion.h2>
//               <motion.p 
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.8, duration: 1.0 }}
//               className="mb-8 lg:w-11/12 font-serif">
//                 Write as some words about your question and we will put together
//                 your question for you inside 24 hours and tell you shortly.
//               </motion.p>
//               <ul className="space-y-4">
//                 <motion.li 
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.9, duration: 1.1 }}
//                 className="flex items-center">
//                   <span className="inline-block">
//                     <svg
//                       className="w-5 h-5 text-blue-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="inline-block ml-2 font-family">
//                     66 Guild Street 512B, Great North Town.
//                   </span>
//                 </motion.li>
//                 <motion.li 
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 1.0, duration: 1.2 }}
//                 className="flex items-center">
//                   <span className="inline-block">
//                     <svg
//                       className="w-5 h-5 text-blue-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//                       <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//                     </svg>
//                   </span>
//                   <span className="inline-block ml-2 font-serif">info@example.com</span>
//                 </motion.li>
//                 <motion.li 
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 1.1, duration: 1.3 }}
//                 className="flex items-center">
//                   <span className="inline-block">
//                     <svg
//                       className="w-5 h-5 text-blue-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
//                     </svg>
//                   </span>
//                   <span className="inline-block ml-2 font-family">(+44) 123 456 789</span>
//                 </motion.li>
//                 <motion.li 
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 1.2, duration: 1.4 }}
//                 className="flex items-center">
//                   <span className="inline-block">
//                     <svg
//                       className="w-5 h-5 text-blue-600"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </span>
//                   <span className="inline-block ml-2">
//                     Mon - Sat: <span className="ml-2 font-family">09:00am - 06:00pm</span>
//                   </span>
//                 </motion.li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Curve shapes */}
//       <div className="absolute left-0 right-0 bottom-0">
//         <img src="/Images/Bg/bg-07.png" className="w-full" alt="Curve Bottom" />
//       </div>
//       <div className="absolute left-0 right-0 top-0">
//         <img src="/Images/Bg/bg-02.png" className="w-full" alt="Curve Top" />
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  // Create separate refs for different sections
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="relative min-h-[500px] mb-0 md:mb-24 mx-6 sm:mx-20 rounded-xl overflow-visible bg-cover bg-center"
      style={{ backgroundImage: "url(/Images/Bg/sky.jpg)" }}
    >
      <div className="absolute inset-0 bg-white/50 rounded-xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Left side - Form */}
          <div
            className="w-full lg:w-1/2 mb-10 lg:mb-0 animate-fadeIn"
            style={{ animationDelay: "200ms" }}
          >
            <motion.div 
              ref={formRef}
              initial={{ opacity: 0, x: -100 }}
              animate={formInView ? { opacity: 1, x: 0, y: 40 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full ml-5 translate-y-5 mt-5">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-12">
                <h2 className="text-2xl font-bold mb-3 font-family">Quick Contact Form</h2>
                <p className="mb-4 font-serif">
                  We are committed to providing excellent service for our
                  customers.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="w-full">
                    <div className="flex flex-wrap">
                      <h2 className="mb-4 text-2xl font-semibold font-title w-full">
                        Drop Message For Any Query
                      </h2>

                      {/* Name Field */}
                      <div className="w-full md:w-1/2 md:pr-2 mb-4">
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block mb-1 font-medium font-serif"
                          >
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full px-4 py-2 border font-family border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name here"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="w-full md:w-1/2 md:pl-2 mb-4">
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block mb-1 font-medium font-serif"
                          >
                            Your Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full px-4 py-2 border font-family border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email here"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div className="w-full md:w-1/2 md:pr-2 mb-4">
                        <div className="mb-4">
                          <label
                            htmlFor="subject"
                            className="block mb-1 font-medium font-serif"
                          >
                            Your Subject <span className="text-red-500">*</span>
                          </label>
                          <input
                            className="w-full px-4 py-2 border font-family border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Your subject here"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Phone Field */}
                      <div className="w-full md:w-1/2 md:pl-2 mb-4">
                        <div className="mb-4">
                          <label
                            htmlFor="phone"
                            className="block mb-1 font-medium font-serif"
                          >
                            Contact Number
                          </label>
                          <input
                            className="w-full px-4 py-2 border border-gray-300 font-family rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="phone"
                            type="text"
                            name="phone"
                            placeholder="Your phone here"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="w-full mb-4">
                        <div className="mb-4">
                          <label
                            htmlFor="message"
                            className="block mb-1 font-medium font-serif"
                          >
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            className="w-full px-4 py-2 font-family border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="message"
                            name="message"
                            rows="3"
                            placeholder="Tell us a few words"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="w-full mb-4">
                        <div className="text-left">
                          <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-title font-medium py-2 px-6 rounded transition duration-300"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                        <div className="text-left mt-2">
                          <span className="inline-block"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Right side - Contact Info */}
          <div
            className="w-full lg:w-1/2 animate-fadeIn"
            style={{ animationDelay: "400ms" }}
          >
            <div className="lg:pl-6 xl:pl-20 h-[500px]">
              <motion.div 
                ref={headerRef}
                initial={{ opacity: 0, x: 100 }}
                animate={headerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex text-center items-center">
                <GoDotFill className="w-4 h-4 text-yellow-500" />
                <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
                <span className="block mb-2 p-2 text-sm font-medium uppercase text-sky-600 font-title">
                  Get In Touch
                </span>
              </motion.div>
              
              <motion.h2 
                ref={contactInfoRef}
                initial={{ opacity: 0, x: 100 }}
                animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-4 text-4xl font-semibold font-family">
                Join Us and Let's Have A Talk About Something Interesting!
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, x: 100 }}
                animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 1.0 }}
                className="mb-8 lg:w-11/12 font-serif">
                Write as some words about your question and we will put together
                your question for you inside 24 hours and tell you shortly.
              </motion.p>
              
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0, x: 100 }}
                  animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9, duration: 1.1 }}
                  className="flex items-center">
                  <span className="inline-block">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="inline-block ml-2 font-family">
                    66 Guild Street 512B, Great North Town.
                  </span>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: 100 }}
                  animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.0, duration: 1.2 }}
                  className="flex items-center">
                  <span className="inline-block">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </span>
                  <span className="inline-block ml-2 font-serif">info@example.com</span>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: 100 }}
                  animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1, duration: 1.3 }}
                  className="flex items-center">
                  <span className="inline-block">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </span>
                  <span className="inline-block ml-2 font-family">(+44) 123 456 789</span>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: 100 }}
                  animate={contactInfoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2, duration: 1.4 }}
                  className="flex items-center">
                  <span className="inline-block">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="inline-block ml-2">
                    Mon - Sat: <span className="ml-2 font-family">09:00am - 06:00pm</span>
                  </span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Curve shapes */}
      <div className="absolute left-0 right-0 bottom-0">
        <img src="/Images/Bg/bg-07.png" className="w-full" alt="Curve Bottom" />
      </div>
      <div className="absolute left-0 right-0 top-0">
        <img src="/Images/Bg/bg-02.png" className="w-full" alt="Curve Top" />
      </div>
    </section>
  );
};

export default Contact;