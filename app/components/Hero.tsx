import React from 'react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { heroData } from '../data/hero';

export const Hero: React.FC = () => {
	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<img
					src={heroData.background.image}
					alt={heroData.background.alt}
					className='w-full h-full object-cover'
					loading='eager'
				/>
				{/* Dark overlay to darken bright photo */}
				<div className='absolute inset-0 bg-black/40 z-10' />
				<div
					className={`absolute inset-0 bg-gradient-to-b ${heroData.background.gradient} z-20`}
				/>
			</div>

			{/* Content */}
			<Container className='relative z-30 text-center'>
				<div className='max-w-4xl mx-auto animate-fade-in'>
					<h1
						className='text-h1 mb-8 font-serif hero-title'
						style={{
							textShadow:
								'2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)',
						}}
					>
						{heroData.content.title}
					</h1>
					<p
						className='text-lead mb-12 max-w-2xl mx-auto hero-subtitle'
						style={{
							textShadow:
								'1px 1px 3px rgba(0,0,0,0.7), 0 0 6px rgba(0,0,0,0.5)',
						}}
					>
						{heroData.content.subtitle}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						{heroData.buttons.map(button => (
							<Button
								key={button.id}
								onClick={() => scrollToSection(button.href)}
								variant={button.variant}
								size={button.size}
							>
								{button.text}
							</Button>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
