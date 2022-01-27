import React, { useEffect } from "react";
import SlimPromotion from "utils/promotions/slim.block";
import Featured from "./featured";
import { useDispatch, useSelector } from "react-redux";
import { productsBySort } from "store/actions/product.actions";
// import { myDog } from "store/actions";

const slimPromotion = {
  img: "/images/featured/featured_home_3.jpg",
  lineOne: "Up to 40% off",
  lineTwo: "In second hand guitar",
  linkTitle: "Shop Now",
  linkTo: "/shop",
};

const Home = () => {
  // const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(myDog());
    dispatch(
      productsBySort({
        limit: 4,
        sortB: "itemSold",
        order: "desc",
        where: "bySold",
      })
    );

    dispatch(
      productsBySort({
        limit: 4,
        sortB: "date",
        order: "desc",
        where: "byDate",
      })
    );
  }, [dispatch]);

  // console.log(user);
  return (
    <div>
      <Featured />
      <SlimPromotion items={slimPromotion} />
    </div>
  );
};

export default Home;
