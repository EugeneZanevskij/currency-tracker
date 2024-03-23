import React from "react";
import PropTypes from "prop-types";
import { CurrenciesContainer, CurrenciesList, CurrenciesTitle } from "./styled";
import CurrencyCard from "../CurrencyCard";
import { getRateValue } from "../../../utils/rateValuesUtility";

function CurrencyCards({ title, ratesData, cardsData, onClick }) {
	const getRatesValue = (id, ratesValue) => {
		return getRateValue(ratesData, id, ratesValue);
	};

	const handleCardClick = (id, img) => () => {
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

CurrencyCards.propTypes = {
	title: PropTypes.string.isRequired,
	// eslint-disable-next-line react/require-default-props
	ratesData: PropTypes.object,
	cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
	// eslint-disable-next-line react/require-default-props
	onClick: PropTypes.func,
};

export default CurrencyCards;
