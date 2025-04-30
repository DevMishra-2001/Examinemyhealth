// import { useState } from "react";
// import { CheckCircle } from "lucide-react";
// import { useInView } from "react-intersection-observer";

// export default function MedicalTestsComponent() {
//   const [activeCategory, setActiveCategory] = useState("trending");
//   const [activeTest, setActiveTest] = useState("Influenza Test");

//   // Individual refs for different sections
//   const [categoryTabsRef, categoryTabsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   // const [testOptionsRef, testOptionsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [testInfoLeftRef, testInfoLeftInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [testInfoRightRef, testInfoRightInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [additionalInfoRef, additionalInfoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
//   const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   const categories = {
//     trending: ["Flu Test", "RSV Test", "Influenza Test"],
//     new: ["PGX Test", "HGX Test", "RPX Test"],
//     tests: ["Covid Test", "Allergy Test", "Immunity Test"],
//   };

//   const testInfo = {
//     "Influenza Test": {
//       title: "Influenza Test",
//       description:
//         "Comprehensive influenza testing that differentiates between flu and other viral infections.",
//       features: [
//         "Advanced strain identification",
//         "Treatment recommendations",
//         "Tracks seasonal variations",
//         "Medical-grade accuracy",
//       ],
//       imageUrl: "Images/Testimonials/Test-1.jpg",
//     },
//     "Flu Test": {
//       title: "Flu Test",
//       description:
//         "Quick and reliable testing to identify flu viruses and help determine appropriate treatment.",
//       features: [
//         "Rapid results",
//         "High sensitivity",
//         "Multiple strain detection",
//         "Easy sample collection",
//       ],
//       imageUrl: "Images/Testimonials/Test-2.jpg",
//     },
//     "RSV Test": {
//       title: "RSV Test",
//       description:
//         "Specialized test for respiratory syncytial virus, common in children and adults.",
//       features: [
//         "Early detection capability",
//         "Suitable for all ages",
//         "Differentiates from other respiratory infections",
//         "Guides treatment decisions",
//       ],
//       imageUrl: "Images/Testimonials/Test-3.jpg",
//     },
//     "PGX Test": {
//       title: "PGX Test",
//       description:
//         "Pharmacogenomic testing to determine how your genes affect medication responses.",
//       features: [
//         "Personalized medication guidance",
//         "Reduced adverse reactions",
//         "Optimized dosing",
//         "Comprehensive genetic analysis",
//       ],
//       imageUrl: "Images/Testimonials/Test-4.jpg",
//     },
//     "HGX Test": {
//       title: "HGX Test",
//       description:
//         "Hereditary genetic testing to identify potential genetic disorders and conditions.",
//       features: [
//         "Family risk assessment",
//         "Carrier screening",
//         "Preventative care guidance",
//         "Detailed genetic mapping",
//       ],
//       imageUrl: "Images/Testimonials/Test-5.jpg",
//     },
//     "RPX Test": {
//       title: "RPX Test",
//       description:
//         "Respiratory pathogen panel testing to identify multiple respiratory infections.",
//       features: [
//         "Multiple pathogen detection",
//         "Quick turnaround time",
//         "Comprehensive respiratory analysis",
//         "Infection source identification",
//       ],
//       imageUrl: "Images/Testimonials/Test-6.jpg",
//     },
//     "Covid Test": {
//       title: "Covid Test",
//       description:
//         "Detection of COVID-19 virus with high accuracy and reliability.",
//       features: [
//         "Variant identification",
//         "PCR-based accuracy",
//         "Fast results",
//         "At-home options available",
//       ],
//       imageUrl: "Images/Testimonials/Test-2.jpg",
//     },
//     "Allergy Test": {
//       title: "Allergy Test",
//       description:
//         "Comprehensive testing to identify potential allergens causing reactions.",
//       features: [
//         "Multiple allergen screening",
//         "Severity assessment",
//         "Personalized recommendations",
//         "Food and environmental testing",
//       ],
//       imageUrl: "Images/Testimonials/Test-4.jpg",
//     },
//     "Immunity Test": {
//       title: "Immunity Test",
//       description:
//         "Evaluation of immune system function and antibody presence.",
//       features: [
//         "Antibody level assessment",
//         "Immune response evaluation",
//         "Vaccination effectiveness check",
//         "Immune deficiency screening",
//       ],
//       imageUrl: "Images/Testimonials/Test-1.jpg",
//     },
//   };

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setActiveTest(categories[category][0]);
//   };

