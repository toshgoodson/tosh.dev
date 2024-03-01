import NextLink from 'next/link'
import { redirect } from 'next/navigation'

const RESUME_PATH = '/toshiro-goodson-resume-v2.0.0.pdf'

export default function Resume() {
	redirect(RESUME_PATH)

	const redirectUrl = `https://tosh.dev${RESUME_PATH}`

	return (
		<main>
			Redirecting to <NextLink href={RESUME_PATH}><a>{redirectUrl}</a></NextLink>
		</main>
	)
}