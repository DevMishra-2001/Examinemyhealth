// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Feedback = () => {
//   const testimonials = [
//     {
//       id: 1,
//       content: "Without seniorcare, we would have gone bankrupt by now. I have gotten at least 50 times the value from seniorcare. Absolutely wonderful!",
//       image: "/img/avatar/avatar-01.jpg",
//       name: "Ray Lagueux",
//       position: "Nutritionist"
//     },
//     {
//       id: 2,
//       content: "No matter where you go, seniorcare is the coolest, most happening thing around! If you aren't sure, always go for seniorcare. I can't say enough about seniorcare.",
//       image: "/img/avatar/avatar-02.jpg",
//       name: "Vanessa Wirth",
//       position: "Personal Instructor"
//     },
//     {
//       id: 3,
//       content: "I would like to personally thank you for your outstanding product. Seniorcare has got everything I need. I didn't even need training.",
//       image: "/img/avatar/avatar-03.jpg",
//       name: "Teppo Holanti",
//       position: "Doctor"
//     },
//     {
//       id: 4,
//       content: "I will refer everyone I know. I am really satisfied with my seniorcare. You won't regret it. You won't regret it. I love seniorcare. It's just amazing.",
//       image: "/img/avatar/avatar-04.jpg",
//       name: "Natsnet Eyob",
//       position: "Care Taker"
//     },
//     {
//       id: 5,
//       content: "Thank you so much for your help. I could probably go into sales for you. Thanks guys, keep up the good work! Thanks for the great service.",
//       image: "/img/avatar/avatar-05.jpg",
//       name: "Swen Kortig",
//       position: "Personal Instructor"
//     },
//     {
//       id: 6,
//       content: "Since I invested in seniorcare I made over 100,000 dollars profits. Seniorcare is the most valuable business resource. I love your system.",
//       image: "/img/avatar/avatar-06.jpg",
//       name: "Klaudia Peters",
//       position: "Co-Founder"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Calculate which testimonials to show (3 at a time for desktop)
//   const visibleTestimonials = () => {
//     const result = [];
//     for (let i = 0; i < 3; i++) {
//       const index = (currentIndex + i) % testimonials.length;
//       result.push(testimonials[index]);
//     }
//     return result;
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4 relative">
//         <div className="text-center mb-12 animate-fadeIn">
//           <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">What Peoples Says About Our Loves &amp; Caring</h2>
//         </div>

//         {/* Carousel */}
//         <div className="relative">
//           {/* Carousel items */}
//           <div className="flex flex-col md:flex-row gap-6 animate-fadeIn">
//             {visibleTestimonials().map((testimonial) => (
//               <div key={testimonial.id} className="flex-1">
//                 <div className="bg-white rounded-lg p-6 shadow-lg">
//                   <div className="mb-4">
//                     <img src="/img/content/quote.png" alt="quote" className="bg-white p-3" />
//                   </div>
//                   <p className="mb-4 text-gray-700">{testimonial.content}</p>
//                   <img
//                     src={testimonial.image}
//                     className="w-16 h-16 rounded-full mb-3 object-cover"
//                     alt={testimonial.name}
//                   />
//                   <h5 className="mb-1 font-semibold">{testimonial.name}</h5>
//                   <span className="text-gray-500">{testimonial.position}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation buttons */}
//           <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
//             <button
//               onClick={prevSlide}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//               aria-label="Previous"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
//               aria-label="Next"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {/* Dots navigation */}
//           <div className="flex justify-center mt-6 gap-2">
//             {testimonials.slice(0, Math.ceil(testimonials.length / 3)).map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => goToSlide(idx * 3)}
//                 className={`w-3 h-3 rounded-full ${
//                   Math.floor(currentIndex / 3) === idx ? 'bg-primary' : 'bg-gray-300'
//                 }`}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Shapes */}
//       <div className="hidden sm:block absolute right-0 bottom-0 ">
//         <img src="/Images/Test/shape-03.png" alt="shape" className="w-64"/>
//       </div>
//       <div className="hidden sm:block absolute left-0 top-0">
//         <img src="/Images/Test/shape-04.png" alt="shape"  className="w-32"/>
//       </div>
//     </section>
//   );
// };

