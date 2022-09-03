import { useMemo, useEffect, useState, useCallback } from "react"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"
import { styled } from "@mui/system"

const root = document.documentElement

const hslArray = Array(360)
	.fill(0)
	.map((_, i) => `hsl(${i},100%,50%)`)

const CustomSlider = styled(Slider)({
	"& .MuiSlider-rail": {
		background: `linear-gradient(to right,${hslArray})`,
		opacity: 1,
	},
	"& .MuiSlider-track": {
		background: "transparent",
		border: "none",
	},
	"& .MuiSlider-valueLabel": {
		color: "#121212",
	},
})

const ThemeColor = () => {
	const [themeClr, setThemeClr] = useState(
		JSON.parse(localStorage.getItem("themeClr") || "200")
	)

	const useStyles = useMemo(
		() => ({
			"& .MuiSlider-thumb": {
				background: `hsl(${themeClr},60%,65%)`,
			},
			"& .MuiSlider-valueLabel": {
				background: `hsl(${themeClr},60%,65%)`,
			},
		}),
		[themeClr]
	)

	useEffect(() => {
		localStorage.setItem("themeClr", themeClr)
		root.style.setProperty("--themeClr", `hsl(${themeClr},60%,65%)`)
	}, [themeClr])
	const handleClrChange = useCallback((e: Event, value: number | number[]) => {
		setThemeClr(value)
	}, [])
	return (
		<>
			<Typography variant="subtitle1">Theme Color</Typography>
			<CustomSlider
				sx={{ ...useStyles }}
				valueLabelDisplay="auto"
				value={themeClr}
				step={1}
				onChange={handleClrChange}
				min={0}
				max={360}
				aria-label="Set Theme Color"
			/>
		</>
	)
}

export default ThemeColor
