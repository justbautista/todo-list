import {
	ClerkProvider,
	SignedIn,
	SignedOut,
} from "@clerk/clerk-react"
import ProtectedPage from "./pages/ProtectedPage"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import ProtectedPage2 from "./pages/ProtectedPage2"
import PublicPage from "./pages/PublicPage"

export default function App() {

	return (
		<Router>
			<ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUB_KEY} >
				<SignedIn>
					<Routes>
						<Route path="/" element={<ProtectedPage />} />
						<Route path="/two" element={<ProtectedPage2 />} />
					</Routes>
				</SignedIn>
				<SignedOut>
					<Routes>
                        <Route path="/" element={<PublicPage />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</SignedOut>
			</ClerkProvider>
		</Router>
	)
}