//   const handleTestSelection = (test) => {
//     setActiveTest(test);
//   };

//   const getCategoryLabel = (categoryKey) => {
//     const labels = {
//       trending: "Trending",
//       new: "Newly",
//       tests: "Tests",
//     };
//     return labels[categoryKey] || categoryKey;
//   };

//   return (
//     <div className="w-full mx-auto px-4 py-12 bg-gray-50">
//       {/* Category Tabs */}
//       <div className="flex justify-center mb-12">
//         <div
//           ref={categoryTabsRef}
//           className={`bg-white rounded-full shadow-md p-1 flex transform transition-all duration-500 ${
//             categoryTabsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           {Object.keys(categories).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`mx-1 px-8 py-2 lg:w-40 md:w-32 rounded-full text-sm font-medium transition-all ${
//                 activeCategory === category
//                   ? "bg-teal-600 text-white shadow-md transform scale-105"
//                   : "bg-transparent text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {getCategoryLabel(category)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Test Options */}
     

//       {/* Test Information Display */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Content */}
//           <div ref={testInfoLeftRef} className="flex-1 p-8 md:p-12">
//             <div
//               className={`inline-block bg-teal-50 rounded-xl px-4 py-1 text-teal-600 text-sm font-medium mb-4 font-title transform transition-all duration-500 ${
//                 testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               Medical Testing
//             </div>

//             <h2
//               className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative font-family transform transition-all duration-500 delay-100 ${
//                 testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {testInfo[activeTest].title}
//               <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500"></span>
//             </h2>

//             <p
//               className={`text-gray-600 mb-8 mt-6 font-serif transform transition-all duration-500 delay-200 ${
//                 testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {testInfo[activeTest].description}
//             </p>

//             <ul
//               className={`space-y-4 mb-8 transform transition-all duration-500 delay-300 ${
//                 testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {testInfo[activeTest].features.map((feature, index) => (
//                 <li key={index} className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-700 font-family">{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <button
//               className={`mt-6 bg-teal-600 hover:bg-teal-700 font-title text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center space-x-2 transform transition-all duration-500 delay-400 ${
//                 testInfoLeftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               <span>Learn More</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Right Content - Image */}
//           <div className="flex-1 bg-gray-100">
//             <div
//               ref={testInfoRightRef}
//               className={`h-full w-full overflow-hidden transform transition-all duration-700 ${
//                 testInfoRightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//               }`}
//             >
//               <img
//                 src={testInfo[activeTest].imageUrl}
//                 alt={`${activeTest} illustration`}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Information Section */}
//       <div className="mt-16 text-center">
//         <h3
//           ref={additionalInfoRef}
//           className={`text-2xl font-semibold text-gray-800 mb-4 font-family transform transition-all duration-500 ${
//             additionalInfoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           Why Choose Our Testing Services
//         </h3>
//         <p
//           className={`text-gray-600 max-w-3xl mx-auto font-serif transform transition-all duration-500 delay-100 ${
//             additionalInfoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           Our comprehensive testing solutions provide accurate, timely results
//           with expert interpretation. Trust our medical-grade technology for all
//           your diagnostic needs.
//         </p>

//         <div ref={benefitsRef} className="flex flex-wrap justify-center gap-8 mt-10">
//           {["Accuracy", "Speed", "Reliability", "Expert Analysis"].map(
//             (benefit, index) => (
//               <div
//                 key={index}
//                 className={`bg-white p-6 rounded-xl shadow-md w-56 transform transition-all duration-500 ${
//                   benefitsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
//               >
//                 <div
//                   className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center"
//                 >
//                   <span className="text-teal-600 font-bold text-lg font-family">
//                     {index + 1}
//                   </span>
//                 </div>
//                 <h4
//                   className="font-medium text-gray-800 font-serif"
//                 >
//                   {benefit}
//                 </h4>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { CheckCircle } from "lucide-react";

