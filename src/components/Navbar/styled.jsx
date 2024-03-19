import styled from "styled-components";

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 85%;
	margin: 0 auto;
	gap: 2rem;
	padding: 1rem 0;
`;

export const Logotype = styled.img`
	user-select: none;
`;

export const NavLinksContainer = styled.ul`
	display: flex;
	max-width: 40rem;
	width: 100%;
	gap: 1rem;
	list-style: none;
	justify-content: space-between;

	a {
		text-decoration: none;
		color: #ffffff;

		&:hover {
			color: #35cf35;
		}

		&.active {
			color: green;
			text-decoration: underline;
			text-underline-offset: 5px;
		}
	}

	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

export const SwitchContainer = styled.div`
	width: 3rem;
	background-color: #35cf35;
`;
