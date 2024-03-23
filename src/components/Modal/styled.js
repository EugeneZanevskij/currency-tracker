import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalForm = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	height: fit-content;
	background-color: ${({ theme }) => theme.modalColor};
	border: 1px solid ${({ theme }) => theme.darkGray};
	border-radius: 1rem;
	padding: 1.5rem 3rem;
	position: relative;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	background: transparent;
	cursor: pointer;
	border: none;
	width: 1rem;
	height: 1rem;
`;
