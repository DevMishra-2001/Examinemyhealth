// import { data } from "autoprefixer";
// import React from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// const AboutUs = () => {
//   const features = [
//     {
//       icon: "🖼️",
//       title: "Unlimited Images",
//       desc: "You can upload unlimited shoots for your property",
//     },
//     {
//       icon: "☁️",
//       title: "Private Cloud",
//       desc: "Your company have a private cloud",
//     },
//     {
//       icon: "🎮",
//       title: "Remote VR",
//       desc: "Manage your property view remotely",
//     },
//     {
//       icon: "📐",
//       title: "Floor Plan",
//       desc: "Provide 3D design for your property",
//     },
//   ];

//   const chartData = [
//     { patient: "Facility", desktop: 186, mobile: 80 },
//     { patient: "Reception", desktop: 305, mobile: 200 },
//     { patient: "Nurse", desktop: 237, mobile: 120 },
//     { patient: "Pharmacy", desktop: 73, mobile: 190 },
//     { patient: "Labouratory", desktop: 209, mobile: 130 },
//     { patient: "Insurance", desktop: 214, mobile: 140 },
//   ];
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-2 border border-gray-200 shadow-sm rounded text-sm">
//           <p className="font-medium">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} style={{ color: entry.color }}>
//               {entry.name}: {entry.value}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   const ResponsiveBarChart = ({ height = "h-64", chartData }) => {
//     // You can adjust these size classes based on your needs
//     const sizes = {
//       small: "h-48",
//       medium: "h-64",
//       large: "h-80",
//       xlarge: "h-96",
//     };

//     // Use the provided height or default to medium
//     const chartHeight = sizes[height] || height;
//   };
//   return (
//     <>
//       {/* About Us Section */}
//       <section className="relative w-full min-h-screen bg-blue-50 px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center overflow-hidden">
//         {/* SVG Background */}
//         <div className="absolute inset-0 z-0 opacity-40 w-full h-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             version="1.1"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 0 1422 800"
//             className="w-full h-full"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <defs>
//               <linearGradient
//                 x1="50%"
//                 y1="0%"
//                 x2="50%"
//                 y2="100%"
//                 id="oooscillate-grad"
//               >
//                 <stop
//                   stopColor="hsl(184, 74%, 44%)"
//                   stopOpacity="1"
//                   offset="0%"
//                 />
//                 <stop
//                   stopColor="hsl(332, 87%, 70%)"
//                   stopOpacity="1"
//                   offset="100%"
//                 />
//               </linearGradient>
//             </defs>
//             <g
//               strokeWidth="2"
//               stroke="url(#oooscillate-grad)"
//               fill="none"
//               strokeLinecap="round"
//             >
//               {/* All path elements */}
//               {[...Array(27)].map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M 0 ${
//                     572 - i * 22
//                   } Q 355.5 -100 711 400 Q 1066.5 900 1422 ${572 - i * 22}`}
//                   opacity={(Math.random() * 0.8 + 0.2).toFixed(2)}
//                 />
//               ))}
//             </g>
//           </svg>
//         </div>

//         {/* Content */}
//         <div className="max-w-2xl md:w-1/2 text-center md:text-left relative z-10 md:ml-12">
//           <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4 max-w-60">
//             About Us
//           </h2>
//           <h3 className="text-xl md:text-2xl font-base font-serif text-gray-700 mb-6 max-w-sm">
//             A New Way For Working For Many Of Professionals.
//           </h3>
//           <p className="text-gray-600 mb-3 text-sm max-w-md">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
//             doloremque consequatur cum quos quas facilis magnam voluptatem
//             praesentium est placeat!
//           </p>
//           <p className="text-gray-600 mb-3 text-sm max-w-md">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
//             iusto sapiente molestiae. Esse, nihil explicabo.
//           </p>
//           <p className="text-gray-600 text-sm max-w-md">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
//             recusandae necessitatibus ipsa praesentium mollitia consequatur
//             laborum eligendi maxime omnis velit.
//           </p>
//         </div>

//         {/* Images */}
//         <div className="mt-10 md:mt-0 md:ml-12 md:w-1/2 flex gap-4 justify-center items-end relative z-10">
//           <img
//             src="/Images/About/Image-1.jpeg"
//             alt="Mosque"
//             className="h-80 w-24 object-cover rounded-3xl shadow-md border border-purple-300"
//           />
//           <img
//             src="/Images/About/Image-4.jpeg"
//             alt="Mosque"
//             className="h-96 w-28 object-cover rounded-3xl shadow-md border border-purple-300"
//           />
//           <img
//             src="/Images/About/Image-3.jpeg"
//             alt="Mosque"
//             className="h-80 w-24 object-cover rounded-3xl shadow-md border border-purple-300"
//           />
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="max-w-7xl min-h-screen flex items-center justify-center bg-[#f1f4ff] px-6 py-20">
//         <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#e6ecff] to-[#d8ecff] rounded-3xl w-full max-w-5xl shadow-xl overflow-hidden">
//           {/* Left Side: Heading */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 space-y-4">
//             <h1 className="text-6xl md:text-7xl font-extrabold">
//               <span className="text-black">WHO</span> <br />
//               <span className="text-indigo-400 drop-shadow-md">WE</span> <br />
//               <span className="text-black">ARE ?</span>
//             </h1>
//             <p className="text-lg font-semibold mt-6 ">
//               <span className="text-black">To</span>{" "}
//               <span className="text-indigo-400 ">Inspire...</span>
//             </p>
//           </div>

