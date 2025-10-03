import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline';
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
	const baseClasses =
		'font-medium rounded-lg transition-all duration-200 focus-ring hover-lift inline-flex items-center justify-center';

	const variantClasses = {
		primary: 'bg-forest-green text-white hover:bg-opacity-90',
		secondary: 'bg-wheat text-charcoal hover:bg-opacity-90',
		outline:
			'border-2 border-forest-green text-forest-green bg-transparent hover:bg-forest-green hover:text-white',
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	};

	return (
		<button
			className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
