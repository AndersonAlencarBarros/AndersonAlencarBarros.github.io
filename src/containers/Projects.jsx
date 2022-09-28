import React from "react";

// Geist
import { Text, Grid, Card, Image } from "@geist-ui/core";
import PEVPegada from "../assets/img/PEVPEgada.png";
import bookstore from "../assets/img/bookstore_post_book.gif";
import ramon from "../assets/img/Ramon-Arquitetura.png";
import assembler from "../assets/img/assembler.png";

function Projects() {
	return (
		<div>
			<Text h1 className="fs-1">
				Projetos & Experiências
			</Text>

			<div className="container mt-4">
				<div className="row">
					<div className="col-12 col-md-6 mb-4">
						<Card hoverable>
							<Image
								src={bookstore}
								height="300px"
								width="400px"
								draggable={false}
							/>
							<Text h4>Book Store API</Text>
							<Text>
								Desenvolvimento de uma simples API REST para uma
								Livraria usando Java, Spring Boot e Postman.
								Projeto desenvolvido a partir do Inter Java
								Bootcamp.
							</Text>

							<Card.Footer disableAutoMargin>
								<a
									href="https://github.com/AndersonAlencarBarros/bookstoreAPI"
									target={"_blank"}
								>
									Ver no Github
								</a>
							</Card.Footer>
						</Card>
					</div>

					<div className="col-12 col-md-6 mb-4">
						<Card hoverable>
							<Text h4>Inteligência Computacional</Text>
							<Text>
								Aplicação dos conceitos de Inteligência
								Artificial, tais como Random Forest, Redes
								Neurais, além de pré processamento dos dados e
								avaliação de desempenho.
							</Text>

							<Card.Footer disableAutoMargin>
								<a
									href="https://github.com/AndersonAlencarBarros/IC"
									target={"_blank"}
								>
									Ver no Github
								</a>
							</Card.Footer>
						</Card>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-md-6 mb-4">
						<Card hoverable>
							<Image
								src={PEVPegada}
								height="200px"
								width="200px"
								draggable={false}
							/>
							<Text h4>PEV Pegada</Text>
							<Text>
								Aplicação para calcular sua Pegada de Carbono.
								Projeto realizado para o Programa Escola Verde.
							</Text>

							<Card.Footer disableAutoMargin>
								<a
									href="https://escolaverde.org/pevpegada/"
									target={"_blank"}
								>
									Ver
								</a>
							</Card.Footer>
						</Card>
					</div>
					<div className="col-12 col-md-6 mb-4">
						<Card hoverable>
							<Image
								src={assembler}
								height="150px"
								width="400px"
								draggable={false}
							/>
							<Text h4>Montador</Text>
							<Text>
								Desenvolvimento de um montador (assembler) para
								uma linguagem de montagem de uma CPU RISC
								simples.
							</Text>

							<Card.Footer disableAutoMargin>
								<a
									href="https://github.com/AndersonAlencarBarros/Montador"
									target={"_blank"}
								>
									Ver no Github
								</a>
							</Card.Footer>
						</Card>
					</div>
				</div>

				<div className="row">
					<div className="col-12 col-md-6 mb-4">
						<Card hoverable>
							<Image
								src={ramon}
								height="150px"
								width="400px"
								draggable={false}
							/>
							<Text h4>Ramon</Text>
							<Text>
								Desenvolvimento de um ChatBot usando DialogFlow,
								Django e comunicação via Webhook.
							</Text>

							<Card.Footer className="h-25">
								<a
									href="https://github.com/AndersonAlencarBarros/Ramon"
									target={"_blank"}
								>
									Ver no Github
								</a>
							</Card.Footer>
						</Card>
					</div>
					<div className="col-12 col-md-6 mb-4">
						<Card hoverable>
							<Text h4>SGIO</Text>
							<Text type="secondary">
								Sistema de Diagnóstico do Grau de Inovação das
								Organizações
							</Text>
							<Text>
								Projeto de pesquisa para desenvolvimento de uma
								metodologia e plataforma para medir o grau de
								inovação das organizações.
							</Text>

							{/* <Card.Footer className="h-25">
								<a href="https://github.com/AndersonAlencarBarros/Ramon">
									Ver no Github
								</a>
							</Card.Footer> */}
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
