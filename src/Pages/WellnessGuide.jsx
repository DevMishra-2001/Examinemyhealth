// import {
//   Activity,
//   BadgeAlert,
//   Boxes,
//   Clock2,
//   Component,
//   Dna,
//   HeartPulse,
//   Hourglass,
//   OctagonAlert,
//   RefreshCcwDot,
//   ShieldCheck,
//   ThermometerSun,
//   UmbrellaOff,
// } from "lucide-react";
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { IoMdContacts } from "react-icons/io";
// import { LuTestTube } from "react-icons/lu";
// import { FaHandHoldingMedical, FaHeartPulse } from "react-icons/fa6";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";
// import { SiMetabase, SiQuicktime } from "react-icons/si";
// import { MdPersonalInjury } from "react-icons/md";
// import { GiDuration, GiProgression } from "react-icons/gi";
// import Navbar from "../Components/Navbar";

// const WellnessGuide = () => {
//   // Section refs for URL and navigation
//   const navigate = useNavigate();
//   const location = useLocation();
//   const sectionsRef = useRef([]);

//   // Track current section for dynamic button
//   const [currentSection, setCurrentSection] = useState("respiratory");

//   // Global InView settings for better animation triggers
//   const animationOptions = {
//     triggerOnce: false,
//     threshold: 0.1, // Lower threshold for easier triggering
//     rootMargin: "0px 0px -10% 0px", // Trigger animations a bit earlier
//   };

//   // Respiratory section refs
//   const { ref: respiratoryImageRef, inView: respiratoryImageInView } =
//     useInView(animationOptions);
//   const { ref: respiratoryTextRef, inView: respiratoryTextInView } =
//     useInView(animationOptions);
//   const { ref: respiratoryHeaderRef, inView: respiratoryHeaderInView } =
//     useInView(animationOptions);
//   const { ref: respiratoryBottomRef, inView: respiratoryBottomInView } =
//     useInView(animationOptions);

//   // Individual items for respiratory section
//   const { ref: respiratorySymptom1Ref, inView: respiratorySymptom1InView } =
//     useInView(animationOptions);
//   const { ref: respiratorySymptom2Ref, inView: respiratorySymptom2InView } =
//     useInView(animationOptions);
//   const { ref: respiratorySymptom3Ref, inView: respiratorySymptom3InView } =
//     useInView(animationOptions);

//   // RSV section refs
//   const { ref: rsvImageRef, inView: rsvImageInView } =
//     useInView(animationOptions);
//   const { ref: rsvTextRef, inView: rsvTextInView } =
//     useInView(animationOptions);
//   const { ref: rsvHeaderRef, inView: rsvHeaderInView } =
//     useInView(animationOptions);
//   const { ref: rsvBottomRef, inView: rsvBottomInView } =
//     useInView(animationOptions);

//   // Individual items for RSV section
//   const { ref: rsvSymptom1Ref, inView: rsvSymptom1InView } =
//     useInView(animationOptions);
//   const { ref: rsvSymptom2Ref, inView: rsvSymptom2InView } =
//     useInView(animationOptions);
//   const { ref: rsvSymptom3Ref, inView: rsvSymptom3InView } =
//     useInView(animationOptions);

//   // Influenza section refs
//   const { ref: influenzaImageRef, inView: influenzaImageInView } =
//     useInView(animationOptions);
//   const { ref: influenzaTextRef, inView: influenzaTextInView } =
//     useInView(animationOptions);
//   const { ref: influenzaHeaderRef, inView: influenzaHeaderInView } =
//     useInView(animationOptions);
//   const { ref: influenzaBottomRef, inView: influenzaBottomInView } =
//     useInView(animationOptions);

//   // Individual items for RSV section
//   const { ref: influenzaSymptom1Ref, inView: influenzaSymptom1InView } =
//     useInView(animationOptions);
//   const { ref: influenzaSymptom2Ref, inView: influenzaSymptom2InView } =
//     useInView(animationOptions);
//   const { ref: influenzaSymptom3Ref, inView: influenzaSymptom3InView } =
//     useInView(animationOptions);
//   const { ref: influenzaSymptom4Ref, inView: influenzaSymptom4InView } =
//     useInView(animationOptions);

//   // RPX section refs
//   const { ref: rpxImageRef, inView: rpxImageInView } =
//     useInView(animationOptions);
//   const { ref: rpxTextRef, inView: rpxTextInView } =
//     useInView(animationOptions);
//   const { ref: rpxHeaderRef, inView: rpxHeaderInView } =
//     useInView(animationOptions);
//   const { ref: rpxBottomRef, inView: rpxBottomInView } =
//     useInView(animationOptions);

//   // Individual items for RSV section
//   const { ref: rpxSymptom1Ref, inView: rpxSymptom1InView } =
//     useInView(animationOptions);
//   const { ref: rpxSymptom2Ref, inView: rpxSymptom2InView } =
//     useInView(animationOptions);
//   const { ref: rpxSymptom3Ref, inView: rpxSymptom3InView } =
//     useInView(animationOptions);

//   // Pharmacogenomics section refs
//   const { ref: pharmacogenomicsImageRef, inView: pharmacogenomicsImageInView } =
//     useInView(animationOptions);
//   const { ref: pharmacogenomicsTextRef, inView: pharmacogenomicsTextInView } =
//     useInView(animationOptions);
//   const {
//     ref: pharmacogenomicsHeaderRef,
//     inView: pharmacogenomicsHeaderInView,
//   } = useInView(animationOptions);
//   const {
//     ref: pharmacogenomicsBottomRef,
//     inView: pharmacogenomicsBottomInView,
//   } = useInView(animationOptions);

//   //  Individual items for Pharmacogenomics section
//   const {
//     ref: pharmacogenomicsSymptom1Ref,
//     inView: pharmacogenomicsSymptom1InView,
//   } = useInView(animationOptions);
//   const {
//     ref: pharmacogenomicsSymptom2Ref,
//     inView: pharmacogenomicsSymptom2InView,
//   } = useInView(animationOptions);
//   const {
//     ref: pharmacogenomicsSymptom3Ref,
//     inView: pharmacogenomicsSymptom3InView,
//   } = useInView(animationOptions);

//   // Hereditary section refs
//   const { ref: hereditaryImageRef, inView: hereditaryImageInView } =
//     useInView(animationOptions);
//   const { ref: hereditaryTextRef, inView: hereditaryTextInView } =
//     useInView(animationOptions);
//   const { ref: hereditaryHeaderRef, inView: hereditaryHeaderInView } =
//     useInView(animationOptions);
//   const { ref: hereditaryBottomRef, inView: hereditaryBottomInView } =
//     useInView(animationOptions);

//   // Individual items for Hereditary section
//   const { ref: hereditarySymptom1Ref, inView: hereditarySymptom1InView } =
//     useInView(animationOptions);
//   const { ref: hereditarySymptom2Ref, inView: hereditarySymptom2InView } =
//     useInView(animationOptions);
//   const { ref: hereditarySymptom3Ref, inView: hereditarySymptom3InView } =
//     useInView(animationOptions);

//   const sections = [
//     { id: "respiratory", title: "COVID-19" },
//     { id: "rsv", title: "RSV" },
//     { id: "influenza", title: "Influenza A & B" },
//     { id: "rpx", title: "Respiratory Health" },
//     { id: "pharmacogenomics", title: "Pharmacogenomics" },
//     { id: "hereditary", title: "Hereditary Conditions" },
//   ];

//   // Define a function to get the test URL based on current section
//   const getTestUrl = () => {
//     switch (currentSection) {
//       case "respiratory":
//         return "/test/covid";
//       case "rsv":
//         return "/test/rsv";
//       case "influenza":
//         return "/test/influenza";
//       case "rpx":
//         return "/test/respiratory-panel";
//       case "pharmacogenomics":
//         return "/test/pharmacogenomics";
//       case "hereditary":
//         return "/test/hereditary";
//       default:
//         return "/tests";
//     }
//   };

//   // Get display name for the button
//   const getTestDisplayName = () => {
//     const section = sections.find((s) => s.id === currentSection);
//     return section ? section.title : "Test";
//   };

//   // Section observer for URL navigation and current section update
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionId = entry.target.id;
//             // Update URL without full page reload
//             navigate(`/wellness-guide/${sectionId}`, { replace: true });
//             // Update current section for dynamic button
//             setCurrentSection(sectionId);
//           }
//         });
//       },
//       {
//         threshold: 0.3, // Trigger when 30% of section is visible
//         rootMargin: "-5% 0px -5% 0px", // Adjusted for better triggering
//       }
//     );

//     // Observe all sections
//     sectionsRef.current.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       // Cleanup observer
//       sectionsRef.current.forEach((section) => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, [navigate]);

//   // Handle direct navigation to sections
//   useEffect(() => {
//     const pathSegments = location.pathname.split("/");
//     const sectionId = pathSegments[pathSegments.length - 1];
//     const sectionElement = document.getElementById(sectionId);

//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: "smooth" });
//       // Also update current section state
//       if (sections.some((section) => section.id === sectionId)) {
//         setCurrentSection(sectionId);
//       }
//     }
//   }, [location.pathname]);

//   // Floating button component
//   const FloatingTestButton = () => {
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className=
//         "fixed bottom-8 right-8 z-50 bg-white shadow-lg px-6 py-3 rounded-full cursor-pointer hover:shadow-xl transition-all"
//         // "bottom-8 right-8 z-50  w-40 h-16 cursor-pointer text-white text-base rounded-2xl border-0 relative bg-[#100720] transition-all duration-100 hover:scale-100 active:scale-90 active:rotate-3 active:bg-gradient-to-r active:from-[#ff5ef7] active:to-[#02f5ff] active:duration-500 after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-r after:from-[#ff5ef7] after:to-[#02f5ff] after:blur-xl after:-z-10 after:left-0 after:top-0"
//       >
//         <Link to={getTestUrl()} className="flex items-center space-x-3">
//           <span className="text-lg font-semibold">
//             Get {getTestDisplayName()} Test
//           </span>
//           <FaHeartPulse className="text-red-500 w-5 h-5" />
//         </Link>
//       </motion.div>
//     );
//   };

//   return (
//     <>
//       <div className="min-h-screen w-full bg-white">
//         <div className="mx-auto bg-[#e8e7e3] shadow-lg rounded-lg p-12 overflow-hidden">
//           {/* COVID-19/RESPIRATORY SECTION */}
//           <div
//             id="respiratory"
//             ref={(el) => {
//               sectionsRef.current[0] = el;
//             }}
//             className="grid grid-cols-2 gap-16 min-h-screen"
//           >
//             {/* Left column */}
//             <div className="space-y-8">
//               <div className="flex justify-center mt-6">
//                 <motion.div
//                   ref={respiratoryImageRef}
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratoryImageInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.5 }}
//                   className="max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
//                 >
//                   <img
//                     src="/Images/WellnessGuide/covid-19.jpg"
//                     alt="Book on fabric"
//                     className="w-30px h-30px object-cover"
//                   />
//                 </motion.div>
//               </div>

