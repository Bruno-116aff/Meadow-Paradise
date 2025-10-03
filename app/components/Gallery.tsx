import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Lightbox } from './ui/Lightbox';
import { Button } from './ui/Button';
import { galleryImages } from '../data/gallery';
import { componentStyles } from '../styles/components';
import { textStyles } from '../styles/typography';

export const Gallery: React.FC = () => {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [visibleCount, setVisibleCount] = useState(6);

	// Показываем изображения постепенно
	const visibleImages = galleryImages.slice(0, visibleCount);
	const hasMoreImages = visibleCount < galleryImages.length;

	const openLightbox = (index: number) => {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
	};

	const nextImage = () => {
		setCurrentImageIndex(prev =>
			prev === galleryImages.length - 1 ? 0 : prev + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex(prev =>
			prev === 0 ? galleryImages.length - 1 : prev - 1
		);
	};

	const loadMoreImages = () => {
		setVisibleCount(prev => Math.min(prev + 12, galleryImages.length));
	};

	return (
		<section id='gallery' className='py-20 bg-white'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className={textStyles.heading}>Галерея</h2>
					<p className={`${textStyles.lead} max-w-3xl mx-auto`}>
						Ранчо, лошади, события, детали пространства.
					</p>
				</div>

				{/* Compact Grid */}
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8'>
					{visibleImages.map((image, index) => (
						<div
							key={image.id}
							className={`${componentStyles.gallery.item} animate-fade-in`}
							onClick={() => openLightbox(index)}
							style={{
								animationDelay: `${index * 0.1}s`,
								animationFillMode: 'both',
							}}
						>
							<div className={componentStyles.gallery.image}>
								<img
									src={image.src}
									alt={image.alt}
									className='w-full h-32 md:h-40 object-cover'
									loading='lazy'
								/>
								<div className={componentStyles.gallery.overlay}>
									<svg
										className={componentStyles.gallery.icon}
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
										/>
									</svg>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Кнопка показать еще */}
				{hasMoreImages && (
					<div className='text-center'>
						<Button
							onClick={loadMoreImages}
							className='mx-auto bg-forest-green text-white hover:bg-forest-green/90 hover:text-white border-2 border-forest-green hover:border-forest-green/90 transition-all duration-200'
						>
							Показать еще
						</Button>
					</div>
				)}

				{/* Lightbox */}
				<Lightbox
					images={galleryImages}
					isOpen={lightboxOpen}
					currentIndex={currentImageIndex}
					onClose={closeLightbox}
					onNext={nextImage}
					onPrev={prevImage}
				/>
			</Container>
		</section>
	);
};
