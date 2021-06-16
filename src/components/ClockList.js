import Clock from './Clock';

export default function ClockList({ quantity = [] }) {
    return (
        <>
            {quantity.map((key) => (
                <Clock key={key} />
            ))}
        </>
    );
}