//               <motion.p
//                 ref={respiratoryTextRef}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={
//                   respiratoryTextInView
//                     ? { opacity: 1, x: 0 }
//                     : { opacity: 0, x: -100 }
//                 }
//                 transition={{ duration: 0.7 }}
//                 className="text-sm leading-relaxed text-gray-700"
//               >
//                 The moment you feel that slight scratch in your throat or
//                 unusual fatigue, your mind might drift to the possibility of
//                 Respiratory. While we've learned to live alongside this virus,
//                 understanding its impact and taking prompt action remains
//                 crucial for our collective well-being.
//               </motion.p>

// //               <div className="">
// //                 <motion.div
//                   ref={respiratorySymptom1Ref}
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratorySymptom1InView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.1 }}
//                   className="flex items-center space-x-2 "
//                 >
//                   <Activity className="w-5 h-5 text-green-500" />
//                   <h3 className="text-lg font-bold mb-2">
//                     Respiratory Changes
//                   </h3>
//                 </motion.div>
//                 <motion.ul
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratorySymptom1InView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   className="list-disc list-inside space-y-2 ml-8 font-semibold"
//                 >
//                   <li className="marker:text-yellow-400">
//                     Persistent dry cough
//                   </li>
//                   <li className="marker:text-yellow-400">
//                     Shortness of breath
//                   </li>
//                   <li className="marker:text-yellow-400">
//                     Changes in smell or taste
//                   </li>
//                 </motion.ul>
//               </div>

//               <div className="mb-2">
//                 <motion.div
//                   ref={respiratorySymptom2Ref}
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratorySymptom2InView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.3 }}
//                   className="flex items-center space-x-2"
//                 >
//                   <ThermometerSun className="w-5 h-5 text-yellow-700" />
//                   <h3 className="text-lg font-bold mb-2">
//                     Physical Discomfort
//                   </h3>
//                 </motion.div>
//                 <motion.ul
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratorySymptom2InView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.4 }}
//                   className="list-disc list-inside space-y-2 ml-8 font-semibold"
//                 >
//                   <li className="marker:text-yellow-400">Unusual fatigue</li>
//                   <li className="marker:text-yellow-400">Body aches</li>
//                   <li className="marker:text-yellow-400">
//                     Fever or temperature elevation
//                   </li>
//                 </motion.ul>
//               </div>

//               <div className="mb-2">
//                 <motion.div
//                   ref={respiratorySymptom3Ref}
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratorySymptom3InView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.5 }}
//                   className="flex items-center space-x-2"
//                 >
//                   <RefreshCcwDot className="w-5 h-5 text-red-700" />
//                   <h3 className="text-lg font-bold mb-2">
//                     Gastrointestinal Issues
//                   </h3>
//                 </motion.div>
//                 <motion.ul
//                   initial={{ opacity: 0, x: -100 }}
//                   animate={
//                     respiratorySymptom3InView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: -100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.6 }}
//                   className="list-disc list-inside space-y-2 ml-8 font-semibold"
//                 >
//                   <li className="marker:text-yellow-400">
//                     Unexpected loss of appetite
//                   </li>
//                   <li className="marker:text-yellow-400">
//                     Nausea or digestive discomfort
//                   </li>
//                   <li className="marker:text-yellow-400">
//                     Changes in bowel habits
//                   </li>
//                 </motion.ul>
//               </div>
//             </div>

//             {/* Right column */}
//             <div className="space-y-12">
//               <div className="text-center mt-2">
//                 <motion.h1
//                   ref={respiratoryHeaderRef}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={
//                     respiratoryHeaderInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: 100 }
//                   }
//                   transition={{ duration: 0.5 }}
//                   className="text-5xl font-serif tracking-normal leading-none"
//                 >
//                   Respiratory
//                 </motion.h1>
//                 <motion.h3
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={
//                     respiratoryHeaderInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: 100 }
//                   }
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   className="text-xl font-serif tracking-normal leading-normal"
//                 >
//                   Why Early Detection Matters More Than Ever?
//                 </motion.h3>
//                 <motion.p
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={
//                     respiratoryHeaderInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: 100 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   className="text-sm"
//                 >
//                   Understanding the importance of early detection in managing
//                   Respiratory and protecting our communities.
//                 </motion.p>
//                 {/* Remove the individual Get Tested button here */}
//               </div>

//               <motion.div
//                 ref={respiratoryImageRef}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={
//                   respiratoryImageInView
//                     ? { opacity: 1, x: 0 }
//                     : { opacity: 0, x: 100 }
//                 }
//                 transition={{ duration: 0.7 }}
//                 className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-200 relative"
//               >
//                 <img
//                   src="/Images/WellnessGuide/12466.jpg"
//                   alt="Tea cup and interior"
//                   className="w-full h-full object-fill"
//                 />
//               </motion.div>
//             </div>
//           </div>

//           {/* Respiratory Bottom Content */}
//           <div className="w-full mt-10">
//             <div className="">
//               <motion.h3
//                 ref={respiratoryBottomRef}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={
//                   respiratoryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 50 }
//                 }
//                 transition={{ duration: 0.7 }}
//                 className="text-2xl font-bold mb-4 p-3"
//               >
//                 Why Early Testing Matters{" "}
//               </motion.h3>
//             </div>
//             <div className="flex justify-between flex-wrap gap-4 px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={
//                   respiratoryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 50 }
//                 }
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="flex items-center space-x-2"
//               >
//                 <ShieldCheck className="w-7 h-7 text-violet-700" />
//                 <span className="font-semibold">
//                   Prevent spreading to vulnerable family members
//                 </span>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={
//                   respiratoryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 50 }
//                 }
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="flex items-center space-x-2"
//               >
//                 <LuTestTube className="w-10 h-8 text-violet-700" />
//                 <span className="font-semibold">
//                   Access early treatment options
//                  </span>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={
//                   respiratoryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 50 }
//                 }
//                 transition={{ duration: 0.7, delay: 0.3 }}
//                 className="flex items-center space-x-2"
//               >
//                 <IoMdContacts className="w-10 h-8 text-violet-700" />
//                 <span className="font-semibold">
//                   Alert close contacts promptly
//                 </span>
//               </motion.div>
//             </div>
//           </div>

//    {/* Add more sections here for RSV, Influenza, RPX, etc.  */}

//   {/*  Add the dynamic floating test button  */}

// // <div className="flex justify-between items-center mb-20 relative mt-20">
// //   <div className="absolute inset-0 flex items-center justify-start top-1 left-40">
// //     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="absolute inset-0 flex items-center justify-end top-1 right-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
// </div>

// {/* RSV SECTION */}
// <div
//   id="rsv"
//   ref={(el) => {
//     sectionsRef.current[1] = el;
//   }}
//   className="grid grid-cols-2 gap-16 min-h-screen"
// >
//   {/* Left column */}
//   <div className="space-y-8">
//     <div className="flex justify-center mt-6">
//       <motion.div
//         ref={rsvImageRef}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvImageInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
//       >
//         <img
//           src="/Images/WellnessGuide/rsv-1.jpg"
//           alt="Book on fabric"
//           className="w-30px h-30px object-cover"
//         />
//       </motion.div>
//     </div>

//     <motion.p
//       ref={rsvTextRef}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         rsvTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="text-sm leading-relaxed text-gray-700"
//     >
//       When your child develops what seems like a common cold, you
//       might not immediately think of Respiratory Syncytial Virus
//       (RSV). However, this seemingly ordinary respiratory infection
//       deserves our focused attention, especially given its potential
//       to develop into something more serious, particularly in infants,
//       young children, and older adults.
//     </motion.p>

//     <div className="">
//       <motion.div
//         ref={rsvSymptom1Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="flex items-center space-x-2"
//       >
//         <SiQuicktime className=" text-blue-400" size={"17px"} />
//         <h3 className="text-lg font-bold mb-2">
//           Early Phase (Days 1-2)
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">Slight runny nose</li>
//         <li className="marker:text-yellow-400">
//           Decrease in appetite
//         </li>
//         <li className="marker:text-yellow-400">Mild coughing</li>
//       </motion.ul>
//     </div>

//     <div className="mb-2">
//       <motion.div
//         ref={rsvSymptom2Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="flex items-center space-x-2"
//       >
//         <ThermometerSun className="text-yellow-700 " />
//         <h3 className="text-lg font-bold mb-2">Breathing Changes</h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.4 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Rapid or labored breathing
//         </li>
//         <li className="marker:text-yellow-400">Belly breathing</li>
//         <li className="text-yellow-400">
//           <span className="text-black">
//             Wheezing during exhalation
//           </span>
//         </li>
//         <li className="text-yellow-400">
//           <span className="text-black">Nostrils flaring</span>
//         </li>
//       </motion.ul>
//     </div>

//     <div className="mb-2">
//       <motion.div
//         ref={rsvSymptom3Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.5 }}
//         className="flex items-center space-x-2"
//       >
//         <BadgeAlert className="text-red-600" />
//         <h3 className="text-lg font-bold mb-2">Warning Signs</h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rsvSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.6 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Pauses in breathing
//         </li>
//         <li className="marker:text-yellow-400">
//           Blue color around lips
//         </li>
//         <li className="marker:text-yellow-400">
//           Severe coughing spells
//         </li>
//         <li className="marker:text-yellow-400">
//           Severe coughing spells
//         </li>
//       </motion.ul>
//     </div>
//   </div>

//   {/* Right column */}
//   <div className="space-y-12">
//     <div className="text-center">
//       <motion.h1
//         ref={rsvHeaderRef}
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           rsvHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="text-5xl font-serif tracking-normal leading-none"
//       >
//         RSV
//       </motion.h1>
//       <motion.span
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           rsvHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-xl font-serif tracking-normal leading-normal"
//       >
//         Understanding the Silent Respiratory Threat
//       </motion.span>
//       <motion.p
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           rsvHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="text-sm"
//       >
//         Recognizing and managing Respiratory Syncytial Virus to
//         protect vulnerable populations.
//       </motion.p>
//     </div>

//     <motion.div
//       ref={rsvImageRef}
//       initial={{ opacity: 0, x: 100 }}
//       animate={
//         rsvImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-200 relative"
//     >
//       <img
//         src="/Images/WellnessGuide/rsv-3.webp"
//         alt="Tea cup and interior"
//         className="w-full h-full object-fill"
//       />
//     </motion.div>
//   </div>
// </div>

// {/* RSV Bottom Content */}
// <div className="w-full mt-10">
//   <div className="">
//     <motion.h3
//       ref={rsvBottomRef}
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7 }}
//       className="text-2xl font-bold mb-4 p-3"
//     >
//       Why Early Testing Matters{" "}
//     </motion.h3>
//   </div>
//   <div className="flex justify-between flex-wrap gap-4 px-4">
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.1 }}
//       className="flex items-center space-x-2"
//     >
//       <ShieldCheck className="w-7 h-7 text-violet-700" />
//       <span className="font-semibold">
//         Prevent progression to severe respiratory distress
//       </span>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.2 }}
//       className="flex items-center space-x-2"
//     >
//       <LuTestTube className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Enable targeted treatment approaches
//       </span>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.3 }}
//       className="flex items-center space-x-2"
//     >
//       <IoMdContacts className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Protect vulnerable family members
//       </span>
//     </motion.div>
//   </div>
// </div>

