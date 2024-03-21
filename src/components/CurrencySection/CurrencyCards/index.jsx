import React from "react";
import PropTypes from "prop-types";
import { CurrenciesContainer, CurrenciesList, CurrenciesTitle } from "./styled";
import CurrencyCard from "../CurrencyCard";
import getRateValue from "../../../utils/rateValuesUtility";

function CurrencyCards({ title, ratesData, cardsData }) {
	const getRatesValue = (id) => {
		return getRateValue(ratesData, id);
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
							value={getRatesValue(card.id)}
						/>
					);
				})}
			</CurrenciesList>
		</CurrenciesContainer>
	);
}

CurrencyCards.propTypes = {
	title: PropTypes.string.isRequired,
	ratesData: PropTypes.object.isRequired,
	cardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CurrencyCards;
