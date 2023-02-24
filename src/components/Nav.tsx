import Link from "next/link"


export const Nav = () => {
	return (
		<>
			<div className="bg-inherit sticky top-[env(safe-area-inset-top)] z-50 h-16 flex items-center">
				<div className="container mx-auto max-w-4xl px-4 py-4 ">
					<Link href="/" className="font-pixel text-4xl">tosh.dev</Link>
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