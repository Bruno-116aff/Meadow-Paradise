export const heroData = {
	background: {
		image: '/images/gallery/hero/hero-3l4a2182.jpg',
		alt: 'Meadow Paradise Rancho - закат над ранчо',
		gradient: 'from-black/50 via-black/60 to-black/70',
	},
	content: {
		title: 'Meadow Paradise Rancho',
		subtitle:
			'Ранчо в Пиргосе (Лимассол): мероприятия, уроки с лошадьми, воркшопы, туры по ранчо, фотосессии, пикники.',
	},
	buttons: [
		{
			id: 'formats',
			text: 'Форматы',
			variant: 'primary' as const,
			size: 'lg' as const,
			href: '#formats',
		},
		{
			id: 'gallery',
			text: 'Галерея',
			variant: 'secondary' as const,
			size: 'lg' as const,
			href: '#gallery',
		},
	],
};
