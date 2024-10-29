import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
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
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function Hero() {
    const [typingStatus, setTypingStatus] = useState('Initializing');

    // Data for the bar chart
    const barData = {
        labels: ['0', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'Jun'],
        datasets: [
            {
                label: 'Investment Value',
                data: [0, 5000, 10000, 20000, 50000, 80000, 100000, 125000, 150000],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Options for the bar chart
    const barOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allows chart to resize based on container
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
                text: '  Subscription Growth',
                font: {
                    size: 20,
                },
            },
            datalabels: {
                display: (ctx) => window.innerWidth > 768, // Only show labels on desktop
                align: 'end',
                anchor: 'end',
                color: '#444',
                font: {
                    size: 14,
                },
                formatter: (value) => value.toLocaleString(), // Formats numbers with commas
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14,
                    },
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
                        {"USER"}
                    </h1>
                    <h1 className={`${hero.header} ${hero.primaryDim}`}>
                        {"SUBSCRIPTION "}
                    </h1>
                </section>
                <section style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '400px' }}>
                    <Bar data={barData} options={barOptions} />
                </section>
                <section>
                    <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
                        {"* There could be Slight changes in data.Chart Based on the existing information"}
                    </p>
                </section>
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    );
}
