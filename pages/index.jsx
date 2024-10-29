import Head from 'next/head';

import Hero from '../components/sections/index/hero';
import Description from '../components/sections/index/description';
import Looking from '../components/sections/index/looking';
import About from '../components/sections/index/about';
import Technical from '../components/sections/index/technical';
import Career from '../components/sections/index/career';
import FeaturedProjects from '../components/sections/projects/featured';

import Color from '../components/utils/page.colors.util';

import colors from '../content/index/_colors.json';

export default function HomePage() {
	return (
		<>
			{/* Add page title and meta tags */}
			<Head>
				<title>Indrajala Movie Makers LLP | Corporate Page | Home	</title>
				<meta
					name="description"
					content="Welcome to Indrajala Movie Makers LLP. Discover our innovative storytelling, projects, and corporate values in the Indian film industry."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/img/logos/favicon.ico" type="image/x-icon" />

			</Head>

			{/* Render the components */}
			<Color colors={colors} />
			<Hero />
		
			<Description/>
			{/* <Looking /> 
			<FeaturedProjects /> */}
			<About />
			{/* <Technical /> */}
			{/* <Career /> */}
		</>
	);
}
