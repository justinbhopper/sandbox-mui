import './css/App.css'

import * as React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import { ErrorBoundary } from "./common/errorHandling"
import AppFrame from "./modules/AppFrame";
import theme from './themes/clinical'

export default class extends React.Component {
	public render() {
		return (
			<MuiThemeProvider theme={theme}>
				<ErrorBoundary>
					<AppFrame />
				</ErrorBoundary>
			</MuiThemeProvider>
		);
	}
};