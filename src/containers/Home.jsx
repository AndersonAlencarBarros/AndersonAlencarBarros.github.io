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
						<Link
							to="/post/linux-introducao"
							className="text-reset"
						>
							<Text h4 my={0}>
								Linux: Introdução ao sistema operacional 
							</Text>
							<Text>
								Conceitos e comandos básicos do Linux.
							</Text>
						</Link>
					</Card>
				</Grid>

				<Grid md={12} sm={24} justify="center">
					<Card width="100%" hoverable>
						<Link
							to="/post/trabalhando-com-ambientes-virtuais"
							className="text-reset"
						>
							<Text h4 my={0}>
								Trabalhando com Ambientes Virtuais 🐍
							</Text>
							<Text>
								Gerenciando Ambientes virtuais em Conda e
								VirtualEnv
							</Text>
						</Link>
					</Card>
				</Grid>
			</Grid.Container>
		</div>
	);
};

export default Home;
