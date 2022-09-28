import React from "react";

import { mineracaoHTML } from "./mineracao"; 

function MineracaoPost() {
	const HtmlToReactParser = require("html-to-react").Parser;
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(mineracaoHTML);

	return <div>{reactElement}</div>;
}

export default MineracaoPost;
