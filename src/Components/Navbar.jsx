// import React, { useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "motion/react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <header className="fixed font-family top-0 left-0 w-full text-white z-50">
//       <div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
//         <div class="flex flex-wrap">
//           {/* <!-- Left Section --> */}
//           <div class="w-full">
//             <div class="top-bar-info">
//               <ul class="pl-0 list-none flex flex-wrap gap-4">
//                 <li class="flex items-center gap-2">
//                   <i class="ti-mobile"></i>(+123) 456 7890
//                 </li>
//                 <li class="hidden sm:inline-block flex items-center gap-2">
//                   <i class="ti-email"></i>addyour@emailhere
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* <!-- Right Section --> */}
//           <div class="hidden md:block w-full md:w-3/12">
//             <ul class="top-social-icon pl-0 list-none flex justify-end gap-3">
//               <li>
//                 <a href="#!">
//                   <i class="fab fa-facebook-f"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#!">
//                   <i class="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#!">
//                   <i class="fab fa-instagram"></i>
//                 </a>
//               </li>
//               <li>
//                 <a href="#!">
//                   <i class="fab fa-linkedin-in"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div
//         className="relative bg-opacity-50 bg-cover bg-center"
//         style={{ backgroundImage: "url('/Images/Bg/sky.jpg')" }}
//       >
//         <div className="container mx-auto px-4 lg:px-6">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="flex items-center"
//             >
//               <a href="index.html" className="flex items-center">
//                 <img src="/Images/logo.png" alt="logo" className="h-12" />
//               </a>
//             </motion.div>

//             {/* Mobile menu button */}
//             <div className="flex md:hidden">
//               <button
//                 type="button"
//                 className="text-gray-700 hover:text-blue-600 focus:outline-none"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 <svg
//                   className="h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {mobileMenuOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>

//             {/* Desktop Menu */}
//             <motion.nav
//               ref={ref}
//               initial={{ opacity: 0, y: 100 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="hidden md:flex space-x-6"
//             >
//               <NavItem label={<Link to={"/"}>Home</Link>} active />

//               {/* <NavDropdown label="Wellness Guide"> */}
//               {/* <DropdownItem href="aboutus.html">About Us</DropdownItem> */}
//               {/* <DropdownItem href="contactus.html">Contact Us</DropdownItem> */}
//               {/* <NestedDropdown label="Team"> */}
//               {/* <DropdownItem href="our-team.html">Our Team</DropdownItem> */}
//               {/* <DropdownItem href="team-details.html"> */}
//               {/* Team Details */}
//               {/* </DropdownItem> */}
//               {/* </NestedDropdown> */}
//               {/* <DropdownItem href="testimonials.html"> */}
//               {/* Testimonials */}
//               {/* </DropdownItem> */}
//               {/* <DropdownItem href="our-packages.html"> */}
//               {/* Our Packages */}
//               {/* </DropdownItem> */}
//               {/* <NestedDropdown label="Event"> */}
//               {/* <DropdownItem href="event-grid.html">Event Grid</DropdownItem> */}
//               {/* <DropdownItem href="event-detail.html"> */}
//               {/* Event Detail */}
//               {/* </DropdownItem> */}
//               {/* </NestedDropdown> */}
//               {/* <DropdownItem href="donate-now.html">Donate Now</DropdownItem> */}
//               {/* <DropdownItem href="faq.html">FAQ</DropdownItem> */}
//               {/* <DropdownItem><Link to={"/WellnessGuide"}>Coming Soon</Link></DropdownItem> */}
//               {/* <DropdownItem href="404-error.html">404 Error</DropdownItem> */}
//               {/* </NavDropdown> */}

