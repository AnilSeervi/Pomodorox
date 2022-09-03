import { useEffect, useMemo } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useTimerContext } from "./Hooks/Context"
import useMediaQuery from "@mui/material/useMediaQuery"
import Home from "./Router/Home"

function App() {
	const { dark, setDark } = useTimerContext()
	const media = useMediaQuery("(prefers-color-scheme: dark)")
	useEffect(() => {
		if (localStorage.getItem("dark") === null) {
			setDark(media ? 1 : 0)
		}
	}, [media])
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					primary: {
						main: "#ff6347",
					},
					mode: dark ? "dark" : "light",
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
	)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Home />
		</ThemeProvider>
	)
}

export default App
