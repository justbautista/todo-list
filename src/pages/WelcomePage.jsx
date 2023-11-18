export default function WelcomePage() {
	const data = {
		response_type: "code",
		client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
		redirect_uri: import.meta.env.VITE_REDIRECT_URI,
	}
	const params = new URLSearchParams(data)
	const signInUrl = `${
		import.meta.env.VITE_COGNITO_LOGIN_URL
	}?${params.toString()}`

	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<div className="flex flex-col items-center p-5">
				<h1>To Do</h1>
				<p>Do your regular to do list stuff</p>
			</div>
			<div className="flex flex-row items-center justify-center gap-5">
				<a
					className="rounded-full p-4 ring ring-blue-500"
					href={signInUrl}
				>
					Sign In
				</a>
			</div>
		</div>
	)
}
