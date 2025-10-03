import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	image?: string;
	imageAlt?: string;
}

export const Card: React.FC<CardProps> = ({
	children,
	className = '',
	image,
	imageAlt = '',
}) => {
	return (
		<div
			className={`bg-white rounded-2xl shadow-lg hover-lift overflow-hidden ${className}`}
		>
			{image && (
				<div className='aspect-[4/3] overflow-hidden'>
					<img
						src={image}
						alt={imageAlt}
						className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
						loading='lazy'
					/>
				</div>
			)}
			<div className='p-6'>{children}</div>
		</div>
	);
};