// <div className="flex justify-between items-center mb-20 mt-20 relative">
//   <div className="absolute inset-0 flex items-center justify-start top-1 left-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="absolute inset-0 flex items-center justify-end top-1 right-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
// </div>

// {/* INFLUENZA SECTION */}
// <div
//   id="influenza"
//   ref={(el) => (sectionsRef.current[2] = el)}
//   className="grid grid-cols-2 gap-16 min-h-screen"
// >
//   <div className="space-y-8">
//     <div className="flex justify-center mt-6">
//       <motion.div
//         ref={influenzaImageRef}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaImageInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
//       >
//         <img
//           src="/Images/WellnessGuide/Influenza-1.jpg"
//           alt="Book on fabric"
//           className="w-30px h-30px object-cover"
//         />
//       </motion.div>
//     </div>

//     <motion.p
//       ref={influenzaTextRef}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         influenzaTextInView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="text-sm leading-relaxed text-gray-700"
//     >
//       When we talk about "the flu," we're actually referring to a
//       sophisticated family of viruses that have been evolving
//       alongside humans for centuries. Influenza A and B represent the
//       two main types that cause seasonal epidemics, and understanding
//       their distinct characteristics could make all the difference in
//       how quickly you seek treatment and recover.
//     </motion.p>

//     <div className="">
//       <motion.div
//         ref={influenzaSymptom1Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="flex items-center space-x-2"
//       >
//         <Clock2 className="w-5 h-5 text-cyan-700" />
//         <h3 className="text-lg font-bold mb-2">
//           Initial Phase (24 Hours)
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">Intense fatigue</li>
//         <li className="marker:text-yellow-400">Chills and fever</li>
//         <li className="marker:text-yellow-400">
//           Severe muscle aches
//         </li>
//         <li className="marker:text-yellow-400">
//           Headache behind eyes
//         </li>
//         <li className="marker:text-yellow-400">Dry cough</li>
//       </motion.ul>
//     </div>

//     <div className="mb-2">
//       <motion.div
//         ref={influenzaSymptom2Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="flex items-center space-x-2"
//       >
//         <GiProgression className="h-5 w-5 text-blue-500" />
//         <h3 className="text-lg font-bold mb-2">
//           Progressive Symptoms
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.4 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           High fever (101°F-104°F)
//         </li>
//         <li className="marker:text-yellow-400">
//           Increased respiratory symptoms
//         </li>
//         <li className="marker:text-yellow-400">
//           Worsening body aches
//         </li>
//         <li className="marker:text-yellow-400">
//           Gastrointestinal symptoms
//         </li>
//         <li className="marker:text-yellow-400">Extreme exhaustion</li>
//       </motion.ul>
//     </div>

//     <div className=" mb-2">
//       <motion.div
//         ref={influenzaSymptom3Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.5 }}
//         className="flex items-center space-x-2"
//       >
//         <BadgeAlert className="text-red-500" />
//         <h3 className="text-lg font-bold mb-2">
//           Emergency Warning Signs
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.6 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Difficulty breathing
//         </li>
//         <li className="marker:text-yellow-400">
//           Chest pain or pressure
//         </li>
//         <li className="marker:text-yellow-400">Confusion</li>
//         <li className="marker:text-yellow-400">Severe muscle pain</li>
//         <li className="marker:text-yellow-400">
//           Bluish face or lips
//         </li>
//       </motion.ul>
//     </div>
//   </div>

//   <div className="space-y-12">
//     <div className="text-center">
//       <motion.h1
//         ref={influenzaHeaderRef}
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           influenzaHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.6 }}
//         className="text-5xl font-serif tracking-normal leading-none"
//       >
//         Influenza A & B
//       </motion.h1>
//       <motion.h3
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           influenzaHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-xl font-serif tracking-normal leading-normal"
//       >
//         More than Just a Seasonal Threat
//       </motion.h3>
//       <motion.p
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           influenzaHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.6, delay: 0.2 }}
//         className="text-sm"
//       >
//         Recognizing the critical differences between influenza types
//         and the importance of early detection.
//       </motion.p>
//     </div>

//     <motion.div
//       ref={influenzaImageRef}
//       initial={{ opacity: 0, x: 100 }}
//       animate={
//         influenzaImageInView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: 100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-200 relative"
//     >
//       <img
//         src="/Images/WellnessGuide/Influenza-2.jpg"
//         alt="Tea cup and interior"
//         className="w-full h-full object-fill"
//       />
//     </motion.div>
//     <div>
//       <motion.div
//         ref={influenzaSymptom4Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom4InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="flex items-center space-x-2"
//       >
//         <Boxes className=" text-purple-400" />
//         <h3 className="text-lg font-bold mb-2">High Risk Groups</h3>
//       </motion.div>
//       <motion.ul
//         ref={influenzaSymptom4Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           influenzaSymptom4InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Children under 5, especially under 2
//         </li>
//         <li className="marker:text-yellow-400">
//           Adults 65 and older
//         </li>
//         <li className="marker:text-yellow-400">Pregnant women</li>
//         <li className="marker:text-yellow-400">
//           People with chronic health conditions
//         </li>
//         <li className="marker:text-yellow-400">
//           Healthcare and essential workers
//         </li>
//       </motion.ul>
//     </div>
//   </div>
// </div>
// <div className="w-full mt-10">
//   <div className=" ">
//     <motion.h3
//       ref={influenzaBottomRef}
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         influenzaBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       className="text-2xl font-bold mb-4 p-3"
//     >
//       Why Early Testing Matters{" "}
//     </motion.h3>
//   </div>
//   <div className="flex justify-between  flex-wrap gap-4 px-4">
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         influenzaBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.1 }}
//       className="flex items-center space-x-2"
//     >
//       <ShieldCheck className="w-7 h-7 text-violet-700" />
//       <span className="font-semibold">
//         Reduced severity and duration of symptoms
//       </span>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         influenzaBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.2 }}
//       className="flex items-center space-x-2"
//     >
//       <LuTestTube className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Access to effective antiviral treatments
//       </span>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         influenzaBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.3 }}
//       className="flex items-center space-x-2"
//     >
//       <IoMdContacts className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Protect vulnerable family members
//       </span>
//     </motion.div>
//   </div>
// </div>

// <div className="flex justify-between items-center mb-20 mt-20 relative">
//   <div className="absolute inset-0 flex items-center justify-start top-1 left-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="absolute inset-0 flex items-center justify-end top-1 right-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
// </div>

// {/* RESPIRATORY HEALTH SECTION */}
// <div
//   id="rpx"
//   ref={(el) => (sectionsRef.current[3] = el)}
//   className="grid grid-cols-2 gap-16 min-h-screen"
// >
//   <div className="space-y-8">
//     <div className="flex justify-center mt-6">
//       <motion.div
//         ref={rpxImageRef}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxImageInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
//       >
//         <img
//           src="/Images/WellnessGuide/rpx-1.jpg"
//           alt="Book on fabric"
//           className="w-30px h-30px object-cover"
//         />
//       </motion.div>
//     </div>

//     <motion.p
//       ref={rpxTextRef}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         rpxTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="text-sm leading-relaxed text-gray-700"
//     >
//       Respiratory health affects every aspect of our lives. From
//       asthma to COPD, respiratory conditions can significantly impact
//       quality of life. Recognizing symptoms early and seeking proper
//       treatment can make a substantial difference in managing these
//       conditions effectively.
//     </motion.p>

//     <div className="">
//       <motion.div
//         ref={rpxSymptom1Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="flex items-center space-x-2"
//       >
//         <Component className="text-purple-500" />
//         <h3 className="text-lg font-bold mb-2">Common Symptoms</h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">Persistent cough</li>
//         <li className="marker:text-yellow-400">
//           Shortness of breath
//         </li>
//         <li className="marker:text-yellow-400">
//           Wheezing or chest tightness
//         </li>
//       </motion.ul>
//     </div>

//     <div className="mb-2">
//       <motion.div
//         ref={rpxSymptom2Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="flex items-center space-x-2"
//       >
//         <OctagonAlert className="text-red-600 w-5 h-5" />
//         <h3 className="text-lg font-bold mb-2">Warning Signs</h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.4 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Difficulty breathing during mild activity
//         </li>
//         <li className="marker:text-yellow-400">Body aches</li>
//         <li className="marker:text-yellow-400">Chronic fatigue</li>
//       </motion.ul>
//     </div>

//     <div className="mb-2">
//       <motion.div
//         ref={rpxSymptom3Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.5 }}
//         className="flex items-center space-x-2"
//       >
//         <UmbrellaOff className="w-5 h-5 text-sky-500" />
//         <h3 className="text-lg font-bold mb-2">
//           Triggers & Risk Factors
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           rpxSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.6 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">Tobacco smoke</li>
//         <li className="marker:text-yellow-400">Air pollution</li>
//         <li className="marker:text-yellow-400">
//           Occupational exposures
//         </li>
//       </motion.ul>
//     </div>
//   </div>

//   {/* Right Column */}
//   <div className="space-y-12">
//     <div className="text-center">
//       <motion.h1
//         ref={rpxHeaderRef}
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           rpxHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="text-5xl font-serif tracking-normal leading-none"
//       >
//         RPX
//       </motion.h1>
//       <motion.h3
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           rpxHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-xl font-serif tracking-normal leading-normal"
//       >
//         Every Breath Matters
//       </motion.h3>
//       <motion.p
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           rpxHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="text-sm"
//       >
//         Understanding respiratory conditions, early warning signs, and
//         when to seek professional care.
//       </motion.p>
//     </div>

//     <motion.div
//       ref={rpxImageRef}
//       initial={{ opacity: 0, x: 100 }}
//       animate={
//         rpxImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-200 relative"
//     >
//       <img
//         src="/Images/WellnessGuide/rpx-2.avif"
//         alt="Tea cup and interior"
//         className="w-full h-full object-fill"
//       />
//     </motion.div>
//   </div>
// </div>

