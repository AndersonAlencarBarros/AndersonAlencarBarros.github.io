import React from "react";

// Geist
import { Text, Grid, Card, Display } from "@geist-ui/core";
import Github from "@geist-ui/icons/github";
import Linkedin from "@geist-ui/icons/linkedin";

// Router
import { Link } from "react-router-dom";

function MenuDesktop() {
	return (
		<Grid.Container justify="center" xs={0} md={24}>
			<Grid.Container justify="center">
				<Link to="/" className="text-reset">
					<Grid>
						<Text h2>Anderson de Alencar Barros</Text>
					</Grid>
				</Link>
			</Grid.Container>

			<Grid.Container gap={1} justify="center">
				<Grid>
					<a
						href="https://github.com/AndersonAlencarBarros"
						target="_blank"
						rel="noreferrer"
					>
						<Card hoverable style={{ border: "none" }}>
							<Github />
						</Card>
					</a>
				</Grid>

				<Grid>
					<a
						href="https://www.linkedin.com/in/alencarbarros"
						target="_blank"
						rel="noreferrer"
					>
						<Card hoverable style={{ border: "none" }}>
							<Linkedin />
						</Card>
					</a>
				</Grid>

				<Grid className="d-flex">
					<Link to="/about">
						<Card hoverable style={{ border: "none" }}>
							<Text>Sobre mim</Text>
						</Card>
					</Link>
				</Grid>

				<Grid className="d-flex">
					<Link to="/projects">
						<Card hoverable style={{ border: "none" }}>
							<Text>Projetos & Experiências</Text>
						</Card>
					</Link>
				</Grid>
			</Grid.Container>
		</Grid.Container>
	);
}

export default MenuDesktop;
