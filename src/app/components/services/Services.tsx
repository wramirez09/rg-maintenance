import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";
import './services.scss';

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <section className='services' > {children}</section>
}

export const Services = () => {
    return (
        <Wrapper>
            <Container fixed><h1>Services</h1></Container>
        </Wrapper>
    )
}

