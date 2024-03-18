import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";
import NAVBAR from "../../constants/nav";
import ROUTES from "../../constants/routes";
import NotFound from "../../pages/Notfound";

function App() {
	return (
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
	);
}

export default App;
