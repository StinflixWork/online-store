import { TypeProductList } from 'interfaces/product.interface.ts'

export const productData: TypeProductList[] = [
	{
		id: 1,
		title: "Комп'ютер ARTLINE Gaming X47 (X47v45)",
		summaryDescription:
			'AMD Ryzen 5 5500 (3.6 - 4.2 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 480 ГБ / nVidia GeForce RTX 3060, 12 ГБ / без ОД / LAN / без ОС',
		description:
			"ARTLINE Gaming - це ігрові персональні комп'ютери, чиє покликання бути розважальним центром для будь-якого користувача. При створенні моделей проводиться ретельний підбір, оцінка можливостей і сумісність один з одним кожного компонента. Завдяки різноманітності серії Gaming, кожен зможе підібрати собі модель, виходячи з особистих переваг. Ігровий ПК ARTLINE Gaming X47v45 побудований на платформі материнської плати ASRock A320M-DVS з роз'ємом AM4 і підтримкою процесорів AMD всіх поколінь Ryzen. Має технологію ASRock Full Spike Protection, яка охоплює цілу низку інженерних рішень для захисту від електричних перевантажень, корозії та інших проблем. А також набір усіх сучасних інтерфейсів і портів (USB 3.1 Gen1, гігабітний Ethernet) і багато іншого.",
		category: 'computer',
		rate: 5,
		price: 28599,
		brand: 'other',
		inStock: true,
		isFavourite: false,
		images: [
			{
				src: '/products/pc/pc-artline.webp',
				alt: 'computer'
			}
		],
		yearOfRelease: 2024,
		cpu: 'Шестиядерний AMD Ryzen 5 5500 (3.6 - 4.2 ГГц)',
		gpu: 'Nvidia GeForce RTX 3060',
		ram: '16 ГБ',
		powerSupply: '600 Вт',
		motherboard: 'AMD A320',
		ssd: '480 ГБ',
		hdd: '1 ТБ'
	},
	{
		id: 2,
		title: 'Ноутбук Acer Nitro V 15 ANV15-51-5448 (NH.QNCEU.008) Obsidian Black',
		summaryDescription:
			'Екран 15.6" IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-13420H (3.4 - 4.6 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050, 6 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.11 кг / чорний',
		description:
			'Грайте по-новому з Acer Nitro V 15 – заряджайтесь адреналіном, як ніколи раніше. Цей ноутбук з ідеальним поєднанням стилю й потужності змінює уявлення про межі можливого для портативних комп’ютерів. Розкрийте свої ігрові таланти з Nitro V 15, продуктивність якого забезпечує процесор Intel Core 13-го покоління. У поєднанні зі швидкісним твердотільним накопичувачем і оперативною пам’яттю DDR5 він гарантує, що в усіх боях ви будете рухатися, наче блискавка.',
		category: 'laptop',
		rate: 4,
		price: 36999,
		inStock: true,
		isFavourite: false,
		images: [
			{
				src: '/products/laptop/acer-nitro.webp',
				alt: 'Acer Nitro V 15'
			}
		],
		yearOfRelease: 2024,
		cpu: 'Восьмиядерний Intel Core i5-13420H (3.4 - 4.6 ГГц)',
		gpu: 'Nvidia GeForce RTX 3050',
		ram: '16ГБ DDR5-5200 МГц',
		powerSupply: '57 Вт*год',
		motherboard: '',
		ssd: '512 ГБ',
		hdd: 'немає',
		brand: 'Acer',
		model: 'Nitro V 15',
		screen: {
			screenType: 'IPS',
			screenRefreshRate: '144Гц',
			resolution: '1920x1080',
			screenCoating: 'матове'
		}
	},
	{
		id: 3,
		title: 'Мобільний телефон Apple iPhone 15 Pro Max 256GB Natural Titanium (MU793RX/A)',
		summaryDescription:
			'Екран (6.7", OLED (Super Retina XDR), 2796x1290) / Apple A17 Pro / основна потрійна камера: 48 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 256 ГБ вбудованої пам\'яті / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
		description:
			'iPhone 15 Pro викувано з титану й оснащено революційним чипом A17 Pro, кнопкою дії з можливістю налаштування та ще універсальнішою системою камер Pro. iPhone 15 Pro має міцний та легкий корпус із аерокосмічного титану та задню панель із фактурного матового скла. Його оснащено передньою панеллю Ceramic Shield, що міцніша за скло будь-якого смартфона. Крім того, iPhone 15 Pro захищено від бризок, води й пилу.  Дисплей Super Retina XDR 6.1 дюйма² з технологією ProMotion підвищує частоту оновлення до 120 Гц, коли вам потрібна виняткова продуктивність графіки. Завдяки Dynamic Island ви матимете під рукою сповіщення та функцію «Дії наживо». Крім того, дисплей завжди ввімкнено, тож екран блокування залишається доступним для перегляду, і вам навіть не потрібно торкатися його, щоб бути в курсі подій.',
		category: 'mobile',
		rate: 4,
		price: 55999,
		inStock: true,
		isFavourite: false,
		images: [
			{
				src: '/products/mobile/iphone15-pro-max.webp',
				alt: 'iPhone 15 Pro Max'
			},
			{
				src: '/products/mobile/iphone15-pro-max-2.webp',
				alt: 'iPhone 15 Pro Max'
			}
		],
		yearOfRelease: 2023,
		brand: 'Apple',
		model: 'iPhone 15 Pro Max',
		color: 'Titanium Grey',
		screen: {
			diagonals: 6.7,
			resolution: '2796x1290',
			matrix: 'OLED (Super Retina XDR)',
			screenRefreshRate: '120Гц'
		},
		simCard: {
			count: 2,
			format: 'Nano-SIM, e-SIM'
		},
		os: 'IOS',
		camera: {
			front: '12 Мп',
			back: '48 Мп + 12 Мп + 12 Мп'
		},
		cpu: {
			model: 'Apple A17 Pro',
			numberOfCores: 6
		},
		gpu: '6‑ядерний графічний процесор',
		memory: {
			integrated: '256ГБ',
			ram: '8ГБ'
		},
		size: {
			weight: 221,
			width: 76.7,
			height: 159.9,
			depth: 8.25
		},
		kit: 'Документація, Кабель для синхронізації, Телефон'
	},
	{
		id: 4,
		title: 'Телевізор LG 43UR78006LK',
		summaryDescription:
			'Екран 43" HDR (3840x2160) Full HD 60 Гц / Smart TV / Wi-Fi / Bluetooth / WebOS / 967 х 564 х 57.7 мм / 8.9 кг',
		description:
			'Побачте все до останньої дрібниці. Телевізори LG UHD з підтримкою HDR10 Pro забезпечують оптимізовані рівні яскравості для яскравих кольорів і бездоганного деталізування. Діставайте нові враження від перегляду Процесор α5 шостого покоління на основі штучного інтелекту з підтримкою формату 4K. Телевізор LG UHD обладнано потужним процесором α5 6-го покоління з функціями штучного інтелекту з підтримкою формату 4K, який дарує незабутні враження від перегляду.',
		category: 'tv',
		rate: 3,
		price: 16499,
		inStock: true,
		isFavourite: false,
		images: [
			{
				src: '/products/tv/television-lg.webp',
				alt: 'tv lg'
			}
		],
		yearOfRelease: 2023,
		brand: 'LG',
		screen: {
			diagonals: 43,
			resolution: '3840x2160'
		},
		supportSmartTV: true
	},
	{
		id: 5,
		title: 'Ігрова приставка Sony PlayStation 5 Slim',
		summaryDescription: 'AMD Ryzen Zen 2, 8 ядер 16 потоків, 3.5 ГГц / GDDR6 16 ГБ, 2450 МГц',
		description:
			"Приготуйтеся зустрічати нову PlayStation 5 Slim. Вона стане покращеною у багатьох відношеннях версією класичної моделі PS5, яка зможе запропонувати високу швидкість роботи, більш ємний накопичувач для зберігання ігор та інших даних, а також низку інших фішок. Її головні особливості — новий форм-фактор, який забезпечує більший вибір та гнучкість, а також привід Blu-ray Ultra HD і твердотільний накопичувач ємністю 1 ТБ. А оновлений дизайн із 4 бічними панелями дозволить легко персоналізувати свою консоль та зробити її невід'ємною частиною ігрової зони. І при цьому вона збереже всі ті переваги, завдяки яким вже встигла завоювати любов геймерів по всьому світу. Все разом це робить PlayStation 5 Slim привабливою для гравців настільки, наскільки це взагалі можливо.",
		category: 'gaming',
		rate: 5,
		price: 20999,
		inStock: true,
		isFavourite: false,
		images: [
			{
				src: '/products/gaming/playstation5.webp',
				alt: 'playstation 5 slim'
			}
		],
		yearOfRelease: 2023,
		brand: 'Sony',
		model: 'PlayStation 5 slim',
		cpu: 'AMD Ryzen Zen 2, 8 ядер 16 потоків, 3.5 ГГц',
		gpu: 'AMD Radeon RDNA 2, 2.23 ГГц (10.3 терафлопс)',
		memory: '1Тб',
		kit: 'Ігрова консоль, Геймпад, Кабель живлення, Інструкція, Гарантія'
	},
	{
		id: 6,
		title: 'Мобільний телефон Samsung Galaxy S24 8/256GB Marble Gray (SM-S921BZAGEUC)',
		summaryDescription:
			'Екран (6.2", Dynamic AMOLED 2X, 2340x1080) / Samsung Exynos 2400 for Galaxy (3.1 ГГц + 2.9 ГГц + 2.6 ГГц + 1.8 ГГц) / потрійна основна камера: 50 Мп + 12 Мп + 10 Мп, фронтальна 12 Мп / RAM 8 ГБ / 256 ГБ вбудованої пам\'яті / 3G / LTE / 5G / GPS / підтримка 2х SIM-карток (Nano-SIM) / Android 14 / 4000 мА * год',
		description:
			'Більший екран. Ємніший акумулятор. Потужніший процесор. Ви закохаєтеся в Galaxy S24 та S24+ з першого погляду. А відтепер Galaxy S24+ оснащено дисплеєм із найбільшою роздільною здатністю з-поміж усіх пристроїв Galaxy – QHD+.',
		category: 'mobile',
		rate: 5,
		price: 39999,
		inStock: true,
		isFavourite: false,
		images: [
			{
				src: '/products/mobile/samsung-s24.webp',
				alt: 'Samsung S24'
			},
			{
				src: '/products/mobile/samsung-s24-2.webp',
				alt: 'Samsung S24'
			}
		],
		yearOfRelease: 2024,
		brand: 'Samsung',
		model: 'Galaxy S24',
		color: 'Marble Gray',
		screen: {
			diagonals: 6.2,
			resolution: '2340x1080',
			matrix: 'Dynamic AMOLED 2X',
			screenRefreshRate: '120Гц'
		},
		simCard: {
			count: 2,
			format: 'Nano-SIM, e-SIM'
		},
		os: 'Android',
		camera: {
			front: '12 Мп',
			back: '50 Мп + 12 Мп + 10 Мп'
		},
		cpu: {
			model: 'Samsung Exynos 2400 for Galaxy',
			numberOfCores: 10
		},
		gpu: 'Samsung Xclipse 940',
		memory: {
			integrated: '256ГБ',
			ram: '8ГБ'
		},
		size: {
			weight: 168,
			width: 70.6,
			height: 147,
			depth: 7.6
		},
		kit: 'Гарантійний талон, Документація, Кабель для синхронізації, Телефон, Скріпка для виймання СІМ-карти'
	}
]
