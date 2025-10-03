import React, { useState, useEffect } from 'react';

interface LightboxProps {
	images: Array<{
		id: string;
		src: string;
		alt: string;
	}>;
	isOpen: boolean;
	currentIndex: number;
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
	images,
	isOpen,
	currentIndex,
	onClose,
	onNext,
	onPrev,
}) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			switch (e.key) {
				case 'Escape':
					onClose();
					break;
				case 'ArrowRight':
					onNext();
					break;
				case 'ArrowLeft':
					onPrev();
					break;
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose, onNext, onPrev]);

	if (!isOpen || !images[currentIndex]) return null;

	return (
		<div className='fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4'>
			<button
				onClick={onClose}
				className='absolute top-4 right-4 text-white text-2xl hover:text-wheat transition-colors z-10'
				aria-label='Закрыть галерею'
			>
				✕
			</button>

			<button
				onClick={onPrev}
				className='absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-wheat transition-colors z-10'
				aria-label='Предыдущее изображение'
			>
				‹
			</button>

			<button
				onClick={onNext}
				className='absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-wheat transition-colors z-10'
				aria-label='Следующее изображение'
			>
				›
			</button>

			<div className='max-w-4xl max-h-full'>
				<img
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					className='max-w-full max-h-full object-contain'
				/>
				<div className='text-center text-white mt-4'>
					<p className='text-lg'>{images[currentIndex].alt}</p>
					<p className='text-sm text-warm-beige mt-1'>
						{currentIndex + 1} из {images.length}
					</p>
				</div>
			</div>
		</div>
	);
};
