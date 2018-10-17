import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppNavBar, { IAppNavBarProps } from "modules/AppNavBar";
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
import * as classNames from 'classnames';

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
			width: '100%',
			minHeight: '100vh'
		},
		drawerFull: {
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
			marginLeft: drawerWidth.full,
			padding: theme.spacing.unit * 2,
			[theme.breakpoints.up('lg')]: {
				paddingLeft: theme.spacing.unit * 8,
				paddingRight: theme.spacing.unit * 8
			}
		},
		contentCompact: {
			marginLeft: drawerWidth.compact - (theme.spacing.unit * 2),
			[theme.breakpoints.up('sm')]: {
				marginLeft: drawerWidth.compact
			}
		}
	});
};

export interface IAppFrameProps extends WithStyles<typeof styles>, WithWidth {
	navBarProps?: IAppNavBarProps;
}

export default withWidth()(withStyles(styles)(
	class extends React.Component<IAppFrameProps> {
		public render() {
			const { classes, navBarProps, width } = this.props;

			const compact = isWidthDown('md', width) || (navBarProps && navBarProps.compact);
			const contentCls = compact ? classNames(classes.content, classes.contentCompact) : classes.content;

			return (
				<main className={classes.root}>
					<Drawer variant="permanent" classes={{ paper: compact ? classes.drawerCompact : classes.drawerFull }}>
						<AppNavBar compact={compact} {...navBarProps} />
					</Drawer>
					<article className={contentCls}>
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
))