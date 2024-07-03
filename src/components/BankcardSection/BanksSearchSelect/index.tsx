import { Component } from "react";
import {
	Image,
	Input,
	SearchContainer,
	SearchList,
	SearchListItem,
	SearchWrapper,
} from "./styled";
import searchImg from "@assets/icons/search-normal.svg";

interface BanksSearchSelectProps {
	currencies: { id: string; title: string }[];
	searchCurrencies: { id: string; title: string }[];
	setSearchCurrencies: (currencies: { id: string; title: string }[]) => void;
	onCurrencySelection: (id: string) => void;
}

interface BanksSearchSelectState {
	searchInputValue: string;
}

export class BanksSearchSelect extends Component<
	BanksSearchSelectProps,
	BanksSearchSelectState
> {
	state = {
		searchInputValue: "",
	};

	handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { currencies, setSearchCurrencies } = this.props;
		const inputValue = event.target.value.toLowerCase();
		this.setState({ searchInputValue: event.target.value });

		let searchResults: { id: string; title: string }[] = [];
		if (inputValue.trim() !== "") {
			searchResults = currencies.filter(
				(currency) =>
					currency.id.toLowerCase().includes(inputValue) ||
					currency.title.toLowerCase().includes(inputValue)
			);
		}

		setSearchCurrencies(searchResults);
	};

	handleSearchClick = (id: string) => () => {
		this.props.onCurrencySelection(id);
		this.setState({ searchInputValue: "" });
	};

	render() {
		const { searchCurrencies } = this.props;
		const { searchInputValue } = this.state;

		return (
			<SearchWrapper>
				<SearchContainer>
					<Input
						placeholder="Search currency"
						value={searchInputValue}
						onChange={this.handleInputSearch}
					/>
					<Image src={searchImg} alt="search" />
				</SearchContainer>
				{searchInputValue.length > 0 && (
					<SearchList>
						{searchCurrencies.length !== 0 ? (
							searchCurrencies.map(({ id, title }) => (
								<SearchListItem key={id} onClick={this.handleSearchClick(id)}>
									{title} ({id})
								</SearchListItem>
							))
						) : (
							<SearchListItem>No results</SearchListItem>
						)}
					</SearchList>
				)}
			</SearchWrapper>
		);
	}
}
