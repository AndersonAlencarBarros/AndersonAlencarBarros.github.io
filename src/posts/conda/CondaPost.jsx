import React from "react";

import { condaHTML } from "./conda.js"; 

function CondaPost() {
  const HtmlToReactParser = require("html-to-react").Parser;
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(condaHTML);

	return (
		<div>
			{reactElement}
		</div>
	);
}

export default CondaPost;
