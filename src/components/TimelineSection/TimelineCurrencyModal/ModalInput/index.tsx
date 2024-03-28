import { Component } from "react";
import { Input, Label } from "./styled";

interface ModalInputProps {
	label: string;
	name: string;
	value: number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export class ModalInput extends Component<ModalInputProps> {
	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onChange(event);
	};
	render() {
		const { label, name, value } = this.props;
		return (
			<>
				<Label htmlFor={name}>{label}</Label>
				<Input
					id={name}
					type="number"
					name={name}
					value={value}
					onChange={this.handleInputChange}
				/>
			</>
		);
	}
}
