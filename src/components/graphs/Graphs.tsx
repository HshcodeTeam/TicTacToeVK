import { useEffect, useState, useRef, FC } from "react";
import "./Graphs.css";

interface GrapshProps {
    size?: string;
    progress?: number;
    strokeWidth?: number;
}

export const Graphs: FC<GrapshProps> = ({ size, progress, strokeWidth }) => {
    const [offset, setOffset] = useState(0);


    const circleRef = useRef<SVGCircleElement>(null);

    const effectiveSize = size ?? "100";
    const effectiveStrokeWidth = strokeWidth ?? 1;
    const effectiveProgress = progress ?? 0;

    const coefficientCircle = 0.9;
    const coefficientFrame = 1.8;
    const fontSizing = "4rem";
    const fontX = 7;
    const fontY = 20;

    const center = parseInt(effectiveSize, 10) * coefficientCircle;
    const radius = parseInt(effectiveSize, 10) * coefficientCircle - effectiveStrokeWidth / coefficientCircle;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - effectiveProgress) / 100) * circumference;
        setOffset(progressOffset);

        if (circleRef.current) {
            circleRef.current.style.transition = "stroke-dashoffset 850ms ease-in-out";
        }
    }, [effectiveProgress, circumference]);



    return (
        <div style={{ padding: "3%" }}>
            <svg
                className="circular-chart"
                width={parseInt(effectiveSize, 10) * coefficientFrame}
                height={parseInt(effectiveSize, 10) * coefficientFrame}
            >
                <text
                    x={center + fontX}
                    y={center + fontY}
                    className="percentage"
                    fill="#4367A3"
                    fontSize={fontSizing}
                >
                    {effectiveProgress}%
                </text>
                <circle
                    className="circular-bg"
                    stroke="#fff"
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={effectiveStrokeWidth}
                ></circle>

                <circle
                    className="circle"
                    ref={circleRef}
                    stroke="#FB9CFF"
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={effectiveStrokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(180 ${center} ${center})`}
                ></circle>
                <circle
                    className="circle"
                    ref={circleRef}
                    stroke="#9244CE"
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={effectiveStrokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(90 ${center} ${center})`}
                ></circle>
                <circle
                    className="circle"
                    ref={circleRef}
                    stroke="#06EBFF"
                    fill="none"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={effectiveStrokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                ></circle>
            </svg>
        </div>
    );
};
