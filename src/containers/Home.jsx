import React from "react";

// Geist
import { Text, Grid, Card } from "@geist-ui/core";

// Router
import { Link } from "react-router-dom";

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