// export default function MedicalTestsComponent() {
//   const [activeCategory, setActiveCategory] = useState("trending");
//   const [activeTest, setActiveTest] = useState("Influenza Test");
//   const [animationState, setAnimationState] = useState({
//     category: false,
//     testInfo: false,
//     features: [false, false, false, false],
//     button: false,
//     image: false,
//     additionalInfo: false,
//     benefits: [false, false, false, false]
//   });
//   const [animationCycle, setAnimationCycle] = useState(0);

//   const categories = {
//     trending: ["Flu Test", "RSV Test", "Influenza Test"],
//     new: ["PGX Test", "HGX Test", "RPX Test"],
//     tests: ["Covid Test", "Allergy Test", "Immunity Test"],
//   };

//   const testInfo = {
//     "Influenza Test": {
//       title: "Influenza Test",
//       description:
//         "Comprehensive influenza testing that differentiates between flu and other viral infections.",
//       features: [
//         "Advanced strain identification",
//         "Treatment recommendations",
//         "Tracks seasonal variations",
//         "Medical-grade accuracy",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "Flu Test": {
//       title: "Flu Test",
//       description:
//         "Quick and reliable testing to identify flu viruses and help determine appropriate treatment.",
//       features: [
//         "Rapid results",
//         "High sensitivity",
//         "Multiple strain detection",
//         "Easy sample collection",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "RSV Test": {
//       title: "RSV Test",
//       description:
//         "Specialized test for respiratory syncytial virus, common in children and adults.",
//       features: [
//         "Early detection capability",
//         "Suitable for all ages",
//         "Differentiates from other respiratory infections",
//         "Guides treatment decisions",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "PGX Test": {
//       title: "PGX Test",
//       description:
//         "Pharmacogenomic testing to determine how your genes affect medication responses.",
//       features: [
//         "Personalized medication guidance",
//         "Reduced adverse reactions",
//         "Optimized dosing",
//         "Comprehensive genetic analysis",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "HGX Test": {
//       title: "HGX Test",
//       description:
//         "Hereditary genetic testing to identify potential genetic disorders and conditions.",
//       features: [
//         "Family risk assessment",
//         "Carrier screening",
//         "Preventative care guidance",
//         "Detailed genetic mapping",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "RPX Test": {
//       title: "RPX Test",
//       description:
//         "Respiratory pathogen panel testing to identify multiple respiratory infections.",
//       features: [
//         "Multiple pathogen detection",
//         "Quick turnaround time",
//         "Comprehensive respiratory analysis",
//         "Infection source identification",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "Covid Test": {
//       title: "Covid Test",
//       description:
//         "Detection of COVID-19 virus with high accuracy and reliability.",
//       features: [
//         "Variant identification",
//         "PCR-based accuracy",
//         "Fast results",
//         "At-home options available",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "Allergy Test": {
//       title: "Allergy Test",
//       description:
//         "Comprehensive testing to identify potential allergens causing reactions.",
//       features: [
//         "Multiple allergen screening",
//         "Severity assessment",
//         "Personalized recommendations",
//         "Food and environmental testing",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//     "Immunity Test": {
//       title: "Immunity Test",
//       description:
//         "Evaluation of immune system function and antibody presence.",
//       features: [
//         "Antibody level assessment",
//         "Immune response evaluation",
//         "Vaccination effectiveness check",
//         "Immune deficiency screening",
//       ],
//       imageUrl: "/api/placeholder/500/400",
//     },
//   };

//   // Animation sequence control
//   useEffect(() => {
//     // Reset all animations when starting a new cycle
//     if (animationCycle > 0) {
//       setAnimationState({
//         category: false,
//         testInfo: false,
//         features: [false, false, false, false],
//         button: false,
//         image: false,
//         additionalInfo: false,
//         benefits: [false, false, false, false]
//       });
//     }

//     // Sequence for category animation
//     const categoryTimer = setTimeout(() => {
//       setAnimationState(prev => ({ ...prev, category: true }));
//     }, 300);

//     // Sequence for test info animation
//     const testInfoTimer = setTimeout(() => {
//       setAnimationState(prev => ({ ...prev, testInfo: true }));
//     }, 800);

