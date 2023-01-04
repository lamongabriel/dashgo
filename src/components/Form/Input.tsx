import { forwardRef, ForwardRefRenderFunction } from 'react'

import {
	FormControl,
	FormHelperText,
	FormLabel,
	Input as CInput,
	InputProps as CInputProps
} from '@chakra-ui/react'

interface InputProps extends CInputProps {
	name: string
	label?: string
	helperText?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, helperText, label, isRequired, ...rest },
	ref
) => {
	return (
		<FormControl isRequired={isRequired}>
			{label && (
				<FormLabel htmlFor={name}>{label}</FormLabel>
			)}
			<CInput
				id={name}
				name={name}
				required={isRequired}
				ref={ref}

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

export const Input = forwardRef(InputBase)
