import React from "react";

// Geist
import { User } from "@geist-ui/core";
import Github from "@geist-ui/icons/github";
import Linkedin from "@geist-ui/icons/linkedin";

function MenuDesktop() {
	return (
		<>
			<div className="row">
				<div className="col d-flex justify-content-center">
					<User
						src="https://avatars.githubusercontent.com/u/41194545?v=4"
						name="Anderson de Alencar Barros"
					></User>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="row align-items-center mt-1">
					<div className="col-3 col-md-3">
						<User.Link href="https://github.com/AndersonAlencarBarros">
							<Github />
						</User.Link>
					</div>

					<div className="col-3 col-md-3">
						<User.Link href="https://www.linkedin.com/in/alencarbarros">
							<Linkedin />
						</User.Link>
					</div>

					<div className="col-3 col-md-3">
						<User.Link href="https://dev.to/andersonalencarbarros">
							dev.to
						</User.Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default MenuDesktop;
