import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ theme }) => theme.emeraldGreen};
	color: ${({ theme }) => theme.white};
	margin-top: 1rem;
	font-size: 1rem;
	border-radius: 1rem;
	border: none;
	padding: 0.5rem 1rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.yellowish};
	}
`;

export const Text = styled.p`
	margin-bottom: 0.75rem;
	color: ${({ theme }) => theme.textColor};
	width: 15rem;
	text-align: center;
`;
