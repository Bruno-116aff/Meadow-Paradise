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

		if (isOpen) {
			// Блокируем скролл при открытии
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleKeyDown);
		} else {
			// Восстанавливаем скролл при закрытии
			document.body.style.overflow = '';
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose, onNext, onPrev]);

	if (!isOpen || !images[currentIndex]) return null;

	return (
		<div className='fixed inset-0 z-50 bg-white/20 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
			{/* Backdrop click to close */}
			<div
				className='absolute inset-0'
				onClick={onClose}
				aria-label='Закрыть галерею'
			/>

			<button
				onClick={onClose}
				className='absolute top-6 right-6 text-white bg-black/30 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-black/50 hover:scale-110 transition-all duration-200 z-10 shadow-lg'
				aria-label='Закрыть галерею'
			>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>

			<button
				onClick={onPrev}
				className='absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/30 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center hover:bg-black/50 hover:scale-110 transition-all duration-200 z-10 shadow-lg'
				aria-label='Предыдущее изображение'
			>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M15 19l-7-7 7-7'
					/>
				</svg>
			</button>

			<button
				onClick={onNext}
				className='absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/30 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center hover:bg-black/50 hover:scale-110 transition-all duration-200 z-10 shadow-lg'
				aria-label='Следующее изображение'
			>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9 5l7 7-7 7'
					/>
				</svg>
			</button>

			<div className='relative max-w-6xl max-h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 flex flex-col items-center justify-center min-h-[60vh]'>
				<img
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					className='max-w-full max-h-[80vh] object-contain rounded-xl'
				/>

				{/* Счетчик фото */}
				<div className='text-center text-white mt-4'>
					<p className='text-sm text-white/80 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block'>
						{currentIndex + 1} из {images.length}
					</p>
				</div>
			</div>
		</div>
	);
};
