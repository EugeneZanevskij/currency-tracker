import React from "react";
import {
	HeaderContainer,
	HeaderSubtitle,
	HeaderTitle,
	Logotype,
	TextContainer,
} from "./styled";
import logo from "../../assets/icons/logo.svg";

function Header() {
	return (
		<HeaderContainer>
			<TextContainer>
				<HeaderTitle>Modsen Currency Tracker</HeaderTitle>
				<HeaderSubtitle>
					Quotes for the dollar and other international currencies.
				</HeaderSubtitle>
			</TextContainer>
			<Logotype src={logo} alt="logo" />
		</HeaderContainer>
	);
}

export default Header;
