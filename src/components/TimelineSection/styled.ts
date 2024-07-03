import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 85%;
	margin: 0 auto;
`;

export const Buttons = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 2rem;
`;

export const Button = styled.button`
	border: none;
	background-color: ${({ theme }) => theme.shadowGreen};
	color: ${({ theme }) => theme.textColor};
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border-radius: 1rem;
	cursor: pointer;
`;
