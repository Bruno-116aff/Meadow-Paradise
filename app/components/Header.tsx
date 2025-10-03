import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

const menuItems = [
	{ id: 'about', label: 'О нас', href: '#about' },
	{ id: 'formats', label: 'Форматы', href: '#formats' },
	{ id: 'flow', label: 'Как это проходит', href: '#flow' },
	{ id: 'gallery', label: 'Галерея', href: '#gallery' },
	{ id: 'faq', label: 'FAQ', href: '#faq' },
	{ id: 'contacts', label: 'Контакты', href: '#contacts' },
	{ id: 'map', label: 'Карта', href: '#map' },
];

export const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = menuItems.map(item => item.id);
			const currentSection = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isScrolled
					? 'bg-background bg-opacity-95 backdrop-blur-sm shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className='container-custom'>
				<nav className='flex items-center justify-between py-4'>
					<div className='flex items-center space-x-2'>
						<div className='w-10 h-10 bg-forest-green rounded-full flex items-center justify-center'>
							<span className='text-white font-bold text-lg'>MP</span>
						</div>
						<span className='text-h3 text-forest-green font-serif'>
							Meadow Paradise
						</span>
					</div>

					{/* Desktop Menu */}
					<div className='hidden lg:flex items-center space-x-8'>
						{menuItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.href)}
								className={`text-body transition-colors hover:text-forest-green focus-ring ${
									activeSection === item.id
										? 'text-forest-green font-medium'
										: 'text-charcoal'
								}`}
							>
								{item.label}
							</button>
						))}
						<Button onClick={() => scrollToSection('#contacts')} size='sm'>
							Записаться
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className='lg:hidden'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => scrollToSection('#contacts')}
						>
							Записаться
						</Button>
					</div>
				</nav>
			</div>
		</header>
	);
};
