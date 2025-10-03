export const aboutConfig = {
	hero: {
		title: 'О ранчо',
		subtitle: 'Пространство искреннего общения с лошадьми',
		description:
			'Meadow Paradise Ranch — место, где люди и лошади встречаются в атмосфере взаимного уважения и понимания',
	},
	content: {
		mainText: [
			{
				text: 'Meadow Paradise Ranch — проект о бережном, искреннем общении с лошадьми. Здесь они живут в условиях, близких к естественной среде, спокойно социализируются и дарят людям ощущение присутствия и тепла.',
				highlight: 'бережном, искреннем общении с лошадьми',
			},
			{
				text: 'Локация подходит для личного отдыха и камерных событий с эстетикой природы. Мы проводим мероприятия, уроки, воркшопы и помогаем создавать тёплые воспоминания.',
				highlight: 'камерных событий с эстетикой природы',
			},
		],
		features: [
			{
				icon: '🏡',
				title: 'Камерные форматы',
				description: 'Для семей, друзей и небольших команд',
			},
			{
				icon: '🌅',
				title: 'Эстетика закатов',
				description: 'Пикники среди лошадей, ретрит-активности',
			},
			{
				icon: '📚',
				title: 'Образование',
				description: 'Мероприятия, уроки, воркшопы',
			},
			{
				icon: '👥',
				title: 'Сообщество',
				description: 'Пространство для семей, друзей, небольших компаний',
			},
		],
		stats: [
			{
				number: '15+',
				label: 'Лошадей',
				description: 'Живут в естественных условиях',
			},
			{
				number: '5',
				label: 'Лет опыта',
				description: 'Работы с лошадьми',
			},
			{
				number: '200+',
				label: 'Довольных гостей',
				description: 'За последний год',
			},
			{
				number: '24/7',
				label: 'Уход за лошадьми',
				description: 'Профессиональный ветеринарный контроль',
			},
		],
	},
	quote: {
		text: 'Пространство искреннего общения с лошадьми',
		author: 'Meadow Paradise Ranch',
		description: 'Наша философия',
	},
	styles: {
		container: 'py-20 bg-warm-beige',
		hero: {
			container: 'text-center mb-16',
			title: 'text-h2 font-serif font-bold text-forest-green mb-4',
			subtitle: 'text-xl text-earth-brown mb-6',
			description: 'text-lg text-charcoal max-w-3xl mx-auto leading-relaxed',
		},
		content: {
			grid: 'grid lg:grid-cols-2 gap-12 items-center mb-16',
			text: 'space-y-6',
			paragraph: 'text-body text-lg leading-relaxed',
			highlight: 'text-forest-green font-semibold',
		},
		features: {
			grid: 'grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16',
			card: 'bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center',
			icon: 'text-4xl mb-4',
			title: 'text-h4 font-serif font-semibold text-forest-green mb-2',
			description: 'text-body text-earth-brown',
		},
		stats: {
			grid: 'grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16',
			card: 'bg-white rounded-2xl p-6 shadow-lg text-center',
			number: 'text-3xl font-bold text-forest-green mb-2',
			label: 'text-lg font-semibold text-charcoal mb-1',
			description: 'text-sm text-earth-brown',
		},
		quote: {
			container: 'bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto',
			text: 'text-lead italic text-earth-brown mb-4',
			author: 'text-base font-semibold text-forest-green',
			description: 'text-sm text-earth-brown',
		},
	},
} as const;
