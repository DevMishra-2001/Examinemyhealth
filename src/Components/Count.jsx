// // import React from 'react'
// // import { useState, useEffect } from 'react';

// // const Count = () => {
// //     const [counts, setCounts] = useState({
// //         nurses: 0,
// //         customers: 0,
// //         years: 0,
// //         volunteers: 0
// //       });


// //     useEffect(() => {
// //         const duration = 2000; // 2 seconds for the count up
// //         const interval = 20; // Update every 20ms
// //         const steps = duration / interval;
        
// //         const targetValues = {
// //           nurses: 430,
// //           customers: 2710,
// //           years: 35,
// //           volunteers: 450
// //         };
        
// //         let currentStep = 0;
        
// //         const timer = setInterval(() => {
// //           currentStep += 1;
// //           const progress = currentStep / steps;
          
// //           if (currentStep <= steps) {
// //             setCounts({
// //               nurses: Math.round(targetValues.nurses * progress),
// //               customers: Math.round(targetValues.customers * progress),
// //               years: Math.round(targetValues.years * progress),
// //               volunteers: Math.round(targetValues.volunteers * progress)
// //             });
// //           } else {
// //             clearInterval(timer);
// //           }
// //         }, interval);
        
// //         return () => clearInterval(timer);
// //       }, []);


// //       const CounterItem = ({ number, text, delay }) => (
// //         <div className="md:w-1/2 lg:w-1/4 wow fadeIn" style={{ animationDelay: `${delay}ms` }}>
// //           <div className="counter-style1">
// //             <div className="counter-text">
// //               <span className="text-4xl font-bold mb-0">{number}</span>
// //             </div>
// //             <p className="text-sm tracking-wider mb-0">{text}</p>
// //           </div>
// //         </div>
// //       );
    
// //   return (
// //    <>
// //    <section className="relative bg-cover bg-center mx-4 lg:mx-8 xl:mx-10 rounded-lg" style={{ backgroundImage: "url(/Images/Texture.jpg)" }}>
// //       {/* <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div> */}
// //       <div className="w-full h-[300px]">
// //      <div class="flex flex-wrap justify-center gap-4 ">
// //     {/* <!-- Nurses Staff --> */}

// //     <div class="bg-white rounded-lg p-6 w-full sm:w-64 shadow-sm mt-15">
// //       <div class="flex flex-col items-start">
// //         <div class="bg-amber-100 rounded-lg p-3 mb-4">
// //           <span class="text-5xl font-bold text-teal-800" delay={200}>{counts.nurses}+</span>
// //         </div>
// //         <p class="text-gray-600 text-lg">Nurses Staff</p>
// //       </div>
// //     </div>

// //     {/* <!-- Happy Customers --> */}
// //     <div class="bg-white rounded-lg p-6 w-full sm:w-64 shadow-sm">
// //       <div class="flex flex-col items-start">
// //         <div class="bg-amber-100 rounded-lg p-3 mb-4">
// //           <span class="text-5xl font-bold text-teal-800" delay={400}>{counts.customers}+</span>
// //         </div>
// //         <p class="text-gray-600 text-lg">Happy Customers</p>
// //       </div>
// //     </div>
    
// //     {/* <!-- Years Experiences --> */}
// //     <div class="bg-white rounded-lg p-6 w-full sm:w-64 shadow-sm">
// //       <div class="flex flex-col items-start">
// //         <div class="bg-amber-100 rounded-lg p-3 mb-4">
// //           <span class="text-5xl font-bold text-teal-800" delay={600}>{counts.years}+</span>
// //         </div>
// //         <p class="text-gray-600 text-lg">Years Experiences</p>
// //       </div>
// //     </div>
    
// //     {/* <!-- Great Volunteers --> */}
// //     <div class="bg-white rounded-lg p-6 w-full sm:w-64 shadow-sm">
// //       <div class="flex flex-col items-start">
// //         <div class="bg-amber-100 rounded-lg p-3 mb-4">
// //           <span class="text-5xl font-bold text-teal-800" delay={800}>{counts.volunteers}+</span>
// //         </div>
// //         <p class="text-gray-600 text-lg">Great Volunteers</p>
// //       </div>
// //     </div>
    
// //   </div>
// // </div>
// //       {/* </div> */}
// //       <div className="curve-shapes relative">
// //         <img src="/img/bg/bg-07.png" className="absolute bottom-0 w-full" alt="..." />
// //         <img src="/img/bg/bg-02.png" className="absolute top-0 w-full" alt="..." />
// //       </div>
// //     </section>
// //    </>
// //   )
// // }

// // export default Count



