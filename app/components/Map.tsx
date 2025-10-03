import React from 'react';
import { Container } from './ui/Container';
import { contacts } from '../data/contacts';
import { mapData } from '../data/map';

export const Map: React.FC = () => {
	return (
		<section id='map' className='py-20 bg-warm-beige'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>{mapData.title}</h2>
					<p className='text-lead max-w-3xl mx-auto'>{mapData.description}</p>
				</div>

				<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
					<div className='aspect-video'>
						<iframe
							src={contacts.googleMapsEmbed}
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
								<h3 className='text-h3 text-forest-green mb-4'>
									{mapData.address.title}
								</h3>
								<p className='text-body text-earth-brown mb-4'>
									{contacts.address}
								</p>
								<p className='text-sm text-earth-brown'>
									{mapData.address.description}
								</p>
							</div>

							<div>
								<h3 className='text-h3 text-forest-green mb-4'>
									{mapData.directions.title}
								</h3>
								<ul className='space-y-2 text-body text-earth-brown'>
									{mapData.directions.items.map((item, index) => (
										<li key={index}>• {item}</li>
									))}
								</ul>
							</div>
						</div>

						<div className='mt-8 text-center'>
							<button
								onClick={() => window.open(contacts.googleMapsUrl, '_blank')}
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
										d={mapData.button.icon}
									/>
								</svg>
								<span>{mapData.button.text}</span>
							</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
