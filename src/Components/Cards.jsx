// import { useState, useEffect } from "react";
// import { CheckCircle } from "lucide-react";

// export default function MedicalTestsComponent() {
//   const categories = {
//     trending: ["Respiratory Infection", "RSV(Respiratory Synctial Virus)"],
//     new: [
//       "Influenza(A & B)",
//       "PGX(Pharmacogenomics)",
//       "HX(Heriditary)",
//       "RPX(Respiratory)",
//     ],
//     tests: [
//       "Respiratory Infection",
//       "RSV(Respiratory Synctial Virus)", // ✅ Fixed missing closing parenthesis
//       "Influenza(A & B)",
//       "PGX(Pharmacogenomics)",
//       "HX(Heriditary)",
//       "RPX(Respiratory)",
//     ],
//   };

//   const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
//   const [currentTestIndex, setCurrentTestIndex] = useState(0);

//   const categoryKeys = Object.keys(categories);
//   const activeCategory = categoryKeys[currentCategoryIndex];
//   const activeTest = categories[activeCategory][currentTestIndex];

//   const [animationState, setAnimationState] = useState({
//     category: false,
//     testInfo: false,
//     features: [false, false, false, false],
//     button: false,
//     image: false,
//     additionalInfo: false,
//     benefits: [false, false, false, false],
//   });

//   const testInfo = {
//     "Respiratory Infection": {
//       title: "Respiratory Infection",
//       description:
//         " An illness that affects the respiratory system, including the nose, throat, airways, and lungs..",
//       features: [
//         "A stuffy or runny nose",
//         "Breathlessness, tight chest or wheezing",
//         "A high temperature",
//         "A sore throat",
//       ],
//       imageUrl: "Images/Testimonials/Test-1.jpg",
//     },
//     "RSV(Respiratory Synctial Virus)": {
//       title: "RSV(Respiratory Synctial Virus)",
//       description:
//         "RSV is a common respiratory virus that usually causes mild, cold-like symptoms.",
//       features: [
//         "Congested or runny nose",
//         "Low-grade fever",
//         "Dry cough",
//         "Headache",
//       ],
//       imageUrl: "Images/Testimonials/Test-2.jpg",
//     },
//     "Influenza(A & B)": {
//       title: "Influenza(A & B)",
//       description:
//         "Influenza A and B are viruses that cause seasonal flu, with A often leading to more severe outbreaks and B generally causing milder, localized infections. ",
//       features: [
//         "Loss of consciousness",
//         "Shortness of breath",
//         "Severe dizziness",
//         "Nasal congestion",
//       ],
//       imageUrl: "Images/Testimonials/Test-3.jpg",
//     },
//     "PGX(Pharmacogenomics)": {
//       title: "PGX(Pharmacogenomics)",
//       description:
//         "Pharmacogenomics (PGx), the study of how genes affect a person's response to drugs, offers a range of features and benefits that are particularly valuable in personalized medicine.",
//       features: [
//         "Adverse Drug Reaction (ADR) Reduction",
//         "Personalized Drug Therapy",
//         "Preemptive Testing",
//         "Integration with EHRs",
//       ],
//       imageUrl: "Images/Testimonials/Test-4.jpg",
//     },
//     "HX(Heriditary)": {
//       title: "HX(Heriditary)",
//       description:
//         "HX hereditary (Hereditary Xerocytosis) is a rare inherited red blood cell disorder characterized by dehydrated erythrocytes due to defective ion transport.",
//       features: [
//         "Red blood cell dehydration and reduced osmotic fragility",
//         "Caused by mutations in PIEZO1 or KCNN4 genes",
//         "Thrombotic complications in some cases",
//         "Autosomal dominant inheritance",
//       ],
//       imageUrl: "Images/Testimonials/Test-5.jpg",
//     },
//     "RPX(Respiratory)": {
//       title: "RPX(Respiratory)",
//       description:
//         "RPX (Respiratory Pathogen) refers to microorganisms, such as viruses, bacteria, or fungi, that cause infections in the respiratory system.",
//       features: [
//         "Loss of appetite",
//         "Trouble breathing",
//         "Sore throat",
//         "Fatigue",
//       ],
//       imageUrl: "Images/Testimonials/Test-6.jpg",
//     },
//   };

