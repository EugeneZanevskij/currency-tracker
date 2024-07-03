import styled from "styled-components";

export const TimeUpdateContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2.5rem auto;
	gap: 0.5rem;
`;

export const TimeUpdateText = styled.p`
	font-size: 2rem;
	width: 300;
	color: ${({ theme }) => theme.subTextColor};
	opacity: 0.8;
	font-weight: 300;
`;