//           {/* Right Side: Image + Text */}
//           <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center text-center p-10 bg-gradient-to-tr from-pink-200 via-gray-300 to-blue-200 ">
//             <img
//               src="/Images/About/building.png"
//               alt="3D Buildings"
//               className="w-[300px] -translate-x-64 translate-y-14"
//             />
//             <p className="text-gray-700 text-base font-serif font-medium max-w-xs ml-28">
//               We're Expert in virtual reality and scanning 3D technologies for
//               real estate companies to enhance the user experience in his
//               decision journey...
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className=" w-full mt-10 max-w-7xl mx-auto bg-gradient-to-b from-[#b5ccdc] to-[#d9e2fc] p-10  shadow-lg flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//             What <span className="text-sky-500">WE</span> Do{" "}
//             <span className="text-black">?!</span>
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"></div>

//           <ul className="space-y-4 mt-4 text-sm text-gray-700">
//             <li className="flex items-center">
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Prioritizing individual needs, preferences, and values in all
//               clinical decisions
//             </li>
//             <li className="flex items-center">
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Emphasizing disease prevention and early intervention rather than
//               just treating illness
//             </li>
//             <li className="flex items-center">
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Collaboration between different healthcare professionals for
//               comprehensive care
//             </li>
//             <li className="flex items-center">
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Using digital tools to improve care coordination and access to
//               records
//             </li>
//             <li className="flex items-center">
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Prioritizing error prevention and learning from adverse events
//             </li>
//           </ul>
//         </div>

//         {/* Right Content - Rocket */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="relative">
//             <div className=" flex justify-center items-center">
//               {/* <img src="/Images/About/rocket.png" alt="Rocket" className="w-72 md:w-80 drop-shadow-xl -rotate-45" /> */}
//               <img
//                 src="/Images/About/dia.png"
//                 alt=""
//                 className="h-[400px] translate-y-8"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bg-white py-12 px-4 md:px-8 lg:px-12">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-xl font-semibold font-serif mb-2">
//                 Enhancing Communication
//               </h3>
//               <p className="text-sm font-normal text-gray-700 leading-tight">
//                 Clear, consistent, and compassionate communication forms the
//                 foundation of positive patient interactions. Our healthcare
//                 providers prioritize active listening, thorough explanations,
//                 and accessible information sharing at every touchpoint in the
//                 patient journey.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold font-serif mb-2">
//                 Empathy and Emotional Support
//               </h3>
//               <p className="text-sm font-normal text-gray-700 leading-tight">
//                 We recognize that healing involves more than physical treatment.
//                 Our approach emphasizes compassionate connections, acknowledging
//                 patients' emotional needs, and providing psychological support
//                 throughout their healthcare experience.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold font-serif mb-2">
//                 Patient Education and Engagement
//               </h3>
//               <p className="text-sm font-normal text-gray-700 leading-tight">
//                 Empowered patients achieve better outcomes. We focus on
//                 providing comprehensive education, involving patients in
//                 decision-making processes, and offering resources that enable
//                 them to actively participate in their own care plan.
//               </p>
//             </div>
//           </div>

//           {/* Center Image Column */}
//           <div className="flex justify-center items-center">
//             <div className="bg-blue-500 p-2 w-full max-w-md">
//               <img
//                 src="/Images/About/patient-1.png"
//                 alt="Patient Experience"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-xl font-semibold font-serif mb-2">
//                 Physical Environment and Amenities
//               </h3>
//               <p className="text-sm font-normal text-gray-700 leading-tight">
//                 Healing spaces matter. Our facilities are thoughtfully designed
//                 to promote comfort, privacy, and accessibility while reducing
//                 stress through attention to details like lighting, noise
//                 reduction, and intuitive navigation.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold font-serif mb-2">
//                 Care Coordination and Continuity
//               </h3>
//               <p className="text-sm font-normal text-gray-700 leading-tight">
//                 Seamless transitions between care settings and providers ensure
//                 patients receive consistent, integrated support. Our coordinated
//                 approach minimizes gaps in care, prevents information loss, and
//                 maintains therapeutic relationships throughout the healthcare
//                 journey.
//               </p>
//               <p className="text-sm font-normal text-gray-700 mt-4 leading-tight">
//                 By intentionally addressing each of these interconnected
//                 dimensions, we create a patient experience that addresses the
//                 whole person—physically, emotionally, and
//                 educationally—resulting in improved outcomes, higher
//                 satisfaction, and lasting trust.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-300 py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left: Text content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-4 leading-tight">
//             More than medicine.
//             <br />
//             It&apos;s personal.
//           </h1>
//           <p className="text-gray-600 text-lg mb-6">
//             We take health care personally at Sinai Chicago. Because excellence
//             in health care is about more than just medicine, technology, tests
//             and treatments. It is about really caring for people with dignity
//             and respect. That’s what we do. We are dedicated to providing the
//             best care to meet the needs of people – for our community, for our
//             patients –– for you.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded shadow-md transition">
//               FIND A DOCTOR
//             </button>
//             <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded shadow-md transition">
//               COVID-19 VACCINE INFORMATION
//             </button>
//           </div>
//         </div>

//         {/* Right: Image */}

