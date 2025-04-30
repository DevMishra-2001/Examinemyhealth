// import React, { useEffect, useRef, useState } from "react";
// import { GoDotFill } from "react-icons/go";
// import { GoHorizontalRule } from "react-icons/go";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

// export const TrueFocus = ({
//   lines = ["Line 1", "Line 2", "Line 3"],
//   manualMode = false,
//   blurAmount = 5,
//   borderColor = "green",
//   glowColor = "rgba(0, 255, 0, 0.6)",
//   animationDuration = 2,
//   pauseBetweenAnimations = 1,
// }) => {
//   const [currentLineIndex, setCurrentLineIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const containerRef = useRef(null);
//   const lineRefs = useRef([]);
//   const [focusRect, setFocusRect] = useState({
//     x: 0,
//     y: 0,
//     width: 0,
//     height: 0,
//   });
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if mobile on mount and when window resizes
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Auto-cycle through lines if not in manual mode
//   useEffect(() => {
//     if (!manualMode) {
//       const interval = setInterval(() => {
//         setCurrentLineIndex((prev) => (prev + 1) % lines.length);
//       }, (animationDuration + pauseBetweenAnimations) * 1000);

//       return () => clearInterval(interval);
//     }
//   }, [
//     isHovering,
//     animationDuration,
//     pauseBetweenAnimations,
//     lines.length,
//     manualMode,
//   ]);

//   // Update focus rectangle dimensions when current line changes
//   useEffect(() => {
//     if (currentLineIndex === null || currentLineIndex === -1) return;
//     if (!lineRefs.current[currentLineIndex] || !containerRef.current) return;

//     const parentRect = containerRef.current.getBoundingClientRect();
//     const activeRect =
//       lineRefs.current[currentLineIndex].getBoundingClientRect();

//     setFocusRect({
//       x: activeRect.left - parentRect.left,
//       y: activeRect.top - parentRect.top,
//       width: activeRect.width,
//       height: activeRect.height,
//     });
//   }, [currentLineIndex, lines.length]);

//   const handleMouseEnter = (index) => {
//     setIsHovering(true);
//     setCurrentLineIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div
//       className="relative flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center w-full"
//       ref={containerRef}
//     >
//       {lines.map((line, index) => {
//         const isActive = index === currentLineIndex;
//         return (
//           <div
//             key={index}
//             ref={(el) => (lineRefs.current[index] = el)}
//             className="relative text-lg sm:text-xl md:text-2xl lg:text-4xl text-black font-semibold font-serif cursor-pointer text-center my-1 md:my-0"
//             style={{
//               filter: isActive
//                 ? `blur(0px)`
//                 : `blur(${isMobile ? blurAmount / 2 : blurAmount}px)`,
//               "--border-color": borderColor,
//               "--glow-color": glowColor,
//               transition: `filter ${animationDuration}s ease`,
//             }}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMouseEnter(index)}
//           >
//             {line}
//           </div>
//         );
//       })}

//       <motion.div
//         className="absolute top-0 left-0 pointer-events-none box-border border-0"
//         animate={{
//           x: focusRect.x,
//           y: focusRect.y,
//           width: focusRect.width,
//           height: focusRect.height,
//           opacity: currentLineIndex >= 0 ? 1 : 0,
//         }}
//         transition={{
//           duration: animationDuration / 2,
//         }}
//         style={{
//           "--border-color": borderColor,
//           "--glow-color": glowColor,
//         }}
//       >
//         <span
//           className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
//           style={{
//             borderColor: "var(--border-color)",
//             filter: "drop-shadow(0 0 4px var(--border-color))",
//           }}
//         />
//         <span
//           className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
//           style={{
//             borderColor: "var(--border-color)",
//             filter: "drop-shadow(0 0 4px var(--border-color))",
//           }}
//         />
//         <span
//           className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
//           style={{
//             borderColor: "var(--border-color)",
//             filter: "drop-shadow(0 0 4px var(--border-color))",
//           }}
//         />
//         <span
//           className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
//           style={{
//             borderColor: "var(--border-color)",
//             filter: "drop-shadow(0 0 4px var(--border-color))",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// const Steps = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });
  
