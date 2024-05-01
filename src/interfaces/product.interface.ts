export interface IProduct {
	id: number
	title: string
	summaryDescription: string
	description: string
	category: TypeCategory
	rate: number
	price: number
	inStock: boolean
	isFavourite: boolean
	images: TypeImage[]
	yearOfRelease: number
}

export interface IProductComputer extends IProduct {
	brand: string
	cpu: string
	gpu: string
	ram: string
	powerSupply: string
	motherboard: string
	ssd: string
	hdd: string
}

export interface IProductLaptop extends IProductComputer {
	brand: string
	model: string
	screen: {
		screenType: 'IPS' | 'LED'
		screenRefreshRate: '60Гц' | '100Гц' | '120Гц' | '144Гц'
		resolution: string
		screenCoating: 'матове' | 'глянцеве' | 'антиблікове'
	}
}

export interface IProductMobile extends IProduct {
	brand: string
	model: string
	color: string
	screen: {
		diagonals: number
		resolution: string
		matrix: string
		screenRefreshRate: '60Гц' | '90Гц' | '120Гц'
	}
	simCard: {
		count: number
		format: string
	}
	os: 'Android' | 'IOS'
	camera: {
		front: string
		back: string
	}
	cpu: {
		model: string
		numberOfCores: number
	}
	gpu: string
	memory: {
		integrated: '32ГБ' | '64ГБ' | '128ГБ' | '256ГБ' | '512ГБ' | '1Тб'
		ram: '2ГБ' | '4ГБ' | '8ГБ' | '16ГБ' | '32ГБ' | '64ГБ'
	}
	size: {
		weight: number
		width: number
		height: number
		depth: number
	}
	kit: string
}

export interface IProductTV extends IProduct {
	brand: string
	screen: {
		diagonals: number
		resolution: string
	}
	supportSmartTV: boolean
}

export interface IProductGaming extends IProduct {
	brand: string
	model: string
	cpu: string
	gpu: string
	memory: '512ГБ' | '1Тб' | '2Тб'

	kit: string
}

// types
type TypeCategory = 'computer' | 'laptop' | 'mobile' | 'tv' | 'gaming'
export type TypeImage = {
	src: string
	alt: string
}
export type TypeProductList =
	| IProductComputer
	| IProductLaptop
	| IProductMobile
	| IProductTV
	| IProductGaming
