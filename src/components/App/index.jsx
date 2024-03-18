import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<h1>Home</h1>} />
			</Route>
		</Routes>
	);
}

export default App;
