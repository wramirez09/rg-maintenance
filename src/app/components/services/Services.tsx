'use client'
import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './services.scss';

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <section className='services' > {children}</section>
}

type SliderItem = {
    iconPath: string;
    header: string;
    subText: string;
}

const services: SliderItem[] =
    [{
        iconPath: "",
        header: "Remolding Experts",
        subText: "Specialize in bathroom and kitchen remodling"
    }, {
        iconPath: "",
        header: "Remolding Experts",
        subText: "Specialize in bathroom and kitchen remodling"
    }, {
        iconPath: "",
        header: "Remolding Experts",
        subText: "Specialize in bathroom and kitchen remodling"
    }, {
        iconPath: "",
        header: "Remolding Experts",
        subText: "Specialize in bathroom and kitchen remodling"
    }, {
        iconPath: "",
        header: "Remolding Experts",
        subText: "Specialize in bathroom and kitchen remodling"
    }, {
        iconPath: "",
        header: "Remolding Experts",
        subText: "Specialize in bathroom and kitchen remodling"
    }];

const responsive = {
    0: {
        items: 1,

    },
    568: {
        items: 2,

    },
    1024: {
        items: 3,

    },
};

export const mapServicesFeatureBoxs = () => {
    return services.map((feature, index) => {
        return <div className="item" data-value={index} key={`${feature.header}-${index}`}>
            <img src={feature.iconPath} />
            <h4>{feature.header}</h4>
            <p>{feature.subText}</p>
        </div>
    })
}

export const Services = () => {

    return (
        <Wrapper>
            <Container fixed><h1>Services</h1>
                <AliceCarousel autoWidth items={mapServicesFeatureBoxs()} responsive={responsive} />
            </Container>

        </Wrapper>
    )
}

