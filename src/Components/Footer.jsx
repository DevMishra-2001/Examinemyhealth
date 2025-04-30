// import { Mail, MapPin, Phone, Send } from "lucide-react";
// import React from "react";
// import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <>
//       <footer className="pt-0 relative bg-black px-4 md:px-6 lg:px-8">
//         <div className="container mx-auto left-0 border-b border-gray-600  py-10 md:pt-12 pb-6 mb-6 md:mb-8 lg:mb-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
//             {/*  phone  */}
//             <div className="flex animate-fadeIn">
//               <motion.div
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="flex-shrink-0"
//               >
//                 <Phone className="text-white text-2xl mt-3" />
//               </motion.div>
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.4, duration: 0.6 }}
//               className="flex-grow border-l border-gray-600 pl-4 ml-3 p-2">
//                 <h5 className="text-sm text-white font-title">Phone Number</h5>
//                 <span className="text-white opacity-90 text-sm font-serif">
//                   (+44) 123 456 789
//                 </span>
//               </motion.div>
//             </div>
//             {/* E mail */}
//             <div className="flex animate-fadeIn">
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.5, duration: 0.7 }}
//               className="flex-shrink-0">
//                 <Mail className="text-white text-2xl" />
//               </motion.div>
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.6, duration: 0.8 }}
//               className="flex-grow border-l border-gray-600 pl-4 ml-3">
//                 <h5 className="text-sm text-white font-title">Email Address</h5>
//                 <span className="text-white opacity-90 text-sm font-serif">
//                   info@example.com
//                 </span>
//               </motion.div>
//             </div>
//             {/* Location */}
//             <div className="flex animate-fadeIn">
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.7, duration: 0.9 }}
//               className="flex-shrink-0">
//                 <MapPin className="text-white text-2xl" />
//               </motion.div>
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.8, duration: 1.0 }}
//               className="flex-grow border-l border-gray-600 pl-4 ml-3">
//                 <h5 className="text-sm text-white font-title">Location</h5>
//                 <span className="text-white opacity-90 text-sm font-serif">
//                   66 Guild Street , North Town.
//                 </span>
//               </motion.div>
//             </div>
//             {/* Social Media */}
//             <div className="flex justify-center lg:justify-center animate-fadeIn">
//               <motion.ul 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.9, duration: 1.1 }}
//               className="flex space-x-4">
//                 <li>
//                   <a
//                     href="#!"
//                     className="text-white hover:text-blue-400 transition-colors"
//                   >
//                     <FaFacebook size={18} />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-white hover:text-blue-400 transition-colors"
//                   >
//                     <FaTwitter size={18} />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#!"
//                     className="text-white hover:text-blue-400 transition-colors"
//                   >
//                     <FaYoutube size={18} />
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#!"
//                     className="text-white hover:text-blue-400 transition-colors"
//                   >
//                     <FaLinkedin size={18} />
//                   </a>
//                 </li>
//               </motion.ul>
//             </div>
//           </div>
//         </div>

//         {/* Main Footer Content */}

//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-600">
//             {/* About Section */}
//             <div className="animate-fadeIn">
//               <motion.div 
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="mb-6">
//                 <a href="#!">
//                   <img src="/Images/logo.png" className="w-8 h-8" alt="Logo" />
//                 </a>
//               </motion.div>
//               <motion.p 
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-white mb-4 opacity-90 font-serif">
//                 Lovecare A trustedname for caring for someone. Seniors stay
//                 their lifestyles of their very own manner right here what they
//                 need No you can trouble them right here.
//               </motion.p>
//               <motion.form 
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="relative">
//                 <div>
//                   <input
//                     className="w-full px-4 py-2 rounded-full bg-gray-800 text-white mb-4"
//                     id="email_address"
//                     type="text"
//                     name="email_address"
//                     placeholder="Subscribe with us"
//                   />
//                   <button className="absolute right-1 top-1 bg-white text-blue-600 rounded-full p-2">
//                     <Send size={16} />
//                   </button>
//                 </div>
//               </motion.form>
//             </div>
//             {/* Quick Links */}
//             <div className="animate-fadeIn">
//               <motion.div 
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="sm:pl-2">
//                 <h4 className="text-lg text-white font-serif">Quick Links</h4>
//                 <div className="w-16 h-1 bg-sky-600 my-3"></div>
//                 <ul className="space-y-2 font-family">
//                   <li>
//                     <a
//                       href=""
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       About us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href=""
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Our Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href=""
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Portfolio
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href=""
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Our Pricing
//                     </a>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Our Services */}
//             <div className="animate-fadeIn">
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.8, duration: 1.0 }}
//               className="lg:pl-2">
//                 <h4 className="text-lg text-white font-serif">Our Services</h4>
//                 <div className="w-16 h-1 bg-sky-600 my-3"></div>
//                 <ul className="space-y-2 font-family">
//                   <li>
//                     <a
//                       href="physical-care.html"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Physical Care
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="medical-care.html"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Medical Care
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="personal-care.html"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Personal Care
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="eldery-nutrition"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Eldery Nutrition
//                     </a>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Legal */}

