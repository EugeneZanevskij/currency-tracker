import React, { useRef } from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { CloseButton, ModalContainer, ModalForm } from "./styled";

function Modal({ onClose, children }) {
	const modalRef = useRef(null);
	useOnClickOutside(modalRef, onClose);

	return (
		<ModalContainer>
			<ModalForm ref={modalRef}>
				<CloseButton onClick={onClose}>
					<IoMdClose size={24} color="#fff" />
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
