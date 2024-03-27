import styled from "styled-components";

export const CurrencyContainer = styled.div`
	display: flex;
	gap: 2rem;
	margin-bottom: 1rem;
	cursor: pointer;
	padding: 0.75rem;
	border: 1px solid ${({ theme }) => theme.suvaGray};
	background-color: ${({ theme }) => theme.backgroundColor};
	transition: transform 0.5s;
	border-radius: 0.5rem;
	width: 100%;
	max-width: 520px;
	align-items: center;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0px 0px 25px 4px ${({ theme }) => theme.shadowGreen};
	}
`;

export const CurrencyImage = styled.img`
	width: 5rem;
	border-radius: 0.5rem;
`;

export const CurrencyTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const CurrencyTitle = styled.h3`
	font-size: 2.25rem;
	color: ${({ theme }) => theme.textColor};
`;

export const CurrencyPrice = styled.p`
	font-size: 1.25rem;
	color: ${({ theme }) => theme.textColor};
`;