// export default Feedback;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { GoHorizontalRule } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";


const testimonials = [
  {
    text: "Your coffee hits the spot every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word. I would like to highly recommend it.",
    author: "Marnie Rotter",
    shortName: "MR",
  },
  {
    text: "The rich aroma and smooth flavor profile make this my go-to morning brew. Absolutely worth every penny!",
    author: "Alex Johnson",
    shortName: "AJ",
  },
  {
    text: "I've tried countless coffee brands over the years, but this one stands out for its consistency and quality. A true game-changer!",
    author: "Sam Rivera",
    shortName: "SR",
  },
];

const Feedback = () => {
  const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstTestimonial = currentIndex === 0;
    const newIndex = isFirstTestimonial
      ? testimonials.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastTestimonial = currentIndex === testimonials.length - 1;
    const newIndex = isLastTestimonial ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className=" relative w-full max-w-6xl mx-auto bg-transparent rounded-lg p-4 sm:p-6 md:p-8">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 animate-fadeIn">
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center text-center">
            <GoDotFill className="w-4 h-4 text-yellow-500" />
            <GoHorizontalRule className="w-10 h-10 text-yellow-500" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider text-sky-600 ml-2">
              Testimonials
            </span>
          </motion.div>
          <motion.h2 
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mt-2 max-w-md flex items-center justify-center mx-auto">
            <span className="text-center">
              What Peoples Says About Our Loves &amp; Caring
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Carousel container */}
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.5 }}
        className="relative px-2 sm:px-8 md:px-16 py-6 md:py-8 bg-cover bg-center opacity-80 rounded-2xl"
        style={{ backgroundImage: "url(/Images/Bg/sky.jpg)" }}
      >
        {/* Left navigation button - hidden on smallest screens */}
        <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={goToPrevious}
            className="p-1 sm:p-2 flex justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-sky-600 hover:text-sky-800" />
          </button>
        </div>

        {/* Testimonial content */}
        <div className="text-center">
          {/* Avatar with initials */}
          <div className="mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto border-4 border-white shadow-md bg-sky-600 flex items-center justify-center">
              <span className="text-white text-base sm:text-lg md:text-xl font-bold">
                {testimonials[currentIndex].shortName}
              </span>
            </div>
          </div>

          {/* Quote icon */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <Quote className="text-red-400" size={24} />
          </div>

          {/* Testimonial text */}
          <div className="min-h-24 sm:min-h-32">
            <p className="text-black text-base sm:text-lg mb-4 sm:mb-6 font-serif px-2">
              {testimonials[currentIndex].text}
            </p>
          </div>

          {/* Author name */}
          <h3 className="text-lg sm:text-xl font-medium text-black mb-3">
            {testimonials[currentIndex].author}
          </h3>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  index === currentIndex ? "bg-sky-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile navigation buttons - only visible on small screens */}
          <div className="flex justify-center space-x-4 sm:hidden mb-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-green-500 shadow-md flex justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-sky-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-green-500 shadow-md flex justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-sky-600" />
            </button>
          </div>
        </div>

        {/* Right navigation button - hidden on smallest screens */}
        <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={goToNext}
            // className="p-1 sm:p-2 rounded-full bg-green-500 shadow-md flex justify-center hover:bg-gray-100 transition-colors"
            className="p-1 sm:p-2 flex justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-sky-600  hover:text-sky-800" />
          </button>
        </div>
      </motion.div>
      <div className="curve-shapes relative">
        <img
          src="/Images/Bg/bg-07.png"
          className="absolute bottom-0 w-full"
          alt="curve bottom"
        />
        <img
          src="/Images/Bg/bg-02.png"
          className="absolute top-0 w-full"
          alt="curve top"
        />
      </div>
      <div className="hidden sm:block absolute left-0 top-0 transform animate-slowBounce">
        <img
          src="/Images/Test/shape-04.png"
          alt="Decorative shape"
          className="w-32"
        />
      </div>
      <div className="hidden sm:block absolute right-0 bottom-0 z-[-1]">
        <div className="transform animate-slowBounce overflow-visible">
          <img
            src="/Images/Test/shape-03.png"
            alt="Decorative shape"
            className="w-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
