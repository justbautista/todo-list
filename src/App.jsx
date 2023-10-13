import {
	ClerkProvider,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
} from "@clerk/clerk-react"
import ProtectedPage from "./pages/ProtectedPage"
import PublicPage from "./pages/PublicPage"

export default function App() {

	return (
		<ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUB_KEY}>
			<SignedIn>
				<ProtectedPage />
			</SignedIn>
			<SignedOut>
				<RedirectToSignIn />
			</SignedOut>
		</ClerkProvider>
	)
}
