import styled from "styled-components";

export const DateContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const DateButton = styled.button`
	color: ${({ theme }) => theme.textColor};
	background-color: transparent;
	cursor: pointer;
	height: 1.5rem;
	width: 1.5rem;
	border: none;
	border-radius: 50%;
	font-weight: bold;

	&:hover {
		background-color: ${({ theme }) => theme.lightBlue};
	}
`;

export const DateTitle = styled.p`
	color: ${({ theme }) => theme.textColor};
	font-size: 2rem;
`;
