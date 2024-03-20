import React from "react";
import PropTypes from "prop-types";
import { CurrenciesContainer, CurrenciesList, CurrenciesTitle } from "./styled";

function CurrencyCards({ title, currencies }) {
	return (
		<CurrenciesContainer>
			<CurrenciesTitle>{title}</CurrenciesTitle>
			<CurrenciesList>
				{currencies.map((currency) => {
					return <div key={currency}>{currency}</div>;
				})}
			</CurrenciesList>
		</CurrenciesContainer>
	);
}

CurrencyCards.propTypes = {
	title: PropTypes.string.isRequired,
	currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CurrencyCards;
