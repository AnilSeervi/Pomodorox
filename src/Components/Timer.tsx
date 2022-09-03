import { useCallback, useEffect, useLayoutEffect } from "react"
import { getTime } from "../Helpers/getTime"
import useInterval from "../Hooks/useInterval"
import { useTimerContext } from "../Hooks/Context"
import { useSoundContext } from "../Hooks/Sound"
import DisplayTime from "./DisplayTime"

const Timer = () => {
	const {
		root,
		time,
		timerState,
		counter,
		setCounter,
		displayTime,
		setDisplayTime,
		setTimerState,
		isPlaying,
		setIsPlaying,
		longBreakInt,
		autoStart,
		autoBreak,
		logo,
	} = useTimerContext()
	const { sound } = useSoundContext()

	useLayoutEffect(() => {
		if (displayTime.focus < 0) {
			sound.play()
			if (counter === longBreakInt) {
				setTimerState("longbreak")
			} else setTimerState("shortbreak")
		}
		if (displayTime.shortbreak < 0) {
			sound.play()
			setTimerState("focus")
			setCounter(c => c + 1)
		}
		if (displayTime.longbreak < 0) {
			sound.play()
			setCounter(1)
			setTimerState("focus")
		}
		root.style.setProperty(
			"--from",
			`${
				timerState === "focus"
					? (100 - (displayTime.focus * 100) / time.focus).toFixed(4)
					: timerState === "shortbreak"
					? ((displayTime.shortbreak * 100) / time.shortbreak).toFixed(4)
					: timerState === "longbreak"
					? ((displayTime.longbreak * 100) / time.longbreak).toFixed(4)
					: 0
			}%`
		)
		document.title =
			`${
				timerState === "focus"
					? getTime(displayTime.focus)
					: timerState === "shortbreak"
					? getTime(displayTime.shortbreak)
					: timerState === "longbreak"
					? getTime(displayTime.longbreak)
					: logo
			}` + ` - ${timerState[0].toUpperCase() + timerState.substr(1)}`
	}, [displayTime])

	useEffect(() => {
		setCounter(1)
	}, [longBreakInt])
	useEffect(() => {
		setDisplayTime({ ...time })
		if (timerState === "shortbreak" || timerState === "longbreak") {
			if (!autoBreak) setIsPlaying(false)
		}
		if (timerState === "focus") {
			if (!autoStart) setIsPlaying(false)
		}
	}, [timerState])

	const runTimer = useCallback(() => {
		if (timerState === "focus") {
			setDisplayTime(c => ({ ...c, focus: c.focus - 1 }))
		}
		if (timerState === "shortbreak") {
			setDisplayTime(c => ({ ...c, shortbreak: c.shortbreak - 1 }))
		}
		if (timerState === "longbreak") {
			setDisplayTime(c => ({ ...c, longbreak: c.longbreak - 1 }))
		}
	}, [displayTime])
	useInterval(
		() => {
			runTimer()
		},
		isPlaying ? 1000 : null
	)
	return (
		<>
			<DisplayTime
				{...displayTime}
				longBreakInt={longBreakInt}
				counter={counter}
			/>
		</>
	)
}

export default Timer
