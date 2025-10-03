import React from 'react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

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
				<div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-10' />
				<img
					src='/images/gallery/hero/hero-sunset-ranch.jpg'
					alt='Meadow Paradise Rancho - закат над ранчо'
					className='w-full h-full object-cover'
					loading='eager'
				/>
			</div>

			{/* Content */}
			<Container className='relative z-20 text-center text-white'>
				<div className='max-w-4xl mx-auto animate-fade-in'>
					<h1 className='text-h1 mb-8 font-serif'>
						Meadow Paradise Rancho
					</h1>
					<p className='text-lead mb-12 max-w-2xl mx-auto'>
						Ранчо в Пиргосе (Лимассол): мероприятия, уроки с лошадьми, 
						воркшопы, туры по ранчо, фотосессии, пикники.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button
							onClick={() => scrollToSection('#formats')}
							variant='primary'
							size='lg'
						>
							Форматы
						</Button>
						<Button
							onClick={() => scrollToSection('#gallery')}
							variant='secondary'
							size='lg'
						>
							Галерея
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};