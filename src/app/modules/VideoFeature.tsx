'use client';
import { useTheme } from '@emotion/react';
import { Container, Grid, Icon } from '@mui/material';
type Props = {};

const VideoFeature = (props: Props) => {
	const theme = useTheme();
	return (
		<Container fixed>
			<h4>Lorem ipsum dolor sit amet consectetur</h4>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quam
				est,impedit ducimus possimus quidem necessitatibus voluptate commodi. Ea aut,
				nulla quod laudantium in soluta!
			</p>
			<Grid container>
				<Grid item>
					<video
						src="https://youtu.be/eNjArt64APQ?si=KpZ2tWu_nqknwznM"
						width="100%"
						height="100%"
					/>
				</Grid>
			</Grid>

			<Grid item>
				<h5>Lorem ipsum dolor sit</h5>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptas ut,
					sint dolor, modi id earum hic minus placeat tenetur quibusdam
				</p>
				<ul>
					<li>
						<Icon /> Lorem ipsum dolor sit amet consectetur adipisicing
					</li>
					<li>
						<Icon /> Lorem ipsum dolor sit amet consectetur adipisicing
					</li>
					<li>
						<Icon /> Lorem ipsum dolor sit amet consectetur adipisicing
					</li>
				</ul>
			</Grid>
		</Container>
	);
};

export default VideoFeature;