//             <div className="animate-fadeIn">
//               <motion.div 
//                ref={ref}
//                initial={{ opacity: 0, x: -100 }}
//                animate={inView ? { opacity: 1, x: 0 } : {}}
//                transition={{ delay: 0.9, duration: 1.1 }}
//               className="lg:pl-2">
//                 <h4 className="text-lg text-white font-serif">Legal</h4>
//                 <div className="w-16 h-1 bg-sky-600 my-3"></div>
//                 <ul className="space-y-2 font-family">
//                   <li>
//                     <a
//                       href="physical-care.html"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       TCPA Compliance
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="medical-care.html"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Marketing &amp; Advertising
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="personal-care.html"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Purchase Terms
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="eldery-nutrition"
//                       className="text-white opacity-90 hover:text-blue-400 transition-colors"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                 </ul>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//         <div className="py-6 mt-2">
//           <div className="container mx-auto">
//             <div className="text-center">
//               <motion.p 
//               ref={ref}
//               initial={{ opacity: 0, y: -100 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-white text-sm font-family">
//                 © <span>{currentYear}</span> All Rights Reserved.Powered By RSB
//                 Healthcare
//               </motion.p>
//             </div>
//           </div>
//         </div>
//         <div className="absolute left-0 right-0 top-0">
//           <img src="/Images/Bg/bg-02.png" className="w-full" alt="Curve Top" />
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Configure useInView with rootMargin to trigger slightly before element is visible
  // and disable triggerOnce so animations happen each time user scrolls to the footer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: "50px 0px"
  });

  return (
    <>
      <footer ref={ref} className="pt-0 relative bg-black px-4 md:px-6 lg:px-8">
        <div className="container mx-auto left-0 border-b border-gray-600 py-10 md:pt-12 pb-6 mb-6 md:mb-8 lg:mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/*  phone  */}
            <div className="flex animate-fadeIn">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Phone className="text-white text-2xl mt-3" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex-grow border-l border-gray-600 pl-4 ml-3 p-2"
              >
                <h5 className="text-sm text-white font-title">Phone Number</h5>
                <span className="text-white opacity-90 text-sm font-serif">
                  (+44) 123 456 789
                </span>
              </motion.div>
            </div>
            {/* E mail */}
            <div className="flex animate-fadeIn">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex-shrink-0"
              >
                <Mail className="text-white text-2xl" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex-grow border-l border-gray-600 pl-4 ml-3"
              >
                <h5 className="text-sm text-white font-title">Email Address</h5>
                <span className="text-white opacity-90 text-sm font-serif">
                  info@example.com
                </span>
              </motion.div>
            </div>
            {/* Location */}
            <div className="flex animate-fadeIn">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="flex-shrink-0"
              >
                <MapPin className="text-white text-2xl" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.8, duration: 1.0 }}
                className="flex-grow border-l border-gray-600 pl-4 ml-3"
              >
                <h5 className="text-sm text-white font-title">Location</h5>
                <span className="text-white opacity-90 text-sm font-serif">
                  66 Guild Street , North Town.
                </span>
              </motion.div>
            </div>
            {/* Social Media */}
            <div className="flex justify-center lg:justify-center animate-fadeIn">
              <motion.ul 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.9, duration: 1.1 }}
                className="flex space-x-4"
              >
                <li>
                  <a
                    href="#!"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaFacebook size={18} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter size={18} />
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaYoutube size={18} />
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}

        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-600">
            {/* About Section */}
            <div className="animate-fadeIn">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-6"
              >
                <a href="#!">
                  <img src="/Images/logo.png" className="w-8 h-8" alt="Logo" />
                </a>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white mb-4 opacity-90 font-serif"
              >
                Lovecare A trustedname for caring for someone. Seniors stay
                their lifestyles of their very own manner right here what they
                need No you can trouble them right here.
              </motion.p>
              <motion.form 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div>
                  <input
                    className="w-full px-4 py-2 rounded-full bg-gray-800 text-white mb-4"
                    id="email_address"
                    type="text"
                    name="email_address"
                    placeholder="Subscribe with us"
                  />
                  <button className="absolute right-1 top-1 bg-white text-blue-600 rounded-full p-2">
                    <Send size={16} />
                  </button>
                </div>
              </motion.form>
            </div>
            {/* Quick Links */}
            <div className="animate-fadeIn">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="sm:pl-2"
              >
                <h4 className="text-lg text-white font-serif">Quick Links</h4>
                <div className="w-16 h-1 bg-sky-600 my-3"></div>
                <ul className="space-y-2 font-family">
                  <li>
                    <a
                      href=""
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Our Pricing
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Our Services */}
            <div className="animate-fadeIn">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.8, duration: 1.0 }}
                className="lg:pl-2"
              >
                <h4 className="text-lg text-white font-serif">Our Services</h4>
                <div className="w-16 h-1 bg-sky-600 my-3"></div>
                <ul className="space-y-2 font-family">
                  <li>
                    <a
                      href="physical-care.html"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Physical Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="medical-care.html"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Medical Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="personal-care.html"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Personal Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="eldery-nutrition"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Eldery Nutrition
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Legal */}

            <div className="animate-fadeIn">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: 0.9, duration: 1.1 }}
                className="lg:pl-2"
              >
                <h4 className="text-lg text-white font-serif">Legal</h4>
                <div className="w-16 h-1 bg-sky-600 my-3"></div>
                <ul className="space-y-2 font-family">
                  <li>
                    <a
                      href="physical-care.html"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      TCPA Compliance
                    </a>
                  </li>
                  <li>
                    <a
                      href="medical-care.html"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Marketing &amp; Advertising
                    </a>
                  </li>
                  <li>
                    <a
                      href="personal-care.html"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Purchase Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="eldery-nutrition"
                      className="text-white opacity-90 hover:text-blue-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="py-6 mt-2">
          <div className="container mx-auto">
            <div className="text-center">
              <motion.p 
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white text-sm font-family"
              >
                © <span>{currentYear}</span> All Rights Reserved.Powered By RSB
                Healthcare
              </motion.p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 top-0">
          <img src="/Images/Bg/bg-02.png" className="w-full" alt="Curve Top" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
