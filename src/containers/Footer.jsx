import React from "react";

import Page from "@geist-ui/core/esm/page/page";
import { Text, Divider, Spacer } from "@geist-ui/core";

function Footer() {
	// width="90%"

	return (
		<>
			<Divider width="90%" />
			<Spacer h={3} />
			<Page.Footer
				width="90%"
				className="d-flex justify-content-center text-center"
			>
				<div>
					<div>
						<Text small i>
							Desenvolvido usando{" "}
							<a href="https://pt-br.reactjs.org/"> React</a> e{" "}
							<a href="https://geist-ui.dev/en-us">Geist</a>.
						</Text>
					</div>

					<div>
						<Text small i>
							&copy; Anderson Alencar 2022
						</Text>
					</div>
				</div>
			</Page.Footer>
		</>
	);
}

export default Footer;
