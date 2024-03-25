import { CurrenciesContainer, CurrenciesList, CurrenciesTitle } from "./styled";
import { CurrencyCard } from "../CurrencyCard";
import { getRateValue } from "../../../utils/rateValuesUtility";

interface ICurrencyCardsProps {
	title: string;
	ratesData?: ICurrencyData;
	cardsData: {
		id: string;
		title: string;
		rateValue?: string;
		img: string;
	}[];
	onClick?: (id: string, img: string) => void;
}

export function CurrencyCards({
	title,
	ratesData,
	cardsData,
	onClick,
}: ICurrencyCardsProps) {
	const getRatesValue = (id: string, ratesValue: string | undefined) => {
		return getRateValue(ratesData!, id, ratesValue);
	};

	const handleCardClick = (id: string, img: string) => () => {
		if (onClick) {
			return onClick(id, img);
		}
		return false;
	};

	return (
		<CurrenciesContainer>
			<CurrenciesTitle>{title}</CurrenciesTitle>
			<CurrenciesList>
				{cardsData.map((card) => {
					return (
						<CurrencyCard
							key={card.id}
							title={card.title}
							value={getRatesValue(card.id, card.rateValue)}
							img={card.img}
							onClick={handleCardClick(card.id, card.img)}
						/>
					);
				})}
			</CurrenciesList>
		</CurrenciesContainer>
	);
}