// {/* RPX Bottom Content */}
// <div className="w-full mt-10">
//   <motion.h3
//     ref={rpxBottomRef}
//     initial={{ opacity: 0, y: 50 }}
//     animate={
//       rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//     }
//     transition={{ duration: 0.7 }}
//     className="text-2xl font-bold mb-4 p-3"
//   >
//     Why Respiratory Testing Matters
//   </motion.h3>

//    <div className="flex justify-between flex-wrap gap-4 px-4">
//      <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.1 }}
//       className="flex items-center space-x-2"
//     >
//       <ShieldCheck className="w-7 h-7 text-violet-700" />
//       <span className="font-semibold">
//         Identify conditions before they progress
//       </span>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.2 }}
//       className="flex items-center space-x-2"
//     >
//       <LuTestTube className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Access appropriate treatment options
//       </span>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.3 }}
//       className="flex items-center space-x-2"
//     >
//       <IoMdContacts className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">Improve quality of life</span>
//     </motion.div>
//   </div>
// </div>

// <div className="flex justify-between items-center mb-20 mt-20 relative">
//   <div class="absolute inset-0 flex items-center justify-start top-1 left-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div class="absolute inset-0 flex items-center justify-end top-1 right-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
// </div>

// <div
//   id="pharmacogenomics"
//   ref={(el) => (sectionsRef.current[4] = el)}
//   className="grid grid-cols-2 gap-16 min-h-screen"
// >
//   <div className="space-y-8">
//     {/* Book image with hand */}
//     <div className="flex justify-center mt-6">
//       <motion.div
//         ref={pharmacogenomicsImageRef}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsImageInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
//       >
//         <img
//           src="/Images/WellnessGuide/pharma-2.jpg"
//           alt="Book on fabric"
//           className="w-30px h-30px object-cover"
//         />
//       </motion.div>
//     </div>

//     {/* Text block */}
//     <motion.p
//       ref={pharmacogenomicsTextRef}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         pharmacogenomicsTextInView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="text-sm leading-relaxed text-gray-700"
//     >
//       Have you ever wondered why some medications work differently for
//       different people? The answer might lie in your DNA.
//       Pharmacogenomics (PGX) is the study of how genes affect a
//       person's response to drugs, opening the door to more
//       personalized and effective healthcare.
//     </motion.p>

//     {/* Symptom 1 */}
//     <div>
//       <motion.div
//         ref={pharmacogenomicsSymptom1Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.1 }}
//         className="flex items-center space-x-2"
//       >
//         <FaHandHoldingMedical className="w-6 h-5 text-blue-500" />
//         <h3 className="text-lg font-bold mb-2">
//           Medication Response
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsSymptom1InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Predict drug effectiveness
//         </li>
//         <li className="marker:text-yellow-400">Optimize dosing</li>
//         <li className="marker:text-yellow-400">
//           Reduce adverse reactions
//         </li>
//       </motion.ul>
//     </div>

//     {/* Symptom 2 */}
//     <div className="mb-2">
//       <motion.div
//         ref={pharmacogenomicsSymptom2Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.3 }}
//         className="flex items-center space-x-2"
//       >
//         <MdPersonalInjury className="w-5 h-5 text-pink-700" />
//         <h3 className="text-lg font-bold mb-2">
//           Personalized Treatment
//         </h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsSymptom2InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.4 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Tailored medication plans
//         </li>
//         <li className="marker:text-yellow-400">
//           Improved treatment outcomes
//         </li>
//         <li className="marker:text-yellow-400">
//           Reduced trial-and-error prescribing
//         </li>
//       </motion.ul>
//     </div>

//     {/* Symptom 3 */}
//     <div className="mb-2">
//       <motion.div
//         ref={pharmacogenomicsSymptom3Ref}
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.5 }}
//         className="flex items-center space-x-2"
//       >
//         <Hourglass className="w-5 h-5 text-green-700" />
//         <h3 className="text-lg font-bold mb-2">Long-term Benefits</h3>
//       </motion.div>
//       <motion.ul
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           pharmacogenomicsSymptom3InView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.7, delay: 0.6 }}
//         className="list-disc list-inside space-y-2 ml-8 font-semibold"
//       >
//         <li className="marker:text-yellow-400">
//           Cost-effective healthcare
//         </li>
//         <li className="marker:text-yellow-400">
//           Reduced hospitalization risk
//         </li>
//         <li className="marker:text-yellow-400">
//           Better quality of life
//         </li>
//       </motion.ul>
//     </div>
//   </div>

//    {/* Right column */}
//    <div className="space-y-12">
//      <div className="text-center">
//        <motion.h1
//         ref={pharmacogenomicsHeaderRef}
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           pharmacogenomicsHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.5 }}
//         className="text-5xl font-serif tracking-normal leading-none"
//       >
//         Pharmacogenomics
//       </motion.h1>
//       <motion.h3
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           pharmacogenomicsHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="text-xl font-serif tracking-normal leading-normal"
//       >
//         Personalizing Your Medicine
//       </motion.h3>
//       <motion.p
//         initial={{ opacity: 0, x: 100 }}
//         animate={
//           pharmacogenomicsHeaderInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: 100 }
//         }
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="text-sm"
//       >
//         Understanding how your unique genetic makeup influences
//         medication effectiveness and safety.
//       </motion.p>
//     </div>

//     <motion.div
//       ref={pharmacogenomicsImageRef}
//       initial={{ opacity: 0, x: 100 }}
//       animate={
//         pharmacogenomicsImageInView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: 100 }
//       }
//       transition={{ duration: 0.7 }}
//       className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-200 relative"
//     >
//       <img
//         src="/Images/WellnessGuide/pharma-1.jpg"
//         alt="Tea cup and interior"
//         className="w-full h-full object-fill"
//       />
//     </motion.div>
//   </div>
// </div>

// {/* Bottom section */}
// <div className="w-full mt-10">
//   <motion.h3
//     ref={pharmacogenomicsBottomRef}
//     initial={{ opacity: 0, y: 50 }}
//     animate={
//       pharmacogenomicsBottomInView
//         ? { opacity: 1, y: 0 }
//         : { opacity: 0, y: 50 }
//     }
//     transition={{ duration: 0.7 }}
//     className="text-2xl font-bold mb-4 p-3"
//   >
//     Why PGX Testing Matters
//   </motion.h3>
//   <div className="flex justify-between flex-wrap gap-4 px-4">
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         pharmacogenomicsBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.1 }}
//       className="flex items-center space-x-2"
//     >
//       <ShieldCheck className="w-7 h-7 text-violet-700" />
//       <span className="font-semibold">
//         Prevent serious medication reactions
//       </span>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         pharmacogenomicsBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.2 }}
//       className="flex items-center space-x-2"
//     >
//       <LuTestTube className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Get the right medication first time
//       </span>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={
//         pharmacogenomicsBottomInView
//           ? { opacity: 1, y: 0 }
//           : { opacity: 0, y: 50 }
//       }
//       transition={{ duration: 0.7, delay: 0.3 }}
//       className="flex items-center space-x-2"
//     >
//       <IoMdContacts className="w-10 h-8 text-violet-700" />
//       <span className="font-semibold">
//         Inform family about genetic factors
//       </span>
//     </motion.div>
//   </div>
// </div>

// <div className="flex justify-between items-center mb-20 mt-20 relative">
//   <div class="absolute inset-0 flex items-center justify-start top-1 left-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div class="absolute inset-0 flex items-center justify-end top-1 right-40">
//     <svg
//       width="25px"
//       height="25px"
//       viewBox="0 0 16 16"
//       version="1.1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlns:xlink="http://www.w3.org/1999/xlink"
//     >
//       <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
//       <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
//       <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
//       <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
//       <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
//       <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
//     </svg>
//   </div>
//   <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
// </div>

// <div
//   id="hereditary"
//   ref={(el) => (sectionsRef.current[5] = el)}
//   className="grid grid-cols-2 gap-16 min-h-screen"
// >
//   <div className="space-y-8">
//     {/* Book image with hand */}
//     <motion.div
//       ref={hereditaryImageRef}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         hereditaryImageInView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.6 }}
//       className="flex justify-center mt-6"
//     >
//       <div className="max-w-60 rounded-full overflow-hidden bg-gray-200 relative">
//         <img
//           src="/Images/WellnessGuide/hereditary-1.jpg"
//           alt="Book on fabric"
//           className="w-30px h-30px object-cover"
//         />
//       </div>
//     </motion.div>

//     {/* Description text */}
//     <motion.p
//       ref={hereditaryTextRef}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         hereditaryTextInView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.6, delay: 0.2 }}
//       className="text-sm leading-relaxed text-gray-700"
//     >
//       Your family history carries valuable clues about your health.
//       Hereditary testing helps identify genetic variants linked to
//       various health conditions, allowing you to take control of your
//       health journey with personalized insights and preventive
//       strategies.
//     </motion.p>

//      {/* Symptom Section 1 */}
//      <motion.div
//       ref={hereditarySymptom1Ref}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         hereditarySymptom1InView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.5, delay: 0.3 }}
//     >
//       <div className="flex items-center space-x-2">
//         <HeartPulse className="text-red-600" />
//         <h3 className="text-lg font-bold mb-2">
//           Cardiovascular Conditions
//         </h3>
//       </div>
//       <ul className="list-disc list-inside space-y-2 ml-8 font-semibold">
//         <li className="marker:text-yellow-400">
//           Familial hypercholesterolemia
//         </li>
//         <li className="marker:text-yellow-400">
//           Inherited cardiomyopathies
//         </li>
//         <li className="marker:text-yellow-400">
//           Hereditary arrhythmias
//         </li>
//       </ul>
//     </motion.div>

//     {/* Symptom Section 2 */}
//     <motion.div
//       ref={hereditarySymptom2Ref}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         hereditarySymptom2InView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.5, delay: 0.4 }}
//     >
//       <div className="flex items-center space-x-2">
//         <Dna className="text-blue-400" />
//         <h3 className="text-lg font-bold mb-2">
//           Cancer Predispositions
//         </h3>
//       </div>
//       <ul className="list-disc list-inside space-y-2 ml-8 font-semibold">
//         <li className="marker:text-yellow-400">
//           BRCA1/BRCA2 mutations
//         </li>
//         <li className="marker:text-yellow-400">Lynch syndrome</li>
//         <li className="marker:text-yellow-400">
//           Familial adenomatous polyposis
//         </li>
//       </ul>
//     </motion.div>

