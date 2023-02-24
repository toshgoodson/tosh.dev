import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@/interfaces/PolymorphicComponent"
import React from "react"

const classes = `
	inline-block px-4 py-2
	font-mono font-light text-amber-300
	border border-amber-300 rounded
	bg-amber-300/0
	hover:bg-amber-300/10
	transition-colors ease-in-out
`

type Props = {} // Button takes no additional props (just the underlying html element's props)

type AllowedElementTypes = 'a' | 'button'

type ButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>

const ButtonInner = <C extends React.ElementType = "button">(
	{as, children, className, ...restProps}: ButtonProps<C>,
	ref?: PolymorphicRef<C>
) => {
	const Component = as ?? "button"

	return (
		<Component ref={ref} {...restProps} className={`${classes} ${className ?? ''}`}>{children}</Component>
	)
}

// type helper so the exposed Button component has the correct type (React.forwardRef doesn't produce that)
type ButtonComponent = <C extends AllowedElementTypes = 'button'>(
	props: ButtonProps<C>,
) => React.ReactElement | null

export const Button: ButtonComponent = React.forwardRef(ButtonInner)
