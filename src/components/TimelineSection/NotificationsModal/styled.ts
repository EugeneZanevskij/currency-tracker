import styled from "styled-components";

interface NotificationContainerProps {
	background: string;
}

export const NotificationContainer = styled.span<NotificationContainerProps>`
	background-color: ${({ background }) => background};
	color: ${({ theme }) => theme.whiteColor};
	padding: 0.5rem 1rem;
	text-align: center;
	transition: transform 0.3s ease-in-out;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;
