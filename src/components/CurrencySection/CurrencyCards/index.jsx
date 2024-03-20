import React from "react";
import PropTypes from "prop-types";
import { CurrenciesContainer, CurrenciesList, CurrenciesTitle } from "./styled";
import CurrencyCard from "../CurrencyCard";

function CurrencyCards({ title, currencies }) {
	return (
		<CurrenciesContainer>
			<CurrenciesTitle>{title}</CurrenciesTitle>
			<CurrenciesList>
				{currencies.map((currency) => {
					return <CurrencyCard key={currency} title={currency} />;
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
