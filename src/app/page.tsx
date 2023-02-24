import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<main className="rfs:mt-8">
			<h1>
				<div className="text-amber-400 font-mono mb-2 rfs:text-[22px]">Hello world, you can call me</div>
				<div className="text-stone-100 rfs:text-[80px] font-extrabold leading-tight">Tosh Goodson.</div>
			</h1>
			<h2 className="md:rfs:text-[80px] rfs:text-[60px] font-extrabold leading-tight mb-4">Coding is what I love.</h2>
			<div className="md:max-w-[70%] leading-relaxed">I&apos;m a full stack software engineer focused on building robust and performant web apps. Presently, I&apos;m working on e-commerce shopping experiences at <Link className="text-amber-300 underline" href="https://benefytt.com/" target="_blank">Benefytt.com</Link>.</div>
		</main>
	)
}
