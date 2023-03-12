import colors from 'tailwindcss/colors'

export default function Head() {
	return (
		<>
			<title>Tosh Goodson - tosh.dev</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta name="description" content="Tosh Goodson is a full stack software engineer focused on building robust and performant web apps. Currently accepting job offers!" />
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<link rel="icon" href="/icon.svg" type="image/svg+xml" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link rel="manifest" href="/manifest.webmanifest" />
			<meta key="themeColor" name="theme-color" content={colors.amber[400]} />
		</>
	)
}
