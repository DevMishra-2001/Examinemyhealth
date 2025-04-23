// import React, { useState, useEffect, useRef } from 'react'

// const Test = () => {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const totalSlides = 6;
//     const services = [
//         {
//           id: 1,
//           title: "Physical Care",
//           description: "Lovecare describes older human beings stay conveniently and independently.",
//           image: "/Images/Test/D1.webp",
//           icon: "/Images/Test/icon-01.png",
//           link: "physical-care.html"
//         },
//         {
//           id: 2,
//           title: "Medical Care",
//           description: "Lovecare describes older human beings stay conveniently and independently.",
//           image: "/Images/Test/D2.avif",
//           icon: "/Images/Test/icon-01.png",
//           link: "medical-care.html"
//         },
//         {
//           id: 3,
//           title: "Personal Care",
//           description: "Lovecare describes older human beings stay conveniently and independently.",
//           image: "/Images/Test/D3.avif",
//           icon: "/Images/Test/icon-03.png",
//           link: "personal-care.html"
//         },
//         {
//           id: 4,
//           title: "Eldery Nutrition",
//           description: "Lovecare describes older human beings stay conveniently and independently.",
//           image: "/Images/Test/D1.webp",
//           icon: "/Images/Test/icon-04.png",
//           link: "eldery-nutrition.html"
//         },
//         {
//           id: 5,
//           title: "Assisted Living",
//           description: "Lovecare describes older human beings stay conveniently and independently.",
//           image: "/Images/Test/D2.avif",
//           icon: "/Images/Test/icon-05.png",
//           link: "assisted-living.html"
//         },
//         {
//           id: 6,
//           title: "Residential Care",
//           description: "Lovecare describes older human beings stay conveniently and independently.",
//           image: "/Images/Test/D3.avif",
//           icon: "/Images/Test/icon-06.png",
//           link: "residential-care.html"
//         }
//       ];

//       // Auto-scroll functionality
//       useEffect(() => {
//         const interval = setInterval(() => {
//           setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//         }, 5000);

//         return () => clearInterval(interval);
//       }, []);

//       const goToSlide = (index) => {
//         setActiveSlide(index);
//       };

//       const nextSlide = () => {
//         setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//       };

//       const prevSlide = () => {
//         setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//       };

//       // Calculate which slides to show for mobile/tablet/desktop
//       const visibleSlides = () => {
//         // In a real implementation this would use window.innerWidth or a hook
//         // to determine responsive behavior, but for simplicity:
//         const slidesToShow = 3; // Show 3 slides on desktop

//         const start = activeSlide;
//         const slides = [];

//         for (let i = 0; i < slidesToShow; i++) {
//           const index = (start + i) % totalSlides;
//           slides.push(services[index]);
//         }
//         return slides;
//       };
//   return (
//     <>
//     <section className="relative py-16 bg-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12 animate-fadeIn" style={{ animationDelay: '100ms' }}>
//           <span className="text-blue-600 font-medium mb-2 block">What We Do</span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto ">
//             <span className="flex items-center justify-center text-center">We Take Care Our Senior Not Only For Money</span>
//           </h2>
//         </div>

//         <div className="relative animate-fadeIn" style={{ animationDelay: '200ms' }}>
//           {/* Carousel container */}
//           <div className="flex overflow-hidden">
//             <div className="flex transition-transform duration-300"
//                  style={{ transform: `translateX(-${activeSlide * (100 / visibleSlides().length)}%)` }}>

//               {visibleSlides().map((service) => (
//                 <div key={service.id} className="w-full md:w-1/3 px-2 md:px-3 flex-shrink-0">
//                   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                     <div className="relative">
//                       <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
//                     </div>
//                     <div className="p-6 text-center">
//                       <div className="flex justify-center mb-4">
//                         <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mx-auto">
//                           <img src={service.icon} alt={service.title} className="w-8 h-8" />
//                         </div>
//                       </div>
//                       <h3 className="text-xl font-semibold mb-3">
//                         <a href={service.link} className="text-gray-900 hover:text-blue-600 transition-colors">
//                           {service.title}
//                         </a>
//                       </h3>
//                       <p className="text-gray-600 mb-3 mx-auto">{service.description}</p>
//                       <a href={service.link} className="text-blue-600 font-medium hover:text-blue-800 inline-block">Read More</a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
//           >
//             <span className="sr-only">Previous</span>
//             <span className="text-2xl">‹</span>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100"
//           >
//             <span className="sr-only">Next</span>
//             <span className="text-2xl">›</span>
//           </button>
//         </div>

//         {/* Dots navigation */}
//         <div className="flex justify-center mt-6">
//           {services.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`mx-1 w-3 h-3 rounded-full ${activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
//             >
//               <span className="sr-only">Go to slide {index + 1}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Decorative shapes */}
//       <div className="hidden sm:block absolute right-0 bottom-0 transform animate-slowBounce">
//         <img src="/Images/Test/shape-03.png" alt="Decorative shape" className="w-32" />
//       </div>
//       <div className="hidden sm:block absolute left-0 top-0">
//         <img src="/Images/Test/shape-04.png" alt="Decorative shape" className="w-32" />
//       </div>
//     </section>
//     </>
//   )
// }

// export default Test

import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";


