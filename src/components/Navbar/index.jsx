import React from "react";
import { NavLink } from "react-router-dom";
import NAVBAR from "../../constants/nav";
import {
	Logotype,
	NavLinksContainer,
	NavbarContainer,
	SwitchContainer,
} from "./styled";
import logo from "../../assets/icons/logo.svg";

function Navbar() {
	return (
		<NavbarContainer>
			<Logotype src={logo} alt="logo" />
			<NavLinksContainer>
				{Object.keys(NAVBAR).map((key) => {
					const { link } = NAVBAR[key];
					return (
						<li key={key}>
							<NavLink to={link}>{key}</NavLink>
						</li>
					);
				})}
			</NavLinksContainer>
			<SwitchContainer>1</SwitchContainer>
		</NavbarContainer>
	);
}

export default Navbar;
