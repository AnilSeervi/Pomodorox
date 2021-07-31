import React from "react";
import Timer from "../Components/Timer";
import Settings from "./Settings";
import Controls from "../Components/Controls";
import Sound from "../Hooks/Sound";

const Home = () => {
  return (
    <Sound>
      <main id="main" data-swipe-threshold="100">
        <Timer />
      </main>
      <Settings />
      <Controls />
    </Sound>
  );
};

export default Home;
