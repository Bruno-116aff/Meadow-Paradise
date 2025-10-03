import React from 'react';
import { Container } from './ui/Container';

const steps = [
	{
		number: 1,
		title: 'Бронирование',
		description: 'Подбираем дату и формат. Предварительная запись обязательна.',
	},
	{
		number: 2,
		title: 'Подтверждение',
		description: 'Согласуем состав гостей, тайминг, пожелания к зоне/декору.',
	},
	{
		number: 3,
		title: 'Встреча на ранчо',
		description: 'Инструктаж по безопасности и этике общения с животными.',
	},
	{
		number: 4,
		title: 'Программа',
		description: 'Время с лошадьми и выбранный сценарий.',
	},
	{
		number: 5,
		title: 'Завершение',
		description: 'Фото, обратная связь, рекомендации.',
	},
];

const whatToBring = [
	'Закрытая обувь и удобная одежда',
	'Вода',
	'Для фотосессий — согласованные наряды/аксессуары',
];

export const Flow: React.FC = () => {
	return (
		<section id='flow' className='py-20 bg-warm-beige'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>Как это проходит</h2>
				</div>

				{/* Timeline */}
				<div className='relative max-w-4xl mx-auto'>
					{/* Timeline Line */}
					<div className='absolute left-8 top-0 bottom-0 w-0.5 bg-forest-green opacity-30 hidden lg:block' />

					<div className='space-y-12'>
						{steps.map((step, index) => (
							<div
								key={step.number}
								className='relative flex items-start space-x-6'
							>
								{/* Step Number */}
								<div className='flex-shrink-0 w-16 h-16 bg-forest-green rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
									{step.number}
								</div>

								{/* Step Content */}
								<div className='flex-1 bg-white rounded-2xl p-8 shadow-lg'>
									<h3 className='text-h3 mb-3 text-forest-green'>
										{step.title}
									</h3>
									<p className='text-body text-earth-brown'>
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* What to Bring & Weather Info */}
				<div className='mt-20 grid md:grid-cols-2 gap-8'>
					<div className='bg-white rounded-2xl p-8 shadow-lg'>
						<h3 className='text-h3 mb-6 text-forest-green'>
							Что взять с собой
						</h3>
						<ul className='space-y-4'>
							{whatToBring.map((item, index) => (
								<li key={index} className='flex items-start space-x-3'>
									<div className='w-2 h-2 bg-wheat rounded-full mt-2 flex-shrink-0' />
									<span className='text-body text-earth-brown'>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='bg-white rounded-2xl p-8 shadow-lg'>
						<h3 className='text-h3 mb-6 text-forest-green'>Погода</h3>
						<p className='text-body text-earth-brown'>
							При неблагоприятной погоде согласуем перенос на ближайшее удобное
							время.
						</p>
						<div className='mt-4 p-4 bg-warm-beige rounded-lg'>
							<p className='text-sm text-earth-brown'>
								<strong>Рекомендация:</strong> Надевайте закрытую обувь и
								головной убор при длительном пребывании на солнце.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