//     {/* Symptom Section 3 */}
//     <motion.div
//       ref={hereditarySymptom3Ref}
//       initial={{ opacity: 0, x: -100 }}
//       animate={
//         hereditarySymptom3InView
//           ? { opacity: 1, x: 0 }
//           : { opacity: 0, x: -100 }
//       }
//       transition={{ duration: 0.5, delay: 0.5 }}
//     >
//       <div className="flex items-center space-x-2">
//         <SiMetabase className="w-6 h-7 text-orange-700" />
//         <h3 className="text-lg font-bold mb-2">
//           Metabolic Disorders
//         </h3>
//       </div>
//       <ul className="list-disc list-inside space-y-2 ml-8 font-semibold">
//         <li className="marker:text-yellow-400">
//           Hereditary hemochromatosis
//         </li>
//         <li className="marker:text-yellow-400">
//           Familial hypercholesterolemia
//         </li>
//         <li className="marker:text-yellow-400">
//           Alpha-1 antitrypsin deficiency
//         </li>
//       </ul>
//     </motion.div>
//   </div>

//   //  Right column

//             <div className="space-y-12">
//                <div className="text-center">
//                 <motion.h1
//                   ref={hereditaryHeaderRef}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={
//                     hereditaryHeaderInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: 100 }
//                   }
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                   className="text-5xl font-serif tracking-normal leading-none"
//                 >
//                   Hereditary Conditions
//                 </motion.h1>
//                 <motion.h3
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={
//                     hereditaryHeaderInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: 100 }
//                   }
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="text-xl font-serif tracking-normal leading-normal"
//                 >
//                   Understanding Your Genetic Legacy
//                 </motion.h3>
//                 <motion.p
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={
//                     hereditaryHeaderInView
//                       ? { opacity: 1, x: 0 }
//                       : { opacity: 0, x: 100 }
//                   }
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="text-sm"
//                 >
//                   Discover how hereditary testing can provide insights into your
//                   genetic health risks and empower proactive care.
//                 </motion.p>
//               </div>

//               <motion.div
//                 ref={hereditaryImageRef}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={
//                   hereditaryImageInView
//                     ? { opacity: 1, x: 0 }
//                     : { opacity: 0, x: 100 }
//                 }
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="w-full aspect-square rounded-3xl overflow-hidden bg-gray-200 relative"
//               >
//                 <img
//                   src="/Images/WellnessGuide/hereditary-2.jpg"
//                   alt="Tea cup and interior"
//                   className="w-full h-full object-fill"
//                 />
//               </motion.div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="w-full mt-10">
//             <div
//               ref={hereditaryBottomRef}
//               initial={{ opacity: 0, y: 80 }}
//               animate={
//                 hereditaryBottomInView
//                   ? { opacity: 1, y: 0 }
//                   : { opacity: 0, y: 80 }
//               }
//               transition={{ duration: 0.7 }}
//             >
//               <motion.h3
//                 initial={{ opacity: 0, y: 80 }}
//                 animate={
//                   hereditaryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 80 }
//                 }
//                 transition={{ duration: 0.7 }}
//                 className="text-2xl font-bold mb-4 p-3"
//               >
//                 Why Hereditary Testing Matters
//               </motion.h3>
//             </div>
//             <div className="flex justify-between flex-wrap gap-4 px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={
//                   hereditaryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 40 }
//                 }
//                 transition={{ duration: 0.4, delay: 0.1 }}
//                 className="flex items-center space-x-2"
//               >
//                 <ShieldCheck className="w-7 h-7 text-violet-700" />
//                 <span className="font-semibold">
//                   Identify risks before symptoms appear
//                 </span>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={
//                   hereditaryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 40 }
//                 }
//                 transition={{ duration: 0.4, delay: 0.2 }}
//                 className="flex items-center space-x-2"
//               >
//                 <LuTestTube className="w-10 h-8 text-violet-700" />
//                 <span className="font-semibold">
//                   Develop personalized screening plans
//                 </span>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={
//                   hereditaryBottomInView
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 40 }
//                 }
//                 transition={{ duration: 0.4, delay: 0.3 }}
//                 className="flex items-center space-x-2"
//               >
//                 <IoMdContacts className="w-10 h-8 text-violet-700" />
//                 <span className="font-semibold">
//                   Share vital health information with family
//                 </span>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FloatingTestButton />
//     </>
//   );
// };

// export default WellnessGuide;


import {
  Activity,
  BadgeAlert,
  Boxes,
  Clock2,
  Component,
  Dna,
  HeartPulse,
  Hourglass,
  OctagonAlert,
  RefreshCcwDot,
  ShieldCheck,
  ThermometerSun,
  UmbrellaOff,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { LuTestTube } from "react-icons/lu";
import { FaHandHoldingMedical, FaHeartPulse } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import { SiMetabase, SiQuicktime } from "react-icons/si";
import { MdPersonalInjury } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const WellnessGuide = () => {
  // Section refs for URL and navigation
  const navigate = useNavigate();
  const location = useLocation();
  const sectionsRef = useRef([]);

  // Track current section for dynamic button
  const [currentSection, setCurrentSection] = useState("respiratory");

  // Global InView settings for better animation triggers
  const animationOptions = {
    triggerOnce: false,
    threshold: 0.1, // Lower threshold for easier triggering
    rootMargin: "0px 0px -10% 0px", // Trigger animations a bit earlier
  };

  // Respiratory section refs
  const { ref: respiratoryImageRef, inView: respiratoryImageInView } =
    useInView(animationOptions);
  const { ref: respiratoryTextRef, inView: respiratoryTextInView } =
    useInView(animationOptions);
  const { ref: respiratoryHeaderRef, inView: respiratoryHeaderInView } =
    useInView(animationOptions);
  const { ref: respiratoryBottomRef, inView: respiratoryBottomInView } =
    useInView(animationOptions);

  // Individual items for respiratory section
  const { ref: respiratorySymptom1Ref, inView: respiratorySymptom1InView } =
    useInView(animationOptions);
  const { ref: respiratorySymptom2Ref, inView: respiratorySymptom2InView } =
    useInView(animationOptions);
  const { ref: respiratorySymptom3Ref, inView: respiratorySymptom3InView } =
    useInView(animationOptions);

  // RSV section refs
  const { ref: rsvImageRef, inView: rsvImageInView } =
    useInView(animationOptions);
  const { ref: rsvTextRef, inView: rsvTextInView } =
    useInView(animationOptions);
  const { ref: rsvHeaderRef, inView: rsvHeaderInView } =
    useInView(animationOptions);
  const { ref: rsvBottomRef, inView: rsvBottomInView } =
    useInView(animationOptions);

  // Individual items for RSV section
  const { ref: rsvSymptom1Ref, inView: rsvSymptom1InView } =
    useInView(animationOptions);
  const { ref: rsvSymptom2Ref, inView: rsvSymptom2InView } =
    useInView(animationOptions);
  const { ref: rsvSymptom3Ref, inView: rsvSymptom3InView } =
    useInView(animationOptions);

  // Influenza section refs
  const { ref: influenzaImageRef, inView: influenzaImageInView } =
    useInView(animationOptions);
  const { ref: influenzaTextRef, inView: influenzaTextInView } =
    useInView(animationOptions);
  const { ref: influenzaHeaderRef, inView: influenzaHeaderInView } =
    useInView(animationOptions);
  const { ref: influenzaBottomRef, inView: influenzaBottomInView } =
    useInView(animationOptions);

  // Individual items for RSV section
  const { ref: influenzaSymptom1Ref, inView: influenzaSymptom1InView } =
    useInView(animationOptions);
  const { ref: influenzaSymptom2Ref, inView: influenzaSymptom2InView } =
    useInView(animationOptions);
  const { ref: influenzaSymptom3Ref, inView: influenzaSymptom3InView } =
    useInView(animationOptions);
  const { ref: influenzaSymptom4Ref, inView: influenzaSymptom4InView } =
    useInView(animationOptions);

  // RPX section refs
  const { ref: rpxImageRef, inView: rpxImageInView } =
    useInView(animationOptions);
  const { ref: rpxTextRef, inView: rpxTextInView } =
    useInView(animationOptions);
  const { ref: rpxHeaderRef, inView: rpxHeaderInView } =
    useInView(animationOptions);
  const { ref: rpxBottomRef, inView: rpxBottomInView } =
    useInView(animationOptions);

  // Individual items for RSV section
  const { ref: rpxSymptom1Ref, inView: rpxSymptom1InView } =
    useInView(animationOptions);
  const { ref: rpxSymptom2Ref, inView: rpxSymptom2InView } =
    useInView(animationOptions);
  const { ref: rpxSymptom3Ref, inView: rpxSymptom3InView } =
    useInView(animationOptions);

  // Pharmacogenomics section refs
  const { ref: pharmacogenomicsImageRef, inView: pharmacogenomicsImageInView } =
    useInView(animationOptions);
  const { ref: pharmacogenomicsTextRef, inView: pharmacogenomicsTextInView } =
    useInView(animationOptions);
  const {
    ref: pharmacogenomicsHeaderRef,
    inView: pharmacogenomicsHeaderInView,
  } = useInView(animationOptions);
  const {
    ref: pharmacogenomicsBottomRef,
    inView: pharmacogenomicsBottomInView,
  } = useInView(animationOptions);

  // Individual items for Pharmacogenomics section
  const {
    ref: pharmacogenomicsSymptom1Ref,
    inView: pharmacogenomicsSymptom1InView,
  } = useInView(animationOptions);
  const {
    ref: pharmacogenomicsSymptom2Ref,
    inView: pharmacogenomicsSymptom2InView,
  } = useInView(animationOptions);
  const {
    ref: pharmacogenomicsSymptom3Ref,
    inView: pharmacogenomicsSymptom3InView,
  } = useInView(animationOptions);

  // Hereditary section refs
  const { ref: hereditaryImageRef, inView: hereditaryImageInView } =
    useInView(animationOptions);
  const { ref: hereditaryTextRef, inView: hereditaryTextInView } =
    useInView(animationOptions);
  const { ref: hereditaryHeaderRef, inView: hereditaryHeaderInView } =
    useInView(animationOptions);
  const { ref: hereditaryBottomRef, inView: hereditaryBottomInView } =
    useInView(animationOptions);

  // Individual items for Hereditary section
  const { ref: hereditarySymptom1Ref, inView: hereditarySymptom1InView } =
    useInView(animationOptions);
  const { ref: hereditarySymptom2Ref, inView: hereditarySymptom2InView } =
    useInView(animationOptions);
  const { ref: hereditarySymptom3Ref, inView: hereditarySymptom3InView } =
    useInView(animationOptions);

  const sections = [
    { id: "respiratory", title: "COVID-19" },
    { id: "rsv", title: "RSV" },
    { id: "influenza", title: "Influenza A & B" },
    { id: "rpx", title: "Respiratory Health" },
    { id: "pharmacogenomics", title: "Pharmacogenomics" },
    { id: "hereditary", title: "Hereditary Conditions" },
  ];

  // Define a function to get the test URL based on current section
  const getTestUrl = () => {
    switch (currentSection) {
      case "respiratory":
        return "/test/covid";
      case "rsv":
        return "/test/rsv";
      case "influenza":
        return "/test/influenza";
      case "rpx":
        return "/test/respiratory-panel";
      case "pharmacogenomics":
        return "/test/pharmacogenomics";
      case "hereditary":
        return "/test/hereditary";
      default:
        return "/tests";
    }
  };

  // Get display name for the button
  const getTestDisplayName = () => {
    const section = sections.find((s) => s.id === currentSection);
    return section ? section.title : "Test";
  };

  // Section observer for URL navigation and current section update
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Update URL without full page reload
            navigate(`/wellness-guide/${sectionId}`, { replace: true });
            // Update current section for dynamic button
            setCurrentSection(sectionId);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-5% 0px -5% 0px", // Adjusted for better triggering
      }
    );

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // Cleanup observer
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navigate]);

  // Handle direct navigation to sections
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const sectionId = pathSegments[pathSegments.length - 1];
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      // Also update current section state
      if (sections.some((section) => section.id === sectionId)) {
        setCurrentSection(sectionId);
      }
    }
  }, [location.pathname]);
  const FloatingTestButton = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-white shadow-lg px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full cursor-pointer hover:shadow-xl transition-all"
      >
        <Link
          to={getTestUrl()}
          className="flex items-center space-x-1 sm:space-x-2 md:space-x-3"
        >
          <span className="text-xs sm:text-sm md:text-lg font-semibold">
            Get {getTestDisplayName()} Test
          </span>
          <FaHeartPulse className="text-red-500 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </Link>
      </motion.div>
    );
  };

  return (
    <>
    <section className="overflow-x-hidden">
      <div className="min-h-screen w-full bg-white">
        <div className="mx-auto bg-[#e8e7e3] shadow-lg rounded-lg p-3 sm:p-4 md:p-8 lg:p-12">
          {/* COVID-19/RESPIRATORY SECTION */}
          <div
            id="respiratory"
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 lg:gap-16 min-h-screen"
          >
            {/* Left column */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <div className="flex justify-center mt-2 sm:mt-4 md:mt-6">
                <motion.div
                  ref={respiratoryImageRef}
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratoryImageInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="max-w-32 sm:max-w-40 md:max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
                >
                  <img
                    src="/Images/WellnessGuide/covid-19.jpg"
                    alt="Book on fabric"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <motion.p
                ref={respiratoryTextRef}
                initial={{ opacity: 0, x: -100 }}
                animate={
                  respiratoryTextInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -100 }
                }
                transition={{ duration: 0.7 }}
                className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-700"
              >
                The moment you feel that slight scratch in your throat or
                unusual fatigue, your mind might drift to the possibility of
                Respiratory. While we've learned to live alongside this virus,
                understanding its impact and taking prompt action remains
                crucial for our collective well-being.
              </motion.p>

              <div className="">
                <motion.div
                  ref={respiratorySymptom1Ref}
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratorySymptom1InView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                    Respiratory Changes
                  </h3>
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratorySymptom1InView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="list-disc list-inside space-y-1 md:space-y-2 ml-3 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
                >
                  <li className="marker:text-yellow-400">
                    Persistent dry cough
                  </li>
                  <li className="marker:text-yellow-400">
                    Shortness of breath
                  </li>
                  <li className="marker:text-yellow-400">
                    Changes in smell or taste
                  </li>
                </motion.ul>
              </div>

              <div className="mb-2">
                <motion.div
                  ref={respiratorySymptom2Ref}
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratorySymptom2InView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <ThermometerSun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-700" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                    Physical Discomfort
                  </h3>
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratorySymptom2InView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="list-disc list-inside space-y-1 md:space-y-2 ml-3 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
                >
                  <li className="marker:text-yellow-400">Unusual fatigue</li>
                  <li className="marker:text-yellow-400">Body aches</li>
                  <li className="marker:text-yellow-400">
                    Fever or temperature elevation
                  </li>
                </motion.ul>
              </div>

              <div className="mb-2">
                <motion.div
                  ref={respiratorySymptom3Ref}
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratorySymptom3InView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex items-center space-x-2"
                >
                  <RefreshCcwDot className="w-4 h-4 sm:w-5 sm:h-5 text-red-700" />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                    Gastrointestinal Issues
                  </h3>
                </motion.div>
                <motion.ul
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    respiratorySymptom3InView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="list-disc list-inside space-y-1 md:space-y-2 ml-3 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
                >
                  <li className="marker:text-yellow-400">
                    Unexpected loss of appetite
                  </li>
                  <li className="marker:text-yellow-400">
                    Nausea or digestive discomfort
                  </li>
                  <li className="marker:text-yellow-400">
                    Changes in bowel habits
                  </li>
                </motion.ul>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6 sm:space-y-8 md:space-y-12 mt-6 sm:mt-8 md:mt-0">
              <div className="text-center mt-1 sm:mt-2">
                <motion.h1
                  ref={respiratoryHeaderRef}
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    respiratoryHeaderInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-normal leading-none"
                >
                  Respiratory
                </motion.h1>
                <motion.h3
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    respiratoryHeaderInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 100 }
                  }
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base sm:text-lg md:text-xl font-serif tracking-normal leading-normal"
                >
                  Why Early Detection Matters More Than Ever?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    respiratoryHeaderInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 100 }
                  }
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xs md:text-sm"
                >
                  Understanding the importance of early detection in managing
                  Respiratory and protecting our communities.
                </motion.p>
                {/* Remove the individual Get Tested button here */}
              </div>

              <motion.div
                ref={respiratoryImageRef}
                initial={{ opacity: 0, x: 100 }}
                animate={
                  respiratoryImageInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 100 }
                }
                transition={{ duration: 0.7 }}
                className="w-full aspect-square rounded-lg sm:rounded-xl md:rounded-3xl overflow-hidden bg-gray-200 relative"
              >
                <img
                  src="/Images/WellnessGuide/12466.jpg"
                  alt="Tea cup and interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Respiratory Bottom Content */}
          <div className="w-full mt-4 sm:mt-6 md:mt-10">
            <div className="">
              <motion.h3
                ref={respiratoryBottomRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  respiratoryBottomInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.7 }}
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 p-1 sm:p-2 md:p-3"
              >
                Why Early Testing Matters{" "}
              </motion.h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between flex-wrap gap-3 sm:gap-4 px-1 sm:px-2 md:px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  respiratoryBottomInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex items-center space-x-2"
              >
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-violet-700" />
                <span className="text-xs sm:text-sm md:text-base font-semibold">
                  Prevent spreading to vulnerable family members
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  respiratoryBottomInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center space-x-2"
              >
                <LuTestTube className="w-6 h-5 sm:w-8 sm:h-6 md:w-10 md:h-8 text-violet-700" />
                <span className="text-xs sm:text-sm md:text-base font-semibold">
                  Access early treatment options
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  respiratoryBottomInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center space-x-2"
              >
                <IoMdContacts className="w-6 h-5 sm:w-8 sm:h-6 md:w-10 md:h-8 text-violet-700" />
                <span className="text-xs sm:text-sm md:text-base font-semibold">
                  Alert close contacts promptly
                </span>
              </motion.div>
            </div>
          </div>

          {/* Floating Test Button */}
          <FloatingTestButton />
        </div>
      </div>

      {/* RSV */}
      <div className="mx-auto bg-[#e8e7e3] shadow-lg rounded-lg p-3 sm:p-4 md:p-8 lg:p-12">
      <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-20 relative mt-6 sm:mt-8 md:mt-20">
        <div className="absolute inset-0 flex items-center justify-start top-1 left-4 sm:left-6 md:left-40 ">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-end top-1 right-4 sm:right-6 md:right-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
      </div>

      {/* RSV SECTION */}
      <div
        id="rsv"
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 min-h-screen"
      >
        {/* Left column */}
        <div className="space-y-4 sm:space-y-5 md:space-y-8">
          <div className="flex justify-center mt-2 sm:mt-3 md:mt-6">
            <motion.div
              ref={rsvImageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5 }}
              className="max-w-32 sm:max-w-36 md:max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
            >
              <img
                src="/Images/WellnessGuide/rsv-1.jpg"
                alt="Book on fabric"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.p
            ref={rsvTextRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              rsvTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm leading-relaxed text-gray-700 px-4 md:px-0"
          >
            When your child develops what seems like a common cold, you might
            not immediately think of Respiratory Syncytial Virus (RSV). However,
            this seemingly ordinary respiratory infection deserves our focused
            attention, especially given its potential to develop into something
            more serious, particularly in infants, young children, and older
            adults.
          </motion.p>

          <div className="px-4 md:px-0">
            <motion.div
              ref={rsvSymptom1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <SiQuicktime className="text-blue-400" size={"15px"} />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Early Phase (Days 1-2)
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">Slight runny nose</li>
              <li className="marker:text-yellow-400">Decrease in appetite</li>
              <li className="marker:text-yellow-400">Mild coughing</li>
            </motion.ul>
          </div>

          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={rsvSymptom2Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <ThermometerSun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-700" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Breathing Changes
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                Rapid or labored breathing
              </li>
              <li className="marker:text-yellow-400">Belly breathing</li>
              <li className="text-yellow-400">
                <span className="text-black">Wheezing during exhalation</span>
              </li>
              <li className="text-yellow-400">
                <span className="text-black">Nostrils flaring</span>
              </li>
            </motion.ul>
          </div>

          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={rsvSymptom3Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <BadgeAlert className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Warning Signs
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                rsvSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">Pauses in breathing</li>
              <li className="marker:text-yellow-400">Blue color around lips</li>
              <li className="marker:text-yellow-400">Severe coughing spells</li>
              <li className="marker:text-yellow-400">Severe coughing spells</li>
            </motion.ul>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-6 md:mt-0">
          <div className="text-center px-4 md:px-0">
            <motion.h1
              ref={rsvHeaderRef}
              initial={{ opacity: 0, x: 50 }}
              animate={
                rsvHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-normal leading-none"
            >
              RSV
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={
                rsvHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl font-serif tracking-normal leading-normal"
            >
              Understanding the Silent Respiratory Threat
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={
                rsvHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm"
            >
              Recognizing and managing Respiratory Syncytial Virus to protect
              vulnerable populations.
            </motion.p>
          </div>

          <motion.div
            ref={rsvImageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              rsvImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.7 }}
            className="w-full aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 relative mx-auto px-4 md:px-0"
          >
            <img
              src="/Images/WellnessGuide/rsv-3.webp"
              alt="Tea cup and interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* RSV Bottom Content */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <div className="">
          <motion.h3
            ref={rsvBottomRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3"
          >
            Why Early Testing Matters{" "}
          </motion.h3>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-3 sm:gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-violet-700" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Prevent progression to severe respiratory distress
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <LuTestTube className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Enable targeted treatment approaches
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              rsvBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <IoMdContacts className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Protect vulnerable family members
            </span>
          </motion.div>
        </div>
      </div>
      </div>

      {/* Infuenza A & B */}

      {/* HEADER DIVIDER WITH SVG ICONS */}
      <div className="mx-auto bg-[#e8e7e3] shadow-lg rounded-lg p-3 sm:p-4 md:p-8 lg:p-12">
      <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-20 relative mt-6 sm:mt-8 md:mt-20">
        <div className="absolute inset-0 flex items-center justify-start top-1 left-4 sm:left-6 md:left-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-end top-1 right-4 sm:right-6 md:right-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
      </div>

      {/* INFLUENZA SECTION */}
      <div
        id="influenza"
        ref={(el) => (sectionsRef.current[2] = el)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 min-h-screen"
      >
        {/* Left column */}
        <div className="space-y-4 sm:space-y-5 md:space-y-8">
          <div className="flex justify-center mt-2 sm:mt-3 md:mt-6">
            <motion.div
              ref={influenzaImageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaImageInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5 }}
              className="max-w-32 sm:max-w-36 md:max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
            >
              <img
                src="/Images/WellnessGuide/Influenza-1.jpg"
                alt="Book on fabric"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.p
            ref={influenzaTextRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              influenzaTextInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm leading-relaxed text-gray-700 px-4 md:px-0"
          >
            When we talk about "the flu," we're actually referring to a
            sophisticated family of viruses that have been evolving alongside
            humans for centuries. Influenza A and B represent the two main types
            that cause seasonal epidemics, and understanding their distinct
            characteristics could make all the difference in how quickly you
            seek treatment and recover.
          </motion.p>

          <div className="px-4 md:px-0">
            <motion.div
              ref={influenzaSymptom1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <Clock2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-700" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Initial Phase (24 Hours)
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">Intense fatigue</li>
              <li className="marker:text-yellow-400">Chills and fever</li>
              <li className="marker:text-yellow-400">Severe muscle aches</li>
              <li className="marker:text-yellow-400">Headache behind eyes</li>
              <li className="marker:text-yellow-400">Dry cough</li>
            </motion.ul>
          </div>

          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={influenzaSymptom2Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <GiProgression className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Progressive Symptoms
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                High fever (101°F-104°F)
              </li>
              <li className="marker:text-yellow-400">
                Increased respiratory symptoms
              </li>
              <li className="marker:text-yellow-400">Worsening body aches</li>
              <li className="marker:text-yellow-400">
                Gastrointestinal symptoms
              </li>
              <li className="marker:text-yellow-400">Extreme exhaustion</li>
            </motion.ul>
          </div>

          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={influenzaSymptom3Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <BadgeAlert className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Emergency Warning Signs
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">Difficulty breathing</li>
              <li className="marker:text-yellow-400">Chest pain or pressure</li>
              <li className="marker:text-yellow-400">Confusion</li>
              <li className="marker:text-yellow-400">Severe muscle pain</li>
              <li className="marker:text-yellow-400">Bluish face or lips</li>
            </motion.ul>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-6 md:mt-0">
          <div className="text-center px-4 md:px-0">
            <motion.h1
              ref={influenzaHeaderRef}
              initial={{ opacity: 0, x: 50 }}
              animate={
                influenzaHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-normal leading-none"
            >
              Influenza A & B
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={
                influenzaHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl font-serif tracking-normal leading-normal"
            >
              More than Just a Seasonal Threat
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={
                influenzaHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm"
            >
              Recognizing the critical differences between influenza types and
              the importance of early detection.
            </motion.p>
          </div>

          <motion.div
            ref={influenzaImageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              influenzaImageInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.7 }}
            className="w-full aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 relative mx-auto px-4 md:px-0"
          >
            <img
              src="/Images/WellnessGuide/Influenza-2.jpg"
              alt="Tea cup and interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="px-4 md:px-0">
            <motion.div
              ref={influenzaSymptom4Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom4InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <Boxes className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                High Risk Groups
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                influenzaSymptom4InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                Children under 5, especially under 2
              </li>
              <li className="marker:text-yellow-400">Adults 65 and older</li>
              <li className="marker:text-yellow-400">Pregnant women</li>
              <li className="marker:text-yellow-400">
                People with chronic health conditions
              </li>
              <li className="marker:text-yellow-400">
                Healthcare and essential workers
              </li>
            </motion.ul>
          </div>
        </div>
      </div>

      {/* WHY EARLY TESTING MATTERS */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <div>
          <motion.h3
            ref={influenzaBottomRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              influenzaBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3"
          >
            Why Early Testing Matters
          </motion.h3>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-3 sm:gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              influenzaBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-violet-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Reduced severity and duration of symptoms
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              influenzaBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <LuTestTube className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Access to effective antiviral treatments
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              influenzaBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <IoMdContacts className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Protect vulnerable family members
            </span>
          </motion.div>
        </div>
      </div>

      {/* RPX */}

      <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-20 relative mt-6 sm:mt-8 md:mt-20">
        <div className="absolute inset-0 flex items-center justify-start top-1 left-4 sm:left-6 md:left-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-end top-1 right-4 sm:right-6 md:right-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
      </div>

      {/* RESPIRATORY HEALTH SECTION */}
      <div
        id="rpx"
        ref={(el) => (sectionsRef.current[3] = el)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 min-h-screen"
      >
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-5 md:space-y-8">
          <div className="flex justify-center mt-2 sm:mt-3 md:mt-6">
            <motion.div
              ref={rpxImageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5 }}
              className="max-w-32 sm:max-w-36 md:max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
            >
              <img
                src="/Images/WellnessGuide/rpx-1.jpg"
                alt="Book on fabric"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <motion.p
            ref={rpxTextRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              rpxTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm leading-relaxed text-gray-700 px-4 md:px-0"
          >
            Respiratory health affects every aspect of our lives. From asthma to
            COPD, respiratory conditions can significantly impact quality of
            life. Recognizing symptoms early and seeking proper treatment can
            make a substantial difference in managing these conditions
            effectively.
          </motion.p>

          {/* Common Symptoms */}
          <div className="px-4 md:px-0">
            <motion.div
              ref={rpxSymptom1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <Component className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Common Symptoms
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">Persistent cough</li>
              <li className="marker:text-yellow-400">Shortness of breath</li>
              <li className="marker:text-yellow-400">
                Wheezing or chest tightness
              </li>
            </motion.ul>
          </div>

          {/* Warning Signs */}
          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={rpxSymptom2Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <OctagonAlert className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Warning Signs
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                Difficulty breathing during mild activity
              </li>
              <li className="marker:text-yellow-400">Body aches</li>
              <li className="marker:text-yellow-400">Chronic fatigue</li>
            </motion.ul>
          </div>

          {/* Triggers & Risk Factors */}
          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={rpxSymptom3Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <UmbrellaOff className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Triggers & Risk Factors
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                rpxSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">Tobacco smoke</li>
              <li className="marker:text-yellow-400">Air pollution</li>
              <li className="marker:text-yellow-400">Occupational exposures</li>
            </motion.ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-6 md:mt-0">
          <div className="text-center px-4 md:px-0">
            <motion.h1
              ref={rpxHeaderRef}
              initial={{ opacity: 0, x: 50 }}
              animate={
                rpxHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-normal leading-none"
            >
              RPX
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={
                rpxHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl font-serif tracking-normal leading-normal"
            >
              Every Breath Matters
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={
                rpxHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm"
            >
              Understanding respiratory conditions, early warning signs, and
              when to seek professional care.
            </motion.p>
          </div>

          <motion.div
            ref={rpxImageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              rpxImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.7 }}
            className="w-full aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 relative mx-auto px-4 md:px-0"
          >
            <img
              src="/Images/WellnessGuide/rpx-2.avif"
              alt="Tea cup and interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* RPX Bottom Content */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <motion.h3
          ref={rpxBottomRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3"
        >
          Why Respiratory Testing Matters
        </motion.h3>

        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-3 sm:gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-violet-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Identify conditions before they progress
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <LuTestTube className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Access appropriate treatment options
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              rpxBottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <IoMdContacts className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Improve quality of life
            </span>
          </motion.div>
        </div>
      </div>
      </div>

      {/* Pharmacogenomics  */}
<div className="mx-auto bg-[#e8e7e3] shadow-lg rounded-lg p-3 sm:p-4 md:p-8 lg:p-12">
      <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-20 relative mt-6 sm:mt-8 md:mt-20">
        <div className="absolute inset-0 flex items-center justify-start top-1 left-4 sm:left-6 md:left-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-end top-1 right-4 sm:right-6 md:right-40">
          <svg
            width="16px"
            height="16px"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
      </div>

      <div
        id="pharmacogenomics"
        ref={(el) => (sectionsRef.current[4] = el)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 min-h-screen"
      >
        {/* Left column */}
        <div className="space-y-4 sm:space-y-5 md:space-y-8">
          {/* Book image with hand */}
          <div className="flex justify-center mt-2 sm:mt-3 md:mt-6">
            <motion.div
              ref={pharmacogenomicsImageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsImageInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.5 }}
              className="max-w-32 sm:max-w-36 md:max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
            >
              <img
                src="/Images/WellnessGuide/pharma-2.jpg"
                alt="Book on fabric"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Text block */}
          <motion.p
            ref={pharmacogenomicsTextRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              pharmacogenomicsTextInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm leading-relaxed text-gray-700 px-4 md:px-0"
          >
            Have you ever wondered why some medications work differently for
            different people? The answer might lie in your DNA. Pharmacogenomics
            (PGX) is the study of how genes affect a person's response to drugs,
            opening the door to more personalized and effective healthcare.
          </motion.p>

          {/* Symptom 1 */}
          <div className="px-4 md:px-0">
            <motion.div
              ref={pharmacogenomicsSymptom1Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <FaHandHoldingMedical className="text-blue-500" size={"15px"} />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Medication Response
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsSymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                Predict drug effectiveness
              </li>
              <li className="marker:text-yellow-400">Optimize dosing</li>
              <li className="marker:text-yellow-400">
                Reduce adverse reactions
              </li>
            </motion.ul>
          </div>

          {/* Symptom 2 */}
          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={pharmacogenomicsSymptom2Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <MdPersonalInjury className="w-4 h-4 sm:w-5 sm:h-5 text-pink-700" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Personalized Treatment
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsSymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                Tailored medication plans
              </li>
              <li className="marker:text-yellow-400">
                Improved treatment outcomes
              </li>
              <li className="marker:text-yellow-400">
                Reduced trial-and-error prescribing
              </li>
            </motion.ul>
          </div>

          {/* Symptom 3 */}
          <div className="mb-2 px-4 md:px-0">
            <motion.div
              ref={pharmacogenomicsSymptom3Ref}
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Hourglass className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" />
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                Long-term Benefits
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={
                pharmacogenomicsSymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50 }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
              className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4 md:ml-8 font-semibold text-xs sm:text-sm md:text-base"
            >
              <li className="marker:text-yellow-400">
                Cost-effective healthcare
              </li>
              <li className="marker:text-yellow-400">
                Reduced hospitalization risk
              </li>
              <li className="marker:text-yellow-400">Better quality of life</li>
            </motion.ul>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-6 md:mt-0">
          <div className="text-center px-4 md:px-0">
            <motion.h1
              ref={pharmacogenomicsHeaderRef}
              initial={{ opacity: 0, x: 50 }}
              animate={
                pharmacogenomicsHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-serif tracking-normal leading-none"
            >
              Pharmacogenomics
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={
                pharmacogenomicsHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl font-serif tracking-normal leading-normal"
            >
              Personalizing Your Medicine
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={
                pharmacogenomicsHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm"
            >
              Understanding how your unique genetic makeup influences medication
              effectiveness and safety.
            </motion.p>
          </div>

          <motion.div
            ref={pharmacogenomicsImageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              pharmacogenomicsImageInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.7 }}
            className="w-full aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 relative mx-auto px-4 md:px-0"
          >
            <img
              src="/Images/WellnessGuide/pharma-1.jpg"
              alt="Tea cup and interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        <div className="">
          <motion.h3
            ref={pharmacogenomicsBottomRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              pharmacogenomicsBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3"
          >
            Why PGX Testing Matters
          </motion.h3>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-3 sm:gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              pharmacogenomicsBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-violet-700" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Prevent serious medication reactions
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              pharmacogenomicsBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <LuTestTube className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Get the right medication first time
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              pharmacogenomicsBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <IoMdContacts className="w-6 h-5 sm:w-7 sm:h-6 md:w-10 md:h-8 text-violet-700" />
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              Inform family about genetic factors
            </span>
          </motion.div>
        </div>
      </div>
      </div>

      {/* Hereditary conditions */}
<div className="mx-auto bg-[#e8e7e3] shadow-lg rounded-lg p-3 sm:p-4 md:p-8 lg:p-12">
      <div className="flex justify-between items-center mb-10 md:mb-20 relative mt-10 md:mt-20">
        <div className="absolute inset-0 flex items-center justify-start top-1 left-10 md:left-40">
          <svg
            width="20px"
            height="20px"
            className="md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-end top-1 right-10 md:right-40">
          <svg
            width="20px"
            height="20px"
            className="md:w-[25px] md:h-[25px]"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path fill="#92c5fc" d="M0 6h4l3 8.6-7-8.6z"></path>
            <path fill="#92c5fc" d="M16 6h-4l-3 8.6 7-8.6z"></path>
            <path fill="#92c5fc" d="M8 15l-3-9h6l-3 9z"></path>
            <path fill="#92c5fc" d="M4 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M16 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M10 5h-4l2-3 2 3z"></path>
            <path fill="#92c5fc" d="M3.34 2h3.66l-2 3-1.66-3z"></path>
            <path fill="#92c5fc" d="M9 2h4l-2 3-2-3z"></path>
          </svg>
        </div>
        <div className="border-b-2 tracking-wider border-b-gray-800 w-full"></div>
      </div>

      {/* Hereditary Section */}
      <div
        id="hereditary"
        ref={(el) => (sectionsRef.current[5] = el)}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-screen"
      >
        {/* Left column */}
        <div className="space-y-6 md:space-y-8">
          {/* Book image with hand */}
          <div className="flex justify-center mt-4 md:mt-6">
            <motion.div
              ref={hereditaryImageRef}
              initial={{ opacity: 0, x: -50, md: { x: 100 } }}
              animate={
                hereditaryImageInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: 100 } }
              }
              transition={{ duration: 0.5 }}
              className="max-w-40 md:max-w-60 rounded-full overflow-hidden bg-gray-200 relative"
            >
              <img
                src="/Images/WellnessGuide/hereditary-1.jpg"
                alt="Book on fabric"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Description text */}
          <motion.p
            ref={hereditaryTextRef}
            initial={{ opacity: 0, x: -50, md: { x: -100 } }}
            animate={
              hereditaryTextInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50, md: { x: -100 } }
            }
            transition={{ duration: 0.7 }}
            className="text-sm leading-relaxed text-gray-700 px-4 md:px-0"
          >
            Your family history carries valuable clues about your health.
            Hereditary testing helps identify genetic variants linked to various
            health conditions, allowing you to take control of your health
            journey with personalized insights and preventive strategies.
          </motion.p>

          {/* Symptom Section 1 */}
          <div className="px-4 md:px-0">
            <motion.div
              ref={hereditarySymptom1Ref}
              initial={{ opacity: 0, x: -50, md: { x: -100 } }}
              animate={
                hereditarySymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: -100 } }
              }
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center space-x-2"
            >
              <HeartPulse className="text-red-600" />
              <h3 className="text-lg font-bold mb-2">
                Cardiovascular Conditions
              </h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50, md: { x: -100 } }}
              animate={
                hereditarySymptom1InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: -100 } }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="list-disc list-inside space-y-2 ml-4 md:ml-8 font-semibold"
            >
              <li className="marker:text-yellow-400">
                Familial hypercholesterolemia
              </li>
              <li className="marker:text-yellow-400">
                Inherited cardiomyopathies
              </li>
              <li className="marker:text-yellow-400">Hereditary arrhythmias</li>
            </motion.ul>
          </div>

          {/* Symptom Section 2 */}
          <div className="px-4 md:px-0">
            <motion.div
              ref={hereditarySymptom2Ref}
              initial={{ opacity: 0, x: -50, md: { x: -100 } }}
              animate={
                hereditarySymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: -100 } }
              }
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center space-x-2"
            >
              <Dna className="text-blue-400" />
              <h3 className="text-lg font-bold mb-2">Cancer Predispositions</h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50, md: { x: -100 } }}
              animate={
                hereditarySymptom2InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: -100 } }
              }
              transition={{ duration: 0.7, delay: 0.4 }}
              className="list-disc list-inside space-y-2 ml-4 md:ml-8 font-semibold"
            >
              <li className="marker:text-yellow-400">BRCA1/BRCA2 mutations</li>
              <li className="marker:text-yellow-400">Lynch syndrome</li>
              <li className="marker:text-yellow-400">
                Familial adenomatous polyposis
              </li>
            </motion.ul>
          </div>

          {/* Symptom Section 3 */}
          <div className="px-4 md:px-0">
            <motion.div
              ref={hereditarySymptom3Ref}
              initial={{ opacity: 0, x: -50, md: { x: -100 } }}
              animate={
                hereditarySymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: -100 } }
              }
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <SiMetabase className="w-6 h-6 text-orange-700" />
              <h3 className="text-lg font-bold mb-2">Metabolic Disorders</h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: -50, md: { x: -100 } }}
              animate={
                hereditarySymptom3InView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -50, md: { x: -100 } }
              }
              transition={{ duration: 0.7, delay: 0.6 }}
              className="list-disc list-inside space-y-2 ml-4 md:ml-8 font-semibold"
            >
              <li className="marker:text-yellow-400">
                Hereditary hemochromatosis
              </li>
              <li className="marker:text-yellow-400">
                Familial hypercholesterolemia
              </li>
              <li className="marker:text-yellow-400">
                Alpha-1 antitrypsin deficiency
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8 md:space-y-12 mt-8 md:mt-0">
          <div className="text-center px-4 md:px-0">
            <motion.h1
              ref={hereditaryHeaderRef}
              initial={{ opacity: 0, x: 50, md: { x: 100 } }}
              animate={
                hereditaryHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50, md: { x: 100 } }
              }
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-normal leading-none"
            >
              Hereditary Conditions
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: 50, md: { x: 100 } }}
              animate={
                hereditaryHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50, md: { x: 100 } }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl font-serif tracking-normal leading-normal"
            >
              Understanding Your Genetic Legacy
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 50, md: { x: 100 } }}
              animate={
                hereditaryHeaderInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50, md: { x: 100 } }
              }
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm"
            >
              Discover how hereditary testing can provide insights into your
              genetic health risks and empower proactive care.
            </motion.p>
          </div>

          <motion.div
            ref={hereditaryImageRef}
            initial={{ opacity: 0, x: 50, md: { x: 100 } }}
            animate={
              hereditaryImageInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50, md: { x: 100 } }
            }
            transition={{ duration: 0.7 }}
            className="w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-gray-200 relative mx-auto px-4 md:px-0"
          >
            <img
              src="/Images/WellnessGuide/hereditary-2.jpg"
              alt="Tea cup and interior"
              className="w-full h-full object-fill"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-8 md:mt-10">
        <div className="">
          <motion.h3
            ref={hereditaryBottomRef}
            initial={{ opacity: 0, y: 30, md: { y: 50 } }}
            animate={
              hereditaryBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30, md: { y: 50 } }
            }
            transition={{ duration: 0.7 }}
            className="text-xl md:text-2xl font-bold mb-4 p-3"
          >
            Why Hereditary Testing Matters
          </motion.h3>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-4 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30, md: { y: 50 } }}
            animate={
              hereditaryBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30, md: { y: 50 } }
            }
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <ShieldCheck className="w-6 md:w-7 h-6 md:h-7 text-violet-700" />
            <span className="font-semibold text-sm md:text-base">
              Identify risks before symptoms appear
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, md: { y: 50 } }}
            animate={
              hereditaryBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30, md: { y: 50 } }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <LuTestTube className="w-8 md:w-10 h-6 md:h-8 text-violet-700" />
            <span className="font-semibold text-sm md:text-base">
              Develop personalized screening plans
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, md: { y: 50 } }}
            animate={
              hereditaryBottomInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30, md: { y: 50 } }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <IoMdContacts className="w-8 md:w-10 h-6 md:h-8 text-violet-700" />
            <span className="font-semibold text-sm md:text-base">
              Share vital health information with family
            </span>
          </motion.div>
        </div>
      </div>
      </div>
      <FloatingTestButton />
      </section>
    </>
  );
};

export default WellnessGuide;
