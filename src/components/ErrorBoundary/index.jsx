import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prefer-stateless-function
class ErrorBoundary extends React.Component {
	constructor(props) {
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

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
