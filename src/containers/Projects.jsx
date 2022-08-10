import React from "react";

// Geist
import { Text, Grid, Card } from "@geist-ui/core";

function Projects() {
	return (
		<div>
			<Text h1 className="fs-1">
				Projetos & Experiências
			</Text>

			<Grid.Container gap={1.5} justify="center" className="mt-4">
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>Book Store API</Text>
						<Text>
							Desenvolvimento de uma simples API REST para uma
							Livraria usando Java, Spring Boot e Postman. Projeto desenvolvido a partir do Inter Java Bootcamp.
						</Text>

						<Card.Footer disableAutoMargin>
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
							Aplicação dos conceitos de Inteligência Artificial, tais como Random Forest, Redes Neurais, além de pré processamento dos dados e avaliação de desempenho.
						</Text>

						<Card.Footer disableAutoMargin>
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
							Aplicação para calcular sua Pegada de Carbono. Projeto realizado para o Programa Escola Verde.
						</Text>

						<Card.Footer disableAutoMargin>
							<a href="https://escolaverde.org/pevpegada/">Ver</a>
						</Card.Footer>
					</Card>
				</Grid>
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>Montador</Text>
						<Text>
							Desenvolvimento de um montador (assembler) para uma
							linguagem de montagem de uma CPU RISC simples.
						</Text>

						<Card.Footer disableAutoMargin>
							<a href="https://github.com/AndersonAlencarBarros/Montador">
								Ver no Github
							</a>
						</Card.Footer>
					</Card>
				</Grid>
				<Grid md={12} sm={24}>
					<Card hoverable width="100%" height="100%">
						<Text h4>Ramon</Text>
						<Text>
							Desenvolvimento de um ChatBot usando DialogFlow,
							Django e comunicação via Webhook.
						</Text>

						<Card.Footer className="h-25">
							<a href="https://github.com/AndersonAlencarBarros/Ramon">
								Ver no Github
							</a>
						</Card.Footer>
					</Card>
				</Grid>
			</Grid.Container>
		</div>
	);
}

export default Projects;
