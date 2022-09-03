import React, { useEffect } from "react"
import Typography from "@mui/material/Typography"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import { useTimerContext } from "../Hooks/Context"

const ThemeMode = () => {
	const { dark, setDark, root } = useTimerContext()
	useEffect(() => {
		root.style.setProperty("--invert", `${dark ? 0 : 1}`)
	}, [dark])
	const handleThemeModeChange = (
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		newValue: string
	) => {
		if (newValue !== null) {
			setDark(parseInt(newValue))
			localStorage.setItem("dark", newValue)
		}
	}
	return (
		<div className="themeMode">
			<Typography variant="subtitle1"> Theme Mode</Typography>
			<ToggleButtonGroup
				size="small"
				value={dark ? "1" : "0"}
				exclusive
				onChange={handleThemeModeChange}
			>
				<ToggleButton value="0">
					<Brightness7Icon />
				</ToggleButton>
				<ToggleButton value="1">
					<Brightness4Icon />
				</ToggleButton>
			</ToggleButtonGroup>
		</div>
	)
}

export default ThemeMode
