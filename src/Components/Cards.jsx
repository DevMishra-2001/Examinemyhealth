// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useState } from "react";
// import { motion } from "motion/react";
// import { useInView } from "react-intersection-observer";

// const Cards = () => {
//   const [activeCategory, setActiveCategory] = useState("trending");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const dummyCards = [
//     {
//       id: 1,
//       title: "Covid (Covid-19)",
//       description:
//         "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.",
//       category: "trending",
//     },
//     {
//       id: 2,
//       title: "RSV (Respiratory Syncytial Virus)",
//       description:
//         "Respiratory syncytial virus (RSV) causes infections of the lungs and respiratory tract. It's so common that most children have been infected with the virus by age 2.",
//       category: "trending",
//     },
//     {
//       id: 3,
//       title: "Influenza (Influenza A and B)",
//       description:
//         "Influenza A and B are the two main types of influenza viruses that cause seasonal flu epidemics in humans, with influenza A being more common and potentially more severe, while influenza B is less common and tends to cause milder illness.",
//       category: "trending",
//     },
//     {
//       id: 4,
//       title: "PGX (Pharma-cogenomics)",
//       description:
//         "Pharmacogenomics (PGx), often abbreviated as PGx, is the study of how an individual's genetic makeup affects their response to drugs, aiming to personalize medication choices for better efficacy and safety. ",
//       category: "new",
//     },
//     {
//       id: 5,
//       title: "Rpx (Respiratory)",
//       description:
//         "RPX in the context of respiratory, likely refers to Rabbitpox Virus (RPXV) and the resulting disease (RPX), a disease similar to variola virus (VARV) in its natural route of transmission through infected respiratory secretions. ",
//       category: "new",
//     },
//     {
//       id: 6,
//       title: "Hx (Hereditary)",
//       description:
//         "Hereditary xerocytosis (HX), also known as dehydrated hereditary stomatocytosis (DHS), is a rare, autosomal dominant, congenital hemolytic anemia characterized by erythrocyte dehydration and mild to moderate chronic hemolytic anemia. ",
//       category: "new",
//     },
//     {
//       id: 7,
//       title: "Dummy1",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem voluptates. Eveniet tempora aperiam dolor quo magni perferendis corporis minima, iste obcaecati. Fugiat exercitationem fugit ex doloremque laboriosam cupiditate tempora!",
//       category: "tests",
//     },
//     {
//       id: 8,
//       title: "Dummy2",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ex, rem veritatis id quae animi quidem ipsam aut accusantium architecto consequatur odit vitae itaque velit rerum aliquid ullam assumenda. Nesciunt!",
//       category: "tests",
//     },
//     {
//       id: 9,
//       title: "Dummy3",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis distinctio sit officia vero a expedita dicta nemo accusamus nobis! Sed totam laboriosam deleniti recusandae quibusdam molestias cumque impedit ipsa.",
//       category: "tests",
//     },
//   ];

//   // Map the tab names to category values
//   const categoryMap = {
//     "Newly": "new",
//     "Trending": "trending",
//     "Tests": "tests"
//   };

//   // Filter cards based on active category
//   const filteredCards = dummyCards.filter(card => card.category === activeCategory);

