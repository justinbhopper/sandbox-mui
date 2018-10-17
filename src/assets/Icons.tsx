import * as React from "react";

import {
	createStyles, SvgIcon, WithStyles, withStyles
} from '@material-ui/core'

import classNames from 'classnames'

const styles = () => createStyles({
	root: {
		padding: 4
	},
	small: {
		padding: 2,
		borderRadius: 4,
		fontSize: 24
	},
	medium: {
		borderRadius: 6,
		fontSize: 32
	},
	large: {
		borderRadius: 10,
		fontSize: 40
	}
});

export interface IIconProps {
	fill?: string;
	stroke?: string;
	thickness?: number;
	className?: string;
	size?: 'small' | 'medium' | 'large';
}

interface ICustomIconProps extends IIconProps, WithStyles<typeof styles> {
	viewBox: string;
}

const CustomIcon = withStyles(styles)(
	class extends React.Component<ICustomIconProps> {
		public render() {
			const { classes, className, fill, size, stroke, thickness, viewBox } = this.props;

			const svgClass = size === 'small' ? classes.small : (size === 'large' ? classes.large : classes.medium);

			return (
				<SvgIcon strokeWidth={thickness} viewBox={viewBox} className={classNames(classes.root, svgClass, className)} 
					style={{
						backgroundColor: fill, 
						fill: stroke
					}}>
					{this.props.children}
				</SvgIcon>
			);
		}
	}
) 

export const RemarkableHealthIcon = (props: IIconProps) => (
	<CustomIcon viewBox="0 0 32 25" {...props}>
		<path d="M23.0086 0C18.0502 0 14.0168 4.01652 14.0168 8.95385C14.0168 13.4526 17.3662 17.1871 21.7118 17.8153L21.7118 22.4179L17.0653 22.4179C16.988 19.7862 14.8139 17.6686 12.1526 17.6686C9.49085 17.6686 7.31704 19.7862 7.23926 22.4179L2.59301 22.4179L2.59301 14.0172C2.59301 7.71174 7.74425 2.58212 14.0761 2.58212C14.7922 2.58212 15.3727 2.00402 15.3727 1.29093C15.3727 0.577845 14.7922 0 14.0761 0C6.31456 0 0 6.28805 0 14.0172L0 23.7088C0 24.4217 0.580281 25 1.29638 25L8.53363 25C9.24948 25 9.83026 24.4217 9.83026 23.7088L9.83026 22.5631C9.83026 21.2881 10.8718 20.2507 12.1526 20.2507C13.4328 20.2507 14.4748 21.2881 14.4748 22.5631L14.4748 23.7088C14.4748 24.4217 15.055 25 15.7711 25L23.0086 25C23.7245 25 24.305 24.4217 24.305 23.7088L24.305 16.6168C24.305 15.9037 23.7245 15.3256 23.0086 15.3256C19.4799 15.3256 16.6095 12.4672 16.6095 8.95385C16.6095 5.44046 19.4799 2.58212 23.0086 2.58212C26.5364 2.58212 29.4072 5.44046 29.4072 8.95385L29.4072 14.4872C29.4072 16.7256 28.2044 18.8265 26.269 19.9713C25.6529 20.3354 25.4503 21.1272 25.8158 21.7407C26.1807 22.3534 26.9771 22.5546 27.5924 22.1917C30.3109 20.5842 32 17.6322 32 14.4872L32 8.95385C32 4.01652 27.9665 0 23.0086 0" />
	</CustomIcon>
);