import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Modal from "../../Modal";
import {
	ModalContainer,
	ModalHeader,
	ModalImg,
	ModalInput,
	ModalResult,
	ModalText,
} from "./styled";

function CurrencyModal({ id, img, exchangeRate, onClose }) {
	const [convertedAmount, setConvertedAmount] = useState(0);
	const inputRef = useRef(null);

	const handleConvert = () => {
		const inputAmount = inputRef.current.value;
		const converted = inputAmount * exchangeRate;
		setConvertedAmount(converted);
	};

	return (
		<Modal onClose={onClose}>
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
				<ModalResult>{convertedAmount.toFixed(2)}</ModalResult>
				<ModalText>{id}</ModalText>
			</ModalContainer>
		</Modal>
	);
}

CurrencyModal.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	exchangeRate: PropTypes.number.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default CurrencyModal;
