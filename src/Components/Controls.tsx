import { useCallback } from "react"
import IconButton from "@mui/material/IconButton"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"
import PauseIcon from "@mui/icons-material/Pause"
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded"
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded"
import { useTimerContext } from "../Hooks/Context"
import { styled, SxProps } from "@mui/system"

interface DivProps {
	sx?: SxProps
}

const Div = styled("div")<DivProps>({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "1.2vw",
	position: "fixed",
	bottom: "2%",
	left: "50%",
	transform: "translateX(-50%)",
})

const Controls = () => {
	const {
		isPlaying,
		setIsPlaying,
		counter,
		longBreakInt,
		timerState,
		setTimerState,
		setCounter,
		time,
		setDisplayTime,
	} = useTimerContext()
	const handleTimerStateChange = useCallback(() => {
		if (timerState == "focus") {
			if (counter === longBreakInt) setTimerState("longbreak")
			else setTimerState("shortbreak")
		} else if (timerState === "shortbreak") {
			setCounter(c => c + 1)
			setTimerState("focus")
		} else if (timerState === "longbreak") {
			setTimerState("focus")
			setCounter(1)
		}
	}, [timerState])
	const handleReset = useCallback(() => {
		setDisplayTime({ ...time })
		setIsPlaying(false)
	}, [time])
	const handlePlayPause = useCallback(() => {
		setIsPlaying(c => !c)
	}, [])
	return (
		<Div>
			<div>
				<IconButton onClick={handleReset}>
					<ReplayRoundedIcon sx={{ fontSize: "clamp(1.25rem,6vw,1.7rem)" }} />
				</IconButton>
			</div>
			<div>
				<IconButton onClick={handlePlayPause}>
					{isPlaying ? (
						<PauseIcon sx={{ fontSize: "clamp(2.1875rem,15vw,4rem)" }} />
					) : (
						<PlayArrowRoundedIcon
							sx={{ fontSize: "clamp(2.1875rem,15vw,4rem)" }}
						/>
					)}
				</IconButton>
			</div>
			<div>
				<IconButton onClick={handleTimerStateChange}>
					<SkipNextRoundedIcon
						sx={{
							fontSize: "clamp(1.25rem,6vw,1.7rem)",
						}}
					/>
				</IconButton>
			</div>
		</Div>
	)
}

export default Controls
