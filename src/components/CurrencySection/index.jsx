import React from "react";
import CurrencySectionContainer from "./styled";
import CurrencyCards from "./CurrencyCards";

function CurrencySection() {
	return (
		<CurrencySectionContainer>
			<CurrencyCards
				title="Currencies"
				currencies={["USD", "EUR", "RUB", "GBP"]}
			/>
		</CurrencySectionContainer>
	);
}

export default CurrencySection;
