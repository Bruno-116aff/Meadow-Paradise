import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { contacts } from '../data/contacts';

interface FormData {
	name: string;
	phone: string;
	email: string;
	comment: string;
	agreeToTerms: boolean;
}

export const Contacts: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		email: '',
		comment: '',
		agreeToTerms: false,
	});

	const [formStatus, setFormStatus] = useState<
		'idle' | 'sending' | 'success' | 'error'
	>('idle');

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value, type } = e.target;
		setFormData(prev => ({
			...prev,
			[name]:
				type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormStatus('sending');

		// Simulate form submission
		setTimeout(() => {
			setFormStatus('success');
			setFormData({
				name: '',
				phone: '',
				email: '',
				comment: '',
				agreeToTerms: false,
			});
		}, 2000);
	};

	return (
		<section id='contacts' className='py-20 bg-white'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>Записаться на визит</h2>
					<p className='text-lg text-earth-brown max-w-2xl mx-auto'>
						Заполните форму ниже, и мы свяжемся с вами для подтверждения даты и
						деталей визита
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					{/* Contact Info - Compact */}
					<div className='bg-warm-beige rounded-2xl p-6 mb-8'>
						<h3 className='text-xl font-semibold text-forest-green mb-4 text-center'>
							Контактная информация
						</h3>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
							<div className='text-center'>
								<div className='flex items-center justify-center space-x-2 text-forest-green mb-1'>
									<svg
										className='w-4 h-4'
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
									<span className='text-sm font-medium'>Телефон</span>
								</div>
								<a
									href={`tel:${contacts.phone}`}
									className='text-sm text-earth-brown mb-2 hover:text-forest-green transition-colors cursor-pointer block'
								>
									{contacts.phone}
								</a>
								<button
									onClick={() => window.open(`tel:${contacts.phone}`, '_self')}
									className='text-xs text-forest-green hover:underline cursor-pointer'
								>
									Позвонить
								</button>
							</div>

							<div className='text-center'>
								<div className='flex items-center justify-center space-x-2 text-forest-green mb-1'>
									<svg
										className='w-4 h-4'
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
									<span className='text-sm font-medium'>Email</span>
								</div>
								<a
									href={`mailto:${contacts.email}`}
									className='text-sm text-earth-brown mb-2 hover:text-forest-green transition-colors cursor-pointer block'
								>
									{contacts.email}
								</a>
								<button
									onClick={() =>
										window.open(`mailto:${contacts.email}`, '_self')
									}
									className='text-xs text-forest-green hover:underline cursor-pointer'
								>
									Написать
								</button>
							</div>

							<div className='text-center'>
								<div className='flex items-center justify-center space-x-2 text-forest-green mb-1'>
									<svg
										className='w-4 h-4'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
									</svg>
									<span className='text-sm font-medium'>Instagram</span>
								</div>
								<a
									href={contacts.instagramUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='text-sm text-earth-brown mb-2 hover:text-forest-green transition-colors cursor-pointer block'
								>
									{contacts.instagram}
								</a>
								<button
									onClick={() => window.open(contacts.instagramUrl, '_blank')}
									className='text-xs text-forest-green hover:underline cursor-pointer'
								>
									Написать
								</button>
							</div>

							<div className='text-center'>
								<div className='flex items-center justify-center space-x-2 text-forest-green mb-1'>
									<svg
										className='w-4 h-4'
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
									<span className='text-sm font-medium'>Локация</span>
								</div>
								<button
									onClick={() => {
										const element = document.querySelector('#map');
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
										}
									}}
									className='text-sm text-earth-brown mb-2 hover:text-forest-green transition-colors cursor-pointer block w-full text-center'
								>
									{contacts.location}
								</button>
								<button
									onClick={() => {
										const element = document.querySelector('#map');
										if (element) {
											element.scrollIntoView({ behavior: 'smooth' });
										}
									}}
									className='text-xs text-forest-green hover:underline cursor-pointer'
								>
									Карта
								</button>
							</div>
						</div>
					</div>

					{/* Contact Form - Main Focus */}
					<Card className='bg-gradient-to-br from-forest-green/5 to-warm-beige/30 border-2 border-forest-green/20 shadow-2xl'>
						<div className='text-center mb-6'>
							<div className='w-12 h-12 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-3'>
								<svg
									className='w-6 h-6 text-white'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-bold text-forest-green mb-2'>
								Записаться на визит
							</h3>
							<p className='text-sm text-earth-brown'>
								Заполните форму и мы свяжемся с вами в течение дня
							</p>
						</div>

						{formStatus === 'success' && (
							<div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
								Спасибо! Мы свяжемся с вами для подтверждения даты.
							</div>
						)}

						{formStatus === 'error' && (
							<div className='mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
								Произошла ошибка при отправке. Попробуйте еще раз.
							</div>
						)}

						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-charcoal mb-1'
								>
									Имя *
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring text-sm'
									placeholder='Ваше имя'
								/>
							</div>

							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-charcoal mb-1'
								>
									Телефон/WhatsApp *
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleInputChange}
									required
									className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring text-sm'
									placeholder='+357 XX XXX XXX'
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-charcoal mb-1'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring text-sm'
									placeholder='your@email.com'
								/>
							</div>

							<div>
								<label
									htmlFor='comment'
									className='block text-sm font-medium text-charcoal mb-1'
								>
									Комментарий
								</label>
								<textarea
									id='comment'
									name='comment'
									value={formData.comment}
									onChange={handleInputChange}
									rows={3}
									className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring text-sm'
									placeholder='Дополнительные пожелания, предпочтительная дата, количество гостей или вопросы'
								/>
							</div>

							<div className='flex items-start space-x-2'>
								<input
									type='checkbox'
									id='agreeToTerms'
									name='agreeToTerms'
									checked={formData.agreeToTerms}
									onChange={handleInputChange}
									required
									className='mt-1 w-4 h-4 text-forest-green border-gray-300 rounded focus:ring-forest-green'
								/>
								<label
									htmlFor='agreeToTerms'
									className='text-xs text-earth-brown'
								>
									Я согласен с обработкой персональных данных и правилами ранчо
									*
								</label>
							</div>

							<Button
								type='submit'
								disabled={formStatus === 'sending'}
								className='w-full bg-forest-green hover:bg-forest-green/90 text-white py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'
							>
								{formStatus === 'sending' ? (
									<div className='flex items-center justify-center space-x-2'>
										<div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
										<span>Отправка...</span>
									</div>
								) : (
									'Отправить заявку'
								)}
							</Button>
						</form>
					</Card>
				</div>
			</Container>
		</section>
	);
};
