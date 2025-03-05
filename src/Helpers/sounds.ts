import notification from "../sounds/notification.mp3"
import alarmBird from "../sounds/alarmBird.mp3"
import alarmDigital from "../sounds/alarmDigital.mp3"
import alarmKitchen from "../sounds/alarmKitchen.mp3"
import alarmWood from "../sounds/alarmWood.mp3"
import chime from "../sounds/chime.mp3"
import yowaimo from "../Satoru-Gojo-Yowai-Mo.mp3"

export type Sound = {
	text: string
	audio: HTMLAudioElement
}

export const sounds: Sound[] = [
	{
		text: "Chime",
		audio: new Audio(chime),
	},
	{
		text: "Bird",
		audio: new Audio(alarmBird),
	},
	{
		text: "Digital",
		audio: new Audio(alarmDigital),
	},
	{
		text: "Kitchen",
		audio: new Audio(alarmKitchen),
	},
	{
		text: "Wood",
		audio: new Audio(alarmWood),
	},
	{
		text: "Notification",
		audio: new Audio(notification),
	},
	{
		text: "Yowai Mo",
		audio: new Audio(yowaimo),
	}
]
