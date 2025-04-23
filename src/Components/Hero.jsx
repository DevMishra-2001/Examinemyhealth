// import React, { useState, useEffect } from "react";
// import About from "./About";
// import Count from "./Count";
// import Test from "./Test";
// import Choose from "./Choose";
// import Testimonials from "./Testimonials";
// import Feedback from "./Feedback";
// import Contact from "./Contact";
// import Steps from "./Steps";
// import Footer from "./Footer";
// import { GoDotFill } from "react-icons/go";
// import { GoHorizontalRule } from "react-icons/go";
// import Cards from "./Cards";
// import Navbar from "./Navbar";

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
//       backgroundImage: "/Images/Hero/image1.jpg",
//     },
//     {
//       id: 2,
//       title: "Our Goal is to Make your Life Better",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image2.jpg",
//     },
//     {
//       id: 3,
//       title: "We Give You The Place to Spent Your Life",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image3.jpg",
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

//     const titleTimer = setTimeout(() => setShowTitle(true), 200);
//     const descTimer = setTimeout(() => setShowDescription(true), 500);
//     const btnTimer = setTimeout(() => setShowButtons(true), 800);

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

//   return (
//     <section className="relative w-full">
//       <Navbar />
//       <div
//         className="px-8 h-[480px]"
//         style={{
//           backgroundImage: "url(/Images/Bg/sky.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="w-full overflow-hidden">
//           {/* Slider container */}
//           <div className="relative w-full overflow-hidden h-96 md:h-screen md:max-h-[600px]">
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//                   currentSlide === index ? "opacity-100" : "opacity-0"
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-bl from-white via-blue-500 to-[#1d1dee] opacity-60" />

//                 {/* Content */}
//                 <div className="relative z-10 h-full">
//                   <div className="container mx-auto px-4 h-full">
//                     <div className="flex items-center h-full">
//                       <div className="w-full lg:w-2/3 xl:w-7/12 text-black">
//                         {/* Subtitle (Static or always visible if needed) */}
//                         <div
//                           className={`mb-4 transform ${
//                             showTitle
//                               ? "animate-slide-in-left translate-x-0 opacity-100"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           <div className="flex items-center text-center">
//                             <GoDotFill className="w-4 h-4 text-yellow-500" />
//                             <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
//                             <span className="text-lg md:text-xl text-white ml-2">
//                               Welcome to Senior Lovecare
//                             </span>
//                           </div>
//                         </div>

//                         {/* Title */}
//                         <h1
//                           className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transform ${
//                             showTitle
//                               ? "animate-slide-in-right translate-x-0 opacity-100"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           {slide.title}
//                         </h1>

//                         {/* Description */}
//                         <p
//                           className={`mb-6 text-base md:text-lg opacity-90 transform ${
//                             showDescription
//                               ? "animate-slide-in-right translate-x-0 opacity-90"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           {slide.description}
//                         </p>

//                         {/* Buttons */}
//                         <div
//                           className={`flex flex-wrap transform ${
//                             showButtons
//                               ? "animate-slide-in-right translate-x-0 opacity-100"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           <a
//                             href="#"
//                             className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded mr-4 mb-2 hover:bg-white hover:text-blue-900 transition"
//                           >
//                             Read More
//                           </a>
//                           <a
//                             href="#"
//                             className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded mb-2 hover:bg-white hover:text-blue-900 transition"
//                           >
//                             Contact Us
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     currentSlide === index
//                       ? "bg-white"
//                       : "bg-white bg-opacity-50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Below sections */}
//           <div className="mt-24">
//             <Cards />
//           </div>
//           <div className="mt-24">
//             <About />
//           </div>
//           <div className="mt-24">
//             <Count />
//           </div>
//           <div className="mt-24">
//             <Test />
//           </div>
//           <div className="mt-24">
//             <Choose />
//           </div>
//           <div className="mt-24">
//             <Steps />
//           </div>
//           <div className="mt-24">
//             <Testimonials />
//           </div>
//           <div className="mt-24">
//             <Feedback />
//           </div>
//           <div className="mt-24">
//             <Contact />
//           </div>
//           <div className="mt-24">
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


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
//       backgroundImage: "/Images/Hero/image1.jpg",
//     },
//     {
//       id: 2,
//       title: "Our Goal is to Make your Life Better",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image2.jpg",
//     },
//     {
//       id: 3,
//       title: "We Give You The Place to Spent Your Life",
//       description:
//         "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
//       backgroundImage: "/Images/Hero/image3.jpg",
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

//     const titleTimer = setTimeout(() => setShowTitle(true), 200);
//     const descTimer = setTimeout(() => setShowDescription(true), 500);
//     const btnTimer = setTimeout(() => setShowButtons(true), 800);

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

//   return (
//     <section className="relative w-full">
//       <div
//         className="px-8 h-[480px]"
//         style={{
//           backgroundImage: "url(/Images/Bg/sky.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="w-full overflow-hidden">
//           {/* Slider container */}
//           <div className="relative w-full overflow-hidden h-96 md:h-screen md:max-h-[600px]">
//             {slides.map((slide, index) => (
//               <div
//                 key={slide.id}
//                 className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
//                   currentSlide === index ? "opacity-100" : "opacity-0"
//                 }`}
//                 style={{
//                   backgroundImage: `url(${slide.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-bl from-white via-blue-500 to-[#1d1dee] opacity-60" />

//                 {/* Content */}
//                 <div className="relative z-10 h-full">
//                   <div className="container mx-auto px-4 h-full">
//                     <div className="flex items-center h-full">
//                       <div className="w-full lg:w-2/3 xl:w-7/12 text-black">
//                         {/* Subtitle (Static or always visible if needed) */}
//                         <div
//                           className={`mb-4 transform ${
//                             showTitle
//                               ? "animate-slide-in-left translate-x-0 opacity-100"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           <div className="flex items-center text-center">
//                             <GoDotFill className="w-4 h-4 text-yellow-500" />
//                             <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
//                             <span className="text-lg md:text-xl text-white ml-2">
//                               Welcome to Senior Lovecare
//                             </span>
//                           </div>
//                         </div>

//                         {/* Title */}
//                         <h1
//                           className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transform ${
//                             showTitle
//                               ? "animate-slide-in-right translate-x-0 opacity-100"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           {slide.title}
//                         </h1>

//                         {/* Description */}
//                         <p
//                           className={`mb-6 text-base md:text-lg opacity-90 transform ${
//                             showDescription
//                               ? "animate-slide-in-right translate-x-0 opacity-90"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           {slide.description}
//                         </p>

//                         {/* Buttons */}
//                         <div
//                           className={`flex flex-wrap transform ${
//                             showButtons
//                               ? "animate-slide-in-right translate-x-0 opacity-100"
//                               : "translate-x-8 opacity-0"
//                           } transition-all duration-700`}
//                         >
//                           <a
//                             href="#"
//                             className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded mr-4 mb-2 hover:bg-white hover:text-blue-900 transition"
//                           >
//                             Read More
//                           </a>
//                           <a
//                             href="#"
//                             className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded mb-2 hover:bg-white hover:text-blue-900 transition"
//                           >
//                             Contact Us
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Dots */}
//             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToSlide(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     currentSlide === index
//                       ? "bg-white"
//                       : "bg-white bg-opacity-50"
//                   }`}
//                 />
//               ))}
//             </div>
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
      backgroundImage: "/Images/Hero/image1.jpg",
    },
    {
      id: 2,
      title: "Our Goal is to Make your Life Better",
      description:
        "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
      backgroundImage: "/Images/Hero/image2.jpg",
    },
    {
      id: 3,
      title: "We Give You The Place to Spent Your Life",
      description:
        "However, lovecare obligations will in the end rely on fitness and desires of the character below care.",
      backgroundImage: "/Images/Hero/image3.jpg",
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

    const titleTimer = setTimeout(() => setShowTitle(true), 200);
    const descTimer = setTimeout(() => setShowDescription(true), 500);
    const btnTimer = setTimeout(() => setShowButtons(true), 800);

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

  return (
    <section className="relative w-full">
      <div
        className="px-8 h-[480px]"
        style={{
          backgroundImage: "url(/Images/Bg/sky.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Slider container */}
        <div className="relative w-full overflow-hidden h-96 md:h-screen md:max-h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white via-blue-500 to-[#1d1dee] opacity-60" />

              {/* Content */}
              <div className="relative z-10 h-full">
                <div className="container mx-auto px-4 h-full">
                  <div className="flex items-center h-full">
                    <div className="w-full lg:w-2/3 xl:w-7/12 text-black">
                      {/* Subtitle (Static or always visible if needed) */}
                      <div
                        className={`mb-4 transform ${
                          showTitle
                            ? "animate-slide-in-left translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        } transition-all duration-700`}
                      >
                        <div className="flex items-center text-center">
                          <GoDotFill className="w-4 h-4 text-yellow-500" />
                          <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
                          <span className="text-lg md:text-xl text-white ml-2">
                            Welcome to Senior Lovecare
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h1
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transform ${
                          showTitle
                            ? "animate-slide-in-right translate-x-0 opacity-100"
                            : "translate-x-8 opacity-0"
                        } transition-all duration-700`}
                      >
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p
                        className={`mb-6 text-base md:text-lg opacity-90 transform ${
                          showDescription
                            ? "animate-slide-in-right translate-x-0 opacity-90"
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
                          className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded mr-4 mb-2 hover:bg-white hover:text-blue-900 transition"
                        >
                          Read More
                        </a>
                        <a
                          href="#"
                          className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded mb-2 hover:bg-white hover:text-blue-900 transition"
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

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
