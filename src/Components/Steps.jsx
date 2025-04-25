// import React, { useEffect, useRef, useState } from "react";
// // import { motion } from "framer-motion";
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
//   const [lastActiveLineIndex, setLastActiveLineIndex] = useState(null);
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
//    const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//       });
//   return (
//     <>
//       <section className="pt-4 md:pt-8 lg:pt-12">
//         <div className="container mx-auto px-4 relative">
//           <div className="text-center mb-12 animate-fadeIn">
//             <motion.div 
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.7 }}
//             className="flex justify-center items-center text-center">
//               <GoDotFill className="w-4 h-4 text-yellow-500" />
//               <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
//               <span className="text-sky-600 text-sm font-semibold uppercase tracking-wider ml-2">
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
//             ref={ref}
//             initial={{ opacity: 0, x: 100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.5, duration: 1.0 }}
//               className="wow fadeInUp bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-3 md:px-6 lg:px-8 py-6 md:py-8 mt-6 md:mt-10"
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



import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

export const TrueFocus = ({
  lines = ["Line 1", "Line 2", "Line 3"],
  manualMode = false,
  blurAmount = 5,
  borderColor = "green",
  glowColor = "rgba(0, 255, 0, 0.6)",
  animationDuration = 2,
  pauseBetweenAnimations = 1,
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-cycle through lines if not in manual mode
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [
    isHovering,
    animationDuration,
    pauseBetweenAnimations,
    lines.length,
    manualMode,
  ]);

  // Update focus rectangle dimensions when current line changes
  useEffect(() => {
    if (currentLineIndex === null || currentLineIndex === -1) return;
    if (!lineRefs.current[currentLineIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect =
      lineRefs.current[currentLineIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentLineIndex, lines.length]);

  const handleMouseEnter = (index) => {
    setIsHovering(true);
    setCurrentLineIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center w-full"
      ref={containerRef}
    >
      {lines.map((line, index) => {
        const isActive = index === currentLineIndex;
        return (
          <div
            key={index}
            ref={(el) => (lineRefs.current[index] = el)}
            className="relative text-lg sm:text-xl md:text-2xl lg:text-4xl text-black font-semibold font-serif cursor-pointer text-center my-1 md:my-0"
            style={{
              filter: isActive
                ? `blur(0px)`
                : `blur(${isMobile ? blurAmount / 2 : blurAmount}px)`,
              "--border-color": borderColor,
              "--glow-color": glowColor,
              transition: `filter ${animationDuration}s ease`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseEnter(index)}
          >
            {line}
          </div>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentLineIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: animationDuration / 2,
        }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        }}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        />
      </motion.div>
    </div>
  );
};

const Steps = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <>
      <section className="pt-4 md:pt-8 lg:pt-12">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 md:mb-12">
            <motion.div 
              ref={ref}
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex justify-center items-center text-center"
            >
              <GoDotFill className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
              <GoHorizontalRule className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
              <span className="text-sky-600 text-xs md:text-sm font-semibold uppercase tracking-wider ml-2">
                Our Steps
              </span>
            </motion.div>
          </div>
        </div>
        <div
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/Images/Bg/wood.webp)" }}
        >
          <div className="w-full p-4 md:p-6 lg:p-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 1.0 }}
              className="bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-3 md:px-6 lg:px-8 py-6 md:py-8 mt-4 md:mt-6 lg:mt-10"
              data-wow-delay=".1s"
            >
              <TrueFocus
                lines={[
                  "Available Test",
                  "Happy Customers",
                  "Access Results",
                  "Test Kit at Door Step",
                ]}
                manualMode={false}
                blurAmount={5}
                borderColor="#0284c7"
                glowColor="rgba(255, 0, 0, 0.6)"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;