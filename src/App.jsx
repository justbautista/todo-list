import { useEffect } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import api from "./helpers/axiosConfig"
import WelcomePage from "./pages/WelcomePage"

export default function App() {

	return (
        <WelcomePage />
	)
}
