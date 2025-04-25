// import { useState, useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";


// const Testimonials = () => {
// const { ref, inView } = useInView({
//       triggerOnce: true,
//       threshold: 0.2,
//     });

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const carouselRef = useRef(null);

//   const portfolioItems = [
//     {
//       image: "Images/Testimonials/Test-1.jpg",
//       title: "Senior Care",
//       category: "personal-nurse",
//       hasPadding: false,
//     },
//     {
//       image: "Images/Testimonials/Test-2.jpg",
//       title: "Personal Care",
//       category: "Personal Nurse",
//       hasPadding: true,
//     },
//     {
//       image: "Images/Testimonials/Test-3.jpg",
//       title: "Health Care",
//       category: "Doctor",
//       hasPadding: false,
//     },
//     {
//       image: "Images/Testimonials/Test-4.jpg",
//       title: "Assisted Living",
//       category: "Care Taker",
//       hasPadding: true,
//     },
//     {
//       image: "Images/Testimonials/Test-5.jpg",
//       title: "Eldery Nutrition",
//       category: "Nutritionist",
//       hasPadding: false,
//     },
//     {
//       image: "Images/Testimonials/Test-6.jpg",
//       title: "Residential Care",
//       category: "Care Taker",
//       hasPadding: true,
//     },
//   ];

//   const visibleItems = 4; // Number of items visible at once
//   const totalItems = portfolioItems.length;

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex, isAnimating]);

//   const getVisibleItems = () => {
//     const items = [];
//     for (let i = 0; i < visibleItems; i++) {
//       const index = (currentIndex + i) % totalItems;
//       items.push(portfolioItems[index]);
//     }
//     return items;
//   };

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div
//           ref={carouselRef}
//           className="relative overflow-hidden"
//           data-wow-delay="200ms"
//         >
//           <div className="flex transition-transform duration-500 ease-in-out gap-5">
//             {getVisibleItems().map((item, index) => (
//               <div
//                 key={`portfolio-${currentIndex + index}`}
//                 className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/4 ${
//                   item.hasPadding ? "pt-4" : ""
//                 }`}
//               >
//                 <div className="relative group">
//                   <motion.div 
//                    ref={ref}
//                    initial={{ opacity: 0, y: 100 }}
//                    animate={inView ? { opacity: 1, y: 0 } : {}}
//                    transition={{ delay: 0.3, duration: 0.5 }}
//                   className="overflow-hidden rounded-lg">
//                     <img
//                       src={item.image}
//                       className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-110 "
//                       alt={item.title}
//                     />
//                   </motion.div>
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-lg">
//                     <div className="w-56 h-56 bg-sky-300 bg-transparent">
//                     <a
//                       href="portfolio-detail.html"
//                       className="w-12 h-12 mb-3 mt-10 flex items-center justify-center text-center mx-auto rounded-full bg-primary text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-slate-400"
//                     >
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                         ></path>
//                       </svg>
//                     </a>
//                     <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 flex text-center items-center justify-center">
//                       <a href="portfolio-detail.html">{item.title}</a>
//                     </h3>
//                     <span className="text-sm text-white font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 flex items-center text-center justify-center">
//                       {item.category}
//                     </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300"
//           >
//             <span className="sr-only">Previous</span>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               ></path>
//             </svg>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300"
//           >
//             <span className="sr-only">Next</span>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleItems, setVisibleItems] = useState(4);
  const carouselRef = useRef(null);

  const portfolioItems = [
    {
      image: "Images/Testimonials/Test-1.jpg",
      title: "Senior Care",
      category: "personal-nurse",
      hasPadding: false,
    },
    {
      image: "Images/Testimonials/Test-2.jpg",
      title: "Personal Care",
      category: "Personal Nurse",
      hasPadding: true,
    },
    {
      image: "Images/Testimonials/Test-3.jpg",
      title: "Health Care",
      category: "Doctor",
      hasPadding: false,
    },
    {
      image: "Images/Testimonials/Test-4.jpg",
      title: "Assisted Living",
      category: "Care Taker",
      hasPadding: true,
    },
    {
      image: "Images/Testimonials/Test-5.jpg",
      title: "Eldery Nutrition",
      category: "Nutritionist",
      hasPadding: false,
    },
    {
      image: "Images/Testimonials/Test-6.jpg",
      title: "Residential Care",
      category: "Care Taker",
      hasPadding: true,
    },
  ];

  const totalItems = portfolioItems.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push(portfolioItems[index]);
    }
    return items;
  };

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div
          ref={carouselRef}
          className="relative overflow-hidden"
          data-wow-delay="200ms"
        >
          <div className="flex transition-transform duration-500 ease-in-out gap-3 md:gap-4 lg:gap-5">
            {getVisibleItems().map((item, index) => (
              <div
                key={`portfolio-${currentIndex + index}`}
                className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${
                  item.hasPadding ? "pt-2 md:pt-4" : ""
                }`}
              >
                <div className="relative group">
                  <motion.div 
                   ref={ref}
                   initial={{ opacity: 0, y: 50 }}
                   animate={inView ? { opacity: 1, y: 0 } : {}}
                   transition={{ delay: 0.2 * index, duration: 0.5 }}
                   className="overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-110"
                      alt={item.title}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300 rounded-lg">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                    <a
                      href="portfolio-detail.html"
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 flex items-center justify-center text-center mx-auto rounded-full bg-slate-400 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </a>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center px-2">
                      <a href="portfolio-detail.html">{item.title}</a>
                    </h3>
                    <span className="text-xs sm:text-sm text-white font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 text-center">
                      {item.category}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300 z-10"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300 z-10"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;