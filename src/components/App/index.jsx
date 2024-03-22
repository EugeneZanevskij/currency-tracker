import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppLayout from "../../layouts/AppLayout";
import NAVBAR from "../../constants/nav";
import ROUTES from "../../constants/routes";
import NotFound from "../../pages/Notfound";
import THEME from "../../constants/themes";

function App() {
	return (
		<ThemeProvider theme={THEME.light}>
			<Routes>
				<Route element={<AppLayout />}>
					{Object.values(NAVBAR).map((item) => {
						return (
							<Route
								key={item.link}
								path={item.link}
								element={<item.element />}
							/>
						);
					})}
				</Route>
				<Route path={ROUTES.NOTFOUND} element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
