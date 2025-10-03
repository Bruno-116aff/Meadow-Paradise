import React from 'react';
import { componentStyles } from '../../styles/components';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	image?: string;
	imageAlt?: string;
	variant?: 'default' | 'formats';
	onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
	children,
	className = '',
	image,
	imageAlt = '',
	variant = 'default',
	onClick,
}) => {
	const cardClass =
		variant === 'formats'
			? componentStyles.card.formats
			: componentStyles.card.base;

	return (
		<div className={`${cardClass} ${className}`} onClick={onClick}>
			{image && (
				<div className='aspect-[4/3] overflow-hidden'>
					<img
						src={image}
						alt={imageAlt}
						className={componentStyles.card.image}
						loading='lazy'
					/>
				</div>
			)}
			<div
				className={variant === 'formats' ? componentStyles.card.content : 'p-6'}
			>
				{children}
			</div>
		</div>
	);
};
