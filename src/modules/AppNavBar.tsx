import * as React from 'react';

import { 
	createStyles, 
	Divider,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Theme,
	WithStyles,
	withStyles
} from '@material-ui/core'

import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import StatsIcon from '@material-ui/icons/InsertChartOutlinedOutlined'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'

import { RemarkableHealthIcon } from 'assets/Icons';

const styles = (theme: Theme) => createStyles({
	root: {
		padding: '10px 0 0 0',
		minHeight: '100vh'
	},
	logo: {
		display: 'block',
		margin: '4px auto'
	}
});

export interface IAppNavBarProps extends WithStyles<typeof styles> {
	// TODO: options for hiding or showing nav options
}

export default withStyles(styles)(
	class extends React.Component<IAppNavBarProps> {
		public render() {
			const { classes } = this.props;

			return (
				<Grid container={true} direction="column" className={classes.root} justify="space-between">
					<Grid container={true} direction="column">
						<div className={classes.logo}>
							<RemarkableHealthIcon fill="red" stroke="white" size="large" />
						</div>
						<Divider />
						<List>
							<ListItem button={true}>
								<ListItemIcon><DashboardIcon /></ListItemIcon>
								<ListItemText primary="Dashboard" />
							</ListItem>
							<ListItem button={true}>
								<ListItemIcon><CalendarTodayIcon /></ListItemIcon>
								<ListItemText primary="Scheduler" />
							</ListItem>
							<ListItem button={true}>
								<ListItemIcon><PeopleIcon /></ListItemIcon>
								<ListItemText primary="Clients" />
							</ListItem>
							<ListItem button={true}>
								<ListItemIcon><StatsIcon /></ListItemIcon>
								<ListItemText primary="Stats" />
							</ListItem>
							<ListItem button={true}>
								<ListItemIcon><ReceiptIcon /></ListItemIcon>
								<ListItemText primary="Billing" />
							</ListItem>
						</List>
					</Grid>
					<Grid container={true} direction="column">
						<List>
							<ListItem button={true}>
								<ListItemIcon><SettingsIcon /></ListItemIcon>
								<ListItemText primary="Settings" />
							</ListItem>
						</List>
					</Grid>
				</Grid>
			);
		}
	}
)