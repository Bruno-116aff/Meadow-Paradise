import React from 'react';
import { Container } from './ui/Container';
import { contacts } from '../data/contacts';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-forest-green text-white py-16'>
			<Container>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{/* Logo and Slogan */}
					<div className='lg:col-span-2'>
						<div className='flex items-center space-x-3 mb-4'>
							<div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
								<span className='text-forest-green font-bold text-xl'>MP</span>
							</div>
							<span className='text-2xl font-serif font-semibold'>
								Meadow Paradise
							</span>
						</div>
						<p className='text-warm-beige text-lg mb-6 max-w-md'>
							Пространство искреннего общения с лошадьми.
						</p>
						<p className='text-warm-beige text-sm max-w-lg'>
							Уютное ранчо в Пиргосе (Лимассол), где лошади живут в условиях,
							близких к естественной среде, а люди получают уникальный опыт
							общения с этими прекрасными животными.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-xl font-semibold mb-4'>Навигация</h3>
						<ul className='space-y-3'>
							<li>
								<button
									onClick={() => {
										const element = document.querySelector('#about');
										if (element) element.scrollIntoView({ behavior: 'smooth' });
									}}
									className='text-warm-beige hover:text-white transition-colors'
								>
									О ранчо
								</button>
							</li>
							<li>
								<button
									onClick={() => {
										const element = document.querySelector('#formats');
										if (element) element.scrollIntoView({ behavior: 'smooth' });
									}}
									className='text-warm-beige hover:text-white transition-colors'
								>
									Форматы
								</button>
							</li>
							<li>
								<button
									onClick={() => {
										const element = document.querySelector('#gallery');
										if (element) element.scrollIntoView({ behavior: 'smooth' });
									}}
									className='text-warm-beige hover:text-white transition-colors'
								>
									Галерея
								</button>
							</li>
							<li>
								<button
									onClick={() => {
										const element = document.querySelector('#contacts');
										if (element) element.scrollIntoView({ behavior: 'smooth' });
									}}
									className='text-warm-beige hover:text-white transition-colors'
								>
									Контакты
								</button>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-xl font-semibold mb-4'>Контакты</h3>
						<ul className='space-y-3 text-warm-beige'>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<span>{contacts.phone}</span>
							</li>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<span>{contacts.email}</span>
							</li>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z' />
								</svg>
								<a
									href={contacts.instagramUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-white transition-colors'
								>
									{contacts.instagram}
								</a>
							</li>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<span>{contacts.location}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Policies and Copyright */}
				<div className='border-t border-warm-beige border-opacity-20 pt-8'>
					<div className='grid md:grid-cols-2 gap-8 mb-8'>
						<div>
							<h4 className='font-semibold mb-3'>Правила и рекомендации</h4>
							<ul className='text-sm text-warm-beige space-y-1'>
								<li>• Предварительная запись обязательна</li>
								<li>• Следуйте инструкциям команды</li>
								<li>• Уважайте животных и пространство</li>
								<li>• При неблагоприятной погоде возможен перенос</li>
							</ul>
						</div>

						<div>
							<h4 className='font-semibold mb-3'>Безопасность</h4>
							<ul className='text-sm text-warm-beige space-y-1'>
								<li>• Надевайте закрытую обувь</li>
								<li>• Используйте головной убор на солнце</li>
								<li>• Следуйте правилам безопасности</li>
								<li>• Инструктаж проводится перед началом</li>
							</ul>
						</div>
					</div>

					<div className='text-center text-sm text-warm-beige'>
						<p className='mb-2'>
							© {currentYear} MEADOW PARADISE RANCHO. Все права защищены.
						</p>
						<div className='flex justify-center space-x-6'>
							<button className='hover:text-white transition-colors'>
								Политика конфиденциальности
							</button>
							<button className='hover:text-white transition-colors'>
								Условия использования
							</button>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
