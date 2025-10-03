import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className = '',
	size = 'lg',
}) => {
	const sizeClasses = {
		sm: 'max-w-4xl',
		md: 'max-w-5xl',
		lg: 'max-w-6xl',
		xl: 'max-w-7xl',
	};

	return (
		<div className={`container-custom ${sizeClasses[size]} ${className}`}>
			{children}
		</div>
	);
};
