import React from "react";

// Geist
import { Text } from "@geist-ui/core";

function About() {
	return (
		<>
			<Text h1 className="fs-1">
				Sobre
			</Text>

			<section className="container fs-5 col-sm-6">
				<Text p>
					Pernambucano, graduando em Engenharia da Computação e
					desenvolvedor, curioso, introvertido e fã dos Senhor dos
					Anéis.
				</Text>

				<Text p>
					Interessado em Desenvolvimento em Back-end, Chatbots,
					Inteligência Artificial, Ciência de Dados e Engenharia de
					Dados, Linux e IOT.
				</Text>
			</section>

			<section className="container display-4">
				<div className="my-4">
					<Text h3>Python</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-python-plain-wordmark colored"></i>
						</div> 
						<div className="col-4 col-md-1">
							<i className="devicon-django-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-anaconda-original-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-numpy-original-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-pandas-original-wordmark colored"></i>
						</div>
						
					</div>
				</div>

				<div className="my-4">
					<Text h3>Desenvolvimento Web</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-javascript-plain colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-html5-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-css3-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-react-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-redux-original colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-materialui-plain colored"></i>
						</div>
					</div>
				</div>

				<div className="my-4">
					<Text h3>Java</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-java-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-spring-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-gradle-plain-wordmark colored"></i>
						</div>
					</div>
				</div>

				<div className="my-4">
					<Text h3>Linux e C/C++ </Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-linux-plain colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-c-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-cplusplus-plain-wordmark colored"></i>
						</div>
					</div>
				</div>

				<div className="my-4">
					<Text h3>Git e Github</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-git-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-github-original colored"></i>
						</div>
					</div>
				</div>

				<div className="my-4">
					<Text h3>Markdown e LateX</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-markdown-original colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-latex-original colored"></i>
						</div>
					</div>
				</div>

				<div className="my-4">
					<Text h3>Banco de Dados e Cloud Computing</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-postgresql-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-mysql-plain-wordmark colored"></i>
						</div>
						<div className="col-4 col-md-1">
							<i className="devicon-sqlite-plain-wordmark colored"></i>
						</div>
            <div className="col-4 col-md-1">
							<i className="devicon-heroku-original-wordmark colored"></i>
						</div>
					</div>
				</div>

				<div className="my-4">
					<Text h3>Ferramentas</Text>
					<div className="row">
						<div className="col-4 col-md-1">
							<i className="devicon-vscode-plain-wordmark colored"></i>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