//     // Features animations with staggered timing
//     const featureTimers = [];
//     for (let i = 0; i < 4; i++) {
//       featureTimers.push(
//         setTimeout(() => {
//           setAnimationState(prev => ({
//             ...prev,
//             features: prev.features.map((f, idx) => idx === i ? true : f)
//           }));
//         }, 1300 + i * 200)
//       );
//     }

//     // Button animation
//     const buttonTimer = setTimeout(() => {
//       setAnimationState(prev => ({ ...prev, button: true }));
//     }, 2300);

//     // Image animation
//     const imageTimer = setTimeout(() => {
//       setAnimationState(prev => ({ ...prev, image: true }));
//     }, 2600);

//     // Additional info animation
//     const additionalInfoTimer = setTimeout(() => {
//       setAnimationState(prev => ({ ...prev, additionalInfo: true }));
//     }, 3000);

//     // Benefits animations with staggered timing
//     const benefitTimers = [];
//     for (let i = 0; i < 4; i++) {
//       benefitTimers.push(
//         setTimeout(() => {
//           setAnimationState(prev => ({
//             ...prev,
//             benefits: prev.benefits.map((b, idx) => idx === i ? true : b)
//           }));
//         }, 3300 + i * 200)
//       );
//     }

//     // Reset and start new cycle
//     const cycleTimer = setTimeout(() => {
//       setAnimationCycle(prev => prev + 1);
//     }, 7000); // Total animation cycle time

//     // Cleanup all timers
//     return () => {
//       clearTimeout(categoryTimer);
//       clearTimeout(testInfoTimer);
//       featureTimers.forEach(timer => clearTimeout(timer));
//       clearTimeout(buttonTimer);
//       clearTimeout(imageTimer);
//       clearTimeout(additionalInfoTimer);
//       benefitTimers.forEach(timer => clearTimeout(timer));
//       clearTimeout(cycleTimer);
//     };
//   }, [animationCycle]);

//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//     setActiveTest(categories[category][0]);
//   };

//   const handleTestSelection = (test) => {
//     setActiveTest(test);
//   };

//   const getCategoryLabel = (categoryKey) => {
//     const labels = {
//       trending: "Trending",
//       new: "Newly",
//       tests: "Tests",
//     };
//     return labels[categoryKey] || categoryKey;
//   };

//   return (
//     <div className="w-full mx-auto px-4 py-12 bg-gray-50">
//       {/* Category Tabs */}
//       <div className="flex justify-center mb-12">
//         <div
//           className={`bg-white rounded-full shadow-md p-1 flex transform transition-all duration-500 ${
//             animationState.category ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           {Object.keys(categories).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`mx-1 px-8 py-2 lg:w-40 md:w-32 rounded-full text-sm font-medium transition-all ${
//                 activeCategory === category
//                   ? "bg-teal-600 text-white shadow-md transform scale-105"
//                   : "bg-transparent text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               {getCategoryLabel(category)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Test Information Display */}
//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Content */}
//           <div className="flex-1 p-8 md:p-12">
//             <div
//               className={`inline-block bg-teal-50 rounded-xl px-4 py-1 text-teal-600 text-sm font-medium mb-4 transform transition-all duration-500 ${
//                 animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               Medical Testing
//             </div>

//             <h2
//               className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative transform transition-all duration-500 delay-100 ${
//                 animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {testInfo[activeTest].title}
//               <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500"></span>
//             </h2>

//             <p
//               className={`text-gray-600 mb-8 mt-6 transform transition-all duration-500 delay-200 ${
//                 animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {testInfo[activeTest].description}
//             </p>

