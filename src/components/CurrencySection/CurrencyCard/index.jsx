import React from "react";
import PropTypes from "prop-types";
import {
	CurrencyCardContainer,
	CurrencyIcon,
	CurrencyInfo,
	CurrencyTitle,
	CurrencyValue,
} from "./styled";

function CurrencyCard({ title, value, img, onClick }) {
	return (
		<CurrencyCardContainer onClick={onClick}>
			<CurrencyIcon
				src={
					img ||
					"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
				}
				alt={title}
			/>
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
	img: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default CurrencyCard;
