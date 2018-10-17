import { createMuiTheme } from "@material-ui/core";

const palette = {
	primary: {
		light: '#3adeca',
		main: '#20c1ad',
		dark: '#179182',
		contrastText: '#fff',
	},
	secondary: {
		light: '#4f556c',
		main: '#3d4252',
		dark: '#2c334a',
		contrastText: '#fff',
	}
};

export default createMuiTheme({
	palette,
	typography: {
		useNextVariants: true,
		h1: {
			fontSize: '3rem'
		},
		h2: {
			fontSize: '2.125rem'
		},
		h3: {
			fontSize: '1.75rem'
		},
		h4: {
			fontSize: '1.25rem'
		},
		h5: {
			fontSize: '1rem'
		},
		h6: {
			fontSize: '0.875rem'
		},
		subtitle1: {
			color: 'inherit'
		},
		subtitle2: {
			color: 'inherit'
		}
	},
	overrides: {
		MuiDrawer: {
			paper: {
				backgroundColor: palette.secondary.dark,
				color: palette.secondary.contrastText
			}
		},
		MuiDivider: {
			root: {
				borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
			}
		},
		MuiCardHeader: {
			root: {
				paddingTop: 8,
				paddingBottom: 8,
				backgroundColor: palette.secondary.dark
			},
			title: {
				color: palette.secondary.contrastText
			},
			subheader: {
				color: palette.secondary.contrastText
			},
			action: {
				marginTop: 'auto',
				color: palette.secondary.contrastText
			}
		},
		MuiButton: {
			root: {
				textTransform: 'none'
			},
			contained: {
				boxShadow: 'none'
			}
		},
		MuiFormLabel: {
			root: {
				color: 'rgba(0, 0, 0, 0.4)'
			}
		},
		MuiInputLabel: {
			shrink: {
				fontWeight: 600
			}
		},
		MuiListItemIcon: {
			root: {
				color: 'inherit',
				marginRight: 0
			}
		},
		MuiBadge: {
			badge: {
				width: 'auto',
				minWidth: 22,
				padding: '0 3px',
				borderRadius: 5
			}
		}
	}
});