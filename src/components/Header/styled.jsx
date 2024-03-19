import styled from "styled-components";

export const HeaderContainer = styled.header`
	display: grid;
	grid-template-columns: 4fr 3fr;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	background: linear-gradient(252.93deg, #2479408a 11.77%, #121212 91.12%);
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const HeaderTitle = styled.h1`
	text-align: right;
	font-size: 4.75rem;
	background: linear-gradient(90deg, #00ce2c 1%, #aedf23 70%, #a3dc00 99%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const HeaderSubtitle = styled.p`
	font-size: 1.625rem;
	color: #d9d9d9;
	opacity: 0.8;
	width: 18.875rem;
	text-align: center;
`;

export const Logotype = styled.img`
	display: block;
	width: 18.75rem;
`;
