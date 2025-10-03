import React, { useState } from 'react';
import { Container } from './ui/Container';
import { faqs } from '../data/faq';

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
					<h2 className='text-h2 mb-6'>Частые вопросы</h2>
				</div>

				<div className='max-w-4xl mx-auto space-y-4'>
					{faqs.map(faq => (
						<div
							key={faq.id}
							className='bg-white rounded-2xl shadow-lg overflow-hidden'
						>
							<button
								onClick={() => toggleItem(faq.id)}
								className='w-full px-8 py-6 text-left flex items-center justify-between hover:bg-warm-beige transition-colors focus-ring'
								aria-expanded={openItems.includes(faq.id)}
							>
								<h3 className='text-h3 text-forest-green pr-4'>
									{faq.question}
								</h3>
								<div className='flex-shrink-0'>
									<svg
										className={`w-6 h-6 text-forest-green transition-transform duration-200 ${
											openItems.includes(faq.id) ? 'rotate-180' : ''
										}`}
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
								className={`overflow-hidden transition-all duration-300 ${
									openItems.includes(faq.id)
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								}`}
							>
								<div className='px-8 pb-6'>
									<p className='text-body text-earth-brown'>{faq.answer}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='mt-16 text-center'>
					<div className='bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto'>
						<h3 className='text-h3 mb-4 text-forest-green'>
							Остались вопросы?
						</h3>
						<p className='text-body text-earth-brown mb-6'>
							Мы всегда готовы помочь и ответить на любые вопросы о наших
							услугах.
						</p>
						<button
							onClick={() => {
								const element = document.querySelector('#contacts');
								if (element) {
									element.scrollIntoView({ behavior: 'smooth' });
								}
							}}
							className='bg-forest-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors focus-ring'
						>
							Связаться с нами
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};