//   useEffect(() => {
//     const cycleTime = 7000;

//     const moveToNextTest = () => {
//       setAnimationState({
//         category: false,
//         testInfo: false,
//         features: [false, false, false, false],
//         button: false,
//         image: false,
//         additionalInfo: false,
//         benefits: [false, false, false, false],
//       });

//       setTimeout(() => {
//         const nextTestIndex = currentTestIndex + 1;
//         const testsInCurrentCategory =
//           categories[categoryKeys[currentCategoryIndex]].length;

//         if (nextTestIndex >= testsInCurrentCategory) {
//           const nextCategoryIndex =
//             (currentCategoryIndex + 1) % categoryKeys.length;
//           setCurrentCategoryIndex(nextCategoryIndex);
//           setCurrentTestIndex(0);
//         } else {
//           setCurrentTestIndex(nextTestIndex);
//         }

//         startAnimations();
//       }, 300);
//     };

//     const initialTimer = setTimeout(startAnimations, 300);
//     const cycleTimer = setTimeout(moveToNextTest, cycleTime);

//     return () => {
//       clearTimeout(initialTimer);
//       clearTimeout(cycleTimer);
//     };
//   }, [currentCategoryIndex, currentTestIndex]);

//   const startAnimations = () => {
//     setTimeout(() => {
//       setAnimationState((prev) => ({ ...prev, category: true }));
//     }, 300);
//     setTimeout(() => {
//       setAnimationState((prev) => ({ ...prev, testInfo: true }));
//     }, 800);
//     for (let i = 0; i < 4; i++) {
//       setTimeout(() => {
//         setAnimationState((prev) => ({
//           ...prev,
//           features: prev.features.map((f, idx) => (idx === i ? true : f)),
//         }));
//       }, 1300 + i * 200);
//     }
//     setTimeout(() => {
//       setAnimationState((prev) => ({ ...prev, button: true }));
//     }, 2300);
//     setTimeout(() => {
//       setAnimationState((prev) => ({ ...prev, image: true }));
//     }, 2600);
//     setTimeout(() => {
//       setAnimationState((prev) => ({ ...prev, additionalInfo: true }));
//     }, 3000);
//     for (let i = 0; i < 4; i++) {
//       setTimeout(() => {
//         setAnimationState((prev) => ({
//           ...prev,
//           benefits: prev.benefits.map((b, idx) => (idx === i ? true : b)),
//         }));
//       }, 3300 + i * 200);
//     }
//   };

//   const handleCategoryChange = (category) => {
//     const categoryIndex = categoryKeys.indexOf(category);
//     setCurrentCategoryIndex(categoryIndex);
//     setCurrentTestIndex(0);
//     setAnimationState({
//       category: false,
//       testInfo: false,
//       features: [false, false, false, false],
//       button: false,
//       image: false,
//       additionalInfo: false,
//       benefits: [false, false, false, false],
//     });
//     setTimeout(startAnimations, 300);
//   };

//   const handleTestSelection = (test) => {
//     const testIndex = categories[activeCategory].indexOf(test);
//     if (testIndex !== -1) {
//       setCurrentTestIndex(testIndex);
//       setAnimationState({
//         category: false,
//         testInfo: false,
//         features: [false, false, false, false],
//         button: false,
//         image: false,
//         additionalInfo: false,
//         benefits: [false, false, false, false],
//       });
//       setTimeout(startAnimations, 300);
//     }
//   };

//   const getCategoryLabel = (categoryKey) => {
//     const labels = {
//       trending: "Trending",
//       new: "Newly",
//       tests: "Tests",
//     };
//     return labels[categoryKey] || categoryKey;
//   };

//   const currentTestData = testInfo[activeTest]; // ✅ safer reference

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50">
//       <div className="flex justify-center mb-12">
//         <div
//           className={`bg-white rounded-full shadow-md p-1 flex transform transition-all duration-500 ${
//             animationState.category
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
//           }`}
//         >
//           {categoryKeys.map((category) => (
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

