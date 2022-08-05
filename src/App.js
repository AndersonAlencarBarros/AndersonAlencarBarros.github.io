import React from "react";

// Geist
import Page from "@geist-ui/core/esm/page/page";

// Containers
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Projects from "./containers/Projects";
import NavBar from "./containers/NavBar";

// CSS
import "./assets/style.css"

// React Router
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Page>
			<NavBar />

			<Page.Content>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Page.Content>

			<Footer />
		</Page>
	);
}

export default App;
