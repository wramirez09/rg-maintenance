import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { StaticImageData } from 'next/image';

import * as React from 'react';
import './hero.scss';

export const Hero: React.FC<{ backgroundImage: StaticImageData }> = ({
	backgroundImage,
}) => {
	return (
		<Box style={{ backgroundImage: `url(${backgroundImage.src})` }} className="hero">
			<Container fixed>
				<h1>
					One Stop<span>&nbsp;Property Maintenance</span>{' '}
				</h1>
				<h2>Your trusted property maintenance and building construction partner</h2>
				<br />
				<div className="hero__btn-container">
					<Button variant="contained" size="medium">
						Get Quote Now
					</Button>
					<Button variant="contained" size="medium" color="secondary">
						Learn More
					</Button>
				</div>
			</Container>
		</Box>
	);
};
