import React from "react";

interface IErrorBoundaryProps {
	children: JSX.Element;
}

interface IErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	constructor(props: IErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
	}

	render() {
		const { children } = this.props;
		const { hasError } = this.state;
		if (hasError) {
			return <div>There&apos;s an error</div>;
		}
		return children;
	}
}
