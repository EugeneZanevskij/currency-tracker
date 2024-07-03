import { LinkItem, LinksContainer, LinksList, Title } from "./styled";

interface IFooterLinksProps {
	title: string;
	links: string[];
}

export function FooterLinks({ title, links }: IFooterLinksProps) {
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