//               <NavItem
//                 label={<Link to="/WellnessGuide">Wellness Guide</Link>}
//               />
//               <NavDropdown label="Services">
//                 <DropdownItem href="our-services.html">
//                   Our Services
//                 </DropdownItem>
//                 <DropdownItem href="physical-care.html">
//                   Physical Care
//                 </DropdownItem>
//                 <DropdownItem href="medical-care.html">
//                   Medical Care
//                 </DropdownItem>
//                 <DropdownItem href="personal-care.html">
//                   Personal Care
//                 </DropdownItem>
//                 <DropdownItem href="eldery-nutrition.html">
//                   Elderly Nutrition
//                 </DropdownItem>
//                 <DropdownItem href="assisted-living.html">
//                   Assisted Living
//                 </DropdownItem>
//                 <DropdownItem href="residential-care.html">
//                   Residential Care
//                 </DropdownItem>
//               </NavDropdown>

//               {/* <NavDropdown label="Portfolio">
//                 <DropdownItem href="portfolio-3-columns.html">
//                   Portfolio 3 Columns
//                 </DropdownItem>
//                 <DropdownItem href="portfolio-4-columns.html">
//                   Portfolio 4 Columns
//                 </DropdownItem>
//                 <DropdownItem><Link to={"/AboutUs"}>  Portfolio Detail</Link>
                
//                 </DropdownItem>
//               </NavDropdown> */}
//               <NavItem label={<Link to="/AboutUs">About Us</Link>} />
//               <NavItem label={<Link to>Contact Us</Link>} />
//               {/* <NavDropdown label="Blog">
//                 <DropdownItem href="blog-grid.html">Blog Grid</DropdownItem>
//                 <DropdownItem href="blog-list.html">Blog List</DropdownItem>
//                 <DropdownItem href="blog-detail.html">Blog Detail</DropdownItem>
//               </NavDropdown> */}
//             </motion.nav>

//             {/* Action buttons */}

//             <motion.div
//               ref={ref}
//               initial={{ opacity: 0, x: -100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="hidden md:flex items-center space-x-4"
//             >
//               <a
//                 href="donate-now.html"
//                 className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
//               >
//                 Sign In
//               </a>
//             </motion.div>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden bg-gray-700 pb-4">
//               <MobileNavItem label={<Link to="/">Home</Link>} active />
//               <MobileNavItem
//                 label={<Link to="/WellnessGuide">Wellness Guide</Link>}
//               >
//                 {/* <MobileDropdownItem href="aboutus.html">
//                   About Us
//                 </MobileDropdownItem>
//                 <MobileDropdownItem href="contactus.html">
//                   Contact Us
//                 </MobileDropdownItem>
//                 <MobileNestedDropdown label="Team">
//                   <MobileDropdownItem href="our-team.html">
//                     Our Team
//                   </MobileDropdownItem>
//                   <MobileDropdownItem href="team-details.html">
//                     Team Details
//                   </MobileDropdownItem>
//                 </MobileNestedDropdown>
//                 <MobileDropdownItem href="testimonials.html">
//                   Testimonials
//                 </MobileDropdownItem>
//                 <MobileDropdownItem href="our-packages.html">
//                   Our Packages
//                 </MobileDropdownItem>
//                 <MobileNestedDropdown label="Event">
//                   <MobileDropdownItem href="event-grid.html">
//                     Event Grid
//                   </MobileDropdownItem>
//                   <MobileDropdownItem href="event-detail.html">
//                     Event Detail
//                   </MobileDropdownItem>
//                 </MobileNestedDropdown>
//                 <MobileDropdownItem href="donate-now.html">
//                   Donate Now
//                 </MobileDropdownItem>
//                 <MobileDropdownItem href="faq.html">FAQ</MobileDropdownItem>
//                 <MobileDropdownItem href="comingsoon.html">
//                   Coming Soon
//                 </MobileDropdownItem>
//                 <MobileDropdownItem href="404-error.html">
//                   404 Error
//                 </MobileDropdownItem> */}
//               </MobileNavItem>
//               <MobileNavItem
//                 label={<Link to="/AboutUs">About Us</Link>}
//               ></MobileNavItem>
//               <MobileNavItem label={<Link>Contact Us</Link>}></MobileNavItem>

