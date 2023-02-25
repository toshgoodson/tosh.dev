import Link from "next/link"
import { FC } from "react"
import { Button } from "./Button"

const logoTransition = `
	transition-colors duration-[50ms] ease-[cubic-bezier(0.25,-0.75,0.75,1.75)]
	group-hover:text-stone-100 group-hover:duration-150 
`

export const Nav: FC = () => {

	return (
		<>
			<div className="bg-inherit sticky top-[env(safe-area-inset-top, 0px)] z-50 h-16">
				<div className="container mx-auto max-w-4xl px-4 py-4 flex items-center">
					<Link href="/" className="font-pixel text-4xl group">
						<span className={`${logoTransition}               group-hover:delay-[300ms] group-hover:durartion-300`}>t</span>
						<span className={`${logoTransition} delay-[25ms]  group-hover:delay-[800ms]`}>o</span>
						<span className={`${logoTransition} delay-[50ms]  group-hover:delay-[1500ms] group-hover:duration-300`}>s</span>
						<span className={`${logoTransition} delay-75      group-hover:delay-[2200ms]`}>h</span>
						<span className={`${logoTransition} delay-100     group-hover:delay-[2600ms] text-amber-300`}>.</span>
						<span className={`${logoTransition} delay-[125ms] group-hover:delay-[2900ms]`}>d</span>
						<span className={`${logoTransition} delay-150     group-hover:delay-[3400ms] group-hover:duration-300`}>e</span>
						<span className={`${logoTransition} delay-[175ms] group-hover:delay-[4400ms]`}>v</span>
					</Link>
					<div className="flex-grow"></div>
					<Button as="a" className="text-base px-3 py-1" href="/resume">Résumé</Button>
				</div>
			</div>
			<div className="h-4 bg-gradient-to-b from-black/20 to-transparent sticky top-16 z-30"></div>
			<div className="-top-4 relative z-40">
				<div className="rfs:h-8 bg-stone-900"></div>
				<div className="h-4 bg-gradient-to-b from-stone-900 to-transparent relative z-40"></div>
			</div>
		</>
	)
}