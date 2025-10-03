import React from 'react';
import { Container } from './ui/Container';
import { aboutConfig } from '../data/about';

export const About: React.FC = () => {
	const highlightText = (text: string, highlight: string) => {
		const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
		return parts.map((part, index) =>
			part.toLowerCase() === highlight.toLowerCase() ? (
				<span key={index} className={aboutConfig.styles.content.highlight}>
					{part}
				</span>
			) : (
				part
			)
		);
	};

	return (
		<section id='about' className={aboutConfig.styles.container}>
			<Container>
				{/* Hero Section */}
				<div className={aboutConfig.styles.hero.container}>
					<h2 className={aboutConfig.styles.hero.title}>
						{aboutConfig.hero.title}
					</h2>
					<p className={aboutConfig.styles.hero.subtitle}>
						{aboutConfig.hero.subtitle}
					</p>
					<p className={aboutConfig.styles.hero.description}>
						{aboutConfig.hero.description}
					</p>
				</div>

				{/* Main Content */}
				<div className={aboutConfig.styles.content.grid}>
					<div className={aboutConfig.styles.content.text}>
						{aboutConfig.content.mainText.map((paragraph, index) => (
							<p key={index} className={aboutConfig.styles.content.paragraph}>
								{highlightText(paragraph.text, paragraph.highlight)}
							</p>
						))}
					</div>

					<div className='space-y-6'>
						<div className='bg-white rounded-2xl p-6 shadow-lg'>
							<h3 className='text-h3 mb-4 text-forest-green'>
								Наши особенности
							</h3>
							<div className='space-y-3'>
								{aboutConfig.content.features.map((feature, index) => (
									<div key={index} className='flex items-center space-x-3'>
										<span className='text-xl'>{feature.icon}</span>
										<span className='text-body text-charcoal'>
											<strong className='text-forest-green'>
												{feature.title}
											</strong>{' '}
											— {feature.description}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Statistics */}
				<div className={aboutConfig.styles.stats.grid}>
					{aboutConfig.content.stats.map((stat, index) => (
						<div key={index} className={aboutConfig.styles.stats.card}>
							<div className={aboutConfig.styles.stats.number}>
								{stat.number}
							</div>
							<div className={aboutConfig.styles.stats.label}>{stat.label}</div>
							<div className={aboutConfig.styles.stats.description}>
								{stat.description}
							</div>
						</div>
					))}
				</div>

				{/* Quote */}
				<div className='text-center'>
					<div className={aboutConfig.styles.quote.container}>
						<blockquote className={aboutConfig.styles.quote.text}>
							"{aboutConfig.quote.text}"
						</blockquote>
						<div className={aboutConfig.styles.quote.author}>
							{aboutConfig.quote.author}
						</div>
						<div className={aboutConfig.styles.quote.description}>
							{aboutConfig.quote.description}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
