import styled from "styled-components";

export const Label = styled.label`
	color: ${({ theme }) => theme.textColor};
`;

export const Input = styled.input`
	font-size: 1rem;
	color: ${({ theme }) => theme.textColor};
	padding: 0.75rem 0;
	background: transparent;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.textColor};
	outline: none;
`;
