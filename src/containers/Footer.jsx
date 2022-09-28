import React from "react";

import Page from "@geist-ui/core/esm/page/page";
import { Text, Divider, Spacer } from "@geist-ui/core";

function Footer() {
	return (
		<>
			<Page.Footer width="90%">
				{/* <Divider type="default" /> */}
				<Text small i className="d-flex justify-content-center mb-2">
					&copy; Anderson Alencar 2022
				</Text>
			</Page.Footer>
		</>
	);
}

export default Footer;
