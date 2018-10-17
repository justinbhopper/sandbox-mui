import * as classNames from 'classnames';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppBar from "modules/AppBar";
import AppNavDrawer, { IAppNavDrawerProps } from "modules/AppNavDrawer";
import TestScene from 'scenes/TestScene';

import { 
	createStyles, 
	Drawer, 
	Theme,
	withStyles,
	WithStyles,
	withWidth
} from '@material-ui/core'
import { isWidthDown, WithWidth } from '@material-ui/core/withWidth';

const drawerWidthUnits = {
	full: 32,
	compact: 9
};

const styles = (theme: Theme) => {
	const drawerWidth = {
		full: drawerWidthUnits.full * theme.spacing.unit,
		compact: drawerWidthUnits.compact * theme.spacing.unit
	};

	return createStyles({
		root: {
			display: 'flex',
			flexGrow: 1,
			flexDirection: 'column',
			zIndex: 1,
			overflow: 'hidden',
			position: 'relative'
		},
		main: {
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'row'
		},
		appBar: {
			zIndex: theme.zIndex.drawer + 1
		},
		drawer: {
			position: 'relative',
			width: drawerWidth.full
		},
		drawerCompact: {
			width: drawerWidth.compact - (theme.spacing.unit * 2),
			[theme.breakpoints.up('sm')]: {
				width: drawerWidth.compact
			}
		},
		logo: {
			display: 'block',
			margin: '4px auto'
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing.unit * 2,
			[theme.breakpoints.up('lg')]: {
				paddingLeft: theme.spacing.unit * 8,
				paddingRight: theme.spacing.unit * 8
			}
		},
		toolbar: theme.mixins.toolbar
	});
};

export interface IAppFrameProps extends WithStyles<typeof styles>, WithWidth {
	navBarProps?: IAppNavDrawerProps;
}

export default withWidth()(withStyles(styles)(
	class extends React.Component<IAppFrameProps> {
		public render() {
			const { classes, navBarProps, width } = this.props;

			const compact = isWidthDown('md', width) || (navBarProps && navBarProps.compact);
			const drawerCls = compact ? classNames(classes.drawer, classes.drawerCompact) : classes.drawer;

			return (
				<div className={classes.root}>
					<AppBar className={classes.appBar} />
					<main className={classes.main}>
						<Drawer variant="permanent" classes={{ paper: drawerCls }}>
							<div className={classes.toolbar} />
							<AppNavDrawer compact={compact} {...navBarProps} />
						</Drawer>
						<article className={classes.content}>
							<div className={classes.toolbar} />
							<BrowserRouter>
								<Switch>
									<Route exact={true} path="/" component={TestScene} />
								</Switch>
							</BrowserRouter>
						</article>
					</main>
				</div>
			);
		}
	}
))