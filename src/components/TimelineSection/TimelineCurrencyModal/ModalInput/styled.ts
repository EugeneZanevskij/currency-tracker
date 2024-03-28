import styled from "styled-components";

export const Label = styled.label`
	color: ${({ theme }) => theme.textColor};
`;

export const Input = styled.input`
	font-size: 1rem;
	color: ${({ theme }) => theme.textColor};
	padding: 0.75rem 0;
	background: transparent;
	border-bottom: 1px solid ${({ theme }) => theme.textColor};
	outline: none;

	/* &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  } */
`;
