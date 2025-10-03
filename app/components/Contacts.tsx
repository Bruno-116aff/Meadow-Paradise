import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { contacts } from '../data/contacts';
import { formats } from '../data/formats';

interface FormData {
	name: string;
	phone: string;
	email: string;
	preferredDate: string;
	selectedFormat: string;
	guestCount: string;
	comment: string;
	agreeToTerms: boolean;
}

export const Contacts: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		phone: '',
		email: '',
		preferredDate: '',
		selectedFormat: '',
		guestCount: '',
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
				preferredDate: '',
				selectedFormat: '',
				guestCount: '',
				comment: '',
				agreeToTerms: false,
			});
		}, 2000);
	};

	return (
		<section id='contacts' className='py-20 bg-white'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>Контакты и запись</h2>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Cards */}
					<div className='space-y-8'>
						<Card className='text-center'>
							<div className='flex flex-col items-center space-y-4'>
								<div className='w-16 h-16 bg-forest-green rounded-full flex items-center justify-center'>
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
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='text-h3 text-forest-green mb-2'>Телефон</h3>
									<p className='text-body text-earth-brown mb-4'>
										{contacts.phone}
									</p>
									<Button
										variant='outline'
										onClick={() =>
											window.open(`tel:${contacts.phone}`, '_self')
										}
									>
										Позвонить
									</Button>
								</div>
							</div>
						</Card>

						<Card className='text-center'>
							<div className='flex flex-col items-center space-y-4'>
								<div className='w-16 h-16 bg-forest-green rounded-full flex items-center justify-center'>
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
											d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='text-h3 text-forest-green mb-2'>Email</h3>
									<p className='text-body text-earth-brown mb-4'>
										{contacts.email}
									</p>
									<Button
										variant='outline'
										onClick={() =>
											window.open(`mailto:${contacts.email}`, '_self')
										}
									>
										Написать на email
									</Button>
								</div>
							</div>
						</Card>

						<Card className='text-center'>
							<div className='flex flex-col items-center space-y-4'>
								<div className='w-16 h-16 bg-forest-green rounded-full flex items-center justify-center'>
									<svg
										className='w-8 h-8 text-white'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z' />
									</svg>
								</div>
								<div>
									<h3 className='text-h3 text-forest-green mb-2'>Instagram</h3>
									<p className='text-body text-earth-brown mb-4'>
										{contacts.instagram}
									</p>
									<Button
										variant='outline'
										onClick={() => window.open(contacts.instagramUrl, '_blank')}
									>
										Написать в Instagram
									</Button>
								</div>
							</div>
						</Card>

						<Card className='text-center'>
							<div className='flex flex-col items-center space-y-4'>
								<div className='w-16 h-16 bg-forest-green rounded-full flex items-center justify-center'>
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
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='text-h3 text-forest-green mb-2'>Локация</h3>
									<p className='text-body text-earth-brown mb-4'>
										{contacts.location}
									</p>
									<Button
										variant='outline'
										onClick={() => {
											const element = document.querySelector('#map');
											if (element) {
												element.scrollIntoView({ behavior: 'smooth' });
											}
										}}
									>
										Открыть карту
									</Button>
								</div>
							</div>
						</Card>
					</div>

					{/* Contact Form */}
					<Card>
						<h3 className='text-h3 text-forest-green mb-6'>
							Записаться на визит
						</h3>

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

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-charcoal mb-2'
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
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
									placeholder='Ваше имя'
								/>
							</div>

							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-charcoal mb-2'
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
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
									placeholder='+357 XX XXX XXX'
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-charcoal mb-2'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
									placeholder='your@email.com'
								/>
							</div>

							<div>
								<label
									htmlFor='preferredDate'
									className='block text-sm font-medium text-charcoal mb-2'
								>
									Предпочтительная дата
								</label>
								<input
									type='date'
									id='preferredDate'
									name='preferredDate'
									value={formData.preferredDate}
									onChange={handleInputChange}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
								/>
							</div>

							<div>
								<label
									htmlFor='selectedFormat'
									className='block text-sm font-medium text-charcoal mb-2'
								>
									Выбранный формат
								</label>
								<select
									id='selectedFormat'
									name='selectedFormat'
									value={formData.selectedFormat}
									onChange={handleInputChange}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
								>
									<option value=''>Выберите формат</option>
									{formats.map(format => (
										<option key={format.id} value={format.id}>
											{format.title}
										</option>
									))}
								</select>
							</div>

							<div>
								<label
									htmlFor='guestCount'
									className='block text-sm font-medium text-charcoal mb-2'
								>
									Количество гостей
								</label>
								<input
									type='number'
									id='guestCount'
									name='guestCount'
									value={formData.guestCount}
									onChange={handleInputChange}
									min='1'
									max='20'
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
									placeholder='Количество человек'
								/>
							</div>

							<div>
								<label
									htmlFor='comment'
									className='block text-sm font-medium text-charcoal mb-2'
								>
									Комментарий
								</label>
								<textarea
									id='comment'
									name='comment'
									value={formData.comment}
									onChange={handleInputChange}
									rows={4}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent focus-ring'
									placeholder='Дополнительные пожелания или вопросы'
								/>
							</div>

							<div className='flex items-start space-x-3'>
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
									className='text-sm text-earth-brown'
								>
									Я согласен с обработкой персональных данных и правилами ранчо
									*
								</label>
							</div>

							<Button
								type='submit'
								disabled={formStatus === 'sending'}
								className='w-full'
							>
								{formStatus === 'sending' ? 'Отправка...' : 'Отправить заявку'}
							</Button>
						</form>
					</Card>
				</div>
			</Container>
		</section>
	);
};
