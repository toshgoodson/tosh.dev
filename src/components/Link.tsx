import NextLink from 'next/link'
import React, { FC } from "react"

const linkStyles = `
	text-amber-300 border-b border-amber-300/0 
	hover:border-amber-300/50
	transition duration-300 ease-[cubic-bezier(0.25,-0.75,0.75,1.75)]
`

export const Link: React.ForwardRefExoticComponent<React.ComponentProps<typeof NextLink>> = React.forwardRef(function InnerLink({className, children, ...restProps}) {
	return <NextLink className={`${linkStyles} ${className ?? ''}`} {...restProps}>{children}</NextLink>
})