import React from "react";
import Timer from "../Components/Timer";
import Settings from "./Settings";
import Controls from "../Components/Controls";

const Home = () => {
  return (
    <>
      <main id="main" data-swipe-threshold="100">
        <Timer />
      </main>
      <Settings />
      <Controls />
    </>
  );
};

export default Home;
