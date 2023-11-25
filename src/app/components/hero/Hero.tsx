

import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { StaticImageData } from 'next/image';

import * as React from 'react';
import './hero.scss';

export const Hero: React.FC<{ backgroundImage: StaticImageData }> = ({ backgroundImage }) => {
  return (
    <Box style={{ backgroundImage: `url(${backgroundImage.src})` }} className="hero">
      <Container fixed>
        <Typography variant="h1">One Stop Shop </Typography>
        <p>Your trusted property maintenance and <br />building construction partner</p>
        <div className='hero__container'>
          <Button variant='contained' size="small" >Get Quote Now</Button>
          <Button variant="contained" size="small" color="secondary">Learn More</Button>
        </div>
      </Container>
    </Box >
  )
}
