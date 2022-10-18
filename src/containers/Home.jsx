import React from "react";

import TextAbout from "../components/TextAbout";
import Skills from "../components/Skills";
import Projects from "./Projects";

const Home = () => {
	return (
		<>
			<TextAbout />
			<Skills />
			<Projects />
		</>
	);
};

export default Home;
