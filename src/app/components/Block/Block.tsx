import { StatsBox } from "../stats/Stats";

export interface IBlockProps {

}

export function Block() {
    return (
        <div style={{ width: '100%', height: '5rem', backgroundColor: 'red', }}>
            <StatsBox />
        </div>
    );
}
