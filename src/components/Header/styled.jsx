import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 4fr 3fr;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	background: linear-gradient(
		252.93deg,
		${({ theme }) => theme.emeraldGreen} 11.77%,
		${({ theme }) => theme.lightBlack} 91.12%
	);
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const HeaderTitle = styled.h1`
	text-align: right;
	font-size: 4.75rem;
	background: linear-gradient(
		90deg,
		${({ theme }) => theme.green} 1%,
		${({ theme }) => theme.yellowish} 70%,
		${({ theme }) => theme.lightGreen} 99%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const HeaderSubtitle = styled.p`
	font-size: 1.625rem;
	color: ${({ theme }) => theme.lightGray};
	opacity: 0.8;
	width: 18.875rem;
	text-align: center;
`;

export const Logotype = styled.img`
	display: block;
	width: 18.75rem;
`;
