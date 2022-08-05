import React, { useState } from "react";

// Geist
import { Page, Spacer } from "@geist-ui/core";
 
// Componentes
import Gaveta from "../components/NavBar/Gaveta";
import MenuDesktop from "../components/NavBar/MenuDesktop";
import MenuMobile from "../components/NavBar/MenuMobile";

function NavBar() {
	const [visible, setVisible] = useState(false);

	return (
		<Page.Header className="">
			<Gaveta visible={visible} setVisible={setVisible} />

			<Spacer h={1}/>
            <MenuDesktop />
			<MenuMobile setVisible={setVisible} />
			
		</Page.Header>
	);
}

export default NavBar;
