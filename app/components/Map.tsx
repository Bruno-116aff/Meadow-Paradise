import React from 'react';
import { Container } from './ui/Container';

export const Map: React.FC = () => {
	return (
		<section id='map' className='py-20 bg-warm-beige'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>Как добраться</h2>
					<p className='text-lead max-w-3xl mx-auto'>
						Meadow Paradise Rancho находится в Пиргосе, Лимассол. Используйте
						карту ниже для навигации.
					</p>
				</div>

				<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
					<div className='aspect-video'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1234567890123!2d32.98765432109876!3d34.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDUyJzM1LjYiTiAzMsKwNTknMTUuNiJF!5e0!3m2!1sen!2scy!4v1234567890123!5m2!1sen!2scy'
							width='100%'
							height='100%'
							style={{ border: 0 }}
							allowFullScreen
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							title='Meadow Paradise Rancho Location'
						/>
					</div>

					<div className='p-8'>
						<div className='grid md:grid-cols-2 gap-8'>
							<div>
								<h3 className='text-h3 text-forest-green mb-4'>Адрес</h3>
								<p className='text-body text-earth-brown mb-4'>
									Pyrgos, Limassol, Cyprus
								</p>
								<p className='text-sm text-earth-brown'>
									Ранчо расположено в живописной местности Пиргоса, в окружении
									природы и вдали от городской суеты.
								</p>
							</div>

							<div>
								<h3 className='text-h3 text-forest-green mb-4'>
									Как добраться
								</h3>
								<ul className='space-y-2 text-body text-earth-brown'>
									<li>• На автомобиле: 15-20 минут от центра Лимассола</li>
									<li>• По трассе A1 в сторону Пиргоса</li>
									<li>• Парковка доступна на территории ранчо</li>
									<li>• GPS координаты будут предоставлены при бронировании</li>
								</ul>
							</div>
						</div>

						<div className='mt-8 text-center'>
							<button
								onClick={() =>
									window.open(
										'https://maps.google.com/?q=Pyrgos,+Limassol,+Cyprus',
										'_blank'
									)
								}
								className='bg-forest-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors focus-ring inline-flex items-center space-x-2'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
									/>
								</svg>
								<span>Открыть в Google Maps</span>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
