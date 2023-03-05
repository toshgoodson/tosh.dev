import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const SectionHeader: FC<PropsWithChildren<{id: string, center?: boolean}>> = ({id, center, children}) => {
	const isCenter = center ?? false

	return (
		<div id={id} className="flex items-center gap-4 mb-8">
			{isCenter && <hr className="border-t border-stone-700 grow"/>}
			<h2 className="text-3xl text-stone-200 font-semibold"><span className="text-rose-500 font-light font-mono">#</span> {children}</h2>
			<hr className="border-t border-stone-700 grow"/>
		</div>
	)
}

const photoStyle = `
	w-full
	rounded-2xl
`

export default function Home() {
	return (
		<main>
			<div className="pt-[13vh] min-h-[calc(100vh-128px)] mb-8">
				<h1>
					<div className="text-amber-400 font-mono mb-2 rfs:text-[22px]">Hello world, you can call me</div>
					<div className="text-stone-100 rfs:text-[80px] font-extrabold leading-tight">Tosh Goodson.</div>
				</h1>
				<h2 className="md:rfs:text-[80px] rfs:text-[60px] font-extrabold leading-tight mb-4">Coding is what I love.</h2>
				<div className="md:max-w-[70%] leading-relaxed">I&apos;m a full stack software engineer focused on building robust and performant web apps. Presently, I&apos;m working on e&#8209;commerce shopping experiences at <Link href="https://benefytt.com/" target="_blank">Benefytt.com</Link>.</div>
			</div>
			<div className="grid grid-cols-12 gap-12 mb-52">
				<div className="col-span-8">
					<SectionHeader id="about">About Me</SectionHeader>
				</div>
				<div className="col-span-8">
					<p className="mb-6">Hi there! My name is Toshiro, but you can call me Tosh. I specialize in building web applications from start to finish, and I&apos;m passionate about creating solutions that are both user-friendly and technically robust. </p>
				
					<p className="mb-6">Blah Blah</p>
				
					<p className="mb-6">Foob</p>
				</div>
				<div className="col-span-4 relative">
					<Image className={photoStyle} src="/tosh.webp" alt="Headshot of Tosh Goodson" width={200} height={200}/>
				</div>
			</div>
			
			<div className="mb-72">
				<div className="grid grid-cols-12 gap-12">
					<div className="col-span-8 col-start-5">
						<SectionHeader id="experience">Experience</SectionHeader>
					</div>
					<div className="col-span-4">
						<div className="grid grid-cols-12 gap-4">
							<div className="col-span-6 relative">
								<Image className={photoStyle} src="/healthpocket-benefytt.svg" alt="Healthpocket + Benefytt logos" width={200} height={200}/>
							</div>
							<div className="col-span-6 relative">
								<Image className={photoStyle} src="/prioritysales.svg" alt="PrioritySales logo" width={200} height={200}/>
							</div>
							<div className="col-span-6 relative">
								<Image className={photoStyle} src="/stripes39.svg" alt="Stripes39 logo (circa 2011)" width={200} height={200}/>
							</div>
							<div className="col-span-6 relative">
								<Image className={photoStyle} src="/job-filler.svg" alt="" width={200} height={200}/>
							</div>
						</div>
					</div>
					<div className="col-span-8">
						<p className="mb-6">Take a look at my resume for my job history.</p>
						<Button as={Link} href="">View Résumé</Button>
					</div>
				</div>
				
			</div>

			{/* <div className="mb-52">
				<SectionHeader id="projects">Projects</SectionHeader>
			</div> */}

			<div className="mb-52">
				<SectionHeader id="contact" center>Contact</SectionHeader>
				<div className="grid grid-cols-12">
					<div className="col-span-8 col-start-3">
						<p className="text-center mb-6">I’m currently looking for new opportunities!</p>
						<p className="text-center mb-6">If you have a senior/lead full stack, front end, or back end position, throw it my way! I&apos;m down to chat about it.</p>
						<div className="text-center">
							<Button as={Link} href="mailto:tosh.goodson@gmail.com" target="_blank">Say Hello</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center text-sm leading-relaxed mb-8">
				<div><Link className="text-inherit border-stone-400/0 hover:border-stone-400/50" href="https://github.com/toshgoodson/tosh.dev" target="_blank"><span className="font-emoji">🛠️</span> Built by Tosh Goodson <span className="font-emoji">🛠️</span></Link></div>
				<div>Design inspired by <Link href="https://brittanychiang.com/" target="_blank">brittanychiang.com</Link></div>
			</div>
		</main>
	)
}
