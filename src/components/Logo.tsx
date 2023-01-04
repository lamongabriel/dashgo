import { Text, TextProps } from '@chakra-ui/react'

export function Logo ({...rest}: TextProps) {
	return (
		<Text
			fontSize='3xl'
			fontWeight='bold'
			letterSpacing='tight'
			{...rest}
		>
			dashgo<Text color='pink.500' as='span'>.</Text>
		</Text>
	)
}
