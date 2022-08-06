import { condaHTML } from "../posts/conda";

const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();
const condaElement = htmlToReactParser.parse(condaHTML);

export const POSTS = {
	CONDA: {
        param: 'trabalhando-com-ambientes-virtuais',
        title: 'Trabalhando com Ambientes Virtuais 🐍',
        description: 'Guia simples e rápido para com Conda e VirtualEnv.',
		element: condaElement
	},
};
