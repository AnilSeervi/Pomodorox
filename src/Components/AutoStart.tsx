import React from "react"
import Typography from "@mui/material/Typography"
import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ToggleButton from "@mui/material/ToggleButton"
import { useTimerContext } from "../Hooks/Context"

const AutoStart = () => {
	const { autoStart, setAutoBreak, autoBreak, setAutoStart } = useTimerContext()
	const handleBreakChange = (
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		newValue: string
	) => {
		if (newValue !== null) {
			setAutoBreak(!!parseInt(newValue))
		}
	}
	const handleStartChange = (
		e: React.MouseEvent<HTMLElement, MouseEvent>,
		newValue: string
	) => {
		if (newValue !== null) {
			setAutoStart(!!parseInt(newValue))
		}
	}
	return (
		<>
			<div className="autoBreak">
				<Typography variant="subtitle1">Auto Start Breaks</Typography>
				<ToggleButtonGroup
					size="small"
					value={autoBreak ? "1" : "0"}
					exclusive
					onChange={handleBreakChange}
				>
					<ToggleButton value="0">
						<ClearRoundedIcon />
					</ToggleButton>
					<ToggleButton value="1">
						<DoneRoundedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
			<div className="autoStart">
				<Typography variant="subtitle1">Auto Start Pomodoros</Typography>
				<ToggleButtonGroup
					size="small"
					value={autoStart ? "1" : "0"}
					exclusive
					onChange={handleStartChange}
				>
					<ToggleButton value="0">
						<ClearRoundedIcon />
					</ToggleButton>
					<ToggleButton value="1">
						<DoneRoundedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</div>
		</>
	)
}

export default AutoStart