//         <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center">
//           <img
//             src="/Images/About/heart.png"
//             alt="Happy senior woman with doctor"
//             className="rounded-lg w-[390px]"
//           />
//         </div>
//       </section>

//       <section className="bg-white w-full py-8 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
//         <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-4xl">
//           {/* Card Header */}
//           <div className="p-4 lg:p-6 border-b border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-900">
//               Bar Chart - Multiple
//             </h3>
//             <p className="text-sm text-gray-500">January - June 2024</p>
//           </div>

//           {/* Card Content */}
//           <div className="p-4 lg:p-6">
//             <div className={chartHeight}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                   data={chartData}
//                   margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
//                 >
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" />
//                   <XAxis
//                     dataKey="patient"
//                     tickLine={false}
//                     axisLine={false}
//                     tickMargin={10}
//                     tickFormatter={(value) => value.slice(0, 3)}
//                   />
//                   <Tooltip cursor={false} content={<CustomTooltip />} />
//                   <Bar
//                     dataKey="desktop"
//                     name="Desktop"
//                     fill="#4f46e5"
//                     radius={4}
//                   />
//                   <Bar
//                     dataKey="mobile"
//                     name="Mobile"
//                     fill="#06b6d4"
//                     radius={4}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUs;

// import React from "react";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";

// const AboutUs = () => {
//   const chartData = [
//     { patient: "Facility", desktop: 186, mobile: 80 },
//     { patient: "Reception", desktop: 305, mobile: 200 },
//     { patient: "Nurse", desktop: 237, mobile: 120 },
//     { patient: "Pharmacy", desktop: 73, mobile: 190 },
//     { patient: "Labouratory", desktop: 209, mobile: 130 },
//     { patient: "Insurance", desktop: 214, mobile: 140 },
//   ];

//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white p-2 border border-gray-200 shadow-sm rounded text-sm">
//           <p className="font-medium">{label}</p>
//           {payload.map((entry, index) => (
//             <p key={index} style={{ color: entry.color }}>
//               {entry.name}: {entry.value}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <>
//       {/* About Us Section */}
//       <section className="relative w-full min-h-screen bg-blue-50 px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center overflow-hidden">
//         {/* SVG Background */}
//         <div className="absolute inset-0 z-0 opacity-40 w-full h-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             version="1.1"
//             xmlnsXlink="http://www.w3.org/1999/xlink"
//             viewBox="0 0 1422 800"
//             className="w-full h-full"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <defs>
//               <linearGradient
//                 x1="50%"
//                 y1="0%"
//                 x2="50%"
//                 y2="100%"
//                 id="oooscillate-grad"
//               >
//                 <stop
//                   stopColor="hsl(184, 74%, 44%)"
//                   stopOpacity="1"
//                   offset="0%"
//                 />
//                 <stop
//                   stopColor="hsl(332, 87%, 70%)"
//                   stopOpacity="1"
//                   offset="100%"
//                 />
//               </linearGradient>
//             </defs>
//             <g
//               strokeWidth="2"
//               stroke="url(#oooscillate-grad)"
//               fill="none"
//               strokeLinecap="round"
//             >
//               {/* All path elements */}
//               {[...Array(27)].map((_, i) => (
//                 <path
//                   key={i}
//                   d={`M 0 ${
//                     572 - i * 22
//                   } Q 355.5 -100 711 400 Q 1066.5 900 1422 ${572 - i * 22}`}
//                   opacity={(Math.random() * 0.8 + 0.2).toFixed(2)}
//                 />
//               ))}
//             </g>
//           </svg>
//         </div>

//         {/* Content */}
//         <div className="max-w-2xl md:w-1/2 text-center md:text-left relative z-10 md:ml-12">
//           <motion.h2
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4 max-w-60"
//           >
//             About Us
//           </motion.h2>
//           <motion.h3
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-xl md:text-2xl font-base font-family text-gray-700 mb-6 max-w-sm"
//           >
//             A New Way For Working For Many Of Professionals.
//           </motion.h3>
//           <motion.p
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.5, duration: 0.7 }}
//             className="text-gray-600 mb-3 text-sm max-w-md font-serif"
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
//             doloremque consequatur cum quos quas facilis magnam voluptatem
//             praesentium est placeat!
//           </motion.p>
//           <motion.p
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-gray-600 mb-3 text-sm max-w-md font-serif"
//           >
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
//             iusto sapiente molestiae. Esse, nihil explicabo.
//           </motion.p>
//           <motion.p
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.7, duration: 0.9 }}
//             className="text-gray-600 text-sm max-w-md font-serif"
//           >
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
//             recusandae necessitatibus ipsa praesentium mollitia consequatur
//             laborum eligendi maxime omnis velit.
//           </motion.p>
//         </div>

