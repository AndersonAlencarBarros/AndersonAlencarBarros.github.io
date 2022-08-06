import React from "react";

// Geist
import Page from "@geist-ui/core/esm/page/page";

// Containers
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Projects from "./containers/Projects";
import NavBar from "./containers/NavBar";
import Post from "./containers/Post";

// CSS
import "./assets/style.css"

// React Router
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Page className="p-5 min-vw-100">
			<NavBar />

			<Page.Content id="page-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/post/:post" element={<Post />} />
				</Routes>
			</Page.Content>

			<Footer />
		</Page>
	);
}

export default App;
