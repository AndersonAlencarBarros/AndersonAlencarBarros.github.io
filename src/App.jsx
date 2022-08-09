import React from "react";

// Geist
import Page from "@geist-ui/core/esm/page/page";

// Containers
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Projects from "./containers/Projects";
import NavBar from "./containers/NavBar";
import CondaPost from "./posts/conda/CondaPost";
import LinuxIntroducaoPost from "./posts/LinuxIntroducao/LinuxIntroducaoPost";
import MineracaoPost from "./posts/mineracao/MineracaoPost";

// CSS
import "./assets/style.css";
import "./assets/typora-css.css";

// React Router
import { Route, Routes } from "react-router-dom";

// className="p-0 min-vw-75"
// col-12 col-md-6
// className="p-1 m-auto min-vw-100"
// style={{minWidth: "90vw", maxWidth: "50vw", padding: "0px", margin: "0px"}}

function App() {
	return (
		<Page width="100%">
			<NavBar />

			<Page.Content>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/post/trabalhando-com-ambientes-virtuais" element={<CondaPost />} />
					<Route path="/post/linux-introducao" element={<LinuxIntroducaoPost />} />
					<Route path="/post/mineracao-de-dados" element={<MineracaoPost />} />
				</Routes>
			</Page.Content>

			<Footer />
		</Page>
	);
}

export default App;
