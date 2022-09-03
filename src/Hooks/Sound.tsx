import React, { useState, useContext } from "react"
import { sounds } from "../Helpers/sounds"
import { SoundContext } from "../Types/context"

type Props = {
	children: React.ReactNode
}

const soundContext = React.createContext({} as SoundContext)

const Sound = ({ children }: Props) => {
	const [sound, setSound] = useState(sounds[0].audio)
	return (
		<soundContext.Provider value={{ sound, setSound }}>
			{children}
		</soundContext.Provider>
	)
}

export const useSoundContext = () => useContext(soundContext)

export default Sound
