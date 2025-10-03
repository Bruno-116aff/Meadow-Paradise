import React from 'react';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { formats } from '../data/formats';

export const Formats: React.FC = () => {
	const scrollToContacts = () => {
		const element = document.querySelector('#contacts');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section id='formats' className='py-20 bg-white'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>Форматы</h2>
					<p className='text-lead max-w-3xl mx-auto'>
						Выбирайте готовые сценарии или предложите свой — если он
						соответствует концепции места.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{formats.map(format => (
						<Card
							key={format.id}
							image={format.image}
							imageAlt={format.title}
							className='group'
						>
							<h3 className='text-h3 mb-3 group-hover:text-forest-green transition-colors'>
								{format.title}
							</h3>
							<p className='text-body mb-6 text-earth-brown'>
								{format.description}
							</p>
							<Button
								variant='outline'
								onClick={scrollToContacts}
								className='w-full'
							>
								Уточнить детали
							</Button>
						</Card>
					))}
				</div>

				<div className='mt-16 text-center'>
					<div className='bg-warm-beige rounded-2xl p-8 max-w-4xl mx-auto'>
						<h3 className='text-h3 mb-4'>Не нашли подходящий формат?</h3>
						<p className='text-body mb-6'>
							Мы открыты к вашим идеям, если они соответствуют концепции места и
							принципам бережного отношения к животным.
						</p>
						<Button onClick={scrollToContacts}>
							Обсудить индивидуальный сценарий
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};
