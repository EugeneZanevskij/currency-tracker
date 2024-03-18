import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<>
			{/* <Header /> */}
			<Outlet />
		</>
	);
}

export default AppLayout;
