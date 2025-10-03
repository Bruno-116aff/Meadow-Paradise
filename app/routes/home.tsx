import type { Route } from './+types/home';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Formats } from '../components/Formats';
import { Flow } from '../components/Flow';
import { Gallery } from '../components/Gallery';
import { FAQ } from '../components/FAQ';
import { Contacts } from '../components/Contacts';
import { Map } from '../components/Map';
import { Footer } from '../components/Footer';
import { SkipLink } from '../components/ui/SkipLink';

export function meta({}: Route.MetaArgs) {
	return [
		{
			title:
				'Meadow Paradise Rancho — ранчо и эко-пространство в Пиргосе, Лимассол',
		},
		{
			name: 'description',
			content:
				'Ранчо в Пиргосе (Лимассол): мероприятия, уроки с лошадьми, воркшопы, туры по ранчо, фотосессии, пикники. Предварительная запись обязательна.',
		},
		{
			name: 'keywords',
			content:
				'ранчо, лошади, Лимассол, Пиргос, фотосессии, тимбилдинги, уроки верховой езды, пикники, свадьбы',
		},
		{ name: 'author', content: 'Meadow Paradise Rancho' },
		{ name: 'robots', content: 'index, follow' },

		// Open Graph
		{
			property: 'og:title',
			content:
				'Meadow Paradise Rancho — ранчо и эко-пространство в Пиргосе, Лимассол',
		},
		{
			property: 'og:description',
			content:
				'Ранчо в Пиргосе (Лимассол): мероприятия, уроки с лошадьми, воркшопы, туры по ранчо, фотосессии, пикники. Предварительная запись обязательна.',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:locale', content: 'ru_RU' },
		{ property: 'og:url', content: 'https://meadowparadise.com' },
		{
			property: 'og:image',
			content: 'https://meadowparadise.com/images/hero.jpg',
		},
		{ property: 'og:image:width', content: '1200' },
		{ property: 'og:image:height', content: '630' },
		{ property: 'og:site_name', content: 'Meadow Paradise Rancho' },

		// Twitter Card
		{ name: 'twitter:card', content: 'summary_large_image' },
		{
			name: 'twitter:title',
			content:
				'Meadow Paradise Rancho — ранчо и эко-пространство в Пиргосе, Лимассол',
		},
		{
			name: 'twitter:description',
			content:
				'Ранчо в Пиргосе (Лимассол): мероприятия, уроки с лошадьми, воркшопы, туры по ранчо, фотосессии, пикники.',
		},
		{
			name: 'twitter:image',
			content: 'https://meadowparadise.com/images/hero.jpg',
		},

		// Additional meta
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ name: 'theme-color', content: '#2F5E4E' },
		{ name: 'msapplication-TileColor', content: '#2F5E4E' },

		// Canonical
		{ rel: 'canonical', href: 'https://meadowparadise.com' },
	];
}

export default function Home() {
	return (
		<>
			<SkipLink />
			<Header />
			<main id='main-content'>
				<Hero />
				<About />
				<Formats />
				<Flow />
				<Gallery />
				<FAQ />
				<Contacts />
				<Map />
			</main>
			<Footer />
		</>
	);
}
