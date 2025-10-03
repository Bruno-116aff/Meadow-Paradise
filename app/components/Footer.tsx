import React from 'react';
import { Container } from './ui/Container';
import { contacts } from '../data/contacts';
import { footerData } from '../data/footer';

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-forest-green text-white py-16'>
			<Container>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{/* Logo and Slogan */}
					<div className='lg:col-span-2'>
						<div className='flex items-center space-x-3 mb-4'>
							<div className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg'>
								<img
									src={footerData.brand.logo.src}
									alt={footerData.brand.logo.alt}
									className='w-10 h-10 rounded-full object-contain'
									onError={e => {
										const target = e.target as HTMLImageElement;
										target.style.display = 'none';
										const fallback = target.nextElementSibling as HTMLElement;
										if (fallback) fallback.style.display = 'block';
									}}
								/>
								<span className='text-forest-green font-bold text-xl hidden'>
									{footerData.brand.logo.fallback}
								</span>
							</div>
							<span className='text-2xl font-serif font-semibold'>
								{footerData.brand.title}
							</span>
						</div>
						<p className='text-warm-beige text-lg mb-6 max-w-md'>
							{footerData.brand.slogan}
						</p>
						<p className='text-warm-beige text-sm max-w-lg'>
							{footerData.brand.description}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-xl font-semibold mb-4'>
							{footerData.navigation.title}
						</h3>
						<ul className='space-y-3'>
							{footerData.navigation.links.map((link, index) => (
								<li key={index}>
									<button
										onClick={() => {
											const element = document.querySelector(
												`#${link.section}`
											);
											if (element)
												element.scrollIntoView({ behavior: 'smooth' });
										}}
										className='text-warm-beige hover:text-white transition-colors cursor-pointer'
									>
										{link.text}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-xl font-semibold mb-4'>
							{footerData.contact.title}
						</h3>
						<ul className='space-y-3 text-warm-beige'>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<a
									href={`tel:${contacts.phone}`}
									className='hover:text-white transition-colors cursor-pointer'
								>
									{contacts.phone}
								</a>
							</li>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<a
									href={`mailto:${contacts.email}`}
									className='hover:text-white transition-colors cursor-pointer'
								>
									{contacts.email}
								</a>
							</li>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-4 h-4'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
								</svg>
								<a
									href={contacts.instagramUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-white transition-colors cursor-pointer'
								>
									{contacts.instagram}
								</a>
							</li>
							<li className='flex items-center space-x-3'>
								<svg
									className='w-5 h-5 flex-shrink-0'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								<span>{contacts.location}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Policies and Copyright */}
				<div className='border-t border-warm-beige border-opacity-20 pt-8'>
					<div className='grid md:grid-cols-2 gap-8 mb-8'>
						<div>
							<h4 className='font-semibold mb-3'>{footerData.rules.title}</h4>
							<ul className='text-sm text-warm-beige space-y-1'>
								{footerData.rules.items.map((item, index) => (
									<li key={index}>• {item}</li>
								))}
							</ul>
						</div>

						<div>
							<h4 className='font-semibold mb-3'>{footerData.safety.title}</h4>
							<ul className='text-sm text-warm-beige space-y-1'>
								{footerData.safety.items.map((item, index) => (
									<li key={index}>• {item}</li>
								))}
							</ul>
						</div>
					</div>

					<div className='text-center text-sm text-warm-beige'>
						<p className='mb-2'>
							© {currentYear} {footerData.copyright.text}
						</p>
						<div className='flex justify-center space-x-6'>
							{footerData.copyright.links.map((link, index) => (
								<a
									key={index}
									href={link.href}
									className='hover:text-white transition-colors cursor-pointer'
								>
									{link.text}
								</a>
							))}
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
