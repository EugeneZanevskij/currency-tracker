import React, { useRef } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { CloseButton, ModalContainer, ModalForm } from "./styled";

function Modal({ onClose, children }) {
	const modalRef = useRef(null);
	useOnClickOutside(modalRef, onClose);

	return (
		<ModalContainer>
			<ModalForm ref={modalRef}>
				<CloseButton onClick={onClose}>
					<span>&times;</span>
				</CloseButton>
				{children}
			</ModalForm>
		</ModalContainer>
	);
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Modal;
