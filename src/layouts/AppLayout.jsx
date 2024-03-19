import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Global from "../styled";
import Header from "../components/Header";
import TimeUpdate from "../components/TimeUpdate";
import Footer from "../components/Footer";

function AppLayout() {
	return (
		<>
			<Global />
			<Navbar />
			<Header />
			<TimeUpdate />
			<Outlet />
			<Footer />
		</>
	);
}

export default AppLayout;
