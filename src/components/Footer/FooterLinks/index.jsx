import React from "react";
import PropTypes from "prop-types";
import { LinkItem, LinksContainer, LinksList, Title } from "./styled";

function FooterLinks({ title, links }) {
	return (
		<LinksContainer>
			<Title>{title}</Title>
			<LinksList>
				{links.map((link) => {
					return <LinkItem key={link}>{link}</LinkItem>;
				})}
			</LinksList>
		</LinksContainer>
	);
}

FooterLinks.propTypes = {
	title: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FooterLinks;
