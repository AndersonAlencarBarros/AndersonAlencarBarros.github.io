import React from "react";

import Page from "@geist-ui/core/esm/page/page";
import { Text, Divider, Spacer } from "@geist-ui/core";

function Footer() {

	return (
		<>
			<Spacer h={2} />
			<Page.Footer
				width="90%"
				className="d-flex justify-content-center text-center mb-2"
			>
				<div>
					<div>
						<Divider type="default"/>
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
