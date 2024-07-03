import {
	Copyright,
	FooterContainer,
	FooterImage,
	FooterInfo,
	FooterSubtitle,
	FooterTitle,
	FooterTitleContainer,
	FooterWrapper,
} from "./styled";
import logo from "@assets/icons/logo.svg";
import FOOTER_DATA from "@constants/footer";
import { FooterLinks } from "@components/Footer/FooterLinks";

const { title, subtitle, footer, copyright } = FOOTER_DATA;
export function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterInfo>
					<FooterTitleContainer>
						<FooterImage src={logo} alt="logo" />
						<FooterTitle>{title}</FooterTitle>
					</FooterTitleContainer>
					<FooterSubtitle>{subtitle}</FooterSubtitle>
				</FooterInfo>
				{footer.map((footerItem) => {
					return (
						<FooterLinks
							key={footerItem.title}
							title={footerItem.title}
							links={footerItem.links}
						/>
					);
				})}
			</FooterWrapper>
			<Copyright>{copyright}</Copyright>
		</FooterContainer>
	);
}
