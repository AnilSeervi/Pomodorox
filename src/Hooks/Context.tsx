import React, { useContext, useEffect, useState } from "react"
import { AppContext, Timer } from "../Types/context"

type Props = {
	children: React.ReactNode
}

const logo: string = "Pomodorox"

const timerContext = React.createContext<AppContext>({} as AppContext)
const root: HTMLElement = document.documentElement
const Context = ({ children }: Props) => {
	const [time, setTime] = useState<Timer>({
		focus: 1500,
		shortbreak: 300,
		longbreak: 600,
	})
	const [displayTime, setDisplayTime] = useState<Timer>({ ...time })
	const [timerState, setTimerState] = useState<string>("focus")
	const [dark, setDark] = useState<number>(() =>
		JSON.parse(localStorage.getItem("dark") || "0")
	)
	const [longBreakInt, setLongBreakInt] = useState<number>(4)
	const [autoBreak, setAutoBreak] = useState<boolean>(false)
	const [autoStart, setAutoStart] = useState<boolean>(false)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [counter, setCounter] = useState<number>(1)
	useEffect(() => {
		setDisplayTime({ ...time })
	}, [time])
	return (
		<timerContext.Provider
			value={{
				root,
				time,
				setTime,
				displayTime,
				setDisplayTime,
				timerState,
				setTimerState,
				dark,
				setDark,
				longBreakInt,
				setLongBreakInt,
				isPlaying,
				setIsPlaying,
				autoBreak,
				setAutoBreak,
				autoStart,
				setAutoStart,
				counter,
				setCounter,
				logo,
			}}
		>
			{children}
		</timerContext.Provider>
	)
}

export const useTimerContext = () => useContext(timerContext)

export default Context
