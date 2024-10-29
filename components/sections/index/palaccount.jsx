import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';

import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';

export default function Hero() {
    const [typingStatus, setTypingStatus] = useState('Initializing');

    return (
        <Section classProp={`${hero.section}`}>
            <Container spacing={'VerticalXXXL'}>
                <section>
                    <h1 className={hero.header}>
                        {" P & L ACCOUNT"}
                    </h1>
                    <h1 className={`${hero.header} ${hero.primaryDim}`}>
                        {"YEAR 1"}
                    </h1>
                </section>
                <section>
                    <table style={{ width: '70%', borderCollapse: 'collapse', margin: '20px auto', fontSize: '1.2em' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                                    Particulars
                                </th>
                                <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', textAlign: 'center', fontWeight: 'bold' }}>
                                    Year 1
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Income from subscription</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>10,000,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>(Less) Expenses</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Production cost</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>4,800,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Return on investment payable</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>720,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Advertising cost</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>1,200,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>Other expenses</td>
                                <td style={{ border: '1px solid #000', padding: '12px', textAlign: 'center' }}>600,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #000', padding: '12px', fontWeight: 'bold', textAlign: 'center' }}>Assumed Profit</td>
                                <td style={{ border: '1px solid #000', padding: '12px', fontWeight: 'bold', textAlign: 'center' }}>2,680,000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section>
                    <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
                        {"This table outlines the assumed profit and loss for Year 1."}
                    </p>
                </section>
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    );
}
