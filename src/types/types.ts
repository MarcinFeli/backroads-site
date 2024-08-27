export interface PageLink {
	id: number
	text: string
	href: string
}

export interface SocialLink {
	id: number
	href: string
	icon: string
}

export interface Title {
	title: string
	subtitle: string
}

export interface Article {
	id: number
	icon: string
	title: string
	text: string
}

export interface Tour {
	id: number
	name: string
	date: string
	img: string
	info: string
	country: string
	days: number
	price: number
}