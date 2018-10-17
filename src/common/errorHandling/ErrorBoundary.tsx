import * as React from "react";

import { isCancel } from "../components/Cancel"

interface IErrorBoundaryState {
	error?: Error;
	info?: React.ErrorInfo;
}

export class ErrorBoundary extends React.PureComponent<{}, IErrorBoundaryState> {
	public state: IErrorBoundaryState = { };

	public render() {
		const { error } = this.state;

		if (!error)
			return this.props.children;
		/*
		return (
			<Alert
				icon="error"
				intent={Intent.DANGER}
				onClose={this.hideErrorDetails}
				isOpen={true}>
				{error.message}
			</Alert>
		);
		*/
		return;
	}

	public componentDidCatch(error: Error, info: React.ErrorInfo) {
		// Ignore cancellation throws
		if (isCancel(error))
			return;

		return;
		/*
		Notification.show({
			message: error.message,
			intent: Intent.DANGER,
			timeout: 0,
			action: {
				onClick: () => this.showErrorDetails(error, info),
				text: 'Error Details'
			}
		});*/
	}
/*
	private showErrorDetails = (error: Error, info: React.ErrorInfo) => {
		this.setState({ error, info });
	}

	private hideErrorDetails = () => {
		this.setState({ error: undefined, info: undefined });
	}
*/
}

export default ErrorBoundary;