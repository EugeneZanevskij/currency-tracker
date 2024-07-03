import styled from "styled-components";

export const CurrenciesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CurrenciesTitle = styled.h3`
	font-size: 2rem;
	color: ${({ theme }) => theme.textColor};
	padding-bottom: 1.5rem;
	border-bottom: 2px solid ${({ theme }) => theme.darkGray};
	margin-bottom: 1.5rem;
	max-width: 32.5rem;
	width: 100%;
`;

export const CurrenciesList = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 2rem;
`;
