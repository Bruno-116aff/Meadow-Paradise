import React from 'react';
import { Container } from './ui/Container';

export const About: React.FC = () => {
	return (
		<section id='about' className='py-20 bg-warm-beige'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>О ранчо</h2>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div className='space-y-6'>
						<p className='text-body text-lg leading-relaxed'>
							Meadow Paradise Ranch — проект о бережном, искреннем общении с
							лошадьми. Здесь они живут в условиях, близких к естественной
							среде, спокойно социализируются и дарят людям ощущение присутствия
							и тепла.
						</p>

						<p className='text-body text-lg leading-relaxed'>
							Локация подходит для личного отдыха и камерных событий с эстетикой
							природы. Мы проводим мероприятия, уроки, воркшопы и помогаем
							создавать тёплые воспоминания.
						</p>
					</div>

					<div className='space-y-6'>
						<div className='bg-white rounded-2xl p-8 shadow-lg'>
							<h3 className='text-h3 mb-4'>Наши особенности</h3>
							<ul className='space-y-4'>
								<li className='flex items-start space-x-3'>
									<div className='w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0' />
									<span className='text-body'>
										Камерные форматы для семей, друзей и небольших команд
									</span>
								</li>
								<li className='flex items-start space-x-3'>
									<div className='w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0' />
									<span className='text-body'>
										Пикники среди лошадей, ретрит-активности, эстетика закатов
									</span>
								</li>
								<li className='flex items-start space-x-3'>
									<div className='w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0' />
									<span className='text-body'>
										Форматы: мероприятия, уроки, воркшопы
									</span>
								</li>
								<li className='flex items-start space-x-3'>
									<div className='w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0' />
									<span className='text-body'>
										Пространство для семей, друзей, небольших компаний
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='mt-16 text-center'>
					<div className='bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto'>
						<blockquote className='text-lead italic text-earth-brown'>
							"Пространство искреннего общения с лошадьми"
						</blockquote>
					</div>
				</div>
			</Container>
		</section>
	);
};
