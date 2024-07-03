import styled from "styled-components";

export const ModalHeader = styled.h2`
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
`;

export const ModalContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 1.5rem;
	color: ${({ theme }) => theme.textColor};
`;

export const ModalText = styled.p`
	font-size: 1.25rem;
`;

export const ModalInput = styled.input`
	padding: 0.5rem;
	border: 1px solid #c0c0c0;
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.backgroundColor};
	background: ${({ theme }) => theme.textColor};
`;

export const ModalImg = styled.img`
	width: 2rem;
`;

export const ModalResult = styled.div`
	padding: 0.1875rem 0.75rem;
	background-color: ${({ theme }) => theme.lightBlue};
	border-radius: 0.5rem;
	color: ${({ theme }) => theme.darkGreen};
	font-size: 1.25rem;
`;
