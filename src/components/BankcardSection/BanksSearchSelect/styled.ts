import styled from "styled-components";

export const SearchWrapper = styled.div`
	position: relative;
	max-width: 450px;
	width: 100%;
`;

export const SearchContainer = styled.div`
	display: flex;
	margin-top: 1rem;
	margin-bottom: 3rem;
	gap: 2rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.modalColor};
`;

export const Input = styled.input`
	padding-left: 0.5rem;
	font-size: 1rem;
	font-weight: 400;
	color: ${({ theme }) => theme.textColor};
	font-style: normal;
	height: 4rem;
	width: 100%;
	background-color: transparent;
	outline: none;
	border: none;
`;

export const Image = styled.img`
	margin-right: 0.5rem;
	align-self: center;
	user-select: none;
`;

export const SearchList = styled.ul`
	border: 1px solid ${({ theme }) => theme.borderColor};
	width: 100%;
	position: absolute;
	top: 5rem;
	left: 50%;
	transform: translateX(-50%);
	list-style: none;
	border-radius: 0.25rem;
	z-index: 1;
`;

export const SearchListItem = styled.li`
	display: flex;
	padding: 0.25rem 1rem;
	background-color: ${({ theme }) => theme.backgroundColor};
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
	color: ${({ theme }) => theme.textColor};

	&:hover {
		background-color: ${({ theme }) => theme.cardColor};
	}
	cursor: pointer;
`;
