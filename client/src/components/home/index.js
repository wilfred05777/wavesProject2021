import React from "react";
import SlimPromotion from "utils/promotions/slim.block";
import Featured from "./featured";

const slimPromotion = {
  img: "/images/featured/featured_home_3.jpg",
  lineOne: "Up to 40% off",
  lineTwo: "In second hand guitar",
  linkTitle: "Shop Now",
  linkTo: "/shop",
};

const Home = () => {
  return (
    <div>
      <Featured />
      <SlimPromotion items={slimPromotion} />
    </div>
  );
};

export default Home;