const Test = () => {

  const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

  const [activeSet, setActiveSet] = useState(0); // 0 for first set, 1 for second set
  const [isAnimating, setIsAnimating] = useState(false);
  const services = [
    {
      id: 1,
      title: "Physical Care",
      description:
        "Lovecare describes older human beings stay conveniently and independently.",
      image: "/Images/Test/D1.webp",
      icon: "/Images/Test/icon-01.png",
      link: "physical-care.html",
    },
    {
      id: 2,
      title: "Medical Care",
      description:
        "Lovecare describes older human beings stay conveniently and independently.",
      image: "/Images/Test/D2.avif",
      icon: "/Images/Test/icon-01.png",
      link: "medical-care.html",
    },
    {
      id: 3,
      title: "Personal Care",
      description:
        "Lovecare describes older human beings stay conveniently and independently.",
      image: "/Images/Test/D1.webp",
      icon: "/Images/Test/icon-03.png",
      link: "personal-care.html",
    },
    {
      id: 4,
      title: "Eldery Nutrition",
      description:
        "Lovecare describes older human beings stay conveniently and independently.",
      image: "/Images/Test/D2.avif",
      icon: "/Images/Test/icon-04.png",
      link: "eldery-nutrition.html",
    },
    {
      id: 5,
      title: "Assisted Living",
      description:
        "Lovecare describes older human beings stay conveniently and independently.",
      image: "/Images/Test/D1.webp",
      icon: "/Images/Test/icon-05.png",
      link: "assisted-living.html",
    },
    {
      id: 6,
      title: "Residential Care",
      description:
        "Lovecare describes older human beings stay conveniently and independently.",
      image: "/Images/Test/D2.avif",
      icon: "/Images/Test/icon-06.png",
      link: "residential-care.html",
    },
  ];

  // Group the services into two sets of three
  const firstSet = services.slice(0, 3); // First 3 services
  const secondSet = services.slice(3, 6); // Last 3 services

  // Get the current set of services to display
  const currentServices = activeSet === 0 ? firstSet : secondSet;

  // Handle dot navigation
  // const handleDotClick = (index) => {
  //     setActiveSet(index);
  // };

  const handleDotClick = (index) => {
    if (index === activeSet || isAnimating) return;

    setIsAnimating(true);

    // Animate fade out, then switch set
    setTimeout(() => {
      setActiveSet(index);
      setIsAnimating(false);
    }, 300); // match this to fade out duration
  };

  return (
    <>
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12 animate-fadeIn"
            style={{ animationDelay: "100ms" }}
          >
            <motion.div 
             ref={ref}
             initial={{ opacity: 0, x: -100 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center text-center items-center">
              <GoDotFill className="w-4 h-4 text-yellow-500" />
              <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
              <span 
              className="text-sky-600 font-medium mb-2 block ml-2">
                What We Do
              </span>
            </motion.div>
            <motion.h2 
             ref={ref}
             initial={{ opacity: 0, x: -100 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl mx-auto ">
              <span className="flex items-center justify-center text-center">
                We Take Care Our Senior Not Only For Money
              </span>
            </motion.h2>
          </div>

          <div
            className={`relative transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Carousel container */}
            <div className="flex overflow-hidden">
              <div className="flex">
                {currentServices.map((service) => (
                  <div
                    key={service.id}
                    className="w-full md:w-1/3 px-2 md:px-3 flex-shrink-0"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <motion.div 
                       ref={ref}
                       initial={{ opacity: 0, x: -100 }}
                       animate={inView ? { opacity: 1, x: 0 } : {}}
                       transition={{ delay: 0.5, duration: 0.7 }}
                      className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-56 object-cover rounded-b-full rounded-t-2xl"
                        />
                      </motion.div>
                      <div className=" p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <motion.div 
                           ref={ref}
                           initial={{ opacity: 0, y: 100 }}
                           animate={inView ? { opacity: 1, y: 0 } : {}}
                           transition={{ delay: 0.6, duration: 0.8 }}
                          className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 mx-auto">
                            <img
                              src={service.icon}
                              alt={service.title}
                              className="w-8 h-8"
                            />
                          </motion.div>
                        </div>
                        <motion.h3 
                         ref={ref}
                         initial={{ opacity: 0, x: -100 }}
                         animate={inView ? { opacity: 1, x: 0 } : {}}
                         transition={{ delay: 0.7, duration: 0.9 }}
                        className="text-xl font-semibold mb-3">
                          <a
                            href={service.link}
                            className="text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {service.title}
                          </a>
                        </motion.h3>
                        <motion.p 
                         ref={ref}
                         initial={{ opacity: 0, y: -100 }}
                         animate={inView ? { opacity: 1, y: 0 } : {}}
                         transition={{ delay: 0.8, duration: 1.0 }}
                        className="text-gray-600 mb-3 mx-auto">
                          {service.description}
                        </motion.p>
                        <a
                          href={service.link}
                          className="text-blue-600 font-medium hover:text-blue-800 inline-block"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots navigation - Only 2 dots */}
          <div className="flex justify-center mt-6">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  activeSet === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span className="sr-only">Go to slide set {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Decorative shapes */}
        <div className="hidden sm:block absolute right-10 bottom-0 animate-slowBounce -z-1">
          <img
            src="/Images/Test/shape-03.png"
            alt="Decorative shape"
            className="w-64"
          />
        </div>
        <div className="hidden sm:block absolute mt-9 left-0 top-0 transform animate-slowBounce">
          <img
            src="/Images/Test/shape-04.png"
            alt="Decorative shape"
            className="w-32"
          />
        </div>
      </section>
    </>
  );
};

export default Test;
