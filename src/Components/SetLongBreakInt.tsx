import Typography from "@mui/material/Typography"
import { useTimerContext } from "../Hooks/Context"
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import { styled, SxProps } from "@mui/system"

interface DivProps {
	sx?: SxProps
}

const Div = styled("div")<DivProps>({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
})

const SetLongBreakInt = () => {
	const { longBreakInt, setLongBreakInt } = useTimerContext()

	const handleIncr = () => {
		if (longBreakInt > 19) return
		setLongBreakInt(c => c + 1)
	}
	const handleDecr = () => {
		if (longBreakInt < 1) return
		setLongBreakInt(c => c - 1)
	}

	return (
		<Div>
			<Typography variant="subtitle1">Long Break Interval</Typography>
			<ButtonGroup
				disableElevation
				variant="text"
				size="medium"
				color="inherit"
				aria-label="Set Long break Interval"
			>
				<Button onClick={handleDecr}>
					<ExpandMoreRoundedIcon />
				</Button>
				<Button disabled>
					<Typography variant="body1" color="textPrimary" align="center">
						{longBreakInt}
					</Typography>
				</Button>
				<Button onClick={handleIncr}>
					<ExpandLessRoundedIcon />
				</Button>
			</ButtonGroup>
		</Div>
	)
}

export default SetLongBreakInt
