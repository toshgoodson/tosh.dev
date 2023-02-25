import Link from "next/link"
import { FC } from "react"
import { Button } from "./Button"


export const Nav: FC = () => {

	return (
		<>
			<div className="bg-inherit sticky top-[env(safe-area-inset-top, 0px)] z-50 h-16">
				<div className="container mx-auto max-w-4xl px-4 py-4 flex items-center">
					<Link href="/" className="font-pixel text-4xl">
						<span>t</span><span>o</span><span>s</span>h<span className="text-amber-300">.</span>dev
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