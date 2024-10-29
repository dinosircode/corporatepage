import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';

import Icon from '../../utils/icon.util';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';

import content from '../../../content/index/OverViewDesc.json';

/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {
    const [typingStatus, setTypingStatus] = useState('Initializing');

    return (
        <Section classProp={`${hero.section}`}>
            <Container spacing={'VerticalXXXL'}>
                <section>
                    <h1 className={hero.header}>
                        {"INVESTMENT"}
                    </h1>
                    <h1 className={`${hero.header} ${hero.primaryDim}`}>
                        {"PLAN"}
                    </h1>
                </section>
                <section>
                    <table style={{ width: '70%', borderCollapse: 'collapse', margin: '20px auto', fontSize: '1.2em' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                                    Capital
                                </th>
                                <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                                    Year 1
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>10,000</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>4,800</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>50,000</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>30,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>100,000</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>72,000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
                        {"You can invest any number of the following slots of 10,000, 50,000, 100,000"}
                    </p>
                </section>
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    );
}
