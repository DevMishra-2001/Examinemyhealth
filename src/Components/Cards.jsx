import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Cards = () => {
  const [activeCategory, setActiveCategory] = useState("trending");
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const dummyCards = [
    {
      id: 1,
      title: "Covid (Covid-19)",
      description:
        "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.",
      category: "trending",
    },
    {
      id: 2,
      title: "RSV (Respiratory Syncytial Virus)",
      description:
        "Respiratory syncytial virus (RSV) causes infections of the lungs and respiratory tract. It's so common that most children have been infected with the virus by age 2.",
      category: "trending",
    },
    {
      id: 3,
      title: "Influenza (Influenza A and B)",
      description:
        "Influenza A and B are the two main types of influenza viruses that cause seasonal flu epidemics in humans, with influenza A being more common and potentially more severe, while influenza B is less common and tends to cause milder illness.",
      category: "trending",
    },
    {
      id: 4,
      title: "PGX (Pharma-cogenomics)",
      description:
        "Pharmacogenomics (PGx), often abbreviated as PGx, is the study of how an individual's genetic makeup affects their response to drugs, aiming to personalize medication choices for better efficacy and safety. ",
      category: "new",
    },
    {
      id: 5,
      title: "Rpx (Respiratory)",
      description:
        "RPX in the context of respiratory, likely refers to Rabbitpox Virus (RPXV) and the resulting disease (RPX), a disease similar to variola virus (VARV) in its natural route of transmission through infected respiratory secretions. ",
      category: "new",
    },
    {
      id: 6,
      title: "Hx (Hereditary)",
      description:
        "Hereditary xerocytosis (HX), also known as dehydrated hereditary stomatocytosis (DHS), is a rare, autosomal dominant, congenital hemolytic anemia characterized by erythrocyte dehydration and mild to moderate chronic hemolytic anemia. ",
      category: "new",
    },
    {
      id: 7,
      title: "Dummy1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem voluptates. Eveniet tempora aperiam dolor quo magni perferendis corporis minima, iste obcaecati. Fugiat exercitationem fugit ex doloremque laboriosam cupiditate tempora!",
      category: "tests",
    },
    {
      id: 8,
      title: "Dummy2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ex, rem veritatis id quae animi quidem ipsam aut accusantium architecto consequatur odit vitae itaque velit rerum aliquid ullam assumenda. Nesciunt!",
      category: "tests",
    },
    {
      id: 9,
      title: "Dummy3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis distinctio sit officia vero a expedita dicta nemo accusamus nobis! Sed totam laboriosam deleniti recusandae quibusdam molestias cumque impedit ipsa.",
      category: "tests",
    },
  ];

  // Map the tab names to category values
  const categoryMap = {
    "Newly": "new",
    "Trending": "trending",
    "Tests": "tests"
  };

  // Filter cards based on active category
  const filteredCards = dummyCards.filter(card => card.category === activeCategory);

  const navigateCards = (direction) => {
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % filteredCards.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="relative">
        <div className="container mx-auto max-w-lg mb-14 p-2 ">
          <motion.div 
           ref={ref}
           initial={{ opacity: 0, y: 100 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center text-center mt-10 py-1 rounded-full bg-cyan-700">
            <ul 
            className="flex justify-between space-x-6">
              {Object.keys(categoryMap).map((tabName) => (
                <li 
                  key={tabName}
                  className={`sm:text-base md:text-lg px-8 py-2 cursor-pointer transition-colors rounded-full ${
                    activeCategory === categoryMap[tabName] 
                      ? "bg-white/80 font-medium" 
                      : "text-white hover:bg-white/30"
                  }`}
                  onClick={() => {
                    setActiveCategory(categoryMap[tabName]);
                    setActiveIndex(0); // Reset to first card when changing category
                  }}
                >
                  {tabName}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="w-full min-h-[400px] bg-transparent">
          {filteredCards.length > 0 && (
            <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="container mx-auto w-full px-4 bg-center bg-cover"
            style={{ backgroundImage: "url(/Images/Bg/wood.webp)" }}
            >
              <div className="relative flex justify-center">
                {/* Left navigation arrow */}
                <button 
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-black hover:text-blue-700 z-10"
                  onClick={() => navigateCards('prev')}
                >
                  <ChevronLeft/>
                </button>

                {/* Card content */}
                <div className="bg-transparent p-8 rounded-lg text-center max-w-4xl">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-base font-bold">
                      {filteredCards[activeIndex].title.split(' ')[0]}
                    </span>
                  </div>
                  
                  <blockquote className="text-sm md:text-base leading-relaxed mb-8 h-20">
                    {filteredCards[activeIndex].description}
                  </blockquote>
                  
                  <h3 className="text-lg font-semibold mb-4">{filteredCards[activeIndex].title}</h3>
                  
                  {/* Navigation dots */}
                  <div className="flex justify-center gap-2 mt-8">
                    {filteredCards.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right navigation arrow */}
                <button 
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-black hover:text-blue-700 z-10"
                  onClick={() => navigateCards('next')}
                >
                  <ChevronRight/>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;