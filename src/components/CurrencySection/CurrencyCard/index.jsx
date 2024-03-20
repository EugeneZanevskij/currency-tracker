import React from "react";
import PropTypes from "prop-types";
import {
	CurrencyCardContainer,
	CurrencyIcon,
	CurrencyInfo,
	CurrencyTitle,
	CurrencyValue,
} from "./styled";

function CurrencyCard({ title }) {
	return (
		<CurrencyCardContainer>
			<CurrencyIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" />
			<CurrencyInfo>
				<CurrencyTitle>{title}</CurrencyTitle>
				<CurrencyValue>1.0000</CurrencyValue>
			</CurrencyInfo>
		</CurrencyCardContainer>
	);
}

CurrencyCard.propTypes = {
	title: PropTypes.string.isRequired,
};

export default CurrencyCard;
