import React from "react";

// Geist
import { Text, Grid, Card } from "@geist-ui/core";

// Router
import { Link } from "react-router-dom";
import { POSTS } from "../assets/posts";

const Home = () => {
	// const listPosts = POSTS.map((post, index) => {
	// 	console.log(post)
	// 	return (
	// 		<Grid md={12} sm={24} justify="center" key={index}>
	// 			<Link to={post.param}>
	// 				<Card width="100%" hoverable>
	// 					<Text h4 my={0}>
	// 						{post.title}
	// 					</Text>
	// 					<Text>{post.description}</Text>
	// 				</Card>
	// 			</Link>
	// 		</Grid>
	// 	);
	// });

	return (
		<div>
			<Text h3>Artigos, anotações, códigos e tudo mais...</Text>

			<Grid.Container gap={1.5}>
				{/* <Grid md={12} sm={24} justify="center">
					<Card width="100%" hoverable>
						<Text h4 my={0}>
							Java Básico: uma visão geral
						</Text>
						<Text>
							Anotações do curso de Java do Inter Java Bootcamp.
						</Text>
					</Card>
				</Grid>
				<Grid md={12} sm={24} justify="center">
					<Card width="100%">
						<Link to>
							<Text h4 my={0}>
								Trabalhando com Ambientes Virtuais 🐍
							</Text>
							<Text>
								Gerenciando Ambientes virtuais em Conda e
								VirtualEnv
							</Text>
						</Link>
					</Card>
				</Grid> */}
				{/* {listPosts} */}
			</Grid.Container>
		</div>
	);
};

export default Home;
