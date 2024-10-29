import { useState } from 'react';
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
import HeroBg from '../../blocks/hero.bg/bg-color-1';

import hero from '../../../styles/sections/index/hero.module.scss';

// Register Chart.js and plugins
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export default function Hero() {
    const [typingStatus, setTypingStatus] = useState('Initializing');

    // Data for the income and expenditure line chart
    const lineData = {
        labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Income',
                data: [0, 1245000, 2490000, 4980000, 12450000, 19920000, 24900000, 31125000, 37350000], // Income data starting with 0
                borderColor: 'rgba(75, 192, 75, 1)', // Green line for Income
                backgroundColor: 'rgba(75, 192, 75, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 75, 1)',
                pointBorderColor: '#fff',
                spanGaps: true, // Allow gaps in the line
            },
            {
                label: 'Expenditure',
                data: [0, 560000, 1300000, 2100000, 3700000, 4500000, 6000000, 7200000, 8500000], // Expenditure data starting with 0
                borderColor: 'rgba(255, 99, 132, 1)', // Red line for Expenditure
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                spanGaps: true, // Allow gaps in the line
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
                text: 'Monthly Income & Expenditure',
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
                beginAtZero: true,
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
                        {"INCOME &"}
                    </h1>
                    <h1 className={`${hero.header} ${hero.primaryDim}`}>
                        {"EXPENDITURE "}
                    </h1>
                </section>
                <section style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '400px' }}>
                    <Line data={lineData} options={lineOptions} />
                </section>
                <section>
                    <p className={`${hero.primaryBright} subtitle ${space(['verticalLrg'])}`}>
                        {"This chart represents the monthly income and expenditure trends."}
                    </p>
                </section>
            </Container>
            <HeroBg theme="bg-color-1" />
        </Section>
    );
}
