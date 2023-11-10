import { SignedIn, SignedOut } from "@clerk/clerk-react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import DashboardPage from "./pages/DashboardPage"

export default function App() {
	return (
		<Router>
			<SignedIn>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
				</Routes>
			</SignedIn>
			<SignedOut>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</SignedOut>
		</Router>
	)
}
