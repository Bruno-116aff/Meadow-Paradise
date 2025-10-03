export interface Format {
	id: string;
	title: string;
	description: string;
	image: string;
	details: {
		duration: string;
		capacity: string;
		price: string;
		includes: string[];
		highlights: string[];
		note?: string;
	};
}

export const formats: Format[] = [
	{
		id: 'team-building',
		title: 'Тимбилдинги и ретриты',
		description:
			'Развитие коммуникации и лидерства через взаимодействие с лошадьми.',
		image: '/Meadow-Paradise/images/backup/IMG_5786.JPG',
		details: {
			duration: '2-4 часа',
			capacity: '8-15 человек',
			price: 'от 150€ за группу',
			includes: ['Инструктор', 'Работа с лошадьми', 'Кофе-брейк', 'Фотосессия'],
			highlights: [
				'Улучшение командной работы',
				'Развитие лидерских качеств',
				'Снижение стресса',
			],
			note: 'Подходит для корпоративных команд и дружеских групп',
		},
	},
	{
		id: 'csr-events',
		title: 'CSR и деловые события',
		description:
			'Камерные презентации, полезные встречи, созидательные форматы.',
		image: '/Meadow-Paradise/images/gallery/events/activity-img_7272.jpg',
		details: {
			duration: '1-3 часа',
			capacity: '10-25 человек',
			price: 'от 200€ за группу',
			includes: [
				'Конференц-зал',
				'Кофе-брейк',
				'Презентационное оборудование',
				'Фотосессия с лошадьми',
			],
			highlights: [
				'Уникальная атмосфера',
				'Вдохновляющая обстановка',
				'Неформальное общение',
			],
			note: 'Идеально для важных встреч и презентаций',
		},
	},
	{
		id: 'photo-sessions',
		title: 'Фотосессии с лошадьми',
		description:
			'Love story, семейные, детские, портфолио. Помощь с реквизитом.',
		image: '/Meadow-Paradise/images/backup/IMG_7237.JPG',
		details: {
			duration: '1-2 часа',
			capacity: 'до 8 человек',
			price: 'от 80€ за сессию',
			includes: [
				'Профессиональные лошади',
				'Реквизит',
				'Локации на выбор',
				'Консультация стилиста',
			],
			highlights: [
				'Уникальные кадры',
				'Природная красота',
				'Профессиональный подход',
			],
			note: 'Доступны разные стили и локации',
		},
	},
	{
		id: 'hen-parties',
		title: 'Девичники и дни рождения',
		description: 'Уютная площадка, закатный свет, бохо-настрой.',
		image: '/Meadow-Paradise/images/backup/IMG_4531.JPG',
		details: {
			duration: '3-5 часов',
			capacity: '6-12 человек',
			price: 'от 120€ за группу',
			includes: ['Декорации', 'Фотосессия', 'Закуски', 'Напитки'],
			highlights: ['Романтичная атмосфера', 'Закатные фото', 'Бохо-стиль'],
			note: 'Возможна организация сценария под ваши пожелания',
		},
	},
	{
		id: 'children-birthdays',
		title: 'Детские дни рождения',
		description: 'Тематические программы: ковбои, единороги и др.',
		image: '/Meadow-Paradise/images/backup/IMG_5017.JPG',
		details: {
			duration: '2-3 часа',
			capacity: 'до 10 детей',
			price: 'от 100€ за группу',
			includes: ['Аниматор', 'Тематические костюмы', 'Торт', 'Подарки'],
			highlights: ['Безопасность', 'Развлечения', 'Образование'],
			note: 'Подходит для детей от 4 лет',
		},
	},
	{
		id: 'weddings',
		title: 'Помолвки и церемонии',
		description:
			'Камерные свадебные церемонии, символичный «принц на белом коне».',
		image: '/Meadow-Paradise/images/gallery/events/event-img_7491.jpg',
		details: {
			duration: '2-4 часа',
			capacity: 'до 30 гостей',
			price: 'от 300€ за церемонию',
			includes: ['Декорации', 'Белая лошадь', 'Фотограф', 'Музыка'],
			highlights: [
				'Романтичная церемония',
				'Уникальные моменты',
				'Природная красота',
			],
			note: 'Возможна организация полной свадьбы',
		},
	},
	{
		id: 'ranch-tour',
		title: 'Тур по ранчо',
		description: 'Знакомство с лошадьми, историей и бытом ранчо.',
		image: '/Meadow-Paradise/images/backup/IMG_4279.JPG',
		details: {
			duration: '1-2 часа',
			capacity: 'до 15 человек',
			price: 'от 25€ с человека',
			includes: [
				'Экскурсовод',
				'Знакомство с лошадьми',
				'История ранчо',
				'Фотосессия',
			],
			highlights: ['Образование', 'Близость к природе', 'История места'],
			note: 'Подходит для всех возрастов',
		},
	},
	{
		id: 'lessons',
		title: 'Уроки и воркшопы',
		description:
			'Индивидуально и мини-группы. Базовые навыки и практика присутствия.',
		image: '/Meadow-Paradise/images/backup/IMG_5735.JPG',
		details: {
			duration: '1-2 часа',
			capacity: '1-4 человека',
			price: 'от 40€ за урок',
			includes: [
				'Опытный инструктор',
				'Безопасное оборудование',
				'Теория и практика',
			],
			highlights: ['Персональный подход', 'Безопасность', 'Прогресс'],
			note: 'Подходит для начинающих и продолжающих',
		},
	},
	{
		id: 'picnics',
		title: 'Пикник среди лошадей',
		description: 'Эстетичное пространство и тёплая атмосфера на закате.',
		image: '/Meadow-Paradise/images/backup/IMG_6867.JPG',
		details: {
			duration: '2-3 часа',
			capacity: '4-12 человек',
			price: 'от 80€ за группу',
			includes: ['Организация пикника', 'Еда и напитки', 'Пледы', 'Фотосессия'],
			highlights: [
				'Романтичная атмосфера',
				'Природная красота',
				'Уютная обстановка',
			],
			note: 'Идеально для романтических встреч',
		},
	},
];
