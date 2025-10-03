import React from 'react';

export const SkipLink: React.FC = () => {
	return (
		<a
			href='#main-content'
			className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-forest-green text-white px-4 py-2 rounded-lg z-50 focus-ring'
		>
			Перейти к основному содержанию
		</a>
	);
};
