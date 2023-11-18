import { createContext, useContext, useEffect, useState } from "react"
import api from "../helpers/axiosConfig"

const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [username, setUsername] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authLoading, setAuthLoading] = useState(true)

	useEffect(() => {
		const checkIfLoggedIn = async () => {
			try {
				const urlParams = new URLSearchParams(window.location.search)
				const code = urlParams.get("code")

				if (code) {
					await api.get("/auth/tokens")
				} else {
					const response = await api.get("/auth/verify")
					console.log(response)
				}
				setIsLoggedIn(true)
			} catch (err) {
				console.error(err)
				setIsLoggedIn(false)
			} finally {
				setAuthLoading(false)
			}
		}

		checkIfLoggedIn()
	}, [])

	return (
		<AuthContext.Provider
			value={{ username, isLoggedIn, authLoading, setUsername }}
		>
			{children}
		</AuthContext.Provider>
	)
}
