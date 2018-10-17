import * as React from 'react';

import { 
	createStyles, 
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

const styles = (theme: Theme) => createStyles({
	root: {
		display: 'flex',
		flexGrow: 1,
		padding: '10px 0 0 0'
	},
	menuItem: {
		'&:hover': {
			paddingLeft: (theme.spacing.unit * 2) - 4,
			borderLeft: '4px solid #fff',
			[theme.breakpoints.up('sm')]: {
				paddingLeft: (theme.spacing.unit * 3) - 4
			}
		}
	}
});

export interface IAppNavDrawerProps extends WithStyles<typeof styles> {
	compact?: boolean;
}

export default withStyles(styles)(
	class extends React.Component<IAppNavDrawerProps> {
		public render() {
			const { classes, compact } = this.props;

			return (
				<Grid container={true} direction="column" className={classes.root} justify="space-between">
					<Grid container={true} direction="column">
						<List>
							<ListItem button={true} className={classes.menuItem}>
								<ListItemIcon><DashboardIcon /></ListItemIcon>
								{!compact ? <ListItemText primary="Dashboard" /> : ''}
							</ListItem>
							<ListItem button={true} className={classes.menuItem}>
								<ListItemIcon><CalendarTodayIcon /></ListItemIcon>
								{!compact ? <ListItemText primary="Scheduler" /> : ''}
							</ListItem>
							<ListItem button={true} className={classes.menuItem}>
								<ListItemIcon><PeopleIcon /></ListItemIcon>
								{!compact ? <ListItemText primary="Clients" /> : ''}
							</ListItem>
							<ListItem button={true} className={classes.menuItem}>
								<ListItemIcon><StatsIcon /></ListItemIcon>
								{!compact ? <ListItemText primary="Stats" /> : ''}
							</ListItem>
							<ListItem button={true} className={classes.menuItem}>
								<ListItemIcon><ReceiptIcon /></ListItemIcon>
								{!compact ? <ListItemText primary="Billing" /> : ''}
							</ListItem>
						</List>
					</Grid>
					<Grid container={true} direction="column">
						<List>
							<ListItem button={true} className={classes.menuItem}>
								<ListItemIcon><SettingsIcon /></ListItemIcon>
								{!compact ? <ListItemText primary="Settings" /> : ''}
							</ListItem>
						</List>
					</Grid>
				</Grid>
			);
		}
	}
)