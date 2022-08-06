import React from "react";

import Page from "@geist-ui/core/esm/page/page";
import { Text, Spacer } from "@geist-ui/core";

function Footer() {
	return (
		<Page.Footer>
			<Spacer h={2} />
			<div className="d-flex justify-content-center mb-1">
				<Text small i>
					Desenvolvido usando{" "}
					<a href="https://pt-br.reactjs.org/">React</a> e{" "}
					<a href="https://geist-ui.dev/en-us">Geist</a>.
				</Text>
			</div>
		</Page.Footer>
	);
}

export default Footer;
