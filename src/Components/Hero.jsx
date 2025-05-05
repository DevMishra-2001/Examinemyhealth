// // import React, { useState, useEffect } from "react";
// // import { GoDotFill } from "react-icons/go";
// // import { GoHorizontalRule } from "react-icons/go";

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [showTitle, setShowTitle] = useState(false);
// //   const [showDescription, setShowDescription] = useState(false);
// //   const [showButtons, setShowButtons] = useState(false);

// //   const slides = [
// //     {
// //       id: 1,
// //       title: "We Provide Total Health Care Solutions!",
// //       description:
// //         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
// //       backgroundImage: "/Images/Hero/image1.jpg",
// //     },
// //     {
// //       id: 2,
// //       title: "Our Goal is to Make your Life Better",
// //       description:
// //         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
// //       backgroundImage: "/Images/Hero/image2.jpg",
// //     },
// //     {
// //       id: 3,
// //       title: "We Give You The Place to Spent Your Life",
// //       description:
// //         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
// //       backgroundImage: "/Images/Hero/image3.jpg",
// //     },
// //   ];

// //   // Auto slide every 5s
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [currentSlide]);

// //   // Handle staggered animations
// //   useEffect(() => {
// //     // Reset all
// //     setShowTitle(false);
// //     setShowDescription(false);
// //     setShowButtons(false);

// //     const titleTimer = setTimeout(() => setShowTitle(true), 600);
// //     const descTimer = setTimeout(() => setShowDescription(true), 1400);
// //     const btnTimer = setTimeout(() => setShowButtons(true), 2200);

// //     return () => {
// //       clearTimeout(titleTimer);
// //       clearTimeout(descTimer);
// //       clearTimeout(btnTimer);
// //     };
// //   }, [currentSlide]);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
// //   };

// //   const goToSlide = (index) => {
// //     setCurrentSlide(index);
// //   };

// //   return (
// //     <section className="relative w-full">
// //       <div
// //         className="px-4 md:px-8 min-h-[480px] h-screen max-h-[90vh]"
// //         style={{
// //           backgroundImage: "url(/Images/Bg/sky.jpg)",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         {/* Slider container */}
// //         <div className="relative w-full overflow-hidden min-h-screen">
// //           {slides.map((slide, index) => (
// //             <div
// //               key={slide.id}
// //               className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500  ${
// //                 currentSlide === index ? "opacity-100" : "opacity-0"
// //               }`}
// //               style={{
// //                 backgroundImage: `url(${slide.backgroundImage})`,
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //               }}
// //             >
// //               {/* Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-bl from-white via-blue-500 to-[#1d1dee] opacity-60" />

// //               {/* Content */}
// //               <div className="relative z-10 h-full">
// //                 <div className="container mx-auto px-4 h-full">
// //                   <div className="flex items-center justify-start h-full">
// //                     <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-7/12 text-black">
// //                       {/* Subtitle (Static or always visible if needed) */}
// //                       <div
// //                         className={`mb-2 md:mb-4 transform ${
// //                           showTitle
// //                             ? "animate-slide-in-left translate-x-0 opacity-100"
// //                             : "translate-x-8 opacity-0"
// //                         } transition-all duration-700`}
// //                       >
// //                         <div className="flex items-center">
// //                           <GoDotFill className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
// //                           <GoHorizontalRule className="w-6 h-6 md:w-10 md:h-10 text-yellow-500" />
// //                           <span className="text-base sm:text-lg md:text-xl text-white ml-2 font-serif">
// //                             Welcome to Senior Lovecare
// //                           </span>
// //                         </div>
// //                       </div>

// //                       {/* Title */}
// //                       <h1
// //                         className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-family font-bold mb-2 md:mb-4 text-white transform ${
// //                           showTitle
// //                             ? "animate-slide-in-right translate-x-0 opacity-100"
// //                             : "translate-x-8 opacity-0"
// //                         } transition-all duration-700`}
// //                       >
// //                         {slide.title}
// //                       </h1>


// //                       {/* Description */}
// //                       <p
// //                       key={slide.id}
// //                         className={`mb-4 md:mb-6 text-sm sm:text-base md:text-lg text-white font-title transform ${
// //                           showDescription
// //                             ? "animate-slide-in-right translate-x-0 opacity-100"
// //                             : "translate-x-8 opacity-0"
// //                         } transition-all duration-700`}
// //                       >
// //                         {slide.description}
// //                       </p>

// //                       {/* Buttons */}
// //                       <div
// //                         className={`flex flex-wrap transform ${
// //                           showButtons
// //                             ? "animate-slide-in-right translate-x-0 opacity-100"
// //                             : "translate-x-8 opacity-0"
// //                         } transition-all duration-700`}
// //                       >
// //                         <a
// //                           href="#"
// //                           className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base bg-transparent border-2 border-white text-white font-medium font-title rounded mr-2 sm:mr-4 mb-2 hover:bg-white hover:text-blue-900 transition"
// //                         >
// //                           Read More
// //                         </a>
// //                         <a
// //                           href="#"
// //                           className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base bg-transparent border-2 border-white text-white font-medium font-title rounded mb-2 hover:bg-white hover:text-blue-900 transition"
// //                         >
// //                           Contact Us
// //                         </a>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //           {/* Dots */}
// //           <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 z-20">
// //             {slides.map((_, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => goToSlide(index)}
// //                 className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
// //                   currentSlide === index
// //                     ? "bg-white"
// //                     : "bg-white bg-opacity-50"
// //                 }`}
// //                 aria-label={`Go to slide ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;