//   const navigateCards = (direction) => {
//     if (direction === 'next') {
//       setActiveIndex((prev) => (prev + 1) % filteredCards.length);
//     } else {
//       setActiveIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
//     }
//   };

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <div className="relative">
//         <div className="container mx-auto max-w-lg mb-14 p-2 ">
//           <motion.div
//            ref={ref}
//            initial={{ opacity: 0, y: 100 }}
//            animate={inView ? { opacity: 1, y: 0 } : {}}
//            transition={{ delay: 0.4, duration: 0.6 }}
//           className="flex items-center justify-center text-center mt-10 py-1 rounded-full bg-cyan-700">
//             <ul
//             className="flex justify-between space-x-6">
//               {Object.keys(categoryMap).map((tabName) => (
//                 <li
//                   key={tabName}
//                   className={`sm:text-base md:text-lg px-8 py-2 cursor-pointer transition-colors rounded-full ${
//                     activeCategory === categoryMap[tabName]
//                       ? "bg-white/80 font-medium"
//                       : "text-white hover:bg-white/30"
//                   }`}
//                   onClick={() => {
//                     setActiveCategory(categoryMap[tabName]);
//                     setActiveIndex(0); // Reset to first card when changing category
//                   }}
//                 >
//                   {tabName}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         <div className="w-full min-h-[400px] bg-transparent">
//           {filteredCards.length > 0 && (
//             <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.5, duration: 0.7 }}
//             className="container mx-auto w-full px-4 bg-center bg-cover"
//             style={{ backgroundImage: "url(/Images/Bg/wood.webp)" }}
//             >
//               <div className="relative flex justify-center">
//                 {/* Left navigation arrow */}
//                 <button
//                   className="absolute left-0 top-1/2 -translate-y-1/2 text-black hover:text-blue-700 z-10"
//                   onClick={() => navigateCards('prev')}
//                 >
//                   <ChevronLeft/>
//                 </button>

//                 {/* Card content */}
//                 <div className="bg-transparent p-8 rounded-lg text-center max-w-4xl">
//                   <div className="mx-auto mb-6 w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-base font-bold">
//                       {filteredCards[activeIndex].title.split(' ')[0]}
//                     </span>
//                   </div>

//                   <blockquote className="text-sm md:text-base leading-relaxed mb-8 h-20">
//                     {filteredCards[activeIndex].description}
//                   </blockquote>

//                   <h3 className="text-lg font-semibold mb-4">{filteredCards[activeIndex].title}</h3>