//               {/* Add other mobile menu items */}
//               <div className="px-4 pt-4 border-t border-gray-600">
//                 <a
//                   href="donate-now.html"
//                   className="block w-full text-center bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
//                 >
//                   Sign In
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// // Desktop navigation components
// const NavItem = ({ href, label, active }) => {
//   return (
//     <a
//       href={href}
//       className={`text-base font-medium ${
//         active ? "text-sky-600" : "text-gray-700 hover:text-blue-600"
//       } transition-colors`}
//     >
//       {label}
//     </a>
//   );
// };

// const NavDropdown = ({ label, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="relative group"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <button
//         className="text-base font-medium text-gray-700 hover:text-blue-600 focus:outline-none flex items-center transition-colors"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {label}
//         <svg
//           className="ml-1 h-4 w-4"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
//           <div className="py-1">{children}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// const DropdownItem = ({ href, children }) => {
//   return (
//     <a
//       href={href}
//       className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900"
//     >
//       {children}
//     </a>
//   );
// };

// const NestedDropdown = ({ label, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative group">
//       <button
//         className="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900"
//         onClick={() => setIsOpen(!isOpen)}
//         onMouseEnter={() => setIsOpen(true)}
//         onMouseLeave={() => setIsOpen(false)}
//       >
//         {label}
//         <svg
//           className="ml-1 h-4 w-4"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//           <div className="py-1">{children}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Mobile navigation components
// const MobileNavItem = ({ href, label, active }) => {
//   return (
//     <a
//       href={href}
//       className={`block px-4 py-2 text-base font-medium ${
//         active ? "text-blue-500" : "text-white hover:text-blue-800"
//       } transition-colors`}
//     >
//       {label}
//     </a>
//   );
// };

// const MobileNavDropdown = ({ label, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button
//         className="flex justify-between items-center w-full px-4 py-2 text-base font-medium text-gray-300 hover:text-white focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {label}
//         <svg
//           className={`ml-1 h-5 w-5 transition-transform ${
//             isOpen ? "transform rotate-180" : ""
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {isOpen && <div className="px-4 py-2 space-y-1">{children}</div>}
//     </div>
//   );
// };

// const MobileDropdownItem = ({ href, children }) => {
//   return (
//     <a
//       href={href}
//       className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-blue-600 hover:border-gray-900"
//     >
//       {children}
//     </a>
//   );
// };

// const MobileNestedDropdown = ({ label, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button
//         className="flex justify-between items-center w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-blue-600 hover:border-gray-900"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {label}
//         <svg
//           className={`ml-1 h-5 w-5 transition-transform ${
//             isOpen ? "transform rotate-180" : ""
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {isOpen && <div className="pl-4">{children}</div>}
//     </div>
//   );
// };

// export default Navbar;