//   return (
//     <>
//       <section className="pt-4 md:pt-8 lg:pt-12">
//         <div className="container mx-auto px-4 relative">
//           <div className="text-center mb-8 md:mb-12">
//             <motion.div 
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.7 }}
//               className="flex justify-center items-center text-center"
//             >
//               <GoDotFill className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
//               <GoHorizontalRule className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
//               <span className="text-sky-600 text-xs md:text-sm font-semibold uppercase tracking-wider ml-2">
//                 Our Steps
//               </span>
//             </motion.div>
//           </div>
//         </div>
//         <div
//           className="w-full bg-cover bg-center"
//           style={{ backgroundImage: "url(/Images/Bg/wood.webp)" }}
//         >
//           <div className="w-full p-4 md:p-6 lg:p-8">
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5, duration: 1.0 }}
//               className="bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-3 md:px-6 lg:px-8 py-6 md:py-8 mt-4 md:mt-6 lg:mt-10"
//               data-wow-delay=".1s"
//             >
//               <TrueFocus
//                 lines={[
//                   "Available Test",
//                   "Happy Customers",
//                   "Access Results",
//                   "Test Kit at Door Step",
//                 ]}
//                 manualMode={false}
//                 blurAmount={5}
//                 borderColor="#0284c7"
//                 glowColor="rgba(255, 0, 0, 0.6)"
//                 animationDuration={2}
//                 pauseBetweenAnimations={1}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Steps;


// import React from "react";
// import AnimatedElement from "../ui/AnimatedElement"; // Keep this as-is

// const processSteps = [
//   {
//     step: 1,
//     title: "Assessment & Planning",
//     description:
//       "We analyze your current workflows and systems to create a tailored implementation plan that addresses your specific challenges.",
//     animationType: "fade-right",
//     delay: 100,
//   },
//   {
//     step: 2,
//     title: "System Integration",
//     description:
//       "Our technical team seamlessly integrates InsScrub AI with your existing EHR and practice management systems.",
//     animationType: "fade-left",
//     delay: 200,
//   },
//   {
//     step: 3,
//     title: "Staff Training",
//     description:
//       "Comprehensive training sessions ensure your team can fully leverage all features of the InsScrub AI platform.",
//     animationType: "fade-right",
//     delay: 300,
//   },
//   {
//     step: 4,
//     title: "Go-Live & Support",
//     description:
//       "Our implementation team provides hands-on support during launch and monitors system performance to ensure a smooth transition.",
//     animationType: "fade-left",
//     delay: 400,
//   },
//   {
//     step: 5,
//     title: "Continuous Optimization",
//     description:
//       "Ongoing analysis and refinement to maximize the ROI of your InsScrub AI implementation as your practice evolves.",
//     animationType: "fade-right",
//     delay: 500,
//   },
// ];

// // Inline CirclePattern as a sub-component
// const CirclePattern = ({ className = "" }) => {
//   const combinedClass = `absolute opacity-20 ${className}`;
//   return (
//     <svg
//       className={combinedClass}
//       width="600"
//       height="600"
//       viewBox="0 0 600 600"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle
//         cx="300"
//         cy="300"
//         r="200"
//         stroke="currentColor"
//         strokeWidth="50"
//         strokeDasharray="20 20"
//       />
//       <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="30" />
//       <circle cx="300" cy="300" r="50" stroke="currentColor" strokeWidth="10" />
//     </svg>
//   );
// };

// function ProcessSection() {
//   return (
//     <section className="py-20 bg-gray-50 relative">
//       <CirclePattern className="top-0 left-0 text-[#E0EFFF]" />
//       <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
//         <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
//           <span className="inline-block px-3 py-1 rounded-full bg-[#E0EFFF] text-[#004299] text-sm font-medium mb-5">
//             How It Works
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Streamlined Implementation Process
//           </h2>
//           <p className="text-lg text-gray-600">
//             Our structured approach ensures a smooth transition to InsScrub AI
//             with minimal disruption to your operations.
//           </p>
//         </AnimatedElement>

//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {/* Vertical dotted line */}
//             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#BFDFFF] transform md:translate-x-[-0.5px]"></div>

