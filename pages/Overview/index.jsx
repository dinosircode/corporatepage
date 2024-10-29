import Head from 'next/head';

import Hero 		from '../../components/sections/index/hero'
import Looking 		from '../../components/sections/index/looking'
import About 		from '../../components/sections/index/about'
import Technical 	from '../../components/sections/index/technical'
import Description from '../../components/sections/index/DescOver';
import Invest from '../../components/sections/index/Investment';


import Career 		from '../../components/sections/index/career'
import FeaturedProjects	from '../../components/sections/projects/FeauterCarrer'

import Color 		from '../../components/utils/page.colors.util'

import colors 		from '../../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
		{/* Add page title and meta tags */}
		<Head>
				<title>Overview |Indrajala Movie Makers LLP |	</title>
				<meta
					name="description"
					content="INDRAJALA MOVIE MAKERS is a leading OTT platform offering a diverse, high-quality selection of inclusive adult content, designed to provide a safe and immersive experience for all viewers."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/img/logos/favicon.ico" type="image/x-icon" />

			</Head>
			<Color colors={colors} />
			<></>
			<Hero />
			
			<Description/>
			<Invest/>

		</>
	);
}