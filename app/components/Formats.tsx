import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { formats } from '../data/formats';
import { componentStyles } from '../styles/components';
import { textStyles } from '../styles/typography';

export const Formats: React.FC = () => {
	const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

	const scrollToContacts = () => {
		const element = document.querySelector('#contacts');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const openModal = (formatId: string) => {
		setSelectedFormat(formatId);
	};

	const closeModal = () => {
		setSelectedFormat(null);
	};

	const selectedFormatData = selectedFormat
		? formats.find(f => f.id === selectedFormat)
		: null;

	return (
		<section id='formats' className='py-20 bg-white'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className={textStyles.heading}>Форматы</h2>
					<p className={`${textStyles.lead} max-w-3xl mx-auto`}>
						Выбирайте готовые сценарии или предложите свой — если он
						соответствует концепции места.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{formats.map(format => (
						<div
							key={format.id}
							className='group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer'
							onClick={() => openModal(format.id)}
						>
							<Card
								image={format.image}
								imageAlt={format.title}
								variant='formats'
								className='h-full'
							>
								{/* Quick Info Badge */}
								<div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-forest-green shadow-sm'>
									{format.details.duration}
								</div>

								{/* Price Badge */}
								<div className='absolute top-3 left-3 bg-forest-green text-white rounded-full px-2 py-1 text-xs font-bold shadow-lg'>
									{format.details.price}
								</div>

								<h3 className={componentStyles.card.title}>{format.title}</h3>
								<p className={componentStyles.card.description}>
									{format.description}
								</p>

								{/* Highlights Preview */}
								<div className='mt-3 space-y-1'>
									{format.details.highlights
										.slice(0, 2)
										.map((highlight, index) => (
											<div
												key={index}
												className='flex items-center space-x-2 text-xs text-forest-green'
											>
												<span className='text-xs'>✨</span>
												<span className='font-medium'>{highlight}</span>
											</div>
										))}
								</div>

								<div className={componentStyles.card.footer}>
									<div className='space-y-2'>
										{/* Capacity Info */}
										<div className='text-center text-xs text-earth-brown'>
											👥 {format.details.capacity}
										</div>

										{/* Action Button */}
										<Button
											onClick={e => {
												e.stopPropagation();
												scrollToContacts();
											}}
											className='w-full text-sm py-2 bg-forest-green text-white hover:bg-forest-green/90 hover:text-white border-2 border-forest-green hover:border-forest-green/90 transition-all duration-200'
										>
											Забронировать
										</Button>
									</div>
								</div>
							</Card>
						</div>
					))}
				</div>

				<div className='mt-16 text-center'>
					<div className='bg-warm-beige rounded-2xl p-8 max-w-4xl mx-auto shadow-lg'>
						<h3 className={`${textStyles.subheading} mb-4`}>
							Не нашли подходящий формат?
						</h3>
						<p className={`${textStyles.body} mb-6`}>
							Мы открыты к вашим идеям, если они соответствуют концепции места и
							принципам бережного отношения к животным.
						</p>
						<Button onClick={scrollToContacts}>
							Обсудить индивидуальный сценарий
						</Button>
					</div>
				</div>

				{/* Modal */}
				{selectedFormatData && (
					<Modal
						isOpen={!!selectedFormat}
						onClose={closeModal}
						title={selectedFormatData.title}
					>
						<div className='space-y-4 sm:space-y-6'>
							{/* Description */}
							<div>
								<h3 className='text-base sm:text-lg font-semibold text-forest-green mb-2'>
									Описание
								</h3>
								<p className='text-sm sm:text-base text-charcoal leading-relaxed'>
									{selectedFormatData.description}
								</p>
							</div>

							{/* Basic Info - Mobile: stacked, Desktop: grid */}
							<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4'>
								<div className='bg-warm-beige/30 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center'>
									<div className='text-xs sm:text-sm font-semibold text-forest-green mb-1'>
										Время
									</div>
									<div className='text-sm sm:text-base text-charcoal font-medium'>
										{selectedFormatData.details.duration}
									</div>
								</div>
								<div className='bg-warm-beige/30 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center'>
									<div className='text-xs sm:text-sm font-semibold text-forest-green mb-1'>
										Группа
									</div>
									<div className='text-sm sm:text-base text-charcoal font-medium'>
										{selectedFormatData.details.capacity}
									</div>
								</div>
								<div className='bg-forest-green/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center col-span-2 sm:col-span-1 lg:col-span-2'>
									<div className='text-xs sm:text-sm font-semibold text-forest-green mb-1 sm:mb-2'>
										Стоимость
									</div>
									<div className='text-lg sm:text-xl lg:text-2xl text-forest-green font-bold'>
										{selectedFormatData.details.price}
									</div>
								</div>
							</div>

							{/* Includes */}
							<div>
								<h4 className='font-semibold text-forest-green mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg'>
									Что включено:
								</h4>
								<div className='space-y-2'>
									{selectedFormatData.details.includes.map((item, index) => (
										<div
											key={index}
											className='flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-lg border border-warm-beige/20'
										>
											<span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-forest-green rounded-full flex-shrink-0'></span>
											<span className='text-sm sm:text-base text-charcoal'>
												{item}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Highlights */}
							<div>
								<h4 className='font-semibold text-forest-green mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg'>
									Преимущества:
								</h4>
								<div className='space-y-2'>
									{selectedFormatData.details.highlights.map((item, index) => (
										<div
											key={index}
											className='flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white rounded-lg border border-warm-beige/20'
										>
											<span className='text-sm sm:text-base lg:text-lg text-forest-green'>
												✨
											</span>
											<span className='text-sm sm:text-base text-charcoal'>
												{item}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Note */}
							{selectedFormatData.details.note && (
								<div className='bg-forest-green/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-2 sm:border-l-4 border-forest-green'>
									<div className='flex items-start space-x-2 sm:space-x-3'>
										<span className='text-base sm:text-lg lg:text-xl text-forest-green mt-0.5'>
											💡
										</span>
										<p className='text-sm sm:text-base text-forest-green font-medium leading-relaxed'>
											{selectedFormatData.details.note}
										</p>
									</div>
								</div>
							)}

							{/* Action Button */}
							<div className='pt-4 sm:pt-6 border-t border-warm-beige/20'>
								<Button
									onClick={scrollToContacts}
									className='w-full text-base sm:text-lg py-3 sm:py-4'
								>
									Забронировать
								</Button>
							</div>
						</div>
					</Modal>
				)}
			</Container>
		</section>
	);
};
