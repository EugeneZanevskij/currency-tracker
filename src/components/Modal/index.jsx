import React, { useRef } from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { CloseButton, ModalContainer, ModalForm } from "./styled";
import usePortal from "../../hooks/usePortal";

function Modal({ onClose, children }) {
	const { render } = usePortal("modal-root");
	const modalRef = useRef(null);
	useOnClickOutside(modalRef, onClose);

	return render(
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
