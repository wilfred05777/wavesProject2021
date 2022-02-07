import React, { useEffect } from "react";
import SlimPromotion from "utils/promotions/slim.block";
import Featured from "./featured";
import { useDispatch, useSelector } from "react-redux";
import { productsBySort } from "store/actions/product.actions";
// import { users } from "store/actions/index";
// import { myDog } from "store/actions";
import Loader from "utils/loader";
import CardBlock from "utils/products/card.blocks";

const slimPromotion = {
  img: "/images/featured/featured_home_3.jpg",
  lineOne: "Up to 40% off",
  lineTwo: "In second hand guitar",
  linkTitle: "Shop Now",
  linkTo: "/shop",
};

const Home = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.users);
  // const { bySold, byDate } = useSelector((state) => state.products);
  const { bySold, byDate } = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(myDog());
    // dispatch(users({

    // }));

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
  // console.log(byDate);
  // console.log(bySold);
  return (
    <div>
      <Featured />

      {bySold ? (
        <CardBlock items={bySold} title="Best selling guitars" />
      ) : (
        <Loader />
      )}
      <SlimPromotion items={slimPromotion} />

      {byDate ? (
        <CardBlock items={byDate} title="Latest guitars on the shop" />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
