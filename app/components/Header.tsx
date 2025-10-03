import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { headerConfig } from '../data/header';

export const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > headerConfig.scroll.threshold);

			// Update active section based on scroll position
			const sections = headerConfig.menuItems.map(item => item.id);
			const currentSection = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return (
						rect.top <= headerConfig.scroll.activeThreshold &&
						rect.bottom >= headerConfig.scroll.activeThreshold
					);
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
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
				isScrolled
					? 'bg-background bg-opacity-95 backdrop-blur-sm shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className={headerConfig.styles.container}>
				<nav className={headerConfig.styles.nav}>
					{/* Logo */}
					<div
						className={headerConfig.styles.logo.container}
						onClick={() => scrollToSection('#about')}
					>
						<div className={headerConfig.styles.logo.icon}>
							<img
								src={headerConfig.logo.src}
								alt={headerConfig.logo.alt}
								className={headerConfig.styles.logo.image}
								onError={e => {
									const target = e.target as HTMLImageElement;
									target.style.display = 'none';
									target.nextElementSibling?.classList.remove('hidden');
								}}
							/>
							<span className={headerConfig.styles.logo.fallback}>
								{headerConfig.logo.fallback}
							</span>
						</div>
						<div className={headerConfig.styles.brand.container}>
							<span
								className={
									isScrolled
										? headerConfig.styles.brand.title
										: headerConfig.styles.brand.titleTransparent
								}
							>
								{headerConfig.brand.title}
							</span>
							<span className={headerConfig.styles.brand.subtitle}>
								{headerConfig.brand.subtitle}
							</span>
						</div>
					</div>

					{/* Desktop Menu */}
					<div className={headerConfig.styles.menu.container}>
						{headerConfig.menuItems.map(item => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.href)}
								className={`${headerConfig.styles.menu.item} ${
									activeSection === item.id
										? headerConfig.styles.menu.active
										: isScrolled
											? headerConfig.styles.menu.inactive
											: headerConfig.styles.menu.inactiveTransparent
								}`}
							>
								{item.label}
								{activeSection === item.id && (
									<div className={headerConfig.styles.menu.underline} />
								)}
								<div className={headerConfig.styles.menu.hoverBg} />
							</button>
						))}
					</div>

					{/* CTA Button */}
					<div className={headerConfig.styles.ctaButton.container}>
						<Button
							onClick={() => scrollToSection(headerConfig.ctaButton.href)}
							size='md'
						>
							{headerConfig.ctaButton.text}
						</Button>
					</div>

					{/* Mobile Menu */}
					<div className={headerConfig.styles.mobile.container}>
						<Button
							variant='outline'
							size='sm'
							onClick={() => scrollToSection(headerConfig.ctaButton.href)}
						>
							{headerConfig.ctaButton.text}
						</Button>

						{/* Mobile Menu Toggle */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={headerConfig.styles.mobile.toggle}
							aria-label='Toggle mobile menu'
						>
							<svg
								className={
									isMobileMenuOpen
										? headerConfig.styles.mobile.iconRotated
										: headerConfig.styles.mobile.icon
								}
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d={
										isMobileMenuOpen
											? 'M6 18L18 6M6 6l12 12'
											: 'M4 6h16M4 12h16M4 18h16'
									}
								/>
							</svg>
						</button>
					</div>

					{/* Mobile Menu Dropdown */}
					{isMobileMenuOpen && (
						<div className={headerConfig.styles.mobile.dropdown}>
							<div className={headerConfig.styles.mobile.dropdownContainer}>
								<div className={headerConfig.styles.mobile.grid}>
									{headerConfig.menuItems.map(item => (
										<button
											key={item.id}
											onClick={() => scrollToSection(item.href)}
											className={`${headerConfig.styles.mobile.item} ${
												activeSection === item.id
													? headerConfig.styles.mobile.itemActive
													: headerConfig.styles.mobile.itemInactive
											}`}
										>
											<span className='font-medium'>{item.label}</span>
										</button>
									))}
								</div>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};
