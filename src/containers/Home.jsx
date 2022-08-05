import React from "react";

// Geist
import { Text, Grid, Card } from "@geist-ui/core";

// Router
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Text h3>Artigos, anotações, códigos e tudo mais...</Text>

			<Grid.Container gap={1.5}>
				<Grid md={12} sm={24} justify="center">
					<Card width="100%" hoverable>
						<Text h4 my={0}>
							Java Básico: uma visão geral
						</Text>
						<Text>
							Anotações do curso de Java do Inter Java Bootcamp.
						</Text>
					</Card>
				</Grid>
				<Grid md={12} sm={24} justify="center">
					<Card width="100%" type="dark">
						<Text h4 my={0}>
							Geist UI React
						</Text>
						<Text>Modern and minimalist React UI library.</Text>
					</Card>
				</Grid>
				<Grid md={12} sm={24} justify="center">
					<Card width="100%" type="dark">
						<Text h4 my={0}>
							Geist UI React
						</Text>
						<Text>Modern and minimalist React UI library.</Text>
					</Card>
				</Grid>
				<Grid md={12} sm={24} justify="center">
					<Card width="100%" type="dark">
						<Text h4 my={0}>
							Geist UI React
						</Text>
						<Text>Modern and minimalist React UI library.</Text>
					</Card>
				</Grid>
			</Grid.Container>
		</div>
	);
};

export default Home;
