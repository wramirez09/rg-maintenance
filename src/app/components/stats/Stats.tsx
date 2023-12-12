import { Container, Grid } from '@mui/material';
import React from 'react';
import './stats.scss';

export type Feature = {
    imgSrc: string;
    stat: string;
    text: string;
}

const FeatureBox: React.FC<Feature> = ({ imgSrc = "", stat = "200", text = "lorem" }) => {

    return <Grid alignItems='center' justifyContent="center" sx={{ gap: '1.25rem' }} className='stats__featureBox'>
        <Grid item className='stats__icon'><img src={imgSrc} /></Grid>
        <Grid item className='stats__feature-copybox' xs={7}>
            <h3 className='stats__feature-stat'>{stat}</h3>
            <p className='stats__feature-copy'>{text}</p>
        </Grid>
    </Grid>
}

export const StatsBox: React.FC<{ features: Feature[] }> = ({ features }) => {
    return (
        <Grid className='stats__wrapper'>
            <Container className='stats__inner-wrapper'>
                {features.length && features.map((feature) => {
                    return <FeatureBox imgSrc={feature.imgSrc} stat={feature.stat} text={feature.text} />
                })}
            </Container>
        </Grid>
    )
};

