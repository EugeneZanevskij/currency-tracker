import { Component } from "react";
import { formatDate } from "@utils/timeUtilities";
import { DateButton, DateContainer, DateTitle } from "./styled";

interface DateChangerProps {
	currentDate: Date;
	onDateChange: (direction: number) => void;
}
export class DateChanger extends Component<DateChangerProps> {
	handleUpdateDate = (direction: number) => () => {
		this.props.onDateChange(direction);
	};

	render() {
		return (
			<DateContainer>
				<DateButton onClick={this.handleUpdateDate(-1)}>{"<"}</DateButton>
				<DateTitle>{formatDate(this.props.currentDate)}</DateTitle>
				<DateButton onClick={this.handleUpdateDate(1)}>{">"}</DateButton>
			</DateContainer>
		);
	}
}
