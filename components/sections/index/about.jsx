// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="KNOW MORE"
					preTitle="INDRAJALA - The OTT Of Fantasies"
					subTitle="Focused on the experience, driven by the engineering."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" alt="Indrajala Mobile Screen Photo"/>
					
					</div>
					<div className={about.copy} >
					<CopyBlock 
							title="Universal Access"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Indrajala  ensures Universal Accessibility, providing seamless access across multiple screens including tablets, mobile devices, and web platforms. Available on both Android and iOS, our content is designed to deliver an optimized viewing experience, reaching audiences effortlessly wherever they are."
							/>
						

						<CopyBlock 
							title="Wide Variety of Content"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Indrajala offers a Wide Variety of Content, showcasing diverse themes and genres to cater to all viewer preferences. Our platform features an extensive selection of content across various categories, ensuring there's something for every audience."
							/>


					<CopyBlock 
							title="High-Quality Production"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Indrajala is committed to High-Quality Production, delivering visually stunning and meticulously crafted content. With a focus on excellence in every detail, our productions set a high standard, ensuring an exceptional viewing experience across all platforms."
							/>
					</div>
				</section>	
			</Container>


			<Container spacing={['verticalXXXLrg']}>
				
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/Indrajala.jpg" alt="Indrajala Home App  Screen Photo"/>
					
					</div>
					<div className={about.copy} >
					<CopyBlock 
							title=" Exclusive and Original Content"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Indrajala offers Exclusive and Original Content, bringing unique stories and fresh perspectives to audiences. Our platform showcases content crafted with creativity and originality, available only on Indrajala."
							/>
						

						<CopyBlock 
							title="Privacy and Security"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Indrajala prioritizes Privacy and Security, ensuring a safe and protected experience for all users. Our platform employs robust measures to safeguard personal information and provide peace of mind while streaming."
							/>


					<CopyBlock 
							title="start as low as ₹399/month"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Indrajala offers flexible subscription plans starting as low as ₹399/month, providing unlimited access to an extensive library of exclusive, high-quality content. Enjoy seamless streaming across devices, including mobile, tablet, and web, and experience entertainment crafted to suit every preference—all at an affordable rate."
							/>
					</div>
				</section>	
			</Container>


		</Section>

		
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]