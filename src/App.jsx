import React from "react";

// Geist
import Page from "@geist-ui/core/esm/page/page";

// Containers
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import NavBar from "./containers/NavBar";

// CSS
import "./assets/style/style.css";

// React Router
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Page width="100%">
			<NavBar />

			<Page.Content>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Page.Content>

			<Footer />
		</Page>
	);
}

export default App;
