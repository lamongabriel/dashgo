import { Box, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'

import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('react-apexcharts'), {
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
		events: {
			mounted(chart) {
				chart.windowResizeHandler()
			},
		}
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

export function Chart () {
	return (
		<Box p={[6, 8]} bgColor='gray.800' borderRadius={8} pb={4} overflow='hidden'>
			<Text fontSize='lg' mb={4}>This week's subscriptions</Text>
			<ApexChart options={options} series={series} type='area' height={160} width={'100%'} />
		</Box>
	)
}
