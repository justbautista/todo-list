import { SignInButton } from "@clerk/clerk-react"

export default function LandingPage() {
	return (
		<div className="flex flex-col h-screen items-center justify-center">
			<div className="flex flex-col items-center p-5">
				<h1>To Do</h1>
				<p>Do your regular to do list stuff</p>
			</div>
			<div className="flex flex-row items-center justify-center gap-5">
				<SignInButton className="rounded-full p-4 ring ring-blue-500">
					Sign In
				</SignInButton>
			</div>
		</div>
	)
}
