

import { Container, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { StaticImageData } from 'next/image';

import * as React from 'react';
import './hero.scss';

export const Hero: React.FC<{ backgroundImage: StaticImageData }> = ({ backgroundImage }) => {
  return (
    <Box style={{ backgroundImage: `url(${backgroundImage.src})` }} className="hero">
      <Container fixed>
        <Typography variant="h1">One Stop Shop </Typography>
        <Typography variant="h4">Your trusted property maintenance and building construction partner</Typography>
        <div className='hero__container'>
          <Button variant='contained' >Get Quote Now</Button>
          <Button variant="contained" color="secondary">Learn More</Button>
        </div>
      </Container>

    </Box >
  )
}
