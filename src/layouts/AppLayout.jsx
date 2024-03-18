import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Global from "../styled";

function AppLayout() {
	return (
		<>
			<Global />
			<Navbar />
			<Outlet />
		</>
	);
}

export default AppLayout;
