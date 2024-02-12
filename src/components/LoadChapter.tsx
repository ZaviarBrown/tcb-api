"use client";

import { useEffect, useState } from "react";
// import BlankPanel from "./BlankPanel";
import { PacmanLoader } from "react-spinners";
export default function LoadChapter({
    chapters,
}: {
    chapters: JSX.Element | null;
}) {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setShowLoading(false), 2000);

        return () => clearTimeout(timeout);
    }, [chapters]);

    return (
        <>
            {showLoading && (
                <div className="absolute top-1/3">
                    <PacmanLoader size={50} color="#36d7b7" />
                </div>
            )}

            <div
                className={`
                    flex flex-col items-center transition-opacity
                    ${showLoading ? "opacity-0" : "opacity-100"} duration-500`}
            >
                {chapters}
            </div>
        </>
    );
}