//         {/* Images */}
//         <div className="mt-10 md:mt-0 md:ml-12 md:w-1/2 flex gap-4 justify-center items-end relative z-10">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: -100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.7, duration: 0.9 }}
//           >
//             <img
//               src="/Images/About/Image-1.jpeg"
//               alt="Mosque"
//               className="h-80 w-24 object-cover rounded-3xl shadow-md border border-purple-300"
//             />
//           </motion.div>
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.7, duration: 0.9 }}
//           >
//             <img
//               src="/Images/About/Image-4.jpeg"
//               alt="Mosque"
//               className="h-96 w-28 object-cover rounded-3xl shadow-md border border-purple-300"
//             />
//           </motion.div>
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: -100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.7, duration: 0.9 }}
//           >
//             <img
//               src="/Images/About/Image-3.jpeg"
//               alt="Mosque"
//               className="h-80 w-24 object-cover rounded-3xl shadow-md border border-purple-300"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Who We Are Section */}
//       <section className="max-w-7xl min-h-screen flex items-center justify-center bg-[#f1f4ff] px-6 py-20">
//         <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#e6ecff] to-[#d8ecff] rounded-3xl w-full max-w-5xl shadow-xl overflow-hidden">
//           {/* Left Side: Heading */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 space-y-4">
//             <motion.h1
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="text-6xl md:text-7xl font-extrabold"
//             >
//               <span className="text-black font-title">WHO</span> <br />
//               <span className="text-indigo-400 drop-shadow-md font-title">
//                 WE
//               </span>{" "}
//               <br />
//               <span className="text-black font-title">ARE ?</span>
//             </motion.h1>
//             <motion.p
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-lg font-semibold mt-6 font-serif"
//             >
//               <span className="text-black">To</span>{" "}
//               <span className="text-indigo-400 ">Inspire...</span>
//             </motion.p>
//           </div>

//           {/* Right Side: Image + Text */}
//           <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center text-center p-10 bg-gradient-to-tr from-pink-200 via-gray-300 to-blue-200 ">
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.7 }}
//             >
//               <img
//                 src="/Images/About/building.png"
//                 alt="3D Buildings"
//                 className="w-[300px] md:-translate-x-64 md:translate-y-14 "
//               />
//             </motion.div>
//             <motion.p
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="text-gray-700 text-base font-serif font-medium max-w-xs md:ml-28"
//             >
//               We're Expert in virtual reality and scanning 3D technologies for
//               real estate companies to enhance the user experience in his
//               decision journey...
//             </motion.p>
//           </div>
//         </div>
//       </section>
//       <section className=" w-full mt-10 max-w-7xl mx-auto bg-gray-200 p-10  shadow-lg flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Left Content */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <motion.h2
//             ref={ref}
//             initial={{ opacity: 0, y: -100 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="text-4xl md:text-5xl font-extrabold text-gray-800 font-title"
//           >
//             What <span className="text-sky-500">WE</span> Do{" "}
//             <span className="text-black">?!</span>
//           </motion.h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"></div>

//           <ul className="space-y-4 mt-4 text-sm text-gray-700 font-family">
//             <motion.li
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="flex items-center"
//             >
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Prioritizing individual needs, preferences, and values in all
//               clinical decisions
//             </motion.li>
//             <motion.li
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.7 }}
//               className="flex items-center"
//             >
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Emphasizing disease prevention and early intervention rather than
//               just treating illness
//             </motion.li>
//             <motion.li
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="flex items-center"
//             >
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Collaboration between different healthcare professionals for
//               comprehensive care
//             </motion.li>
//             <motion.li
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.7, duration: 0.9 }}
//               className="flex items-center"
//             >
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Using digital tools to improve care coordination and access to
//               records
//             </motion.li>
//             <motion.li
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.8, duration: 1.0 }}
//               className="flex items-center"
//             >
//               <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
//               Prioritizing error prevention and learning from adverse events
//             </motion.li>
//           </ul>
//         </div>

//         {/* Right Content - Rocket */}
//         <div className="w-full md:w-1/2 flex justify-center relative">
//           <div className="relative">
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.7, duration: 0.9 }}
//               className=" flex justify-center items-center"
//             >
//               <img
//                 src="/Images/About/dia.png"
//                 alt=""
//                 className="h-[400px] translate-y-8"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       <section className="bg-white py-12 px-4 md:px-8 lg:px-12">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="space-y-6">
//             <div>
//               <motion.h3
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="text-xl font-semibold font-serif mb-2"
//               >
//                 Enhancing Communication
//               </motion.h3>
//               <motion.p
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-sm text-gray-700 leading-tight font-family"
//               >
//                 Clear, consistent, and compassionate communication forms the
//                 foundation of positive patient interactions. Our healthcare
//                 providers prioritize active listening, thorough explanations,
//                 and accessible information sharing at every touchpoint in the
//                 patient journey.
//               </motion.p>
//             </div>
//             <div>
//               <motion.h3
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.5, duration: 0.7 }}
//                 className="text-xl font-semibold font-serif mb-2"
//               >
//                 Empathy and Emotional Support
//               </motion.h3>
//               <motion.p
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="text-sm font-family text-gray-700 leading-tight"
//               >
//                 We recognize that healing involves more than physical treatment.
//                 Our approach emphasizes compassionate connections, acknowledging
//                 patients' emotional needs, and providing psychological support
//                 throughout their healthcare experience.
//               </motion.p>
//             </div>
//             <div>
//               <motion.h3
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.7, duration: 0.9 }}
//                 className="text-xl font-semibold font-serif mb-2"
//               >
//                 Patient Education and Engagement
//               </motion.h3>
//               <motion.p
//                 ref={ref}
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.8, duration: 1.0 }}
//                 className="text-sm font-family text-gray-700 leading-tight"
//               >
//                 Empowered patients achieve better outcomes. We focus on
//                 providing comprehensive education, involving patients in
//                 decision-making processes, and offering resources that enable
//                 them to actively participate in their own care plan.
//               </motion.p>
//             </div>
//           </div>

