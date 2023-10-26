import couch from "./images/carousel.png";
import React from "react";

function Carousel() {
  return (
    <>
      <div class="carousel" x-data="{ activeSlide: 0 }">
        <div class="carousel-inner">
          <div class="carousel-item" x-show="activeSlide === 0">
            <img src={couch}></img>
          </div>
          <div class="carousel-item" x-show="activeSlide === 1"></div>
          <div class="carousel-item" x-show="activeSlide === 2"></div>
        </div>

        <button
          class="carousel-control"
          onclick="activeSlide = (activeSlide - 1) % 3"
        >
          Geri{" "}
        </button>
        <button
          class="carousel-control"
          onclick="activeSlide = (activeSlide + 1) % 3"
        >
          İleri
        </button>
      </div>
    </>
  );
}
export default Carousel;
