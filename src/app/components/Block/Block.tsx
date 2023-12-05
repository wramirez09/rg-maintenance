import awardIcon from '../../../../public/assets/img/award.svg';
import people from '../../../../public/assets/img/clarity_users-line.svg';
import locationsIcon from '../../../../public/assets/img/locations.svg';
import propsIcon from '../../../../public/assets/img/props.svg';
import { Feature, StatsBox } from "../stats/Stats";
import './block.scss';
export interface IBlockProps {

}
const features: Feature[] = [
    {
        imgSrc: people.src,
        stat: "500+",
        text: "truly satisfied Clients"
    },
    {
        imgSrc: propsIcon.src,
        stat: "1000+",
        text: "Successful Properties Serviced"
    },
    {
        imgSrc: locationsIcon.src,
        stat: "1,000's",
        text: "local & regional locations serviced"
    },
    {
        imgSrc: awardIcon.src,
        stat: "100%",
        text: "Quality Assured Service"
    }
]
export function Block() {
    return (
        <>
            <div className='block'>
            </div>
            <StatsBox features={features} />
        </>

    );
}