// import React, { useState, useEffect } from 'react';
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

// const Count = () => {

//   const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//       });

//   const [counts, setCounts] = useState({
//     nurses: 0,
//     customers: 0,
//     years: 0,
//     volunteers: 0
//   });

//   useEffect(() => {
//     const duration = 2000;
//     const interval = 20;
//     const steps = duration / interval;

//     const targetValues = {
//       nurses: 430,
//       customers: 2710,
//       years: 35,
//       volunteers: 450
//     };

//     let currentStep = 0;

//     const timer = setInterval(() => {
//       currentStep += 1;
//       const progress = currentStep / steps;

//       if (currentStep <= steps) {
//         setCounts({
//           nurses: Math.round(targetValues.nurses * progress),
//           customers: Math.round(targetValues.customers * progress),
//           years: Math.round(targetValues.years * progress),
//           volunteers: Math.round(targetValues.volunteers * progress)
//         });
//       } else {
//         clearInterval(timer);
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, []);

//   const counters = [
//     { label: "Nurses Staff", value: counts.nurses, delay: 200 },
//     { label: "Happy Customers", value: counts.customers, delay: 400 },
//     { label: "Years Experience", value: counts.years, delay: 600 },
//     { label: "Great Volunteers", value: counts.volunteers, delay: 800 },
//   ];

//   return (
//     <section
//       className="relative bg-cover bg-center mx-4 lg:mx-8 xl:mx-10 rounded-lg"
//       style={{ backgroundImage: "url(/Images/Bg/sky.jpg)" }}
//     >
//       <div className="w-full h-[300px] flex flex-wrap justify-center items-center gap-6 py-10">
//         {counters.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg p-6 w-full sm:w-64 shadow-sm"
//             style={{ animationDelay: `${item.delay}ms` }}
//           >
//             <motion.div 
//              ref={ref}
//              initial={{ opacity: 0, x: -100 }}
//              animate={inView ? { opacity: 1, x: 0 } : {}}
//              transition={{ delay: 0.3, duration: 1.0 }}
//             className="flex flex-col items-start">
//               <div className="bg-amber-100 rounded-lg p-3 mb-4">
//                 <span className="text-5xl font-bold text-teal-800">
//                   {item.value}+
//                 </span>
//               </div>
//               <p className="text-gray-600 text-lg">{item.label}</p>
//             </motion.div>
//           </div>
//         ))}
//       </div>

//       {/* Decorative Images */}
//       <div className="curve-shapes relative">
//         <img src="/Images/Bg/bg-07.png" className="absolute bottom-0 w-full" alt="curve bottom" />
//         <img src="/Images/Bg/bg-02.png" className="absolute top-0 w-full" alt="curve top" />
//       </div>
//     </section>
//   );
// };

// export default Count;


import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const Count = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [counts, setCounts] = useState({
    nurses: 0,
    customers: 0,
    years: 0,
    volunteers: 0
  });

  // Only start counting when component is in view
  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    const targetValues = {
      nurses: 430,
      customers: 2710,
      years: 35,
      volunteers: 450
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;

      if (currentStep <= steps) {
        setCounts({
          nurses: Math.round(targetValues.nurses * progress),
          customers: Math.round(targetValues.customers * progress),
          years: Math.round(targetValues.years * progress),
          volunteers: Math.round(targetValues.volunteers * progress)
        });
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView]);

  const counters = [
    { label: "Nurses Staff", value: counts.nurses, delay: 0.2 },
    { label: "Happy Customers", value: counts.customers, delay: 0.4 },
    { label: "Years Experience", value: counts.years, delay: 0.6 },
    { label: "Great Volunteers", value: counts.volunteers, delay: 0.8 },
  ];

  return (
    <section
      className="relative bg-cover bg-center mx-4 sm:mx-6 lg:mx-8 xl:mx-12 my-8 rounded-lg overflow-hidden"
      style={{ backgroundImage: "url(/Images/Bg/sky.jpg)" }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full py-12 md:py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {counters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start">
                <div className="bg-yellow-100 rounded-lg p-3 mb-3 w-full">
                  <span className="text-4xl sm:text-5xl font-bold text-teal-800 block text-center">
                    {item.value}+
                  </span>
                </div>
                <p className="text-gray-700 text-base sm:text-lg font-medium">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 w-full">
        <img src="/Images/Bg/bg-07.png" className="w-full" alt="curve bottom" />
      </div>
      <div className="absolute top-0 w-full">
        <img src="/Images/Bg/bg-02.png" className="w-full" alt="curve top" />
      </div>
    </section>
  );
};

export default Count;
