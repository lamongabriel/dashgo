import { Box, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { ApexOptions } from 'apexcharts'
import { Layout } from '../components/Layout'

const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false
})

const options: ApexOptions = {
	chart: {
		toolbar: {
			show: false
		},
		zoom: {
			enabled: false
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	tooltip: {
		enabled: false
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			color: theme.colors.gray[600]
		},
		axisTicks: {
			color: theme.colors.gray[600]
		},
		categories: [
			'2022-01-03T12:00:00.000Z',
			'2022-01-04T12:00:00.000Z',
			'2022-01-05T12:00:00.000Z',
			'2022-01-06T12:00:00.000Z',
			'2022-01-07T12:00:00.000Z',
			'2022-01-08T12:00:00.000Z',
			'2022-01-09T12:00:00.000Z',
		],
	},
	fill: {
		opacity: 0.3,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.7,
			opacityTo: 0.3
		}
	}
}
const series = [
	{name: 'series1', data: [31, 120, 10, 28, 51, 18, 109]}
]

export default function Dashboard () {
	return (
		<Layout>
			<SimpleGrid flex={1} gap={4} minChildWidth='320px' alignItems='flex-start'>
				<Box p={8} bgColor='gray.800' borderRadius={8} pb={4}>
					<Text fontSize='lg' mb={4}>This week's subscriptions</Text>
					<Chart options={options} series={series} type='area' height={160} width={'100%'} />
				</Box>
				<Box p={8} bgColor='gray.800' borderRadius={8} pb={4}>
					<Text fontSize='lg' mb={4}>Opening's ratios</Text>
					<Chart options={options} series={series} type='area' height={160} width={'100%'} />
				</Box>
			</SimpleGrid>
		</Layout>
	)
}
