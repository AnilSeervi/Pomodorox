import TextField from "@mui/material/TextField"
import { useTimerContext } from "../Hooks/Context"

const TimeInput = () => {
	const { time, setTime } = useTimerContext()
	const handleFocusChange = (e: any) => {
		if (e.target.value === "" || e.target.valueAsNumber === 0)
			e.target.value = 1
		if (e.target.valueAsNumber > 1440) {
			e.target.value = 1440
		}
		setTime(c => ({ ...c, focus: Math.ceil(e.target.valueAsNumber) * 60 }))
	}
	const handleShortBreakChange = (e: any) => {
		if (e.target.value === "" || e.target.valueAsNumber === 0)
			e.target.value = 1
		if (e.target.valueAsNumber > 60) e.target.value = 60
		setTime(c => ({
			...c,
			shortbreak: Math.ceil(e.target.valueAsNumber) * 60,
		}))
	}
	const handleLongBreakChange = (e: any) => {
		if (e.target.value === "" || e.target.valueAsNumber === 0)
			e.target.value = 1
		if (e.target.valueAsNumber > 90) e.target.value = 90
		setTime(c => ({
			...c,
			longbreak: Math.ceil(e.target.valueAsNumber) * 60,
		}))
	}
	return (
		<>
			<TextField
				value={time.focus / 60}
				onChange={handleFocusChange}
				InputProps={{ inputProps: { min: 1, max: 1440 } }}
				id="focus-time"
				label="Focus"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="filled"
			/>
			<TextField
				value={time.shortbreak / 60}
				onChange={handleShortBreakChange}
				InputProps={{ inputProps: { min: 1, max: 60 } }}
				id="short-break-time"
				label="Short Break"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="filled"
			/>
			<TextField
				value={time.longbreak / 60}
				onChange={handleLongBreakChange}
				InputProps={{ inputProps: { min: 1, max: 90 } }}
				id="long-break-time"
				label="Long Break"
				type="number"
				InputLabelProps={{
					shrink: true,
				}}
				variant="filled"
			/>
		</>
	)
}

export default TimeInput
