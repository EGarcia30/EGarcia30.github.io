import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Proyecto from "./components/Proyecto";
import Habilidades from "./components/Habilidades";

function App() {

	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const handleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<>
			<Navbar handleTheme={handleTheme} />
			<main className="bg-white/60 dark:bg-[#1e1e20]">
				<Hero />
				<Perfil />
				<Experiencia />
				<Habilidades />
				<Proyecto />
			</main>
		</>
	)
}

export default App