// import React, { useState, useEffect } from "react";
// import { GoDotFill } from "react-icons/go";
// import { GoHorizontalRule } from "react-icons/go";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showTitle, setShowTitle] = useState(false);
//   const [showDescription, setShowDescription] = useState(false);
//   const [showButtons, setShowButtons] = useState(false);

//   const slides = [
//     {
//       id: 1,
//       title: "We Provide Total Health Care Solutions!",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image.jpg",
//     },
//     {
//       id: 2,
//       title: "Our Goal is to Make your Life Better",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image5.jpg",
//     },
//     {
//       id: 3,
//       title: "We Give You The Place to Spent Your Life",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image6.jpg",
//     },
//   ];

//   // Auto slide every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   // Handle staggered animations
//   useEffect(() => {
//     // Reset all
//     setShowTitle(false);
//     setShowDescription(false);
//     setShowButtons(false);

//     const titleTimer = setTimeout(() => setShowTitle(true), 1800);
//     const descTimer = setTimeout(() => setShowDescription(true), 2400);
//     const btnTimer = setTimeout(() => setShowButtons(true), 3000);

//     return () => {
//       clearTimeout(titleTimer);
//       clearTimeout(descTimer);
//       clearTimeout(btnTimer);
//     };
//   }, [currentSlide]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // The welcome text for letter animation
//   const welcomeText = "Welcome to Senior Lovecare";

//   return (
//     <section className="relative w-full">
//       <div
//         className="px-8 md:px-12 min-h-[480px] h-screen max-h-[90vh]"
//         style={{
//           backgroundImage: "url(/Images/Bg/sky.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Slider container */}
//         <div className="relative w-full overflow-hidden min-h-screen">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500  ${
//                 currentSlide === index ? "opacity-100" : "opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url(${slide.backgroundImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-blue-400 opacity-60" />

//               {/* Content */}
//               <div className="relative z-10 h-full">
//                 <div className="container mx-auto px-4 h-full">
//                   <div className="flex items-center justify-start h-full">
//                     <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-7/12 text-black">
//                       {/* Subtitle with letter animation */}
//                       <div
//                         className={`mb-2 md:mb-4 transform ${
//                           showTitle
//                             ? "translate-x-0 opacity-100"
//                             : "translate-x-8 opacity-0"
//                         } transition-all duration-700`}
//                       >
//                         <div className="flex items-center">
//                           <div className={`transition-all duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
//                             <GoDotFill className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
//                           </div>
//                           <div className={`transition-all duration-700 delay-100 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
//                             <GoHorizontalRule className="w-6 h-6 md:w-10 md:h-10 text-yellow-500" />
//                           </div>
                          
//                           {/* Letter animation for welcome text */}
//                           <div className="ml-2 flex overflow-hidden">
//                             {welcomeText.split('').map((letter, idx) => (
//                               <span 
//                                 key={idx}
//                                 className={`text-base sm:text-lg md:text-xl text-white font-serif transform transition-all duration-300 ${
//                                   showTitle 
//                                     ? 'translate-y-0 opacity-100' 
//                                     : 'translate-y-8 opacity-0'
//                                 }`}
//                                 style={{ 
//                                   transitionDelay: `${300 + (idx * 50)}ms`,
//                                   display: letter === ' ' ? 'inline-block' : 'inline',
//                                   width: letter === ' ' ? '0.4em' : 'auto'
//                                 }}
//                               >
//                                 {letter}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Title */}
//                       <h1
//                         className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-family font-bold mb-2 md:mb-4 text-white transform ${
//                           showTitle
//                             ? "animate-slide-in-right translate-x-0 opacity-100"
//                             : "translate-x-8 opacity-0"
//                         } transition-all duration-700`}
//                       >
//                         {slide.title}
//                       </h1>

//                       {/* Description */}
//                       <p
//                         key={slide.id}
//                         className={`mb-4 md:mb-6 text-sm sm:text-base md:text-lg text-white font-title transform ${
//                           showDescription
//                             ? "animate-slide-in-right translate-x-0 opacity-100"
//                             : "translate-x-8 opacity-0"
//                         } transition-all duration-700`}
//                       >
//                         {slide.description}
//                       </p>

