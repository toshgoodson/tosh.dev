import Link from "next/link"
import { FC, PropsWithChildren } from "react"
import { Button } from "./Button"

const logoTransition = `
	transition-colors duration-[50ms] ease-[cubic-bezier(0.25,-0.75,0.75,1.75)]
	group-hover/logo:text-stone-100 group-hover/logo:duration-150 
`

const NavLink: FC<PropsWithChildren<{href: string}>> = ({href, children}) => {
	return (
		<a href={href} className="text-base font-light font-mono px-3 py-1.5 group/navlink">
			<span className=" text-rose-500 tracking-widest" aria-hidden>#</span><span className="group-hover/navlink:text-stone-100 transition-colors duration-300 ease-[cubic-bezier(0.25,-0.75,0.75,1.75)]">{children}</span>
		</a>
	)
}

export const Nav: FC = () => {

	return (
		<>
			<input id="sidebar-toggle" type="checkbox" className="peer invisible absolute"/>
			<div className="bg-stone-900/90 backdrop-blur sticky top-[env(safe-area-inset-top,0px)] z-50 h-16 peer-checked:h-64 group transition-all">
				<div className="container mx-auto max-w-4xl px-4 py-3 flex items-center">
					<Link href="/" className="font-pixel text-4xl group/logo">
						<span className={`${logoTransition}               group-hover/logo:delay-[300ms]                                    group-hover/logo:animate-flicker group-hover/logo:[animation-delay:300ms]`}>t</span>
						<span className={`${logoTransition} delay-[25ms]  group-hover/logo:delay-[800ms]                                    group-hover/logo:animate-flicker group-hover/logo:[animation-delay:800ms]`}>o</span>
						<span className={`${logoTransition} delay-[50ms]  group-hover/logo:delay-[1500ms] group-hover/logo:duration-300     group-hover/logo:animate-flicker group-hover/logo:[animation-delay:1500ms]`}>s</span>
						<span className={`${logoTransition} delay-75      group-hover/logo:delay-[2200ms]                                   group-hover/logo:animate-flicker group-hover/logo:[animation-delay:2200ms]`}>h</span>
						<span className={`${logoTransition} delay-100     group-hover/logo:delay-[2600ms]                                   group-hover/logo:animate-flicker group-hover/logo:[animation-delay:2600ms] text-amber-300`}>.</span>
						<span className={`${logoTransition} delay-[125ms] group-hover/logo:delay-[2900ms]                                   group-hover/logo:animate-flicker group-hover/logo:[animation-delay:2900ms]`}>d</span>
						<span className={`${logoTransition} delay-150     group-hover/logo:delay-[3400ms] group-hover/logo:duration-300     group-hover/logo:animate-flicker group-hover/logo:[animation-delay:3400ms]`}>e</span>
						<span className={`${logoTransition} delay-[175ms] group-hover/logo:delay-[4400ms]                                   group-hover/logo:animate-flicker group-hover/logo:[animation-delay:4400ms]`}>v</span>
					</Link>
					<div className="flex-grow"></div>
					<div className="hidden md:block mr-3">
						<NavLink href="#about">About</NavLink>
						<NavLink href="#experience">Experience</NavLink>
						<NavLink href="#contact">Contact</NavLink>
					</div>

					<Button as={Link} className="text-base px-3 py-1.5" href="/toshiro-goodson-resume-v1.1.2.pdf" target="_blank">Résumé</Button>
					<Button as="label" htmlFor="sidebar-toggle" className="!text-stone-200 !bg-transparent !px-1 !py-0 border-0 font-mono text-4xl ml-4 md:hidden">≡</Button>
				</div>
				<div className="top-0 group-peer-checked:top-16 z-[49] opacity-0 group-peer-checked:opacity-100 transition-all">
					<div className="px-4">
						<div className="h-16 flex items-center justify-end">
							<NavLink href="#about">About</NavLink>
						</div>
						<div className="h-16 flex items-center justify-end">
							<NavLink href="#experience">Experience</NavLink>
						</div>
						<div className="h-16 flex items-center justify-end">
							<NavLink href="#contact">Contact</NavLink>
						</div>
					</div>
				</div>
			</div>
			
			<div className="h-4 bg-gradient-to-b from-black/20 to-transparent sticky top-16 z-30 peer-checked:top-64 transition-all"></div>
			<div className="-top-4 relative z-40">
				<div className="rfs:h-8 bg-stone-900"></div>
				<div className="h-4 bg-gradient-to-b from-stone-900 to-transparent relative z-40"></div>
			</div>
		</>
	)
}