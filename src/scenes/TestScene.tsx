import * as React from 'react';

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	createStyles,
	FormControl,
	Grid,
	Icon,
	IconButton,
	InputLabel,
	Menu,
	MenuItem,
	Paper,
	Select,
	Step,
	StepLabel,
	Stepper,
	Theme,
	Typography,
	withStyles,
	WithStyles
} from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
	stepper: {
		backgroundColor: 'transparent'
	},
	paper: {
		padding: theme.spacing.unit * 2,
		marginTop: 20
	},
	formControl: {
		margin: theme.spacing.unit,
		width: 120
	},
	leftIcon: {
		marginRight: theme.spacing.unit
	},
	cardAction: {
		color: theme.palette.secondary.contrastText
	}
});

interface ITestSceneState {
	activeStep: number;
	age: string;
	menuOpen: boolean;
	menuAnchor?: HTMLElement;
}

const menuOptions = [
	'Atria',
	'Callisto',
	'Dione'
  ];

export default withStyles(styles)(
	class extends React.Component<WithStyles<typeof styles>, ITestSceneState> {
		constructor(props: any){
			super(props);
			this.state = { activeStep: 1, age: '', menuOpen: false };
		}

		public render() {
			const { activeStep, menuAnchor, menuOpen } = this.state;
			const { classes } = this.props;

			const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

			const optional = <Typography variant="caption">Optional</Typography>

			return (
				<>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((label) => {
							return (
								<Step key={label}>
									<StepLabel optional={optional}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
					<Card elevation={1}>
						<CardHeader title="Clinical errors" titleTypographyProps={{ variant: 'h4' }} action={
								<IconButton className={classes.cardAction}>
									<Icon>more_horiz</Icon>
								</IconButton>
							} />
						<CardContent>
							this is content
						</CardContent>
					</Card>
					<Paper elevation={1} className={classes.paper}>
						<Grid container={true} alignItems="center" justify="space-between">
							<Typography variant="h4">Clinical errors</Typography>
							<Grid item={true}>
								<Button color="primary" variant="contained">
									<Icon className={classes.leftIcon}>launch</Icon>
									See all
								</Button>
								<IconButton
									aria-label="More"
									aria-owns={open ? 'long-menu' : ''}
									aria-haspopup="true"
									onClick={this.onMenuClick}
									>
									<Icon>more_horiz</Icon>
								</IconButton>
								<Menu
									id="long-menu"
									anchorEl={menuAnchor}
									open={menuOpen}
									onClose={this.onMenuClose}
									>
									{menuOptions.map(option => (
										<MenuItem key={option} onClick={this.onMenuClose}>
											{option}
										</MenuItem>
									))}
								</Menu>
							</Grid>
						</Grid>
					</Paper>
					<Paper elevation={1} className={classes.paper}>
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="age-example">Age</InputLabel>
							<Select
								value={this.state.age}
								onChange={this.onAgeChange}
								inputProps={{
									name: 'age',
									id: 'age-example',
								}}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						
						<Grid container={true} spacing={8}>
							<Grid item={true}>
								<Button color="default" variant="flat">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="default" variant="outlined">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="default" variant="contained">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="primary" variant="flat">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="primary" variant="outlined">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="primary" variant="contained">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="secondary" variant="flat">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="secondary" variant="outlined">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button color="secondary" variant="contained">Test Button</Button>
							</Grid>
							<Grid item={true}>
								<Button style={{ color: 'red' }} variant="flat">Test Button</Button>
							</Grid>
						</Grid>
					</Paper>
				</>
			);
		}

		private onAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
			this.setState({ age: event.target.value });
		}

		private onMenuClick = (event: React.MouseEvent<HTMLElement>) => this.setState({ menuOpen: true, menuAnchor: event.currentTarget });

		private onMenuClose = () => this.setState({ menuOpen: false });
	}
)