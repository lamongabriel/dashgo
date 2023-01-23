import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input as CInput,
	InputProps as CInputProps
} from '@chakra-ui/react'

interface InputProps extends CInputProps {
	name: string
	label?: string
	helperText?: string
	errors?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, helperText, label, isRequired, errors = null, ...rest },
	ref
) => {
	return (
		<FormControl isRequired={isRequired} isInvalid={!!errors}>
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

			{!!errors && (
				<FormErrorMessage>
					{errors.message}
				</FormErrorMessage>
			)}

			{(helperText && !errors) && (
				<FormHelperText>{helperText}</FormHelperText>
			)}
		</FormControl>
	)
}

export const Input = forwardRef(InputBase)