//                   {/* Navigation dots */}
//                   <div className="flex justify-center gap-2 mt-8">
//                     {filteredCards.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleDotClick(index)}
//                         className={`w-3 h-3 rounded-full ${
//                           index === activeIndex ? "bg-blue-500" : "bg-gray-300"
//                         }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right navigation arrow */}
//                 <button
//                   className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-black hover:text-blue-700 z-10"
//                   onClick={() => navigateCards('next')}
//                 >
//                   <ChevronRight/>
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Cards = () => {
//   const [activeCategory, setActiveCategory] = useState("trending");
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const dummyCards = [
//     {
//       id: 1,
//       title: "Covid (Covid-19)",
//       description:
//         "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.",
//       category: "trending",
//     },
//     {
//       id: 2,
//       title: "RSV (Respiratory Syncytial Virus)",
//       description:
//         "Respiratory syncytial virus (RSV) causes infections of the lungs and respiratory tract. It's so common that most children have been infected with the virus by age 2.",
//       category: "trending",
//     },
//     {
//       id: 3,
//       title: "Influenza (Influenza A and B)",
//       description:
//         "Influenza A and B are the two main types of influenza viruses that cause seasonal flu epidemics in humans, with influenza A being more common and potentially more severe, while influenza B is less common and tends to cause milder illness.",
//       category: "trending",
//     },
//     {
//       id: 4,
//       title: "PGX (Pharma-cogenomics)",
//       description:
//         "Pharmacogenomics (PGx), often abbreviated as PGx, is the study of how an individual's genetic makeup affects their response to drugs, aiming to personalize medication choices for better efficacy and safety. ",
//       category: "new",
//     },
//     {
//       id: 5,
//       title: "Rpx (Respiratory)",
//       description:
//         "RPX in the context of respiratory, likely refers to Rabbitpox Virus (RPXV) and the resulting disease (RPX), a disease similar to variola virus (VARV) in its natural route of transmission through infected respiratory secretions. ",
//       category: "new",
//     },
//     {
//       id: 6,
//       title: "Hx (Hereditary)",
//       description:
//         "Hereditary xerocytosis (HX), also known as dehydrated hereditary stomatocytosis (DHS), is a rare, autosomal dominant, congenital hemolytic anemia characterized by erythrocyte dehydration and mild to moderate chronic hemolytic anemia. ",
//       category: "new",
//     },
//     {
//       id: 7,
//       title: "Dummy1",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem voluptates. Eveniet tempora aperiam dolor quo magni perferendis corporis minima, iste obcaecati. Fugiat exercitationem fugit ex doloremque laboriosam cupiditate tempora!",
//       category: "tests",
//     },
//     {
//       id: 8,
//       title: "Dummy2",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ex, rem veritatis id quae animi quidem ipsam aut accusantium architecto consequatur odit vitae itaque velit rerum aliquid ullam assumenda. Nesciunt!",
//       category: "tests",
//     },
//     {
//       id: 9,
//       title: "Dummy3",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis distinctio sit officia vero a expedita dicta nemo accusamus nobis! Sed totam laboriosam deleniti recusandae quibusdam molestias cumque impedit ipsa.",
//       category: "tests",
//     },
//   ];

//   // Map the tab names to category values
//   const categoryMap = {
//     "Newly": "new",
//     "Trending": "trending",
//     "Tests": "tests"
//   };

//   // Filter cards based on active category
//   const filteredCards = dummyCards.filter(card => card.category === activeCategory);

//   const navigateCards = (direction) => {
//     if (direction === 'next') {
//       setActiveIndex((prev) => (prev + 1) % filteredCards.length);
//     } else {
//       setActiveIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
//     }
//   };

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       <div className="relative px-4 w-full">
//         <div className="container mx-auto max-w-lg mb-8 md:mb-14 p-2">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="flex items-center justify-center text-center mt-6 md:mt-10 py-1 rounded-full bg-cyan-700 overflow-hidden"
//           >
//             <ul className="flex justify-between w-full px-2 md:px-0 md:space-x-6">
//               {Object.keys(categoryMap).map((tabName) => (
//                 <li
//                   key={tabName}
//                   className={`text-xs sm:text-sm md:text-base font-title px-2 md:px-8 py-2 cursor-pointer transition-colors rounded-full ${
//                     activeCategory === categoryMap[tabName]
//                       ? "bg-white/80 font-medium"
//                       : "text-white hover:bg-white/30"
//                   }`}
//                   onClick={() => {
//                     setActiveCategory(categoryMap[tabName]);
//                     setActiveIndex(0); // Reset to first card when changing category
//                   }}
//                 >
//                   {tabName}
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>

//         <div className="w-full min-h-[350px] md:min-h-[400px] bg-transparent">
//           {filteredCards.length > 0 && (
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, y: 100 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.7 }}
//               className="container mx-auto w-full px-2 md:px-4 bg-center bg-cover relative"
//               style={{ backgroundImage: "url(/Images/Bg/wood.webp)" }}
//             >
//               <div className="relative flex justify-center">
//                 {/* Left navigation arrow */}
//                 <button
//                   className="absolute left-0 top-1/2 -translate-y-1/2 text-black hover:text-blue-700 z-10 p-2 md:p-0"
//                   onClick={() => navigateCards('prev')}
//                   aria-label="Previous card"
//                 >
//                   <ChevronLeft size={24} />
//                 </button>

//                 {/* Card content */}
//                 <div className="bg-transparent py-6 px-4 md:p-8 rounded-lg text-center w-full max-w-4xl mx-6">
//                   <div className="mx-auto mb-4 md:mb-6 w-16 h-16 md:w-20 md:h-20 bg-gray-500 rounded-full flex items-center justify-center">
//                     <span className="text-white text-sm md:text-base font-bold">
//                       {filteredCards[activeIndex].title.split(' ')[0]}
//                     </span>
//                   </div>

//                   <blockquote className="text-xs sm:text-sm md:text-base font-family leading-relaxed mb-4 md:mb-8 h-auto md:h-20 overflow-hidden">
//                     {filteredCards[activeIndex].description}
//                   </blockquote>

//                   <h3 className="text-base md:text-lg font-semibold font-serif mb-4">{filteredCards[activeIndex].title}</h3>

