import React from "react";

// Geist
import {  Text, Grid, Button } from "@geist-ui/core";
import Menu from "@geist-ui/icons/menu";

// Router
import { Link } from "react-router-dom";

function MenuMobile({ setVisible }) {
	return (
		<Grid.Container xs={24} md={0}>
			<div className="d-flex align-items-baseline justify-content-between">
				<div>
					<Button
						icon={<Menu />}
						auto
						scale={1}
						onClick={() => setVisible(true)}
						style={{ border: "none" }}
					/>
				</div>

				<div>
				<Link to="/" className="text-reset">
				<Grid>
					<Text h5>Anderson de Alencar</Text>
				</Grid>
				</Link>
				</div>
			</div>
		</Grid.Container>
	);
}

export default MenuMobile;
