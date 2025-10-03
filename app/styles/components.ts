// Стили компонентов
export const componentStyles = {
	// Кнопки
	button: {
		base: 'font-medium rounded-lg transition-all duration-300 focus-ring inline-flex items-center justify-center cursor-pointer',
		primary:
			'bg-forest-green text-white hover:bg-forest-green/90 hover:shadow-lg hover:-translate-y-0.5',
		secondary:
			'bg-wheat text-charcoal hover:bg-wheat/90 hover:shadow-lg hover:-translate-y-0.5',
		outline:
			'border-2 border-forest-green text-forest-green bg-transparent hover:bg-forest-green hover:text-white hover:shadow-lg hover:-translate-y-0.5',
		ghost: 'text-forest-green hover:bg-forest-green/10 hover:shadow-md',
		sizes: {
			sm: 'px-4 py-2 text-sm',
			md: 'px-6 py-3 text-base',
			lg: 'px-8 py-4 text-lg',
		},
	},

	// Карточки
	card: {
		base: 'bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
		formats:
			'bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col relative',
		image:
			'w-full object-cover transition-transform duration-300 hover:scale-105',
		content: 'p-4 flex-1 flex flex-col pt-4',
		title: 'text-lg mb-2 text-forest-green font-serif font-semibold',
		description: 'text-sm text-earth-brown mb-4 flex-1 leading-relaxed',
		footer: 'mt-auto',
	},

	// Аккордеоны
	accordion: {
		base: 'bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300',
		header:
			'w-full px-8 py-6 text-left flex items-center justify-between hover:bg-warm-beige/50 transition-colors focus-ring cursor-pointer',
		title: 'text-h3 text-forest-green pr-4 font-serif',
		icon: 'w-6 h-6 text-forest-green transition-transform duration-300 flex-shrink-0',
		content: 'overflow-hidden transition-all duration-300',
		body: 'px-8 pb-6 text-body text-earth-brown',
	},

	// Галерея
	gallery: {
		preview: 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6',
		item: 'break-inside-avoid cursor-pointer group',
		image:
			'relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
		overlay:
			'absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center',
		icon: 'w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300',
		expandButton:
			'mt-8 mx-auto bg-forest-green text-white px-8 py-3 rounded-lg hover:bg-forest-green/90 transition-colors focus-ring',
	},

	// Навигация
	nav: {
		link: 'text-body transition-all duration-200 hover:text-forest-green focus-ring cursor-pointer relative',
		active: 'text-forest-green font-medium',
		inactive: 'text-charcoal hover:text-forest-green',
		logo: 'flex items-center space-x-3 cursor-pointer',
		logoIcon:
			'w-10 h-10 bg-forest-green rounded-full flex items-center justify-center shadow-md',
		logoText: 'text-h3 text-forest-green font-serif font-semibold',
	},
} as const;
