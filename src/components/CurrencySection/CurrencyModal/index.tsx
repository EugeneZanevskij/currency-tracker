import { useState, useRef, useEffect } from "react";
import { Modal } from "../../Modal";
import {
	ModalContainer,
	ModalHeader,
	ModalImg,
	ModalInput,
	ModalResult,
	ModalText,
} from "./styled";

interface ICurrencyModalProps {
	id: string;
	img: string;
	exchangeRate: number;
	onClose: () => void;
}

export function CurrencyModal({
	id,
	img,
	exchangeRate,
	onClose,
}: ICurrencyModalProps) {
	const [convertedAmount, setConvertedAmount] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleConvert = () => {
		const inputAmount = inputRef.current!.value;
		const converted = +inputAmount * exchangeRate;
		setConvertedAmount(converted);
	};

	useEffect(() => {
		inputRef.current!.focus();
	}, []);

	return (
		<Modal onClose={onClose}>
			<>
				<ModalHeader>Convert USD to {id}:</ModalHeader>
				<ModalContainer>
					<ModalInput
						type="number"
						ref={inputRef}
						placeholder="Enter amount in USD"
						onChange={handleConvert}
					/>
					<ModalText>USD</ModalText>
				</ModalContainer>
				<ModalContainer>
					<ModalImg src={img} alt={id} />
					<ModalResult>{convertedAmount.toFixed(3)}</ModalResult>
					<ModalText>{id}</ModalText>
				</ModalContainer>
			</>
		</Modal>
	);
}
