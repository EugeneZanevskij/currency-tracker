import {
	CurrencyCardContainer,
	CurrencyIcon,
	CurrencyInfo,
	CurrencyTitle,
	CurrencyValue,
} from "./styled";

interface ICurrencyCardProps {
	title: string;
	value: string;
	img: string;
	onClick?: () => void;
}

export function CurrencyCard({
	title,
	value,
	img,
	onClick,
}: ICurrencyCardProps) {
	return (
		<CurrencyCardContainer onClick={onClick}>
			<CurrencyIcon src={img} alt={title} />
			<CurrencyInfo>
				<CurrencyTitle>1 {title}</CurrencyTitle>
				<CurrencyValue>{value}</CurrencyValue>
			</CurrencyInfo>
		</CurrencyCardContainer>
	);
}
