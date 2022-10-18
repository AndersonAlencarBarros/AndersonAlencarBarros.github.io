import React from "react";

// Geist
import { Text, Grid, Button, Card } from "@geist-ui/core";
import Menu from "@geist-ui/icons/menu";
import Github from "@geist-ui/icons/github";
import Linkedin from "@geist-ui/icons/linkedin";

// Router
import { Link } from "react-router-dom";

function MenuMobile({ setVisible }) {
	return (
		<Grid.Container xs={24} md={0}>
			<div className="d-flex align-items-baseline justify-content-between">
				<div>
					<Grid.Container justify="center">
						<Grid>
							<a
								href="https://github.com/AndersonAlencarBarros"
								target="_blank"
								rel="noreferrer"
							>
								<Card hoverable style={{ border: "none" }}>
									<Github />
								</Card>
							</a>
						</Grid>

						<Grid>
							<a
								href="https://www.linkedin.com/in/alencarbarros"
								target="_blank"
								rel="noreferrer"
							>
								<Card hoverable style={{ border: "none" }}>
									<Linkedin />
								</Card>
							</a>
						</Grid>
					</Grid.Container>
				</div>

				<div>
					<Grid>
						<Text h5>Anderson de Alencar</Text>
					</Grid>
				</div>
			</div>
		</Grid.Container>
	);
}

export default MenuMobile;
