import React from "react";

import { linuxIntroHTML } from "./linux";
import "../../assets/typora-css.css";

function LinuxIntroducaoPost() {
  const HtmlToReactParser = require("html-to-react").Parser;
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(linuxIntroHTML);

	return (
		<>
			{reactElement}
		</>
	);
}

export default LinuxIntroducaoPost;
