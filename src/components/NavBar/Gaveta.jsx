import React from "react";

// Geist
import { Text, Drawer } from "@geist-ui/core";
import Github from "@geist-ui/icons/github";
import Linkedin from "@geist-ui/icons/linkedin";

// Router
import { Link } from "react-router-dom";

function Gaveta({ visible, setVisible }) {
	return (
		<>
			<Drawer
				placement="left"
				visible={visible}
				onClose={() => setVisible(false)}
				onContentClick={() => setVisible(false)}
				keyboard
			>
				<Drawer.Content>
					<a
						href="https://github.com/AndersonAlencarBarros"
						target="_blank"
						rel="noreferrer"
						className="text-reset"
					>
						<div className="d-flex align-items-center m-0 p-0">
							<Github className="mx-2" />
							<Text>Github</Text>
						</div>
					</a>

					<a
						href="https://www.linkedin.com/in/alencarbarros"
						target="_blank"
						rel="noreferrer"
						className="text-reset"
					>
						<div className="d-flex align-items-center m-0 p-0">
							<Linkedin className="mx-2" />
							<Text>LinkedIn</Text>
						</div>
					</a>


					<Link to="/" className="text-reset">
						<Text>Início</Text>
					</Link>

					<Link to="/about" className="text-reset">
						<Text>Sobre mim</Text>
					</Link>

					<Link to="/projects" className="text-reset">
						<Text>Projetos & Experiências</Text>
					</Link>
				</Drawer.Content>
			</Drawer>
		</>
	);
}

export default Gaveta;
