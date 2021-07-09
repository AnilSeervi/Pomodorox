import React, { useMemo, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const hslArray = Array(360)
  .fill(0)
  .map((_, i) => `hsl(${i},100%,50%)`);

const ThemeColor = () => {
  const [themeClr, setThemeClr] = useState(
    JSON.parse(localStorage.getItem("themeClr")) || 200
  );
  const useStyles = useMemo(
    () =>
      makeStyles(() => ({
        rail: {
          background: `linear-gradient(to right,${hslArray})`,
        },
        track: {
          background: `linear-gradient(to right,  ${Array(themeClr)
            .fill(0)
            .map((_, i) => `hsl(${i},100%,50%)`)})`,
        },
        thumb: {
          background: `hsl(${themeClr},60%,65%)`,
        },
        valueLabel: {
          "&>*": {
            background: `hsl(${themeClr},60%,65%)`,
          },
        },
      })),
    [themeClr]
  );

  const classes = useStyles();
  useEffect(() => {
    localStorage.setItem("themeClr", themeClr);
    root.style.setProperty("--themeClr", `hsl(${themeClr},60%,65%)`);
  }, [themeClr]);
  const handleClrChange = (e, value) => {
    setThemeClr(value);
  };
  return (
    <>
      <Typography variant="subtitle1">Theme Color</Typography>
      <Slider
        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
          valueLabel: classes.valueLabel,
        }}
        valueLabelDisplay="auto"
        value={themeClr}
        step={1}
        onChange={handleClrChange}
        min={0}
        max={360}
        aria-label="Set Theme Color"
      />
    </>
  );
};

export default ThemeColor;
