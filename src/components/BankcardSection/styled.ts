import styled from "styled-components";

export const BankcardSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2`
	font-size: 2.25rem;
	font-weight: 400;
	margin-bottom: 3rem;
	color: ${({ theme }) => theme.textColor};
	text-align: center;
`;

export const CurrencyTitle = styled.h3`
	color: ${({ theme }) => theme.textColor};
	font-size: 1.5rem;
	font-weight: 400;
	margin-bottom: 1rem;
`;
