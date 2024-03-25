import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { CloseButton, ModalContainer, ModalForm } from "./styled";
import usePortal from "@hooks/usePortal";

interface IModalProps {
	onClose: () => void;
	children: JSX.Element;
}
export function Modal({ onClose, children }: IModalProps) {
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
