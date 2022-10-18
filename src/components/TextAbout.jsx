import React from "react";
import { Text } from "@geist-ui/core";

function TextAbout() {
	return (
		<>
			<section className="container-fluid d-flex justify-content-center">
				{/* <Text h2>
					Sobre
				</Text> */}

				<div className="col-12 col-md-4 ">
					<Text blockquote>
						Pernambucano, graduando em Engenharia da Computação pela UNIVASF e desenvolvedor, curioso e fã dos Senhor dos Anéis.
					</Text>

					<Text blockquote>
						Interessado em Desenvolvimento em Back-end, Chatbots, Inteligência Artificial, Ciência de Dados e Engenharia de Dados, Linux e IOT.
					</Text>
				</div>
			</section>
		</>
	);
}

export default TextAbout;
