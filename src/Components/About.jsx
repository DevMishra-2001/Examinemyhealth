import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const About = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });
  return (
    <>
      <section className="relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center relative z-10 mt-10">
            {/* Left Content Column */}
            <div className="lg:w-1/2 order-2 lg:order-1 mt-20 animate-fadeIn px-4">
              <motion.div 
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex text-center items-center">
                <GoDotFill className="w-4 h-4 text-yellow-500" />
                <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
                <span className="text-primary font-medium ml-2 leading-relaxed text-sky-600">
                  About Us
                </span>
              </motion.div>
              {/* <span className="text-primary font-medium">About Us</span> */}

              <motion.h2 
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl font-bold mb-6">
                Health Is The First Step To Prosperity.
              </motion.h2>
              <motion.p 
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mb-8 text-lg lg:w-11/12">
                A lovecare is a person who cares for the fitness and wellness of
                someone who wishes assist with day by day obligations and
                activities.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 pb-8 border-b border-gray-200">
                <div className="mb-4 sm:mb-0">
                  <div className="about-content-info">
                    <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex">
                      <div className="flex-shrink-0">
                        <span className="icon">
                          <FaRegDotCircle className="w-5 h-5 text-yellow-500 " />
                        </span>
                      </div>
                      <div className="flex-grow ps-4 ms-3">
                        <p className="mb-0">24/7 Support</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="about-content-info mt-4">
                    <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex">
                      <div className="flex-shrink-0">
                        <span className="icon">
                          <FaRegDotCircle className="w-5 h-5 text-yellow-500" />
                        </span>
                      </div>
                      <div className="flex-grow ps-4 ms-3">
                        <p className="mb-0">Free Medical Care</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div>
                  <div className="about-content-info">
                    <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="flex">
                      <div className="flex-shrink-0">
                        <span className="icon">
                          <FaRegDotCircle className="w-5 h-5 text-yellow-500" />
                        </span>
                      </div>
                      <div className="flex-grow ps-4 ms-3">
                        <p className="mb-0">Lovely Envoirment</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="about-content-info mt-4">
                    <motion.div 
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.9 }}
                    className="flex">
                      <div className="flex-shrink-0">
                        <span className="icon">
                          <FaRegDotCircle className="w-5 h-5 text-yellow-500" />
                        </span>
                      </div>
                      <div className="flex-grow ps-4 ms-3">
                        <p className="mb-0">Professional Nursing</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center">
                <div className="flex-shrink-0 relative">
                  <img
                    src="/Images/About/Avatar.jpg"
                    className="w-14 h-14 rounded-full"
                    alt="avatar"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full text-white">
                    <Phone size={14} />
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium mb-0">
                    Contact Us: (+44) 123 456 789
                  </h4>
                </div>
              </div> */}
            </div>

            {/* Right Images Column */}
            <div className="lg:w-1/2 order-1 lg:order-2 mt-10 animate-fadeIn">
              <div className="lg:pl-8 xl:pl-12">
                <div className="grid grid-cols-2 space-x-8">
                  <motion.div 
                  ref={ref}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8, duration: 1.0 }}
                  className="mt-8">
                    <img
                      className="rounded-md mb-4"
                      src="/Images/About/About-1.jpg"
                      alt="about"
                    />
                    <img
                      className="rounded-md"
                      src="/Images/About/About-2.jpg"
                      alt="about"
                    />
                  </motion.div>
                  <div>
                    <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9, duration: 1.1 }}
                    >
                      <img
                        className="rounded-md"
                        src="/Images/About/About-3.jpg"
                        alt="about"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Elements */}
        <div className="hidden sm:block absolute top-0 left-8 -mt-10 animate-rotateCircle origin-center">
          <img src="/Images/About/shape-02.png" alt="shape" className="filter invert"/>
        </div>
        <div className="hidden sm:block absolute bottom-0 right-0 animate-slowBounce opacity-20">
          <img src="/Images/About/shape-01.png" alt="shape" className="filter invert"/>
        </div>
      </section>
      
    </>
  );
};

export default About;

// import React, { useEffect } from "react";
// import { FaRegDotCircle } from "react-icons/fa";
// import { GoDotFill } from "react-icons/go";
// import { GoHorizontalRule } from "react-icons/go";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

// const About = () => {
//   // Using a single ref for the entire section
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <>
//       <section className="relative py-16 px-4 overflow-hidden">
//         <div className="container mx-auto max-w-7xl">
//           <div className="flex flex-col lg:flex-row items-center relative z-10">
//             {/* Left Content Column */}
//             <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="flex items-center mb-4"
//               >
//                 <GoDotFill className="w-4 h-4 text-yellow-500" />
//                 <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
//                 <span className="text-primary font-medium ml-2 leading-relaxed text-sky-600">
//                   About Us
//                 </span>
//               </motion.div>

//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-3xl md:text-4xl font-bold mb-6"
//               >
//                 Health Is The First Step To Prosperity.
//               </motion.h2>
              
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.5, duration: 0.7 }}
//                 className="mb-8 text-base md:text-lg lg:w-11/12"
//               >
//                 A lovecare is a person who cares for the fitness and wellness of
//                 someone who wishes assist with day by day obligations and
//                 activities.
//               </motion.p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
//                 <div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.6, duration: 0.7 }}
//                     className="flex items-start mb-4"
//                   >
//                     <FaRegDotCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
//                     <p className="mb-0 ml-4">24/7 Support</p>
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.7, duration: 0.7 }}
//                     className="flex items-start"
//                   >
//                     <FaRegDotCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
//                     <p className="mb-0 ml-4">Free Medical Care</p>
//                   </motion.div>
//                 </div>

//                 <div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.8, duration: 0.7 }}
//                     className="flex items-start mb-4"
//                   >
//                     <FaRegDotCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
//                     <p className="mb-0 ml-4">Lovely Environment</p>
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ delay: 0.9, duration: 0.7 }}
//                     className="flex items-start"
//                   >
//                     <FaRegDotCircle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
//                     <p className="mb-0 ml-4">Professional Nursing</p>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Images Column */}
//             <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-12 lg:mb-0" ref={ref}>
//               <div className="lg:pl-8">
//                 <div className="grid grid-cols-2 gap-3 md:gap-6">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ delay: 0.5, duration: 0.7 }}
//                     className="space-y-3 md:space-y-6"
//                   >
//                     <img
//                       className="rounded-md w-full h-auto object-cover aspect-square"
//                       src="/Images/About/About-1.jpg"
//                       alt="Medical professional caring for patient"
//                     />
//                     <img
//                       className="rounded-md w-full h-auto object-cover aspect-square"
//                       src="/Images/About/About-2.jpg"
//                       alt="Healthcare environment"
//                     />
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ delay: 0.7, duration: 0.7 }}
//                     className="mt-12"
//                   >
//                     <img
//                       className="rounded-md w-full h-auto object-cover aspect-[3/4]"
//                       src="/Images/About/About-3.jpg"
//                       alt="Medical facility"
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Shape Elements - Only visible on larger screens */}
//         <div className="hidden sm:block absolute top-0 left-8 -mt-10 z-0 opacity-50">
//           <img src="/Images/About/shape-02.png" alt="" className="filter invert w-24 h-24 animate-spin" style={{ animationDuration: '15s' }} />
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 z-0 opacity-20">
//           <img 
//             src="/Images/About/shape-01.png" 
//             alt="" 
//             className="filter invert w-40 h-40"
//             style={{ 
//               animation: 'bounce 3s infinite ease-in-out'
//             }}
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;
