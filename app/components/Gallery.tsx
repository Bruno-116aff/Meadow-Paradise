import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Lightbox } from './ui/Lightbox';
import { galleryImages } from '../data/gallery';

export const Gallery: React.FC = () => {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

	return (
		<section id='gallery' className='py-20 bg-white'>
			<Container>
				<div className='text-center mb-16'>
					<h2 className='text-h2 mb-6'>Галерея</h2>
					<p className='text-lead max-w-3xl mx-auto'>
						Ранчо, лошади, события, детали пространства.
					</p>
				</div>

				{/* Masonry Grid */}
				<div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
					{galleryImages.map((image, index) => (
						<div
							key={image.id}
							className='break-inside-avoid cursor-pointer group'
							onClick={() => openLightbox(index)}
						>
							<div className='relative overflow-hidden rounded-2xl shadow-lg hover-lift'>
								<img
									src={image.src}
									alt={image.alt}
									className='w-full h-auto transition-transform duration-300 group-hover:scale-105'
									loading='lazy'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center'>
									<div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										<svg
											className='w-12 h-12 text-white'
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
						</div>
					))}
				</div>

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