//             <ul className="space-y-4 mb-8">
//               {testInfo[activeTest].features.map((feature, index) => (
//                 <li 
//                   key={index} 
//                   className={`flex items-start transform transition-all duration-500 ${
//                     animationState.features[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//                   }`}
//                   style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
//                 >
//                   <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-700">{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <button
//               className={`mt-6 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center space-x-2 transform transition-all duration-500 ${
//                 animationState.button ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
//               }`}
//             >
//               <span>Learn More</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Right Content - Image */}
//           <div className="flex-1 bg-gray-100">
//             <div
//               className={`h-full w-full overflow-hidden transform transition-all duration-700 ${
//                 animationState.image ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//               }`}
//             >
//               <img
//                 src={testInfo[activeTest].imageUrl}
//                 alt={`${activeTest} illustration`}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Information Section */}
//       <div className="mt-16 text-center">
//         <h3
//           className={`text-2xl font-semibold text-gray-800 mb-4 transform transition-all duration-500 ${
//             animationState.additionalInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           Why Choose Our Testing Services
//         </h3>
//         <p
//           className={`text-gray-600 max-w-3xl mx-auto transform transition-all duration-500 delay-100 ${
//             animationState.additionalInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           Our comprehensive testing solutions provide accurate, timely results
//           with expert interpretation. Trust our medical-grade technology for all
//           your diagnostic needs.
//         </p>

//         <div className="flex flex-wrap justify-center gap-8 mt-10">
//           {["Accuracy", "Speed", "Reliability", "Expert Analysis"].map(
//             (benefit, index) => (
//               <div
//                 key={index}
//                 className={`bg-white p-6 rounded-xl shadow-md w-56 transform transition-all duration-500 ${
//                   animationState.benefits[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
//               >
//                 <div
//                   className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center"
//                 >
//                   <span className="text-teal-600 font-bold text-lg">
//                     {index + 1}
//                   </span>
//                 </div>
//                 <h4
//                   className="font-medium text-gray-800"
//                 >
//                   {benefit}
//                 </h4>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";


