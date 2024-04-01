import { Component } from "react";
import MapComponent from "./Map";
import { QUOTES_DATA } from "@constants/currencies";
import { BankcardSectionContainer, Title } from "./styled";
import { BanksSearchSelect } from "./BanksSearchSelect";

interface BankcardSectionState {
	currencies: { id: string; title: string }[];
	searchCurrencies: { id: string; title: string }[];
	// banksData: { id: string; title: string }[];
}

export class BankcardSection extends Component<{}, BankcardSectionState> {
	state = {
		currencies: [],
		searchCurrencies: [],
		// banksData: [],
	};

	componentDidMount() {
		const currencies = QUOTES_DATA.map((data) => ({
			id: data.id,
			title: data.title,
		}));
		this.setState({ currencies: currencies });
	}

	updateSearchCurrencies = (currencies: { id: string; title: string }[]) => {
		this.setState({ searchCurrencies: currencies });
	};

	handleCurrencySelection = (id: string) => {
		// const banksCoords = BANKS_LIST.filter((bank) =>
		//   bank.currencies.includes(id),
		// );
		// this.setState({ banksCoords: banksCoords });
	};

	render() {
		const { currencies, searchCurrencies } = this.state;

		return (
			<BankcardSectionContainer>
				<Title>Search currency in the bank</Title>
				<BanksSearchSelect
					currencies={currencies}
					searchCurrencies={searchCurrencies}
					setSearchCurrencies={this.updateSearchCurrencies}
					onCurrencySelection={this.handleCurrencySelection}
				/>
				<MapComponent />
			</BankcardSectionContainer>
		);
	}
}
