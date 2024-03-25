import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "@store/index";
import { NAVBAR } from "../../constants/nav";
import {
	Logotype,
	NavLinksContainer,
	NavbarContainer,
	SwitchContainer,
} from "./styled";
import logo from "../../assets/icons/logo.svg";

export function Navbar() {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<NavbarContainer>
			<Logotype src={logo} alt="logo" />
			<NavLinksContainer>
				{Object.entries(NAVBAR).map(([key, { link }]) => (
					<li key={key}>
						<NavLink to={link}>{key}</NavLink>
					</li>
				))}
			</NavLinksContainer>
			<SwitchContainer onClick={toggleTheme}>THEME</SwitchContainer>
		</NavbarContainer>
	);
}
