import { getTime } from "../Helpers/getTime"
import { useTimerContext } from "../Hooks/Context"
import Typography from "@mui/material/Typography"
import { AppContext, Timer } from "../Types/context"

interface DisplayTimeProps extends Timer {
	counter: AppContext["counter"]
	longBreakInt: AppContext["longBreakInt"]
}

const DisplayTime = ({
	focus,
	shortbreak,
	longbreak,
	longBreakInt,
	counter,
}: DisplayTimeProps) => {
	const { timerState } = useTimerContext()
	return (
		<>
			<Typography variant="h1" id="display">
				{timerState === "focus"
					? getTime(focus)
					: timerState === "shortbreak"
					? getTime(shortbreak)
					: timerState === "longbreak"
					? getTime(longbreak)
					: 0}
			</Typography>
			{!!+longBreakInt && (
				<Typography
					id="display_counter"
					variant="subtitle1"
					color="textSecondary"
				>{`${counter}/${longBreakInt}`}</Typography>
			)}
		</>
	)
}

export default DisplayTime