//                   {/* Navigation dots */}
//                   <div className="flex justify-center gap-2 mt-4 md:mt-8">
//                     {filteredCards.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleDotClick(index)}
//                         className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
//                           index === activeIndex ? "bg-blue-500" : "bg-gray-300"
//                         }`}
//                         aria-label={`Go to slide ${index + 1}`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Right navigation arrow */}
//                 <button
//                   className="absolute right-0 top-1/2 -translate-y-1/2 text-black hover:text-blue-700 z-10 p-2 md:p-0"
//                   onClick={() => navigateCards('next')}
//                   aria-label="Next card"
//                 >
//                   <ChevronRight size={24} />
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cards;

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function MedicalTestsComponent() {
  const [activeCategory, setActiveCategory] = useState("trending");
  const [activeTest, setActiveTest] = useState("Influenza Test");

  // Individual refs for different sections
  const [categoryTabsRef, categoryTabsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testOptionsRef, testOptionsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testInfoLeftRef, testInfoLeftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testInfoRightRef, testInfoRightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [additionalInfoRef, additionalInfoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const categories = {
    trending: ["Flu Test", "RSV Test", "Influenza Test"],
    new: ["PGX Test", "HGX Test", "RPX Test"],
    tests: ["Covid Test", "Allergy Test", "Immunity Test"],
  };

  const testInfo = {
    "Influenza Test": {
      title: "Influenza Test",
      description:
        "Comprehensive influenza testing that differentiates between flu and other viral infections.",
      features: [
        "Advanced strain identification",
        "Treatment recommendations",
        "Tracks seasonal variations",
        "Medical-grade accuracy",
      ],
      imageUrl: "Images/Testimonials/Test-1.jpg",
    },
    "Flu Test": {
      title: "Flu Test",
      description:
        "Quick and reliable testing to identify flu viruses and help determine appropriate treatment.",
      features: [
        "Rapid results",
        "High sensitivity",
        "Multiple strain detection",
        "Easy sample collection",
      ],
      imageUrl: "Images/Testimonials/Test-2.jpg",
    },
    "RSV Test": {
      title: "RSV Test",
      description:
        "Specialized test for respiratory syncytial virus, common in children and adults.",
      features: [
        "Early detection capability",
        "Suitable for all ages",
        "Differentiates from other respiratory infections",
        "Guides treatment decisions",
      ],
      imageUrl: "Images/Testimonials/Test-3.jpg",
    },
    "PGX Test": {
      title: "PGX Test",
      description:
        "Pharmacogenomic testing to determine how your genes affect medication responses.",
      features: [
        "Personalized medication guidance",
        "Reduced adverse reactions",
        "Optimized dosing",
        "Comprehensive genetic analysis",
      ],
      imageUrl: "Images/Testimonials/Test-4.jpg",
    },
    "HGX Test": {
      title: "HGX Test",
      description:
        "Hereditary genetic testing to identify potential genetic disorders and conditions.",
      features: [
        "Family risk assessment",
        "Carrier screening",
        "Preventative care guidance",
        "Detailed genetic mapping",
      ],
      imageUrl: "Images/Testimonials/Test-5.jpg",
    },
    "RPX Test": {
      title: "RPX Test",
      description:
        "Respiratory pathogen panel testing to identify multiple respiratory infections.",
      features: [
        "Multiple pathogen detection",
        "Quick turnaround time",
        "Comprehensive respiratory analysis",
        "Infection source identification",
      ],
      imageUrl: "Images/Testimonials/Test-6.jpg",
    },
    "Covid Test": {
      title: "Covid Test",
      description:
        "Detection of COVID-19 virus with high accuracy and reliability.",
      features: [
        "Variant identification",
        "PCR-based accuracy",
        "Fast results",
        "At-home options available",
      ],
      imageUrl: "Images/Testimonials/Test-2.jpg",
    },
    "Allergy Test": {
      title: "Allergy Test",
      description:
        "Comprehensive testing to identify potential allergens causing reactions.",
      features: [
        "Multiple allergen screening",
        "Severity assessment",
        "Personalized recommendations",
        "Food and environmental testing",
      ],
      imageUrl: "Images/Testimonials/Test-4.jpg",
    },
    "Immunity Test": {
      title: "Immunity Test",
      description:
        "Evaluation of immune system function and antibody presence.",
      features: [
        "Antibody level assessment",
        "Immune response evaluation",
        "Vaccination effectiveness check",
        "Immune deficiency screening",
      ],
      imageUrl: "Images/Testimonials/Test-1.jpg",
    },
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTest(categories[category][0]);
  };

  const handleTestSelection = (test) => {
    setActiveTest(test);
  };

  const getCategoryLabel = (categoryKey) => {
    const labels = {
      trending: "Trending",
      new: "Newly",
      tests: "Tests",
    };
    return labels[categoryKey] || categoryKey;
  };

  return (
    <div className="w-full mx-auto px-4 py-12 bg-gray-50">
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div
          ref={categoryTabsRef}
          className={`bg-white rounded-full shadow-md p-1 flex transform transition-all duration-500 ${
            categoryTabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`mx-1 px-8 py-2 lg:w-40 md:w-32 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-teal-600 text-white shadow-md transform scale-105"
                  : "bg-transparent text-gray-700 hover:bg-gray-100"
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Test Options */}
      <div
        ref={testOptionsRef}
        className={`flex flex-wrap justify-center gap-3 mb-16 transform transition-all duration-500 ${
          testOptionsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {categories[activeCategory].map((test) => (
          <button
            key={test}
            onClick={() => handleTestSelection(test)}
            className={`px-5 py-2 lg:w-28 md:w-24 font-title rounded-full text-sm transition-all ${
              activeTest === test
                ? "bg-teal-600 text-white shadow-md transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
            }`}
          >
            {test}
          </button>
        ))}
      </div>

      {/* Test Information Display */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div ref={testInfoLeftRef} className="flex-1 p-8 md:p-12">
            <div
              className={`inline-block bg-teal-50 rounded-xl px-4 py-1 text-teal-600 text-sm font-medium mb-4 font-title transform transition-all duration-500 ${
                testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              Medical Testing
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative font-family transform transition-all duration-500 delay-100 ${
                testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {testInfo[activeTest].title}
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500"></span>
            </h2>

            <p
              className={`text-gray-600 mb-8 mt-6 font-serif transform transition-all duration-500 delay-200 ${
                testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {testInfo[activeTest].description}
            </p>

            <ul
              className={`space-y-4 mb-8 transform transition-all duration-500 delay-300 ${
                testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {testInfo[activeTest].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-family">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 bg-teal-600 hover:bg-teal-700 font-title text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center space-x-2 transform transition-all duration-500 delay-400 ${
                testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 bg-gray-100">
            <div
              ref={testInfoRightRef}
              className={`h-full w-full overflow-hidden transform transition-all duration-700 ${
                testInfoRightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src={testInfo[activeTest].imageUrl}
                alt={`${activeTest} illustration`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-16 text-center">
        <h3
          ref={additionalInfoRef}
          className={`text-2xl font-semibold text-gray-800 mb-4 font-family transform transition-all duration-500 ${
            additionalInfoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why Choose Our Testing Services
        </h3>
        <p
          className={`text-gray-600 max-w-3xl mx-auto font-serif transform transition-all duration-500 delay-100 ${
            additionalInfoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our comprehensive testing solutions provide accurate, timely results
          with expert interpretation. Trust our medical-grade technology for all
          your diagnostic needs.
        </p>

        <div ref={benefitsRef} className="flex flex-wrap justify-center gap-8 mt-10">
          {["Accuracy", "Speed", "Reliability", "Expert Analysis"].map(
            (benefit, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md w-56 transform transition-all duration-500 ${
                  benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-teal-600 font-bold text-lg font-family">
                    {index + 1}
                  </span>
                </div>
                <h4
                  className="font-medium text-gray-800 font-serif"
                >
                  {benefit}
                </h4>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}