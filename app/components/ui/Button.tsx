import React from 'react';
import { componentStyles } from '../../styles/components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	size = 'md',
	children,
	className = '',
	...props
}) => {
	const baseClasses = componentStyles.button.base;
	
	const variantClasses = {
		primary: componentStyles.button.primary,
		secondary: componentStyles.button.secondary,
		outline: componentStyles.button.outline,
		ghost: componentStyles.button.ghost,
	};

	const sizeClasses = componentStyles.button.sizes[size];

	return (
		<button
			className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
