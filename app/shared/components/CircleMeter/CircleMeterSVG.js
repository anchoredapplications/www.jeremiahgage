export default function CircleMeterSVG(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#f3ff00" />
                </linearGradient>
            </defs>
            <circle {...props} strokeLinecap="round" />
        </svg>
    );
}
