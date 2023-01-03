import { FormControl, FormHelperText, FormLabel, Input as CInput, InputProps as CInputProps } from '@chakra-ui/react'


interface InputProps extends CInputProps {
	name: string
	label?: string
	helperText?: string
}

export function Input ({ name, helperText, label, isRequired, ...rest }: InputProps) {
	return (
		<FormControl isRequired={isRequired}>
			{label && (
				<FormLabel htmlFor={name}>{label}</FormLabel>
			)}
			<CInput
				id={name}
				name={name}
				required={isRequired}

				focusBorderColor='pink.500'
				bgColor='gray.900'
				variant='filled'
				_hover={{
					bgColor: 'gray.900'
				}}
				size='lg'

				{...rest}
			/>
			{helperText && (
				<FormHelperText>{helperText}</FormHelperText>
			)}
		</FormControl>
	)
}
