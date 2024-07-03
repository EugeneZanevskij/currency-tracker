import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "@components/App";
import { AppThemeProvider } from "@store/index";
import "mapbox-gl/dist/mapbox-gl.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppThemeProvider>
				<App />
			</AppThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
