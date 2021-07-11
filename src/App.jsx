import React, { useEffect, useMemo } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTimerContext } from "./Hooks/Context";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Home from "./Router/Home";

function App() {
  const { dark, setDark } = useTimerContext();
  const media = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    if (localStorage.getItem("dark") === null) {
      setDark(media);
    }
  }, [media]);
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: "#ff6347",
          },
          type: dark ? "dark" : "light",
          background: {
            default: dark ? "#222" : "#fafafa",
            paper: dark ? "#222" : "#fafafa",
          },
        },
        typography: {
          fontFamily: "'Montserrat', sans-serif",
        },
      }),
    [dark]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