//                       {/* Buttons */}
//                       <div
//                         className={`flex flex-wrap transform ${
//                           showButtons
//                             ? "animate-slide-in-right translate-x-0 opacity-100"
//                             : "translate-x-8 opacity-0"
//                         } transition-all duration-700`}
//                       >
//                         <a
//                           href="#"
//                           className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base bg-transparent border-2 border-white text-white font-medium font-title rounded mr-2 sm:mr-4 mb-2 hover:bg-orange-300 hover:text-blue-900  transition-all"
//                         >
//                           Read More
//                         </a>
//                         <a
//                           href="#"
//                           className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base bg-transparent border-2 border-white text-white font-medium font-title rounded mb-2 hover:bg-orange-300 hover:text-blue-900 transition-all"
//                         >
//                           Contact Us
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Dots */}
//           <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 z-20">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
//                   currentSlide === index
//                     ? "bg-white"
//                     : "bg-white bg-opacity-50"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const slides = [
    {
      id: 1,
      title: "We Provide Total Health Care Solutions!",
      description:
        "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
      backgroundImage: "/Images/Hero/image.jpg",
    },
    {
      id: 2,
      title: "Our Goal is to Make your Life Better",
      description:
        "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
      backgroundImage: "/Images/Hero/image5.jpg",
    },
    {
      id: 3,
      title: "We Give You The Place to Spent Your Life",
      description:
        "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
      backgroundImage: "/Images/Hero/image6.jpg",
    },
  ];

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle staggered animations
  useEffect(() => {
    // Reset all
    setShowTitle(false);
    setShowDescription(false);
    setShowButtons(false);

    const titleTimer = setTimeout(() => setShowTitle(true), 1800);
    const descTimer = setTimeout(() => setShowDescription(true), 2400);
    const btnTimer = setTimeout(() => setShowButtons(true), 3000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(descTimer);
      clearTimeout(btnTimer);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // The welcome text for letter animation
  const welcomeText = "Welcome to Senior Lovecare";

  return (
    <section className="relative w-full">
      <div
        className="px-8 md:px-12 min-h-[480px] h-screen max-h-[90vh]"
        style={{
          backgroundImage: "url(/Images/Bg/sky.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Slider container */}
        <div className="relative w-full overflow-hidden min-h-screen">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500  ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-400 opacity-60" />

              {/* Content */}
              <div className="relative z-10 h-full">
                <div className="container mx-auto px-4 h-full">
                  <div className="flex items-center justify-start h-full">
                    <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-7/12 text-black">
                      {/* Subtitle with letter animation */}
                      <div
                        className={`mb-2 md:mb-4 transform ${
                          showTitle
                            ? "translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        } transition-all duration-700`}
                      >
                        <div className="flex items-center">
                          <div className={`transition-all duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                            <GoDotFill className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />
                          </div>
                          <div className={`transition-all duration-700 delay-100 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                            <GoHorizontalRule className="w-6 h-6 md:w-10 md:h-10 text-yellow-500" />
                          </div>
                          
                          {/* Letter animation for welcome text */}
                          <div className="ml-2 flex overflow-hidden">
                            {welcomeText.split('').map((letter, idx) => (
                              <span 
                                key={idx}
                                className={`text-base sm:text-lg md:text-xl text-white font-serif transform transition-all duration-300 ${
                                  showTitle 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-8 opacity-0'
                                }`}
                                style={{ 
                                  transitionDelay: `${300 + (idx * 50)}ms`,
                                  display: letter === ' ' ? 'inline-block' : 'inline',
                                  width: letter === ' ' ? '0.4em' : 'auto'
                                }}
                              >
                                {letter}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h1
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-family font-bold mb-2 md:mb-4 text-white transform ${
                          showTitle
                            ? "animate-slide-in-right translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        } transition-all duration-700`}
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        key={slide.id}
                        className={`mb-4 md:mb-6 text-sm sm:text-base md:text-lg text-white font-title transform ${
                          showDescription
                            ? "animate-slide-in-right translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        } transition-all duration-700`}
                      >
                        {slide.description}
                      </p>

                      {/* Buttons */}
                      <div
                        className={`flex flex-wrap transform ${
                          showButtons
                            ? "animate-slide-in-right translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        } transition-all duration-700`}
                      >
                        <a
                          href="#"
                          className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base bg-blue-800 text-white font-medium font-title rounded-xl mr-2 sm:mr-4 mb-2 hover:bg-yellow-50 hover:text-blue-500  transition-all"
                        >
                          Read More
                        </a>
                        <a
                          href="#"
                          className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm md:text-base bg-blue-800 text-white font-medium font-title rounded-xl mb-2 hover:bg-yellow-50 hover:text-blue-500 transition-all"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Numbered Slide Indicators - Right Side */}
          <div className="absolute right-4 md:right-8 bottom-8 transform flex flex-row space-x-6 md:space-x-8 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl text-3xl border border-white text-white font-bold font-family transition-all ${
                  currentSlide === index
                    ? "bg-blue-800 text-white scale-110"
                    : "bg-transparent hover:bg-white hover:bg-opacity-30"
                }`}
                aria-label={`Go to slide  ${index + 1}`}
              >
                <p className="font-family ml-5  font-bold">0</p>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;