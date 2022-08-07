import React from "react";

import { condaHTML } from "./conda.js";
import "../../assets/typora-css.css";

function CondaPost() {
  const HtmlToReactParser = require("html-to-react").Parser;
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(condaHTML);

	return (
		<>
			{reactElement}
		</>
	);
}

export default CondaPost;
