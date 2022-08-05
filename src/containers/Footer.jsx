import React from "react";
import Page from "@geist-ui/core/esm/page/page";
import { Text, Spacer } from "@geist-ui/core";

function Footer() {
	return (
		<Page.Footer>
			<Spacer h={2}/>
			<div className="d-flex justify-content-center mb-1">
				<Text small i>
					Desenvolvido por Anderson Alencar
				</Text>
			</div>
		</Page.Footer>
	);
}

export default Footer;
