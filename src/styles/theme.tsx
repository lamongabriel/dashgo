import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const base: ThemeOverride = {
	colors: {
		gray: {
			'900': '#181b23',
			'800': '#1f2029',
			'700': '#353646',
			'600': '#4b4d63',
			'500': '#616480',
			'400': '#797D9A',
			'300': '#9699b0',
			'200': '#b3b5c6',
			'100': '#d1d2dc',
			'50': '#eeeef2',
		}
	},
	fonts: {
		heading: 'Roboto',
		body: 'Roboto'
	},
	styles: {
		global: () => ({
			body: {
				bg: 'gray.900',
				color: 'gray.50'
			}
		})
	}
}

export const theme = extendTheme(base)
