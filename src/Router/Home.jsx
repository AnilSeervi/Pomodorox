import React from "react";
import Timer from "../Components/Timer";
import useSwipe from "../Helpers/useSwipe";
import FloatingBtn from "../Components/FloatingBtn";
import Streak from "../Components/Streak";

const Home = () => {
  useSwipe();
  return (
    <>
      <main id="main" data-swipe-threshold="100">
        <Timer />
      </main>
      <Streak />
      <FloatingBtn />
    </>
  );
};

export default Home;
