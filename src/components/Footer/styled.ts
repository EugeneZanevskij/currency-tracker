import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 85%;
	margin: 2rem auto;
	gap: 1.5rem;
`;

export const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FooterInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	max-width: 30rem;
`;

export const FooterTitleContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const FooterImage = styled.img`
	display: block;
	width: 2.5rem;
`;

export const FooterTitle = styled.h3`
	text-align: right;
	font-size: 1.625rem;
	background: linear-gradient(
		90deg,
		${({ theme }) => theme.green} 1%,
		${({ theme }) => theme.yellowish} 70%,
		${({ theme }) => theme.lightGreen} 99%
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const FooterSubtitle = styled.p`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.textColor};
`;

export const Copyright = styled.p`
	text-align: center;
	color: ${({ theme }) => theme.subTextColor};
	font-size: 1.5rem;
	padding-top: 3rem;
	padding-bottom: 2rem;
`;
