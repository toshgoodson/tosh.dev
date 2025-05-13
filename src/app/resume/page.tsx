import { redirect } from 'next/navigation'

export default function Resume() {
	if (process.env.NEXT_PUBLIC_RESUME_URL == null) throw new Error('Resume URL is not defined')
	redirect(`https://docs.google.com/viewer?url=${encodeURIComponent(process.env.NEXT_PUBLIC_RESUME_URL)}`)
}