export const headerConfig = {
	logo: {
		src: '/Meadow-Paradise/images/gallery/logos/meadow-paradise-logo.png',
		alt: 'Meadow Paradise Logo',
		fallback: '🐎',
	},
	brand: {
		title: 'Meadow Paradise',
		subtitle: 'Rancho',
	},
	menuItems: [
		{ id: 'about', label: 'О нас', href: '#about' },
		{ id: 'formats', label: 'Форматы', href: '#formats' },
		{ id: 'flow', label: 'Как это проходит', href: '#flow' },
		{ id: 'gallery', label: 'Галерея', href: '#gallery' },
		{ id: 'faq', label: 'FAQ', href: '#faq' },
		{ id: 'contacts', label: 'Контакты', href: '#contacts' },
		{ id: 'map', label: 'Карта', href: '#map' },
	],
	ctaButton: {
		text: 'Записаться',
		href: '#contacts',
	},
	styles: {
		container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
		nav: 'flex items-center justify-between py-4 gap-4',
		logo: {
			container: 'flex items-center space-x-4 cursor-pointer',
			icon: 'w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-warm-beige/50',
			image: 'w-14 h-14 rounded-xl',
			fallback: 'text-forest-green font-bold text-3xl hidden',
		},
		brand: {
			container: 'flex flex-col items-start',
			title:
				'text-xl font-serif font-bold text-forest-green leading-tight whitespace-nowrap',
			titleTransparent:
				'text-xl font-serif font-bold text-[#dcc7a1] leading-tight whitespace-nowrap',
			subtitle: 'text-sm text-earth-brown font-medium tracking-wider uppercase',
		},
		menu: {
			container: 'hidden lg:flex items-center space-x-10',
			item: 'relative px-3 py-2 text-base font-medium transition-all duration-300 cursor-pointer whitespace-nowrap',
			active: 'text-forest-green',
			inactive: 'text-charcoal hover:text-forest-green',
			inactiveTransparent: 'text-[#e5e7eb] hover:text-white',
			underline:
				'absolute -bottom-1 left-0 right-0 h-0.5 bg-forest-green rounded-full',
			hoverBg:
				'absolute inset-0 bg-forest-green/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300',
		},
		ctaButton: {
			container: 'hidden lg:block',
		},
		mobile: {
			container: 'lg:hidden flex items-center space-x-3',
			toggle: 'p-2 text-charcoal hover:text-forest-green transition-colors',
			icon: 'w-6 h-6 transition-transform duration-300',
			iconRotated: 'w-6 h-6 transition-transform duration-300 rotate-90',
			dropdown:
				'absolute top-full left-0 right-0 bg-white shadow-lg border-t border-warm-beige/20 lg:hidden',
			dropdownContainer: 'container-custom py-4',
			grid: 'grid grid-cols-2 gap-3',
			item: 'p-3 text-left rounded-lg transition-all duration-200',
			itemActive: 'bg-forest-green text-white',
			itemInactive: 'bg-warm-beige/30 text-charcoal hover:bg-forest-green/10',
		},
	},
	scroll: {
		threshold: 50,
		activeThreshold: 100,
	},
} as const;
