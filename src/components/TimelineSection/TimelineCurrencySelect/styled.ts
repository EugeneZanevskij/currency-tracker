import styled from "styled-components";

export const Select = styled.select`
	color: ${({ theme }) => theme.textColor};
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 3rem;
	cursor: pointer;
	border: none;
	outline: none;
	background-color: transparent;
	width: 100%;
	max-width: 20rem;
`;

export const Option = styled.option`
	background-color: ${({ theme }) => theme.backgroundColor};

	&:hover {
		cursor: pointer;
	}
`;
