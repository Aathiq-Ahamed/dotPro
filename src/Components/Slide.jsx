import React, { useState } from "react";
import "../App.css";
import FirstStyle from "./FirstSlide";
import NavBar from "./NavBar";

const slides = [
  {
    id: 1,
    image: <FirstStyle/>,
    title: "Slide 1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x300/00C851/FFFFFF",
    title: "Slide 2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x300/33B5E5/FFFFFF",
    title: "Slide 3",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

//   const nextSlide = () => {
//     if (currentSlide === slides.length - 1) {
//       setCurrentSlide(0);
//     } else {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide === 0) {
//       setCurrentSlide(slides.length - 1);
//     } else {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

  return (
    <>
     <NavBar/>
     <div className="slider">
       
      
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          {/* <img src={slide.image} alt={slide.title} /> */}
        {slide.image}
          <h2>{slide.title}</h2>
        </div>
      ))}
      {/* <div className="controls">
        <button className="prev" onClick={prevSlide}>
          Prev
        </button>
        <button className="next" onClick={nextSlide}>
          Next
        </button>
      </div> */}
      <div className="radio-buttons">
        {slides.map((slide, index) => (
          <input
            key={slide.id}
            type="radio"
            name="slider"
            id={`slide-${index}`}
            checked={index === currentSlide}
            onChange={() => handleSlideChange(index)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Slider;
