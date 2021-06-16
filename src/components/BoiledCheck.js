export default function BoiledCheck({ temparature = 0, scale = 'c' }) {
    if (scale === 'c' && temparature >= 100) {
        return <p>Water will be boiled</p>;
    }
    if (scale === 'f' && temparature >= 212) {
        return <p>Water will be boiled</p>;
    }
    return <p>Water will not boiled.</p>;
}
