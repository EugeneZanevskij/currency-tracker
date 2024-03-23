import styled from "styled-components";

export const CurrencyCardContainer = styled.div`
	display: flex;
	gap: 1.875rem;
	align-items: center;
	max-width: 32.5rem;
	width: 100%;
	background: ${({ theme }) => theme.cardColor};
	border: 1px solid ${({ theme }) => theme.darkGray};
	border-radius: 0.5rem;
	padding: 1.875rem;
`;

export const CurrencyIcon = styled.img`
	display: block;
	width: 5rem;
	border-radius: 0.5rem;
`;

export const CurrencyInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CurrencyTitle = styled.h3`
	font-weight: 400;
	font-size: 2.1875rem;
	color: ${({ theme }) => theme.cardTextColor};
`;

export const CurrencyValue = styled.p`
	font-weight: 300;
	font-size: 2rem;
	color: ${({ theme }) => theme.percentsColor};
`;
