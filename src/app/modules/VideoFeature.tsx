'use client';
import { Container, Grid, Icon } from '@mui/material';

const VideoFeature = () => {
	return (
		<Container fixed>
			<h4>Lorem ipsum dolor sit amet consectetur</h4>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quam
				est,impedit ducimus possimus quidem necessitatibus voluptate commodi. Ea aut,
				nulla quod laudantium in soluta!
			</p>
			<Grid container>
				<Grid
					item
					xs={5}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<video controls width="100%" height="auto">
						<source
							src="https://youtu.be/eNjArt64APQ?si=KpZ2tWu_nqknwznM"
							type="video/webm"
						/>
						<source
							src="https://youtu.be/eNjArt64APQ?si=KpZ2tWu_nqknwznM"
							type="video/mp4"
						/>
					</video>
				</Grid>

				<Grid item xs={5}>
					<h5>Lorem ipsum dolor sit</h5>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptas
						ut, sint dolor, modi id earum hic minus placeat tenetur quibusdam
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
			</Grid>
		</Container>
	);
};

export default VideoFeature;