import React, { useState, useEffect } from "react";
import {  FaInstagram, FaLinkedinIn, FaMobileAlt, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to create sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full text-white z-50 transition-all duration-300 ${scrolled ? 'transform -translate-y-10' : ''}`}>
      {/* Top info bar - will slide up when scrolled */}
      <div className={`w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 bg-blue-800 py-2 transition-all duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-9/12">
            <div className="top-bar-info">
              <ul className="pl-0 list-none flex flex-wrap gap-4">
                <li className="flex items-center gap-2">
                <FaMobileAlt className="w-4 h-4"/>
                <span>(+123) 456 7890</span>
                 
                </li>
                <li className="hidden sm:flex text-center items-center gap-2">
                <MdOutlineEmail className="w-5 h-5"/>
                <span>addyour@emailhere</span>
                 
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:block w-full md:w-3/12">
            <ul className="top-social-icon pl-0 list-none flex justify-end gap-5">
              <li>
                <a href="#!" className="text-white hover:text-blue-300">
                <FiFacebook className="w-5 h-5"/>
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-blue-300">
                  <FaTwitter className="w-5 h-5"/>
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-blue-300">
                <FaInstagram className="w-5 h-5"/>
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-blue-300">
                <FaLinkedinIn className="w-5 h-5"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main navbar - will stick to top when scrolled */}
      <div
        className={`w-full bg-white bg-opacity-95 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : ''
        }`}
        style={{ 
          backgroundImage: "url('/Images/Bg/sky.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/Images/logo.png" alt="logo" className="h-12" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              <NavItem label={<Link to={"/"}>Home</Link>} active />
              <NavItem label={<Link to={"/WellnessGuide"}>Wellness Guide</Link>} />
              <NavDropdown label="Services">
                <DropdownItem href="our-services.html">
                  Our Services
                </DropdownItem>
                <DropdownItem href="physical-care.html">
                  Physical Care
                </DropdownItem>
                <DropdownItem href="medical-care.html">
                  Medical Care
                </DropdownItem>
                <DropdownItem href="personal-care.html">
                  Personal Care
                </DropdownItem>
                <DropdownItem href="eldery-nutrition.html">
                  Elderly Nutrition
                </DropdownItem>
                <DropdownItem href="assisted-living.html">
                  Assisted Living
                </DropdownItem>
                <DropdownItem href="residential-care.html">
                  Residential Care
                </DropdownItem>
              </NavDropdown>
              <NavItem label={<Link to={"/AboutUs"}>About Us</Link>} />
              <NavItem label={<Link to={"/NotFound"} >Contact us</Link>} />
            </nav>

            {/* Action buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/signin"
                className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-gray-700 pb-4">
              <MobileNavItem href="/" label="Home" active />
              <MobileNavItem href="/WellnessGuide" label="Wellness Guide" />
              <MobileNavDropdown label="Services">
                <MobileDropdownItem href="our-services.html">
                  Our Services
                </MobileDropdownItem>
                <MobileDropdownItem href="physical-care.html">
                  Physical Care
                </MobileDropdownItem>
                <MobileDropdownItem href="medical-care.html">
                  Medical Care
                </MobileDropdownItem>
                <MobileDropdownItem href="personal-care.html">
                  Personal Care
                </MobileDropdownItem>
                <MobileDropdownItem href="eldery-nutrition.html">
                  Elderly Nutrition
                </MobileDropdownItem>
                <MobileDropdownItem href="assisted-living.html">
                  Assisted Living
                </MobileDropdownItem>
                <MobileDropdownItem href="residential-care.html">
                  Residential Care
                </MobileDropdownItem>
              </MobileNavDropdown>
              <MobileNavItem href="/AboutUs" label="About Us" />
              <MobileNavItem href="/ContactUs" label="Contact Us" />

              <div className="px-4 pt-4 border-t border-gray-600">
                <a
                  href="/signin"
                  className="block w-full text-center bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Desktop navigation components
const NavItem = ({ href, label, active }) => {
  return (
    <a
      href={href}
      className={`text-base font-medium ${
        active ? "text-sky-600" : "text-gray-700 hover:text-blue-600"
      } transition-colors`}
    >
      {label}
    </a>
  );
};

const NavDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-base font-medium text-gray-700 hover:text-blue-600 focus:outline-none flex items-center transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          className="ml-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-300 hover:text-gray-900"
    >
      {children}
    </a>
  );
};

// Mobile navigation components
const MobileNavItem = ({ href, label, active }) => {
  return (
    <a
      href={href}
      className={`block px-4 py-2 text-base font-medium ${
        active ? "text-blue-500" : "text-white hover:text-blue-800"
      } transition-colors`}
    >
      {label}
    </a>
  );
};

const MobileNavDropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center w-full px-4 py-2 text-base font-medium text-gray-300 hover:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          className={`ml-1 h-5 w-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && <div className="px-4 py-2 space-y-1">{children}</div>}
    </div>
  );
};

const MobileDropdownItem = ({ href, children }) => {
  return (
    <a
      href={href}
      className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:text-blue-600 hover:border-gray-900"
    >
      {children}
    </a>
  );
};

export default Navbar;