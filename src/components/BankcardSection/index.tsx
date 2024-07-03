import { Component } from "react";
import MapComponent from "./Map";
import { QUOTES_DATA } from "@constants/currencies";
import { BankcardSectionContainer, Title, CurrencyTitle } from "./styled";
import { BanksSearchSelect } from "./BanksSearchSelect";
import { BANKS_LIST } from "@constants/banks";

interface BankcardSectionState {
	currencies: { id: string; title: string }[];
	searchCurrencies: { id: string; title: string }[];
	banksData: IBank[];
	selectedCurrencyID: string;
}

export class BankcardSection extends Component<{}, BankcardSectionState> {
	state = {
		currencies: [],
		searchCurrencies: [],
		banksData: [],
		selectedCurrencyID: "",
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
		const banksData = BANKS_LIST.filter((bank) => bank.currencies.includes(id));
		this.setState({ banksData, selectedCurrencyID: id });
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
				{this.state.selectedCurrencyID && (
					<CurrencyTitle>{this.state.selectedCurrencyID}</CurrencyTitle>
				)}
				<MapComponent banksData={this.state.banksData} />
			</BankcardSectionContainer>
		);
	}
}
