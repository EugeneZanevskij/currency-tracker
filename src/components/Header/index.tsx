import {
	HeaderContainer,
	HeaderSubtitle,
	HeaderTitle,
	Logotype,
	TextContainer,
} from "./styled";
import logo from "../../assets/icons/logo.svg";

export function Header() {
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