//       <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//         <div className="flex flex-col md:flex-row">
//           <div className="flex-1 p-8 md:p-12">
//             <div
//               className={`inline-block bg-teal-50 rounded-xl px-4 py-1 text-teal-600 text-sm font-medium mb-4 transform transition-all duration-500 ${
//                 animationState.testInfo
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-10"
//               }`}
//             >
//               Medical Testing
//             </div>

//             <h2
//               className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative transform transition-all duration-500 delay-100 ${
//                 animationState.testInfo
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {currentTestData?.title || "Unknown Test"}
//               <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500"></span>
//             </h2>

//             <p
//               className={`text-gray-600 mb-8 mt-6 transform transition-all duration-500 delay-200 ${
//                 animationState.testInfo
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-10"
//               }`}
//             >
//               {currentTestData?.description || "No description available."}
//             </p>

//             <ul className="space-y-4 mb-8">
//               {currentTestData?.features?.map((feature, index) => (
//                 <li
//                   key={index}
//                   className={`flex items-start transform transition-all duration-500 ${
//                     animationState.features[index]
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-10"
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
//                 animationState.button
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-10"
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

//           <div className="flex-1 bg-gray-100">
//             <div
//               className={`h-full w-full overflow-hidden transform transition-all duration-700 ${
//                 animationState.image
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 translate-x-10"
//               }`}
//             >
//               <img
//                 src={currentTestData?.imageUrl || "Images/placeholder.jpg"}
//                 alt={`${activeTest} illustration`}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-16 text-center">
//         <h3
//           className={`text-2xl font-semibold text-gray-800 mb-4 transform transition-all duration-500 ${
//             animationState.additionalInfo
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
//           }`}
//         >
//           Why Choose Our Testing Services
//         </h3>
//         <p
//           className={`text-gray-600 max-w-3xl mx-auto transform transition-all duration-500 delay-100 ${
//             animationState.additionalInfo
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 translate-y-10"
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
//                   animationState.benefits[index]
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-10"
//                 }`}
//                 style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
//               >
//                 <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
//                   <span className="text-teal-600 font-bold text-lg">
//                     {index + 1}
//                   </span>
//                 </div>
//                 <h4 className="font-medium text-gray-800">{benefit}</h4>
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       <div className="mt-10 text-sm text-gray-500 text-center">
//         Current Category: {getCategoryLabel(activeCategory)} | Current Test:{" "}
//         {activeTest}
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function MedicalTestsComponent() {
  const categories = {
    trending: ["Respiratory Infection", "RSV(Respiratory Synctial Virus)"],
    new: [
      "Influenza(A & B)",
      "PGX(Pharmacogenomics)",
      "HX(Heriditary)",
      "RPX(Respiratory)",
    ],
    tests: [
      "Respiratory Infection",
      "RSV(Respiratory Synctial Virus)",
      "Influenza(A & B)",
      "PGX(Pharmacogenomics)",
      "HX(Heriditary)",
      "RPX(Respiratory)",
    ],
  };

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [manualNavigation, setManualNavigation] = useState(false);

  const categoryKeys = Object.keys(categories);
  const activeCategory = categoryKeys[currentCategoryIndex];
  const activeTest = categories[activeCategory][currentTestIndex];

  const [animationState, setAnimationState] = useState({
    category: false,
    testInfo: false,
    features: [false, false, false, false],
    button: false,
    image: false,
    additionalInfo: false,
    benefits: [false, false, false, false],
  });

  const testInfo = {
    "Respiratory Infection": {
      title: "Respiratory Infection",
      description:
        " An illness that affects the respiratory system, including the nose, throat, airways, and lungs..",
      features: [
        "A stuffy or runny nose",
        "Breathlessness, tight chest or wheezing",
        "A high temperature",
        "A sore throat",
      ],
      imageUrl: "Images/Testimonials/Test-1.jpg",
    },
    "RSV(Respiratory Synctial Virus)": {
      title: "RSV(Respiratory Synctial Virus)",
      description:
        "RSV is a common respiratory virus that usually causes mild, cold-like symptoms.",
      features: ["Congested or runny nose", "Low-grade fever", "Dry cough", "Headache"],
      imageUrl: "Images/Testimonials/Test-2.jpg",
    },
    "Influenza(A & B)": {
      title: "Influenza(A & B)",
      description:
        "Influenza A and B are viruses that cause seasonal flu, with A often leading to more severe outbreaks and B generally causing milder, localized infections.",
      features: ["Loss of consciousness", "Shortness of breath", "Severe dizziness", "Nasal congestion"],
      imageUrl: "Images/Testimonials/Test-3.jpg",
    },
    "PGX(Pharmacogenomics)": {
      title: "PGX(Pharmacogenomics)",
      description:
        "Pharmacogenomics (PGx), the study of how genes affect a person's response to drugs, offers a range of features and benefits that are particularly valuable in personalized medicine.",
      features: [
        "Adverse Drug Reaction (ADR) Reduction",
        "Personalized Drug Therapy",
        "Preemptive Testing",
        "Integration with EHRs",
      ],
      imageUrl: "Images/Testimonials/Test-4.jpg",
    },
    "HX(Heriditary)": {
      title: "HX(Heriditary)",
      description:
        "HX hereditary (Hereditary Xerocytosis) is a rare inherited red blood cell disorder characterized by dehydrated erythrocytes due to defective ion transport.",
      features: [
        "Red blood cell dehydration and reduced osmotic fragility",
        "Caused by mutations in PIEZO1 or KCNN4 genes",
        "Thrombotic complications in some cases",
        "Autosomal dominant inheritance",
      ],
      imageUrl: "Images/Testimonials/Test-5.jpg",
    },
    "RPX(Respiratory)": {
      title: "RPX(Respiratory)",
      description:
        "RPX (Respiratory Pathogen) refers to microorganisms, such as viruses, bacteria, or fungi, that cause infections in the respiratory system.",
      features: ["Loss of appetite", "Trouble breathing", "Sore throat", "Fatigue"],
      imageUrl: "Images/Testimonials/Test-6.jpg",
    },
  };

  useEffect(() => {
    if (manualNavigation) return;

    const cycleTime = 7000;

    const moveToNextTest = () => {
      setAnimationState({
        category: false,
        testInfo: false,
        features: [false, false, false, false],
        button: false,
        image: false,
        additionalInfo: false,
        benefits: [false, false, false, false],
      });

      setTimeout(() => {
        const nextTestIndex = currentTestIndex + 1;
        const testsInCurrentCategory =
          categories[categoryKeys[currentCategoryIndex]].length;

        if (nextTestIndex >= testsInCurrentCategory) {
          const nextCategoryIndex =
            (currentCategoryIndex + 1) % categoryKeys.length;
          setCurrentCategoryIndex(nextCategoryIndex);
          setCurrentTestIndex(0);
        } else {
          setCurrentTestIndex(nextTestIndex);
        }

        startAnimations();
      }, 300);
    };

    const initialTimer = setTimeout(startAnimations, 300);
    const cycleTimer = setTimeout(moveToNextTest, cycleTime);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(cycleTimer);
    };
  }, [currentCategoryIndex, currentTestIndex, manualNavigation]);

  const startAnimations = () => {
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, category: true }));
    }, 300);
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, testInfo: true }));
    }, 800);
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setAnimationState((prev) => ({
          ...prev,
          features: prev.features.map((f, idx) => (idx === i ? true : f)),
        }));
      }, 1300 + i * 200);
    }
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, button: true }));
    }, 2300);
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, image: true }));
    }, 2600);
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, additionalInfo: true }));
    }, 3000);
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        setAnimationState((prev) => ({
          ...prev,
          benefits: prev.benefits.map((b, idx) => (idx === i ? true : b)),
        }));
      }, 3300 + i * 200);
    }
  };

  const handlePrevTest = () => {
    setManualNavigation(true);
    let prevTestIndex = currentTestIndex - 1;
    let prevCategoryIndex = currentCategoryIndex;

    if (prevTestIndex < 0) {
      prevCategoryIndex = (currentCategoryIndex - 1 + categoryKeys.length) % categoryKeys.length;
      prevTestIndex = categories[categoryKeys[prevCategoryIndex]].length - 1;
    }

    setCurrentCategoryIndex(prevCategoryIndex);
    setCurrentTestIndex(prevTestIndex);
    resetAnimations();
  };

  const handleNextTest = () => {
    setManualNavigation(true);
    let nextTestIndex = currentTestIndex + 1;
    let nextCategoryIndex = currentCategoryIndex;

    if (nextTestIndex >= categories[categoryKeys[nextCategoryIndex]].length) {
      nextCategoryIndex = (currentCategoryIndex + 1) % categoryKeys.length;
      nextTestIndex = 0;
    }

    setCurrentCategoryIndex(nextCategoryIndex);
    setCurrentTestIndex(nextTestIndex);
    resetAnimations();
  };

  const resetAnimations = () => {
    setAnimationState({
      category: false,
      testInfo: false,
      features: [false, false, false, false],
      button: false,
      image: false,
      additionalInfo: false,
      benefits: [false, false, false, false],
    });
    setTimeout(() => {
      startAnimations();
      setManualNavigation(false);
    }, 300);
  };

  const handleCategoryChange = (category) => {
    const categoryIndex = categoryKeys.indexOf(category);
    setManualNavigation(true);
    setCurrentCategoryIndex(categoryIndex);
    setCurrentTestIndex(0);
    resetAnimations();
  };

  const getCategoryLabel = (categoryKey) => {
    const labels = {
      trending: "Trending",
      new: "Newly",
      tests: "Tests",
    };
    return labels[categoryKey] || categoryKey;
  };

  const currentTestData = testInfo[activeTest];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-gray-50">
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

      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={handlePrevTest}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNextTest}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-12">
            <div className={`inline-block bg-teal-50 rounded-xl px-4 py-1 text-teal-600 text-sm font-medium mb-4 transition-all ${
              animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              Medical Testing
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative transition-all duration-500 delay-100 ${
              animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              {currentTestData?.title || "Unknown Test"}
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-teal-500"></span>
            </h2>
            <p className={`text-gray-600 mb-8 mt-6 transition-all duration-500 delay-200 ${
              animationState.testInfo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              {currentTestData?.description || "No description available."}
            </p>

            <ul className="space-y-4 mb-8">
              {currentTestData?.features?.map((feature, index) => (
                <li key={index} className={`flex items-start transition-all duration-500 ${
                  animationState.features[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`} style={{ transitionDelay: `${0.3 + index * 0.1}s` }}>
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`mt-6 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg flex items-center space-x-2 transition-all duration-500 ${
              animationState.button ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex-1 bg-gray-100">
            <div className={`h-full w-full overflow-hidden transition-all duration-700 ${
              animationState.image ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <img
                src={currentTestData?.imageUrl || "Images/placeholder.jpg"}
                alt={`${activeTest} illustration`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-16 text-center">
        <h3 className={`text-2xl font-semibold text-gray-800 mb-4 transition-all duration-500 ${
          animationState.additionalInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Why Choose Our Testing Services
        </h3>
        <p className={`text-gray-600 max-w-3xl mx-auto transition-all duration-500 delay-100 ${
          animationState.additionalInfo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Our comprehensive testing solutions provide accurate, timely results with expert interpretation. Trust our medical-grade technology for all your diagnostic needs.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {["Accuracy", "Speed", "Reliability", "Expert Analysis"].map((benefit, index) => (
            <div key={index} className={`bg-white p-6 rounded-xl shadow-md w-56 transition-all duration-500 ${
              animationState.benefits[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}>
              <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
                <span className="text-teal-600 font-bold text-lg">{index + 1}</span>
              </div>
              <h4 className="font-medium text-gray-800">{benefit}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-sm text-gray-500 text-center">
        Current Category: {getCategoryLabel(activeCategory)} | Current Test: {activeTest}
      </div>
    </div>
  );
}

