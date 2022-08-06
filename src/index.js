import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Geist
import { GeistProvider, CssBaseline } from "@geist-ui/core";

// Router
import { BrowserRouter as Router } from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<GeistProvider>
			<CssBaseline />
			<Router>
				<App />
			</Router>
		</GeistProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
