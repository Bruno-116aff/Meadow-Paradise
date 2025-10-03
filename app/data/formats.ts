export interface Format {
	id: string;
	title: string;
	description: string;
	image: string;
}

export const formats: Format[] = [
	{
		id: 'team-building',
		title: 'Тимбилдинги и ретриты',
		description:
			'Развитие коммуникации и лидерства через взаимодействие с лошадьми.',
		image: '/images/gallery/events/activity-img_7472.jpg',
	},
	{
		id: 'csr-events',
		title: 'CSR и деловые события',
		description:
			'Камерные презентации, полезные встречи, созидательные форматы.',
		image: '/images/gallery/events/event-img_7479.jpg',
	},
	{
		id: 'photo-sessions',
		title: 'Фотосессии с лошадьми',
		description:
			'Love story, семейные, детские, портфолио. Помощь с реквизитом.',
		image: '/images/gallery/professional/professional-3l4a2287.jpg',
	},
	{
		id: 'hen-parties',
		title: 'Девичники и дни рождения',
		description: 'Уютная площадка, закатный свет, бохо-настрой.',
		image: '/images/gallery/events/activity-img_7488.jpg',
	},
	{
		id: 'children-birthdays',
		title: 'Детские дни рождения',
		description: 'Тематические программы: ковбои, единороги и др.',
		image: '/images/gallery/events/activity-img_7469.jpg',
	},
	{
		id: 'weddings',
		title: 'Помолвки и церемонии',
		description:
			'Камерные свадебные церемонии, символичный «принц на белом коне».',
		image: '/images/gallery/events/event-img_7491.jpg',
	},
	{
		id: 'ranch-tour',
		title: 'Тур по ранчо',
		description: 'Знакомство с лошадьми, историей и бытом ранчо.',
		image: '/images/gallery/nature/ranch-nature-img_6831.jpg',
	},
	{
		id: 'lessons',
		title: 'Уроки и воркшопы',
		description:
			'Индивидуально и мини-группы. Базовые навыки и практика присутствия.',
		image: '/images/gallery/events/activity-img_7249.jpg',
	},
	{
		id: 'picnics',
		title: 'Пикник среди лошадей',
		description: 'Эстетичное пространство и тёплая атмосфера на закате.',
		image: '/images/gallery/events/activity-img_7485.jpg',
	},
];