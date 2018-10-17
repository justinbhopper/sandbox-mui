import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppNavBar, { IAppNavBarProps } from "modules/AppNavBar";
import TestScene from 'scenes/TestScene';

import { 
	createStyles, 
	Drawer, 
	Theme, 
	withStyles,
	WithStyles
} from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
	root: {
		width: '100%',
		minHeight: '100vh'
	},
	drawer: {
		width: '250px'
	},
	logo: {
		display: 'block',
		margin: '4px auto'
	},
	content: {
		marginLeft: '250px',
		padding: '16px 64px'
	}
});

export interface IAppFrameProps extends WithStyles<typeof styles> {
	navBarProps?: IAppNavBarProps;
}

export default withStyles(styles)(
	class extends React.Component<IAppFrameProps> {
		public render() {
			const { classes, navBarProps } = this.props;

			return (
				<main className={classes.root}>
					<Drawer variant="permanent" classes={{ paper: classes.drawer }}>
						<AppNavBar {...navBarProps} />
					</Drawer>
					<article className={classes.content}>
						<BrowserRouter>
							<Switch>
								<Route exact={true} path="/" component={TestScene} />
							</Switch>
						</BrowserRouter>
					</article>
				</main>
			);
		}
	}
)