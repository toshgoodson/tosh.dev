import './globals.css'
import { PropsWithChildren } from 'react'
import { Nav } from '@/components/Nav'
import localFont from '@next/font/local'

const dungeonChunk = localFont({
	src: '../fonts/DungeonChunk.woff2',
	style: 'normal',
	weight: '400',
	display: 'swap',
	adjustFontFallback: false,
	variable: '--font-dungeon-chunk',
})

const robotoMono = localFont({
	src: '../fonts/RobotoMono-VariableFont_wght.woff2',
	style: 'normal',
	weight: '100 700',
	display: 'swap',
	adjustFontFallback: false,
	variable: '--font-roboto-mono',
})

const inter = localFont({
	src: '../fonts/Inter.var.woff2',
	style: 'oblique 0deg 10deg',
	weight: '100 900',
	display: 'swap',
	adjustFontFallback: false,
	variable: '--font-inter',
})


export default function RootLayout({children}: PropsWithChildren) {
	return (
		<html lang="en" className={`${dungeonChunk.variable} ${robotoMono.variable} ${inter.variable}`}>
			<head />
			<body className="bg-stone-900 text-stone-400 rfs:text-xl overflow-auto">
				<Nav/>
				<div className="container mx-auto max-w-4xl px-4">
					{children}
				</div>
			</body>
		</html>
	)
}
