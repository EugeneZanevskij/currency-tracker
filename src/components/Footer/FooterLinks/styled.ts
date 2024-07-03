import styled from "styled-components";

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Title = styled.h3`
	font-size: 1.625rem;
	color: ${({ theme }) => theme.textColor};
	max-width: 10rem;
`;

export const LinksList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export const LinkItem = styled.p`
	font-size: 1.5rem;
	color: #898989;
	cursor: pointer;

	&:hover {
		color: #35cf35;
	}
`;
