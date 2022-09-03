type setState<T> = React.Dispatch<React.SetStateAction<T>>

export interface AppContext {
	root: HTMLElement
	time: Timer
	setTime: setState<Timer>
	displayTime: Timer
	setDisplayTime: setState<Timer>
	timerState: string
	setTimerState: setState<string>
	dark: number
	setDark: setState<number>
	longBreakInt: number
	setLongBreakInt: setState<number>
	isPlaying: boolean
	setIsPlaying: setState<boolean>
	autoBreak: boolean
	setAutoBreak: setState<boolean>
	autoStart: boolean
	setAutoStart: setState<boolean>
	counter: number
	setCounter: setState<number>
	logo: string
}

export interface SoundContext {
	sound: HTMLAudioElement
	setSound: (state: HTMLAudioElement) => void
}

export interface Timer {
	focus: number
	shortbreak: number
	longbreak: number
}
