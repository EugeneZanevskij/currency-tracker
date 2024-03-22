import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

function usePortal(id) {
	const createdElement = useMemo(() => {
		const element = document.createElement("div");
		element.id = id;
		return element;
	}, []);

	useEffect(() => {
		const element = document.getElementById(id);

		if (!element) {
			document.body.appendChild(createdElement);
		}

		return () => {
			document.body.removeChild(createdElement);
		};
	}, [id]);

	return {
		render: (children) => ReactDOM.createPortal(children, createdElement),
	};
}

export default usePortal;
