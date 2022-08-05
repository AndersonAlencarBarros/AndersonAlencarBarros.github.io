import React from "react";

// Geist
import { Text, Grid, Card } from "@geist-ui/core";

function Projects() {
	return (
		<div>
			<Text h1 className="fs-1">
				{" "}
				Projetos & Experiências{" "}
			</Text>

			<Grid.Container gap={1} justify="center">
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>Book Store API</Text>
						<Text>
							Desenvolvimento de uma simples API REST para uma
							Livraria.
						</Text>

						<Card.Footer>
							<a href="https://github.com/AndersonAlencarBarros/bookstoreAPI">
								Ver no Github
							</a>
						</Card.Footer>
					</Card>
				</Grid>
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>Inteligência Computacional</Text>
						<Text>
							Aplicação dos conceitos aprendidos em Inteligência
							Artificial
						</Text>

						<Card.Footer>
							<a href="https://github.com/AndersonAlencarBarros/IC">
								Ver no Github
							</a>
						</Card.Footer>
					</Card>
				</Grid>
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>PEV Pegada</Text>
						<Text>
							Aplicação para calcular sua Pegada de Carbono
						</Text>

						<Card.Footer>
							<a href="https://escolaverde.org/pevpegada/">Ver</a>
						</Card.Footer>
					</Card>
				</Grid>
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>PEV Pegada</Text>
						<Text>
							Aplicação para calcular sua Pegada de Carbono
						</Text>

						<Card.Footer>
							<a href="https://escolaverde.org/pevpegada/">Ver</a>
						</Card.Footer>
					</Card>
				</Grid>
			</Grid.Container>
		</div>
	);
}

export default Projects;
