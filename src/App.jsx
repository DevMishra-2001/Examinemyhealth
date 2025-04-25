// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Hero from './Components/Hero'
// import WellnessGuide from './Pages/WellnessGuide'
// import NotFound from './Pages/notFound'


// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/WellnessGuide" element={<WellnessGuide />} />
//           <Route path="/wellness-guide/:section" element={<WellnessGuide />} />
//           <Route path="/NotFound" element={<NotFound />} />
//         </Routes>
//       </main>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import Hero from './Components/Hero'
// import WellnessGuide from './Pages/WellnessGuide'
// import NotFound from './Pages/notFound'
// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'
// import About from './Components/About'
// import Count from './Components/Count'
// import Test from './Components/Test'
// import Choose from './Components/Choose'
// import Testimonials from './Components/Testimonials'
// import Feedback from './Components/Feedback'
// import Contact from './Components/Contact'
// import Steps from './Components/Steps'
// import Cards from './Components/Cards'

// const App = () => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const isNotFoundPage = location.pathname === '/NotFound';

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar only shown on the home page */}
//       {isHomePage && <Navbar />}
      
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Hero />
//               <div className="mt-24">
//                 <Cards />
//               </div>
//               <div className="mt-24">
//                 <About />
//               </div>
//               <div className="mt-24">
//                 <Count />
//               </div>
//               <div className="mt-24">
//                 <Test />
//               </div>
//               <div className="mt-24">
//                 <Choose />
//               </div>
//               <div className="mt-24">
//                 <Steps />
//               </div>
//               <div className="mt-24">
//                 <Testimonials />
//               </div>
//               <div className="mt-24">
//                 <Feedback />
//               </div>
//               <div className="mt-24">
//                 <Contact />
//               </div>
//             </>
//           } />
//           <Route path="/WellnessGuide" element={<WellnessGuide />} />
//           <Route path="/wellness-guide/:section" element={<WellnessGuide />} />
//           <Route path="/NotFound" element={<NotFound />} />
//         </Routes>
//       </main>
      
//       {/* Footer shown on all pages except NotFound */}
//       {!isNotFoundPage && <Footer />}
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Hero from './Components/Hero'
import WellnessGuide from './Pages/WellnessGuide'
import NotFound from './Pages/notFound'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Count from './Components/Count'
import Test from './Components/Test'
import Choose from './Components/Choose'
import Testimonials from './Components/Testimonials'
import Feedback from './Components/Feedback'
import Contact from './Components/Contact'
import Steps from './Components/Steps'
import Cards from './Components/Cards'
import AboutUs from './Pages/AboutUs'

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isNotFoundPage = location.pathname === '/NotFound';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar only shown on the home page */}
      {isHomePage && <Navbar />} 
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <div className="w-full overflow-hidden">
              <Hero />
              {/* Wrap all other components in a container with proper spacing */}
              <div className="container mx-auto px-4">
                <div className="mt-24">
                  <Cards />
                </div>
                <div className="mt-24">
                  <About />
                </div>
                <div className="mt-24">
                  <Count />
                </div>
                <div className="mt-24">
                  <Test />
                </div>
                <div className="mt-24">
                  <Choose />
                </div>
                <div className="mt-24">
                  <Steps />
                </div>
                <div className="mt-24">
                  <Testimonials />
                </div>
                <div className="mt-24">
                  <Feedback />
                </div>
                <div className="mt-24">
                  <Contact />
                </div>
              </div>
            </div>
          } />
          <Route path="/WellnessGuide" element={<WellnessGuide />} />
          <Route path="/wellness-guide/:section" element={<WellnessGuide />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </main>
      
      {/* Footer shown on all pages except NotFound */}
      {!isNotFoundPage && <Footer />}
    </div>
  )
}

export default App