//           {/* Center Image Column */}
//           <div className="flex justify-center items-center">
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, y: -100 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.7 }}
//               className="bg-blue-500 p-2 w-full max-w-md"
//             >
//               <img
//                 src="/Images/About/patient-1.png"
//                 alt="Patient Experience"
//                 className="w-full h-auto object-cover"
//               />
//             </motion.div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             <div>
//               <motion.h3
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="text-xl font-semibold font-serif mb-2"
//               >
//                 Physical Environment and Amenities
//               </motion.h3>
//               <motion.p
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="text-sm font-family text-gray-700 leading-tight"
//               >
//                 Healing spaces matter. Our facilities are thoughtfully designed
//                 to promote comfort, privacy, and accessibility while reducing
//                 stress through attention to details like lighting, noise
//                 reduction, and intuitive navigation.
//               </motion.p>
//             </div>
//             <div>
//               <motion.h3
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.5, duration: 0.7 }}
//                 className="text-xl font-semibold font-serif mb-2"
//               >
//                 Care Coordination and Continuity
//               </motion.h3>
//               <motion.p
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.7, duration: 0.9 }}
//                 className="text-sm font-family text-gray-700 leading-tight"
//               >
//                 Seamless transitions between care settings and providers ensure
//                 patients receive consistent, integrated support. Our coordinated
//                 approach minimizes gaps in care, prevents information loss, and
//                 maintains therapeutic relationships throughout the healthcare
//                 journey.
//               </motion.p>
//               <motion.p
//                 ref={ref}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.7, duration: 0.9 }}
//                 className="text-sm font-family text-gray-700 mt-4 leading-tight"
//               >
//                 By intentionally addressing each of these interconnected
//                 dimensions, we create a patient experience that addresses the
//                 whole person—physically, emotionally, and
//                 educationally—resulting in improved outcomes, higher
//                 satisfaction, and lasting trust.
//               </motion.p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-300 py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left: Text content */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <motion.h1
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="text-4xl lg:text-5xl font-bold font-title text-blue-800 mb-4 leading-tight"
//           >
//             More than medicine.
//             <br />
//             It&apos;s personal.
//           </motion.h1>
//           <motion.p
//             ref={ref}
//             initial={{ opacity: 0, x: -100 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-gray-600 text-lg mb-6 font-serif"
//           >
//             We take health care personally at Sinai Chicago. Because excellence
//             in health care is about more than just medicine, technology, tests
//             and treatments. It is about really caring for people with dignity
//             and respect. That's what we do. We are dedicated to providing the
//             best care to meet the needs of people – for our community, for our
//             patients –– for you.
//           </motion.p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <motion.button
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.7 }}
//               className="bg-red-600 hover:bg-red-700 text-white font-semibold font-title px-6 py-3 rounded shadow-md transition"
//             >
//               FIND A DOCTOR
//             </motion.button>
//             <motion.button
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.5, duration: 0.7 }}
//               className="bg-red-600 hover:bg-red-700 text-white font-semibold font-title px-6 py-3 rounded shadow-md transition"
//             >
//               COVID-19 VACCINE INFORMATION
//             </motion.button>
//           </div>
//         </div>

//         {/* Right: Image */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, x: 100 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center"
//         >
//           <img
//             src="/Images/About/heart.png"
//             alt="Happy senior woman with doctor"
//             className="rounded-lg w-full max-w-[390px]"
//           />
//         </motion.div>
//       </section>

//       {/* Full Screen Chart Section */}
//       <motion.section
//         ref={ref}
//         initial={{ opacity: 0, y: 100 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ delay: 0.7, duration: 0.9 }}
//         className="bg-white w-full py-8 px-4 sm:px-6 lg:px-8"
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* Card Header */}
//           <div className="p-4 sm:p-6 border-b border-gray-200">
//             <h3 className="text-2xl font-bold text-gray-900 font-title">
//               Patient Interaction Statistics
//             </h3>
//             <p className="text-sm text-gray-500 font-serif">
//               Desktop vs Mobile Access Comparison
//             </p>
//           </div>

//           {/* Card Content */}
//           <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
//             {/* Chart Container with responsive height */}
//             <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                   data={chartData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//                 >
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" />
//                   <XAxis
//                     dataKey="patient"
//                     tickLine={false}
//                     axisLine={false}
//                     tickMargin={10}
//                   />
//                   <Tooltip cursor={false} content={<CustomTooltip />} />
//                   <Bar
//                     dataKey="desktop"
//                     name="Desktop"
//                     fill="#4f46e5"
//                     radius={[4, 4, 0, 0]}
//                     barSize={30}
//                   />
//                   <Bar
//                     dataKey="mobile"
//                     name="Mobile"
//                     fill="#06b6d4"
//                     radius={[4, 4, 0, 0]}
//                     barSize={30}
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>

//             {/* Legend */}
//             <div className="mt-6 flex flex-wrap gap-6 justify-center">
//               <div className="flex items-center">
//                 <div className="w-4 h-4 bg-[#4f46e5] rounded mr-2"></div>
//                 <span className="text-sm text-gray-700">Desktop Access</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="w-4 h-4 bg-[#06b6d4] rounded mr-2"></div>
//                 <span className="text-sm text-gray-700">Mobile Access</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// };

// export default AboutUs;


