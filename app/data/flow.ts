export const flowSteps = [
	{
		number: 1,
		title: 'Бронирование',
		description: 'Выбираем дату и формат',
		details:
			'Предварительная запись обязательна • Быстрое подтверждение • Гибкие даты',
	},
	{
		number: 2,
		title: 'Подтверждение',
		description: 'Согласуем детали программы',
		details:
			'Состав группы • Тайминг • Особые пожелания • Индивидуальные потребности',
	},
	{
		number: 3,
		title: 'Встреча на ранчо',
		description: 'Знакомство и инструктаж',
		details:
			'Инструктаж по безопасности • Знакомство с лошадьми • Правила взаимодействия',
	},
	{
		number: 4,
		title: 'Программа',
		description: 'Время с лошадьми',
		details:
			'Выбранный сценарий • Индивидуальная работа • Групповые активности',
	},
	{
		number: 5,
		title: 'Завершение',
		description: 'Фотосессия и обратная связь',
		details:
			'Профессиональные фото • Обратная связь • Рекомендации • Планы на будущее',
	},
];

export const whatToBring = [
	{
		item: 'Закрытая обувь',
		description: 'Удобные кроссовки или ботинки',
	},
	{
		item: 'Удобная одежда',
		description: 'Спортивная или повседневная, не сковывающая движения',
	},
	{
		item: 'Вода',
		description: 'Бутылка воды для поддержания водного баланса',
	},
	{
		item: 'Для фотосессий',
		description: 'Согласованные наряды и аксессуары',
	},
];

export const flowInfo = [
	{
		title: 'Погода',
		description:
			'При неблагоприятной погоде согласуем перенос на ближайшее удобное время',
		icon: '🌤️',
	},
	{
		title: 'Защита от солнца',
		description:
			'Головной убор и солнцезащитный крем при длительном пребывании на открытом воздухе',
		icon: '☀️',
	},
	{
		title: 'Дети',
		description: 'Дети до 12 лет только в сопровождении взрослых',
		icon: '👶',
	},
	{
		title: 'Правила поведения',
		description:
			'Спокойное поведение, следование инструкциям, уважительное отношение к животным',
		icon: '🤝',
	},
];

export const flowConfig = {
	hero: {
		title: 'Как это проходит',
		subtitle: '5 простых шагов до незабываемого опыта с лошадьми',
	},
	styles: {
		container: 'py-16 sm:py-20 bg-warm-beige',
		hero: {
			container: 'text-center mb-12 sm:mb-16',
			title:
				'text-xl sm:text-2xl lg:text-h2 mb-4 sm:mb-6 font-serif font-bold text-forest-green',
			subtitle: 'text-sm sm:text-base text-earth-brown max-w-2xl mx-auto',
		},
		timeline: {
			container: 'relative max-w-4xl mx-auto',
			line: 'absolute left-5 sm:left-5.5 top-10 sm:top-10 bottom-22 sm:bottom-25 w-0.5 bg-forest-green opacity-30',
			stepsContainer: 'space-y-6 sm:space-y-8',
		},
		step: {
			container: 'relative flex items-start space-x-4 sm:space-x-6',
			number:
				'flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-forest-green rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg border-4 border-warm-beige relative z-10',
			content:
				'flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300',
			title: 'text-base sm:text-lg font-semibold text-forest-green mb-2',
			description: 'text-sm sm:text-base text-charcoal mb-2 font-medium',
			details: 'text-xs sm:text-sm text-earth-brown leading-relaxed',
		},
		info: {
			container: 'mt-16 sm:mt-20 flex flex-col lg:flex-row gap-6 sm:gap-8',
			bigCard:
				'lg:w-2/5 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg',
			smallCardsContainer: 'lg:w-3/5 grid grid-cols-2 gap-4 sm:gap-6',
			smallCard: 'bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg',
			title: 'text-lg sm:text-xl font-semibold text-forest-green mb-4 sm:mb-6',
			smallTitle:
				'text-base sm:text-lg font-semibold text-forest-green mb-2 sm:mb-3',
		},
		whatToBring: {
			container: 'space-y-3 sm:space-y-4',
			item: 'flex items-start space-x-3',
			bullet: 'w-2 h-2 bg-wheat rounded-full mt-2 flex-shrink-0',
			itemTitle: 'font-medium text-charcoal text-sm sm:text-base',
			itemDescription: 'text-xs sm:text-sm text-earth-brown leading-relaxed',
		},
	},
} as const;
