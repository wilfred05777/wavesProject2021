import React from "react";
import Carrousel from "utils/carrousel";
// import { CarouselItem } from "react-bootstrap";

const Featured = () => {
  const corrouselItems = [
    {
      img: "/images/featured/featured_home.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      lineTitle: "Shop Now",
      linkTo: "/shop",
    },
    {
      img: "/images/featured/featured_home_2.jpg",
      lineOne: "B-Stock",
      lineTwo: "Awesome discounts",
      lineTitle: "View offers",
      linkTo: "/shop",
    },
    {
      img: "/images/featured/featured_home_3.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      lineTitle: "Shop Now",
      linkTo: "/shop",
    },
  ];

  return (
    <div className="featured_container">
      <Carrousel items={corrouselItems} />
    </div>
  );
};

export default Featured;
