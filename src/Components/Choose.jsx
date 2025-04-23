import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const Choose = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="py-0 mx-3">
        <div className="container-fluid px-0">
          <div className="flex flex-col lg:flex-row">
            <div
              className="relative lg:w-1/2 py-6 lg:py-8 xl:py-10 2xl:py-16 px-4 2xl:px-9 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url(/Images/Bg/sky.jpg)",
                backgroundBlendMode: "overlay",
                //   backgroundColor: "rgba(255, 255, 255, 0.85)"
              }}
            >
              <div className="w-full lg:w-4/5 mx-auto relative z-10">
                <motion.div 
                 ref={ref}
                 initial={{ opacity: 0, x: -100 }}
                 animate={inView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center text-center">
                  <GoDotFill className="w-4 h-4 text-yellow-500" />
                  <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
                  <span className="text-blue-600 font-medium ml-2">
                    Why Choose Us
                  </span>
                </motion.div>
                <motion.h2 
                 ref={ref}
                 initial={{ opacity: 0, x: -100 }}
                 animate={inView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.5, duration: 0.7 }}
                className="text-3xl lg:text-4xl font-bold mb-4">
                  We Believe Everyone Deserves a Quality Care
                </motion.h2>
                <motion.p 
                 ref={ref}
                 initial={{ opacity: 0, x: -100 }}
                 animate={inView ? { opacity: 1, x: 0 } : {}}
                 transition={{ delay: 0.7, duration: 0.9 }}
                className="mb-8 lg:w-95">
                  Aging in place can be a possible alternative in case you
                  handiest want minor help together along with your day by day
                  activities, revel in a near community of own circle of
                  relatives and friends nearby, and might make use of the proper
                  home care services to cover your needs.
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center mb-10">
                  <div className="flex-shrink-0">
                    <motion.div 
                     ref={ref}
                     initial={{ opacity: 0, x: -100 }}
                     animate={inView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: 0.8, duration: 1.0 }}
                    className="bg-white p-4 rounded-full shadow-md mb-3 sm:mb-0">
                      <img
                        src="/Images/Choose/icon-07.png"
                        alt="Daily Heart Checkup"
                        className="w-12 h-12"
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                   ref={ref}
                   initial={{ opacity: 0, x: -100 }}
                   animate={inView ? { opacity: 1, x: 0 } : {}}
                   transition={{ delay: 0.9, duration: 1.1 }}
                  className="flex-grow sm:ml-4">
                    <h4 className="text-xl font-semibold w-4/5">
                      Daily Heart Checkup
                    </h4>
                    <p className="mb-0 w-11/12">
                      A wellknown decline in fitness is frequently the impetus
                      for the creation of elder care.
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex-shrink-0">
                    <motion.div 
                     ref={ref}
                     initial={{ opacity: 0, x: -100 }}
                     animate={inView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: 1.0, duration: 1.2 }}
                    className="bg-white p-4 rounded-full shadow-md mb-3 sm:mb-0">
                      <img
                        src="/Images/Choose/icon-08.png"
                        alt="Timely Food & Medicine"
                        className="w-12 h-12"
                      />
                    </motion.div>
                  </div>
                  <motion.div 
                   ref={ref}
                   initial={{ opacity: 0, x: -100 }}
                   animate={inView ? { opacity: 1, x: 0 } : {}}
                   transition={{ delay: 1.1, duration: 1.3 }}
                  className="flex-grow sm:ml-4">
                    <h4 className="text-xl font-semibold w-4/5">
                      Timely Food & Medicine
                    </h4>
                    <p className="mb-0 w-11/12">
                      A wellknown decline in fitness is frequently the impetus
                      for the creation of elder care.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full">
                <img
                  src="/Images/Bg/bg-07.png"
                  className="w-full"
                  alt="Bottom curve shape"
                />
              </div>
              <div className="absolute top-0 right-0">
                <img
                  src="/Images/Bg/bg-02.png"
                  className="w-32"
                  alt="Top curve shape"
                />
              </div>
            </div>

            <motion.div
             ref={ref}
             initial={{ opacity: 0, x: -100 , y: 0 }}
             animate={inView ? { opacity: 1, x: -40 , y: 40 } : {}}
             transition={{ delay: 1.3, duration: 1.5 }}
              className="relative lg:w-1/2 bg-cover bg-center min-h-96 -translate-x-12 translate-y-12"
              style={{ backgroundImage: "url(/Images/Choose/bg-08.jpg)" }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                {/* <a href="https://www.youtube.com/watch?v=eZFFGQHienY" target="_blank" rel="noopener noreferrer"> */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* </a> */}
              </div>
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                  <div className="relative w-full max-w-2xl mx-auto">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                    >
                      &times;
                    </button>
                    <div className="aspect-[77/40]">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/eZFFGQHienY?autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
