import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
	src: string;
	alt: string;
	className?: string;
	width?: number;
	height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
	src,
	alt,
	className = '',
	width,
	height,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={imgRef}
			className={`relative overflow-hidden ${className}`}
			style={{ width, height }}
		>
			{isInView && (
				<img
					src={src}
					alt={alt}
					onLoad={() => setIsLoaded(true)}
					className={`transition-opacity duration-300 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					} w-full h-full object-cover`}
					loading='lazy'
				/>
			)}
			{!isLoaded && (
				<div className='absolute inset-0 bg-warm-beige animate-pulse' />
			)}
		</div>
	);
};
