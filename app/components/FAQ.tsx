import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { faqs } from '../data/faq';
import { componentStyles } from '../styles/components';
import { textStyles } from '../styles/typography';

export const FAQ: React.FC = () => {
	const [openItems, setOpenItems] = useState<string[]>([]);

	const toggleItem = (id: string) => {
		setOpenItems(prev =>
			prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
		);
	};

	return (
		<section id='faq' className='py-20 bg-warm-beige'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className={textStyles.heading}>Частые вопросы</h2>
					<p className={`${textStyles.lead} max-w-3xl mx-auto mt-4`}>
						Ответы на самые популярные вопросы о ранчо и наших услугах
					</p>
				</div>

				<div className='max-w-4xl mx-auto space-y-4'>
					{faqs.map((faq, index) => (
						<div
							key={faq.id}
							className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in ${
								openItems.includes(faq.id) ? 'ring-2 ring-forest-green/20' : ''
							}`}
							style={{
								animationDelay: `${index * 0.1}s`,
								animationFillMode: 'both',
							}}
						>
							<button
								onClick={() => toggleItem(faq.id)}
								className='w-full px-6 py-5 text-left hover:bg-forest-green/5 transition-colors duration-200 flex items-center justify-between group cursor-pointer'
								aria-expanded={openItems.includes(faq.id)}
							>
								<h3 className='text-lg font-semibold text-forest-green group-hover:text-forest-green/80 transition-colors duration-200 pr-4'>
									{faq.question}
								</h3>
								<div
									className={`flex-shrink-0 w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center transition-all duration-300 ${
										openItems.includes(faq.id)
											? 'bg-forest-green text-white rotate-180'
											: 'group-hover:bg-forest-green/20'
									}`}
								>
									<svg
										className='w-5 h-5 transition-transform duration-300'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 9l-7 7-7-7'
										/>
									</svg>
								</div>
							</button>

							<div
								className={`grid transition-all duration-700 ease-in-out ${
									openItems.includes(faq.id)
										? 'grid-rows-[1fr] opacity-100'
										: 'grid-rows-[0fr] opacity-0'
								}`}
							>
								<div className='overflow-hidden'>
									<div className='px-6 pb-5'>
										<div className='pt-2 border-t border-forest-green/10'>
											<p className='text-earth-brown leading-relaxed mt-4'>
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-16 text-center'>
					<div className='bg-gradient-to-br from-forest-green to-forest-green/80 rounded-2xl p-8 sm:p-10 shadow-2xl max-w-2xl mx-auto text-white relative overflow-hidden'>
						{/* Декоративные элементы */}
						<div className='absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full'></div>
						<div className='absolute bottom-4 left-4 w-12 h-12 bg-white/5 rounded-full'></div>

						<div className='relative z-10'>
							<div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'>
								<svg
									className='w-8 h-8 text-white'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
									/>
								</svg>
							</div>

							<h3 className='text-2xl font-bold mb-4'>Остались вопросы?</h3>
							<p className='text-white/90 mb-8 leading-relaxed'>
								Мы всегда готовы помочь и ответить на любые вопросы о наших
								услугах. Свяжитесь с нами любым удобным способом.
							</p>
							<Button
								onClick={() => {
									const element = document.querySelector('#contacts');
									if (element) {
										element.scrollIntoView({ behavior: 'smooth' });
									}
								}}
								className='bg-white text-white hover:bg-warm-beige hover:text-white border-2 border-white hover:border-warm-beige transition-all duration-200 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl'
							>
								Связаться с нами
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
