import React, { useEffect } from 'react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			{/* Backdrop */}
			<div
				className='absolute inset-0 bg-white/30 backdrop-blur-md'
				onClick={onClose}
			/>

			{/* Modal */}
			<div className='relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-4xl w-full mx-4 animate-fade-in border border-warm-beige/20 max-h-[95vh] overflow-hidden'>
				{/* Header */}
				<div className='px-4 sm:px-6 lg:px-8 py-4 sm:py-5 border-b border-warm-beige/20'>
					<div className='flex items-center justify-between'>
						<h2 className='text-lg sm:text-xl lg:text-2xl font-serif font-bold text-forest-green pr-4'>
							{title}
						</h2>
						<button
							onClick={onClose}
							className='p-2 text-charcoal hover:text-forest-green hover:bg-warm-beige/30 rounded-full transition-colors duration-200 flex-shrink-0'
							aria-label='Закрыть'
						>
							<svg
								className='w-5 h-5 sm:w-6 sm:h-6'
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
					</div>
				</div>

				{/* Content */}
				<div className='p-4 sm:p-6 lg:p-8 max-h-[calc(95vh-80px)] overflow-y-auto'>
					{children}
				</div>
			</div>
		</div>
	);
};
