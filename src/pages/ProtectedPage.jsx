import { SignOutButton } from "@clerk/clerk-react"

export default function ProtectedPage() {
	return (
		<>
			<div className="mx-auto bg-red-300">ProtectedPage</div>
			<SignOutButton />
		</>
	)
}
