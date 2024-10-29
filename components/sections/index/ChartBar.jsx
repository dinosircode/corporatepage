import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import Section from '../../structure/section';
import Container from '../../structure/container';

import space from '../../utils/spacing.util';
import Icon from '../../utils/icon.util';
import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';
import button from '../../../styles/blocks/button.module.scss';
import content from '../../../content/index/OverViewDesc.json';

// Register Chart.js and plugins
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export default function Hero() {
    const [typingStatus, setTypingStatus] = useState('Initializing');

    // Data for the line chart
    const lineData = {
        labels: ['0', '1st Year', '2nd Year', '3rd Year'],
        datasets: [
            {
                label: 'ROI for Indrajala',
                data: [null, 172000, 295840, 508844], // Start from 1st Year
                borderColor: 'rgba(75, 192, 75, 1)', // Green color
                backgroundColor: 'rgba(75, 192, 75, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 75, 1)',
                pointBorderColor: '#fff',
            },
            {
                label: 'ROI for Mutual Funds',
                data: [null, 130000, 169000, 219700], // Start from 1st Year
                borderColor: 'rgba(255, 99, 132, 1)', // Red color
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
            },
        ],
    };

    // Options for the line chart
    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16,
                    },
                },
            },
            title: {
                display: true,
                text: '',
                font: {
                    size: 20,
                },
            },
            datalabels: {
                display: (ctx) => window.innerWidth > 768, // Only show labels on desktop
                align: 'top',
                anchor: 'end',
                color: '#444',
                font: {
                    size: 12,
                },
                formatter: (value) => value.toLocaleString(), // Formats numbers with commas
            },
        },
        scales: {
            y: {
                min: 0,
                max: 600000,
                ticks: {
                    font: {
                        size: 14,
                    },
                    callback: (value) => value.toLocaleString(), // Adds commas
                },
            },
            x: {
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <Section classProp={`${hero.section}`}>
            <Container spacing={'VerticalXXXL'}>
                <section>
                    <h1 className={hero.header}>
                        {"YEARLY ROI"}
                    </h1>
                    <h1 className={`${hero.header} ${hero.primaryDim}`}>
                        {"COMPARISON"}
                    </h1>
                </section>
                <section style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '400px' }}>
                    <Line data={lineData} options={lineOptions} />
                </section>
                <section>
                    <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
                        {"ROI COMPARE WITH THE MUTUAL FUNDS"}
                    </p>
                </section>
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    );
}
