import React, { useEffect, useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTimerContext } from "./Hooks/Context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "./Router/Home";
import Settings from "./Router/Settings";

function App() {
  const { root, dark, setDark } = useTimerContext();
  const media = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    const themeClr = JSON.parse(localStorage.getItem("themeClr")) || 200;
    root.style.setProperty("--themeClr", `hsl(${themeClr},60%,65%)`);
  }, []);
  useEffect(() => {
    if (localStorage.getItem("dark") === null) {
      setDark(media);
    }
  }, [media]);
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          // primary: {
          //   main: `hsl(${themeClr},60%,65%)`,
          // },
          type: dark ? "dark" : "light",
          background: {
            default: dark ? "#222" : "#fafafa",
            paper: dark ? "#222" : "#fafafa",
          },
        },
        typography: {
          fontFamily: "'Montserrat', monospace",
        },
      }),
    [dark]
  );
  useEffect(() => {
    root.style.setProperty("--invert", `${dark ? 0 : 1}`);
  }, [dark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div className="hello"></div> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
