import React from "react";
import { Text } from "@geist-ui/core";

function Skills() {
	return (
		<>
			<section className="container-fluid my-5">
				<Text h2>Habilidades</Text>

				<div className="row d-flex justify-content-center">
					<div className=" mt-5 col-12 col-md-3">
						<Text h3>Linguagens</Text>

						<div>
							<div className="row mt-2">
								<Text span>Python</Text>
							</div>
							<div className="row mt-2">
								<Text span>Javascript</Text>
							</div>
							<div className="row mt-2">
								<Text span>Java</Text>
							</div>
							<div className="row mt-2">
								<Text span>SQL</Text>
							</div>
							<div className="row mt-2">
								<Text span>C++</Text>
							</div>
						</div>
					</div>

					<div className=" mt-5 col-12 col-md-3">
						<Text h3>Front-End</Text>
						<div>
							<div className="">
								<Text span>ReactJs</Text>
							</div>
							<div className="">
								<Text span>HTML</Text>
							</div>
							<div className="">
								<Text span>CSS</Text>
							</div>
						</div>
					</div>

					<div className="mt-5 col-12 col-md-3">
						<Text h3>Back-End</Text>
						<div>
							<div className="">
								<Text span>Django</Text>
							</div>
							<div className="">
								<Text span>Spring MVC</Text>
							</div>
							<div className="">
								<Text span>Fast API (interessado...)</Text>
							</div>
						</div>
					</div>
				</div>

				<div className="row d-flex justify-content-center">
					<div className="mt-5 col-12 col-md-3">
						<Text h3>Banco de Dados</Text>
						<div>
							<div className="">
								<Text span>PostgreSQL</Text>
							</div>
							<div className="">
								<Text span>MongoDB (estudando...)</Text>
							</div>
						</div>
					</div>

					<div className="mt-5 col-12 col-md-1">
						<Text h3>Ferramentas</Text>
						<div>
							<div className="">
								<Text span>Git</Text>
							</div>
							<div className="">
								<Text span>Postman</Text>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Skills;
