import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'LocalBusiness',
							name: 'Meadow Paradise Rancho',
							description:
								'Ранчо в Пиргосе (Лимассол): мероприятия, уроки с лошадьми, воркшопы, туры по ранчо, фотосессии, пикники.',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'Pyrgos',
								addressRegion: 'Limassol',
								addressCountry: 'CY',
							},
							telephone: '+35797719752',
							email: 'info@meadowparadise.com',
							sameAs: ['https://www.instagram.com/meadow.paradise'],
							url: 'https://meadowparadise.com',
						}),
					}}
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'FAQPage',
							mainEntity: [
								{
									'@type': 'Question',
									name: 'Где находится ранчо?',
									acceptedAnswer: {
										'@type': 'Answer',
										text: 'Пиргос, Лимассол. Точку смотрите на карте ниже.',
									},
								},
								{
									'@type': 'Question',
									name: 'Нужна ли предварительная запись?',
									acceptedAnswer: {
										'@type': 'Answer',
										text: 'Да, запись обязательна.',
									},
								},
								{
									'@type': 'Question',
									name: 'Какие форматы доступны?',
									acceptedAnswer: {
										'@type': 'Answer',
										text: 'Мероприятия, уроки, воркшопы, тур по ранчо, фотосессии, пикники, тимбилдинги, детские дни рождения, помолвки/церемонии.',
									},
								},
							],
						}),
					}}
				/>
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full p-4 overflow-x-auto'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
