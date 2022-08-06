import React from "react";

import { condaHTML } from "../posts/conda.js";
import "../assets/typora-css.css";
import { POSTS } from "../assets/posts.js";

function Post() {
  const HtmlToReactParser = require("html-to-react").Parser;
	const htmlToReactParser = new HtmlToReactParser();
	const reactElement = htmlToReactParser.parse(condaHTML);

	return (
		<>
			{reactElement}
		</>
	);
}

export default Post;
