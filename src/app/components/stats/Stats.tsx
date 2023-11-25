import { Container, Grid } from '@mui/material';
import React from 'react';
import icon from '../../../../public/assets/img/clarity_users-line.svg';
import './stats.scss';

const FeatureBox: React.FC<{ imgSrc: string, stat: string, text: string }> = ({ imgSrc = "", stat = "200", text = "lorem" }) => {

    return <div className='stats__feature'>
        <img src={imgSrc} />
        <div className='stats__feature-copybox'>
            <h3 className='stats__feature-stat'>{stat}</h3>
            <p className='stats__feature-copy'>{text}</p>
        </div>
    </div>
}

export const StatsBox: React.FC<unknown> = () => {
    return (
        <Grid className='stats__wrapper'>
            <Container className='stats__inner-wrapper'>
                <FeatureBox imgSrc={icon.src} stat='300' text='lorem ipsum' />
                <FeatureBox imgSrc={icon.src} stat='300' text='lorem ipsum' />
                <FeatureBox imgSrc={icon.src} stat='300' text='lorem ipsum' />
                <FeatureBox imgSrc={icon.src} stat='300' text='lorem ipsum' />
            </Container>
        </Grid>
    )
};