//             {/* Timeline steps */}
//             <div className="space-y-12 md:space-y-24 relative">
//               {processSteps.map((step, index) => (
//                 <div
//                   key={step.step}
//                   className={`flex flex-col md:flex-row items-start ${
//                     index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
//                   }`}
//                 >
//                   <AnimatedElement
//                     className={`md:w-1/2 ${
//                       index % 2 === 0 ? "md:pl-12" : "md:pr-12"
//                     }`}
//                     animationType={step.animationType}
//                     delay={step.delay}
//                   >
//                     <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                     <p className="text-gray-600">{step.description}</p>
//                   </AnimatedElement>

//                   {/* Step Number Circle */}
//                   <AnimatedElement
//                     animationType="zoom-in"
//                     delay={step.delay}
//                     className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#0070F3] text-white shrink-0 md:mx-auto"
//                   >
//                     <span className="font-bold">{step.step}</span>
//                   </AnimatedElement>

//                   {/* Spacer column for alignment */}
//                   <div
//                     className={`md:w-1/2 ${
//                       index % 2 === 0 ? "md:pl-12" : "md:pr-12"
//                     } hidden md:block`}
//                   ></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProcessSection;


import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const processSteps = [
  {
    step: 1,
    title: "Assessment & Planning",
    description:
      "We analyze your current workflows and systems to create a tailored implementation plan that addresses your specific challenges.",
    animationType: "fade-right",
    delay: 100,
  },
  {
    step: 2,
    title: "System Integration",
    description:
      "Our technical team seamlessly integrates InsScrub AI with your existing EHR and practice management systems.",
    animationType: "fade-left",
    delay: 200,
  },
  {
    step: 3,
    title: "Staff Training",
    description:
      "Comprehensive training sessions ensure your team can fully leverage all features of the InsScrub AI platform.",
    animationType: "fade-right",
    delay: 300,
  },
  {
    step: 4,
    title: "Go-Live & Support",
    description:
      "Our implementation team provides hands-on support during launch and monitors system performance to ensure a smooth transition.",
    animationType: "fade-left",
    delay: 400,
  },
  {
    step: 5,
    title: "Continuous Optimization",
    description:
      "Ongoing analysis and refinement to maximize the ROI of your InsScrub AI implementation as your practice evolves.",
    animationType: "fade-right",
    delay: 500,
  },
];

// Inline CirclePattern as a sub-component
const CirclePattern = ({ className = "" }) => {
  const combinedClass = `absolute opacity-30 ${className}`;
  return (
    <svg
      className={combinedClass}
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="300"
        cy="300"
        r="200"
        stroke="currentColor"
        strokeWidth="50"
        strokeDasharray="20 20"
      />
      <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="30" />
      <circle cx="300" cy="300" r="50" stroke="currentColor" strokeWidth="10" />
    </svg>
  );
};

function ProcessSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-50 relative">
      <CirclePattern className="top-0 left-0 text-[#E0EFFF]" />
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div ref={ref} className="max-w-2xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-[#E0EFFF] text-[#004299] text-sm font-medium mb-5"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Streamlined Implementation Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg text-gray-600"
          >
            Our structured approach ensures a smooth transition to InsScrub AI
            with minimal disruption to your operations.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#BFDFFF] transform md:translate-x-[-0.5px]"></div>

            {/* Timeline steps */}
            <div className="space-y-12 md:space-y-24 relative">
              {processSteps.map((step, index) => {
                const { ref: stepRef, inView: stepInView } = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                });
                
                return (
                  <div
                    key={step.step}
                    ref={stepRef}
                    className={`flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                      animate={stepInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: step.delay / 1000, duration: 0.6 }}
                      className={`md:w-1/2 ${
                        index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>

                    {/* Step Number Circle */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={stepInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: (step.delay / 1000) + 0.2, duration: 0.5 }}
                      className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#0070F3] text-white shrink-0 md:mx-auto"
                    >
                      <span className="font-bold">{step.step}</span>
                    </motion.div>

                    {/* Spacer column for alignment */}
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                      } hidden md:block`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;