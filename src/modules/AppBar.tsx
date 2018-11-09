import * as classNames from 'classnames';
import * as React from 'react';

import { 
	AppBar, 
	Avatar,
	Badge,
	Button,
	createStyles,
	IconButton,
	InputAdornment,
	TextField,
	Theme,
	Toolbar,
	Typography,
	WithStyles,
	withStyles
} from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/ArrowDropDown'
import MailIcon from '@material-ui/icons/MailOutlined'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import SearchIcon from '@material-ui/icons/Search'

import { RemarkableHealthIcon } from 'assets/Icons';

const styles = (theme: Theme) => createStyles({
	root: {
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	search: {
		width: 600,
		backgroundColor: '#f9f9f9',
		[theme.breakpoints.down('md')]: {
			width: 400
		},
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		},
		transition: theme.transitions.create('width')
	},
	searchInput: {

	},
	actions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		color: 'rgba(0, 0, 0, 0.5)'
	},
	badge: {
		margin: theme.spacing.unit * 2
	},
	profileMenu: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		color: 'inherit'
	},
	profileName: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	}
});

export interface IAppBarProps extends WithStyles<typeof styles> {
	compact?: boolean;
	className?: string;
}

export default withStyles(styles)(
	class extends React.Component<IAppBarProps> {
		public render() {
			const { classes, className } = this.props;
			
			return (
				<AppBar elevation={2} color="inherit" position="absolute" className={classNames(classes.root, className)}>
					<Toolbar className={classes.toolbar}>
						<RemarkableHealthIcon fill="red" stroke="white" size="medium" />
					
						<TextField
							className={classes.search}
							margin="none"
							variant="outlined"
							placeholder="Search for clients or documents..."
							InputProps={{
								margin: "dense",
								className: classes.searchInput,
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon nativeColor="rgba(0, 0, 0, 0.5)" />
									</InputAdornment>
								),
							}}
							/>

						<div className={classes.actions}>
							<IconButton>
								<Badge className={classes.badge} badgeContent="99+" color="primary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton>
								<Badge className={classes.badge} badgeContent={3} color="primary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<Button className={classes.profileMenu}>
								<Avatar src="https://material-ui.com/static/images/uxceo-128.jpg" />
								<Typography variant="subtitle2" className={classes.profileName}>Wendy Williams</Typography>
								<ArrowIcon />
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			);
		}
	}
)