export default function MedicalTestsComponent() {
  // Categories and their tests
  const categories = {
    trending: ["Flu Test", "RSV Test", "Influenza Test"],
    new: ["PGX Test", "HGX Test", "RPX Test"],
    tests: ["Covid Test", "Allergy Test", "Immunity Test"],
  };
  
  // Track current category and test indices
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  
  // Convert to array for easier iteration
  const categoryKeys = Object.keys(categories);
  const activeCategory = categoryKeys[currentCategoryIndex];
  const activeTest = categories[activeCategory][currentTestIndex];
  
  // Animation states
  const [animationState, setAnimationState] = useState({
    category: false,
    testInfo: false,
    features: [false, false, false, false],
    button: false,
    image: false,
    additionalInfo: false,
    benefits: [false, false, false, false]
  });

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
      imageUrl: "Images/Testimonials/Test-3.jpg",
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
      imageUrl: "/Images/Testimonials/Test-4.jpg",
    },
  };

  // Main effect to handle category and test cycling
  useEffect(() => {
    // Duration for displaying each test before moving to next
    const cycleTime = 7000; // 7 seconds per test
    
    // Function to move to the next test/category
    const moveToNextTest = () => {
      // Reset all animations first
      setAnimationState({
        category: false,
        testInfo: false,
        features: [false, false, false, false],
        button: false,
        image: false,
        additionalInfo: false,
        benefits: [false, false, false, false]
      });
      
      // Wait a brief moment to ensure animations reset
      setTimeout(() => {
        // Calculate next test and category
        const nextTestIndex = currentTestIndex + 1;
        const testsInCurrentCategory = categories[categoryKeys[currentCategoryIndex]].length;
        
        if (nextTestIndex >= testsInCurrentCategory) {
          // Move to next category
          const nextCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
          setCurrentCategoryIndex(nextCategoryIndex);
          setCurrentTestIndex(0);
        } else {
          // Stay in same category, move to next test
          setCurrentTestIndex(nextTestIndex);
        }
        
        // Start animations for the new test
        startAnimations();
      }, 300); // Short delay before starting new animations
    };
    
    // Initial animations start
    const initialTimer = setTimeout(startAnimations, 300);
    
    // Set timer for next test cycle
    const cycleTimer = setTimeout(moveToNextTest, cycleTime);
    
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(cycleTimer);
    };
  }, [currentCategoryIndex, currentTestIndex]);

  // Function to trigger animations in sequence
  const startAnimations = () => {
    // Category animation
    setTimeout(() => {
      setAnimationState(prev => ({ ...prev, category: true }));
    }, 300);

    // Test info animation
    setTimeout(() => {
      setAnimationState(prev => ({ ...prev, testInfo: true }));
    }, 800);

    // Features animations with staggered timing
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setAnimationState(prev => ({
          ...prev,
          features: prev.features.map((f, idx) => idx === i ? true : f)
        }));
      }, 1300 + i * 200);
    }

    // Button animation
    setTimeout(() => {
      setAnimationState(prev => ({ ...prev, button: true }));
    }, 2300);

    // Image animation
    setTimeout(() => {
      setAnimationState(prev => ({ ...prev, image: true }));
    }, 2600);

    // Additional info animation
    setTimeout(() => {
      setAnimationState(prev => ({ ...prev, additionalInfo: true }));
    }, 3000);

    // Benefits animations with staggered timing
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setAnimationState(prev => ({
          ...prev,
          benefits: prev.benefits.map((b, idx) => idx === i ? true : b)
        }));
      }, 3300 + i * 200);
    }
  };

  // Manual category change handler (for user interaction)
  const handleCategoryChange = (category) => {
    const categoryIndex = categoryKeys.indexOf(category);
    setCurrentCategoryIndex(categoryIndex);
    setCurrentTestIndex(0);
    
    // Reset and restart animations
    setAnimationState({
      category: false,
      testInfo: false,
      features: [false, false, false, false],
      button: false,
      image: false,
      additionalInfo: false,
      benefits: [false, false, false, false]
    });
    
    setTimeout(startAnimations, 300);
  };

  // Manual test selection handler (for user interaction)
  const handleTestSelection = (test) => {
    const testIndex = categories[activeCategory].indexOf(test);
    if (testIndex !== -1) {
      setCurrentTestIndex(testIndex);
      
      // Reset and restart animations
      setAnimationState({
        category: false,
        testInfo: false,
        features: [false, false, false, false],
        button: false,
        image: false,
        additionalInfo: false,
        benefits: [false, false, false, false]
      });
      
      setTimeout(startAnimations, 300);
    }
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
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div
          className={`bg-white rounded-full shadow-md p-1 flex transform transition-all duration-500 ${
            animationState.category ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categoryKeys.map((category) => (
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

      {/* Test Information Display */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="flex-1 p-8 md:p-12">
            <div
              className={`inline-block bg-teal-50 rounded-xl px-4 py-1 text-teal-600 text-sm font-medium mb-4 transform transition-all duration-500 ${
                animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              Medical Testing
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative transform transition-all duration-500 delay-100 ${
                animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {testInfo[activeTest].title}
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500"></span>
            </h2>

            <p
              className={`text-gray-600 mb-8 mt-6 transform transition-all duration-500 delay-200 ${
                animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {testInfo[activeTest].description}
            </p>

            <ul className="space-y-4 mb-8">
              {testInfo[activeTest].features.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-start transform transition-all duration-500 ${
                    animationState.features[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center space-x-2 transform transition-all duration-500 ${
                animationState.button ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
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
              className={`h-full w-full overflow-hidden transform transition-all duration-700 ${
                animationState.image ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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
          className={`text-2xl font-semibold text-gray-800 mb-4 transform transition-all duration-500 ${
            animationState.additionalInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why Choose Our Testing Services
        </h3>
        <p
          className={`text-gray-600 max-w-3xl mx-auto transform transition-all duration-500 delay-100 ${
            animationState.additionalInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our comprehensive testing solutions provide accurate, timely results
          with expert interpretation. Trust our medical-grade technology for all
          your diagnostic needs.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {["Accuracy", "Speed", "Reliability", "Expert Analysis"].map(
            (benefit, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md w-56 transform transition-all duration-500 ${
                  animationState.benefits[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-teal-600 font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h4
                  className="font-medium text-gray-800"
                >
                  {benefit}
                </h4>
              </div>
            )
          )}
        </div>
      </div>

      {/* Debug info - you can remove this in production */}
      <div className="mt-10 text-sm text-gray-500 text-center">
        Current Category: {getCategoryLabel(activeCategory)} | Current Test: {activeTest}
      </div>
    </div>
  );
}