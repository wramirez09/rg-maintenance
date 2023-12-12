import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
type Service = { title: string, label: string, imgPath: string }

const services: Service[] = [
    {
        title: 'Bathroom & kitchen remodeling',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Carpentry',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Drywall',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        title: 'Electrical',
        label: "lorem ipsum",
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Flooring',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'HVAC',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Painting',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Tile work',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Power washing',
        label: "Proident labore ullamco velit eu ipsum.",
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const Feature: React.FC<{ title: string, label: string }> = ({ title, label }) => {

    return <Grid className='services-feature' sx={{
        pl: 3
    }}>

        <h2>{title}</h2>
        <h3>{label}</h3>
        <p>Reprehenderit ullamco consectetur consequat minim Lorem est. Voluptate cupidatat non officia reprehenderit deserunt enim officia. Est adipisicing fugiat minim ipsum incididunt est.</p>
        <Button variant="outlined" size="small" color="primary">Learn More</Button>

    </Grid >
}

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    // const maxSteps = services.length / 3;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };


    return (

        <Container>
            <Grid item >
                <Grid item sx={{ mt: 3 }}>
                    <h2>Services</h2>
                </Grid>
                <Box sx={{ maxWidth: 400, }}>

                    {activeStep === services.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={() => setActiveStep(0)} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Box>
                <Box sx={{ my: 2 }}>
                    {services.map((step, index) => {
                        return <Button className="anchor" variant="text" focusRipple onClick={() => setActiveStep(index)}>{step.title}</Button>
                    })}
                </Box>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents

                >
                    {
                        services.map((step, index) => {
                            if ((activeStep - index) <= 2) {
                                return <Feature {...step} key={`${step.title}-${index}`} />
                            }
                        })
                    }
                </SwipeableViews>

            </Grid>
        </Container >

    );
}

export default Carousel;