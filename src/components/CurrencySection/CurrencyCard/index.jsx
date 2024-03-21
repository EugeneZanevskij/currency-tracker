import React from "react";
import PropTypes from "prop-types";
import {
	CurrencyCardContainer,
	CurrencyIcon,
	CurrencyInfo,
	CurrencyTitle,
	CurrencyValue,
} from "./styled";

function CurrencyCard({ title, value }) {
	return (
		<CurrencyCardContainer>
			<CurrencyIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" />
			<CurrencyInfo>
				<CurrencyTitle>1 {title}</CurrencyTitle>
				<CurrencyValue>{value}</CurrencyValue>
			</CurrencyInfo>
		</CurrencyCardContainer>
	);
}

CurrencyCard.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default CurrencyCard;