import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";

const AboutUs = () => {
  const chartData = [
    { patient: "Facility", desktop: 186, mobile: 80 },
    { patient: "Reception", desktop: 305, mobile: 200 },
    { patient: "Nurse", desktop: 237, mobile: 120 },
    { patient: "Pharmacy", desktop: 73, mobile: 190 },
    { patient: "Labouratory", desktop: 209, mobile: 130 },
    { patient: "Insurance", desktop: 214, mobile: 140 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-sm rounded text-sm">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Instead of a single ref, create a custom hook for reusable animation refs
  const useAnimationRef = (options = {}) => {
    return useInView({
      triggerOnce: true, // Only trigger animation once
      threshold: 0.2, // Higher threshold - element must be more visible
      rootMargin: "-50px", // Add margin to trigger slightly before element is in view
      ...options
    });
  };

  // Create individual refs for each section
  const [aboutHeaderRef, aboutHeaderInView] = useAnimationRef();
  const [aboutTextRef, aboutTextInView] = useAnimationRef();
  const [aboutImagesRef, aboutImagesInView] = useAnimationRef();
  const [whoWeAreRef, whoWeAreInView] = useAnimationRef();
  const [whatWeDoHeaderRef, whatWeDoHeaderInView] = useAnimationRef();
  const [whatWeDoListRef, whatWeDoListInView] = useAnimationRef();
  const [whatWeDoImageRef, whatWeDoImageInView] = useAnimationRef();
  const [enhancingComRef, enhancingComInView] = useAnimationRef();
  const [empathyRef, empathyInView] = useAnimationRef();
  const [patientEdRef, patientEdInView] = useAnimationRef();
  const [centerImageRef, centerImageInView] = useAnimationRef();
  const [physicalEnvRef, physicalEnvInView] = useAnimationRef();
  const [careCoordRef, careCoordInView] = useAnimationRef();
  const [personalHeaderRef, personalHeaderInView] = useAnimationRef();
  const [personalTextRef, personalTextInView] = useAnimationRef();
  const [buttonRef, buttonInView] = useAnimationRef();
  const [heartImageRef, heartImageInView] = useAnimationRef();
  const [chartRef, chartInView] = useAnimationRef();

  return (
    <>
      {/* About Us Section */}
      <section className="relative w-full min-h-screen bg-blue-50 px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center overflow-hidden">
        {/* SVG Background */}
        <div className="absolute inset-0 z-0 opacity-40 w-full h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1422 800"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="oooscillate-grad"
              >
                <stop
                  stopColor="hsl(184, 74%, 44%)"
                  stopOpacity="1"
                  offset="0%"
                />
                <stop
                  stopColor="hsl(332, 87%, 70%)"
                  stopOpacity="1"
                  offset="100%"
                />
              </linearGradient>
            </defs>
            <g
              strokeWidth="2"
              stroke="url(#oooscillate-grad)"
              fill="none"
              strokeLinecap="round"
            >
              {/* All path elements */}
              {[...Array(27)].map((_, i) => (
                <path
                  key={i}
                  d={`M 0 ${
                    572 - i * 22
                  } Q 355.5 -100 711 400 Q 1066.5 900 1422 ${572 - i * 22}`}
                  opacity={(Math.random() * 0.8 + 0.2).toFixed(2)}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-2xl md:w-1/2 text-center md:text-left relative z-10 md:ml-12">
          <motion.h2
            ref={aboutHeaderRef}
            initial={{ opacity: 0, x: -100 }}
            animate={aboutHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4 max-w-60"
          >
            About Us
          </motion.h2>
          <motion.h3
            ref={aboutHeaderRef}
            initial={{ opacity: 0, x: -100 }}
            animate={aboutHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl font-base font-family text-gray-700 mb-6 max-w-sm"
          >
            A New Way For Working For Many Of Professionals.
          </motion.h3>
          <motion.p
            ref={aboutTextRef}
            initial={{ opacity: 0, x: -100 }}
            animate={aboutTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-gray-600 mb-3 text-sm max-w-md font-serif"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            doloremque consequatur cum quos quas facilis magnam voluptatem
            praesentium est placeat!
          </motion.p>
          <motion.p
            ref={aboutTextRef}
            initial={{ opacity: 0, x: -100 }}
            animate={aboutTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-600 mb-3 text-sm max-w-md font-serif"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            iusto sapiente molestiae. Esse, nihil explicabo.
          </motion.p>
          <motion.p
            ref={aboutTextRef}
            initial={{ opacity: 0, x: -100 }}
            animate={aboutTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="text-gray-600 text-sm max-w-md font-serif"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            recusandae necessitatibus ipsa praesentium mollitia consequatur
            laborum eligendi maxime omnis velit.
          </motion.p>
        </div>

        {/* Images */}
        <div className="mt-10 md:mt-0 md:ml-12 md:w-1/2 flex gap-4 justify-center items-end relative z-10">
          <motion.div
            ref={aboutImagesRef}
            initial={{ opacity: 0, y: -100 }}
            animate={aboutImagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            <img
              src="/Images/About/Image-1.jpeg"
              alt="Mosque"
              className="h-80 w-24 object-cover rounded-3xl shadow-md border border-purple-300"
            />
          </motion.div>
          <motion.div
            ref={aboutImagesRef}
            initial={{ opacity: 0, y: 100 }}
            animate={aboutImagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            <img
              src="/Images/About/Image-4.jpeg"
              alt="Mosque"
              className="h-96 w-28 object-cover rounded-3xl shadow-md border border-purple-300"
            />
          </motion.div>
          <motion.div
            ref={aboutImagesRef}
            initial={{ opacity: 0, y: -100 }}
            animate={aboutImagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.9 }}
          >
            <img
              src="/Images/About/Image-3.jpeg"
              alt="Mosque"
              className="h-80 w-24 object-cover rounded-3xl shadow-md border border-purple-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl min-h-screen flex items-center justify-center bg-[#f1f4ff] px-6 py-20">
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#e6ecff] to-[#d8ecff] rounded-3xl w-full max-w-5xl shadow-xl overflow-hidden">
          {/* Left Side: Heading */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 space-y-4">
            <motion.h1
              ref={whoWeAreRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-6xl md:text-7xl font-extrabold"
            >
              <span className="text-black font-title">WHO</span> <br />
              <span className="text-indigo-400 drop-shadow-md font-title">
                WE
              </span>{" "}
              <br />
              <span className="text-black font-title">ARE ?</span>
            </motion.h1>
            <motion.p
              ref={whoWeAreRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg font-semibold mt-6 font-serif"
            >
              <span className="text-black">To</span>{" "}
              <span className="text-indigo-400 ">Inspire...</span>
            </motion.p>
          </div>

          {/* Right Side: Image + Text */}
          <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center text-center p-10 bg-gradient-to-tr from-pink-200 via-gray-300 to-blue-200 ">
            <motion.div
              ref={whoWeAreRef}
              initial={{ opacity: 0, x: 100 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <img
                src="/Images/About/building.png"
                alt="3D Buildings"
                className="w-[300px] md:-translate-x-64 md:translate-y-14 "
              />
            </motion.div>
            <motion.p
              ref={whoWeAreRef}
              initial={{ opacity: 0, x: 100 }}
              animate={whoWeAreInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-700 text-base font-serif font-medium max-w-xs md:ml-28"
            >
              We're Expert in virtual reality and scanning 3D technologies for
              real estate companies to enhance the user experience in his
              decision journey...
            </motion.p>
          </div>
        </div>
      </section>
      <section className=" w-full mt-10 max-w-7xl mx-auto bg-gray-200 p-10  shadow-lg flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h2
            ref={whatWeDoHeaderRef}
            initial={{ opacity: 0, y: -100 }}
            animate={whatWeDoHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 font-title"
          >
            What <span className="text-sky-500">WE</span> Do{" "}
            <span className="text-black">?!</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-400 rounded-full"></div>

          <ul className="space-y-4 mt-4 text-sm text-gray-700 font-family">
            <motion.li
              ref={whatWeDoListRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whatWeDoListInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center"
            >
              <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
              Prioritizing individual needs, preferences, and values in all
              clinical decisions
            </motion.li>
            <motion.li
              ref={whatWeDoListRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whatWeDoListInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex items-center"
            >
              <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
              Emphasizing disease prevention and early intervention rather than
              just treating illness
            </motion.li>
            <motion.li
              ref={whatWeDoListRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whatWeDoListInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center"
            >
              <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
              Collaboration between different healthcare professionals for
              comprehensive care
            </motion.li>
            <motion.li
              ref={whatWeDoListRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whatWeDoListInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="flex items-center"
            >
              <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
              Using digital tools to improve care coordination and access to
              records
            </motion.li>
            <motion.li
              ref={whatWeDoListRef}
              initial={{ opacity: 0, x: -100 }}
              animate={whatWeDoListInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 1.0 }}
              className="flex items-center"
            >
              <span className="w-3 h-3 bg-rose-300 rounded-full mr-4 inline-block"></span>
              Prioritizing error prevention and learning from adverse events
            </motion.li>
          </ul>
        </div>

        {/* Right Content - Rocket */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative">
            <motion.div
              ref={whatWeDoImageRef}
              initial={{ opacity: 0, x: 100 }}
              animate={whatWeDoImageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.9 }}
              className=" flex justify-center items-center"
            >
              <img
                src="/Images/About/dia.png"
                alt=""
                className="h-[400px] translate-y-8"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <motion.h3
                ref={enhancingComRef}
                initial={{ opacity: 0, x: -100 }}
                animate={enhancingComInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl font-semibold font-serif mb-2"
              >
                Enhancing Communication
              </motion.h3>
              <motion.p
                ref={enhancingComRef}
                initial={{ opacity: 0, x: -100 }}
                animate={enhancingComInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm text-gray-700 leading-tight font-family"
              >
                Clear, consistent, and compassionate communication forms the
                foundation of positive patient interactions. Our healthcare
                providers prioritize active listening, thorough explanations,
                and accessible information sharing at every touchpoint in the
                patient journey.
              </motion.p>
            </div>
            <div>
              <motion.h3
                ref={empathyRef}
                initial={{ opacity: 0, x: -100 }}
                animate={empathyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-xl font-semibold font-serif mb-2"
              >
                Empathy and Emotional Support
              </motion.h3>
              <motion.p
                ref={empathyRef}
                initial={{ opacity: 0, x: -100 }}
                animate={empathyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-sm font-family text-gray-700 leading-tight"
              >
                We recognize that healing involves more than physical treatment.
                Our approach emphasizes compassionate connections, acknowledging
                patients' emotional needs, and providing psychological support
                throughout their healthcare experience.
              </motion.p>
            </div>
            <div>
              <motion.h3
                ref={patientEdRef}
                initial={{ opacity: 0, x: -100 }}
                animate={patientEdInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="text-xl font-semibold font-serif mb-2"
              >
                Patient Education and Engagement
              </motion.h3>
              <motion.p
                ref={patientEdRef}
                initial={{ opacity: 0, x: -100 }}
                animate={patientEdInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 1.0 }}
                className="text-sm font-family text-gray-700 leading-tight"
              >
                Empowered patients achieve better outcomes. We focus on
                providing comprehensive education, involving patients in
                decision-making processes, and offering resources that enable
                them to actively participate in their own care plan.
              </motion.p>
            </div>
          </div>

          {/* Center Image Column */}
          <div className="flex justify-center items-center">
            <motion.div
              ref={centerImageRef}
              initial={{ opacity: 0, y: -100 }}
              animate={centerImageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="bg-blue-500 p-2 w-full max-w-md"
            >
              <img
                src="/Images/About/patient-1.png"
                alt="Patient Experience"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <motion.h3
                ref={physicalEnvRef}
                initial={{ opacity: 0, x: 100 }}
                animate={physicalEnvInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl font-semibold font-serif mb-2"
              >
                Physical Environment and Amenities
              </motion.h3>
              <motion.p
                ref={physicalEnvRef}
                initial={{ opacity: 0, x: 100 }}
                animate={physicalEnvInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm font-family text-gray-700 leading-tight"
              >
                Healing spaces matter. Our facilities are thoughtfully designed
                to promote comfort, privacy, and accessibility while reducing
                stress through attention to details like lighting, noise
                reduction, and intuitive navigation.
              </motion.p>
            </div>
            <div>
              <motion.h3
                ref={careCoordRef}
                initial={{ opacity: 0, x: 100 }}
                animate={careCoordInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-xl font-semibold font-serif mb-2"
              >
                Care Coordination and Continuity
              </motion.h3>
              <motion.p
                ref={careCoordRef}
                initial={{ opacity: 0, x: 100 }}
                animate={careCoordInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="text-sm font-family text-gray-700 leading-tight"
              >
                Seamless transitions between care settings and providers ensure
                patients receive consistent, integrated support. Our coordinated
                approach minimizes gaps in care, prevents information loss, and
                maintains therapeutic relationships throughout the healthcare
                journey.
              </motion.p>
              <motion.p
                ref={careCoordRef}
                initial={{ opacity: 0, x: 100 }}
                animate={careCoordInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="text-sm font-family text-gray-700 mt-4 leading-tight"
              >
                By intentionally addressing each of these interconnected
                dimensions, we create a patient experience that addresses the
                whole person—physically, emotionally, and
                educationally—resulting in improved outcomes, higher
                satisfaction, and lasting trust.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            ref={personalHeaderRef}
            initial={{ opacity: 0, x: -100 }}
            animate={personalHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold font-title text-blue-800 mb-4 leading-tight"
          >
            More than medicine.
            <br />
            It&apos;s personal.
          </motion.h1>
          <motion.p
            ref={personalTextRef}
            initial={{ opacity: 0, x: -100 }}
            animate={personalTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-600 text-lg mb-6 font-serif"
          >
            We take health care personally at Sinai Chicago. Because excellence
            in health care is about more than just medicine, technology, tests
            and treatments. It is about really caring for people with dignity
            and respect. That's what we do. We are dedicated to providing the
            best care to meet the needs of people – for our community, for our
            patients –– for you.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              ref={buttonRef}
              initial={{ opacity: 0, x: -100 }}
              animate={buttonInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold font-title px-6 py-3 rounded shadow-md transition"
            >
              FIND A DOCTOR
            </motion.button>
            <motion.button
              ref={buttonRef}
              initial={{ opacity: 0, x: 100 }}
              animate={buttonInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold font-title px-6 py-3 rounded shadow-md transition"
            >
              COVID-19 VACCINE INFORMATION
            </motion.button>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          ref={heartImageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={heartImageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center"
        >
          <img
            src="/Images/About/heart.png"
            alt="Happy senior woman with doctor"
            className="rounded-lg w-full max-w-[390px]"
          />
        </motion.div>
      </section>

      {/* Full Screen Chart Section */}
      <motion.section
        ref={chartRef}
        initial={{ opacity: 0, y: 100 }}
        animate={chartInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white w-full py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Card Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 font-title">
              Patient Interaction Statistics
            </h3>
            <p className="text-sm text-gray-500 font-serif">
              Desktop vs Mobile Access Comparison
            </p>
          </div>

          {/* Card Content */}
          <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* Chart Container with responsive height */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="patient"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                  />
                  <Tooltip cursor={false} content={<CustomTooltip />} />
                  <Bar
                    dataKey="desktop"
                    name="Desktop"
                    fill="#4f46e5"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                  <Bar
                    dataKey="mobile"
                    name="Mobile"
                    fill="#06b6d4"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 justify-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#4f46e5] rounded mr-2"></div>
                <span className="text-sm text-gray-700">Desktop Access</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#06b6d4] rounded mr-2"></div>
                <span className="text-sm text-gray-700">Mobile Access</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
