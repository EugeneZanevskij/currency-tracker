import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Global from "../styled";
import Header from "../components/Header";

function AppLayout() {
	return (
		<>
			<Global />
			<Navbar />
			<Header />
			<Outlet />
		</>
	);
}

export default AppLayout;
