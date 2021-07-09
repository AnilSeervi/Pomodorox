import { useEffect, useCallback } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "./swiped-events.min.js";
import { useTimerContext } from "../Hooks/Context";

const useSwipe = () => {
  const { setIsPlaying } = useTimerContext();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  // const incr = () => {
  //   if (timerState === "focus") setTime((c) => ({ ...c, focus: c.focus + 60 }));
  //   if (timerState === "shortbreak")
  //     setTime((c) => ({ ...c, shortbreak: c.shortbreak + 60 }));
  //   if (timerState === "longbreak")
  //     setTime((c) => ({ ...c, longbreak: c.longbreak + 60 }));
  // };
  // const decr = () => {
  //   if (timerState === "focus") setTime((c) => ({ ...c, focus: c.focus - 60 }));
  //   if (timerState === "shortbreak")
  //     setTime((c) => ({ ...c, shortbreak: c.shortbreak - 60 }));
  //   if (timerState === "longbreak")
  //     setTime((c) => ({ ...c, longbreak: c.longbreak - 60 }));
  // };

  // const [displayTime, setDisplayTime] = useState({ ...time });
  // useEffect(() => {
  //   setDisplayTime({ ...time });
  // }, [time]);
  const handleSwipe = useCallback((e) => {
    if (e.detail.dir === "up") {
      setIsPlaying(true);
    }
    if (e.detail.dir === "down") {
      setIsPlaying(false);
    }
  }, []);
  // const handleSwipeLeft = (e) => {
  //   console.log(e, timerState);
  //   if (timerState === "shortbreak" || timerState == "longbreak")
  //     setTimerState("focus");
  //   else if (timerState === "focus") {
  //     setTimerState("shortbreak");
  //     setCounter((c) => c + 1);
  //   }
  // };

  // const right = () => {
  //   console.log(timerState);
  //   if (timerState == "focus") {
  //     setTimerState("shortbreak");
  //     setCounter((c) => c + 1);
  //   } else if (timerState == "shortbreak" || timerState == "longbreak")
  //     setTimerState("focus");
  // };
  const handleClick = useCallback(() => {
    setIsPlaying((c) => !c);
  }, []);
  useEffect(() => {
    if (isDesktop) {
      document.getElementById("main")?.addEventListener("click", handleClick);
    } else
      document.getElementById("main")?.addEventListener("swiped", handleSwipe);
    // document.getElementById("main").addEventListener("swiped-left", right);
    return () => {
      if (isDesktop) {
        document
          .getElementById("main")
          ?.removeEventListener("click", handleClick);
      } else
        document
          .getElementById("main")
          ?.removeEventListener("swiped", handleSwipe);
    };
  }, [isDesktop]);
};

export default useSwipe;
