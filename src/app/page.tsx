import { Link } from '@/components/Link'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const SectionHeader: FC<PropsWithChildren<{id: string}>> = ({id, children}) => {
	return (
		<div id={id} className="flex items-center gap-4 mb-8">
			<h2 className="text-3xl font-semibold"><span className="text-rose-500 font-mono">#</span> {children}</h2>
			<hr className="border-t border-stone-700 grow"/>
		</div>
	)
}

// const photoStyle = `
// sepia(1) hue-rotate(45deg) saturate(2) contrast(1.2) brightness(1.1)
// `

const photoStyle = `
	w-full
	[filter:sepia(1)_hue-rotate(42deg)_saturate(2)_contrast(1.2)]
	hover:filter-none
	transition duration-500 ease-in-out
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
					<Image className={photoStyle} src="/tosh.jpg" alt="Headshot of Tosh Goodson" width={200} height={200}/>
				</div>
			</div>
			
			<div>
				<SectionHeader id="experience">Experience</SectionHeader>
			</div>

			<div className="text-center text-sm leading-relaxed mb-8">
				<div><Link className="text-inherit border-stone-400/0 hover:border-stone-400/50" href=""><span className="font-emoji">🛠️</span> Built by Tosh Goodson <span className="font-emoji">🛠️</span></Link></div>
				<div>Design inspired by <Link href="https://brittanychiang.com/" target="_blank">brittanychiang.com</Link></div>
			</div>
		</main>
	)
}
