import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./app.tsx"
import "./index.css"
import { ThemeProvider } from "next-themes"

const rootElement = document.getElementById("root")

if (!rootElement) {
	throw new Error("Element 'root' not found.")
}

createRoot(rootElement).render(
	<StrictMode>
		<ThemeProvider attribute={"class"} defaultTheme="light">
			<App />
		</ThemeProvider>
	</StrictMode>
)
