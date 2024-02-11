"use client";

import { useEffect, useState } from "react";
import BlankPanel from "./BlankPanel";
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
        <div className="flex flex-col items-center relative">
            {showLoading && (
                <div className={`w-full h-screen top-0`}>
                    <BlankPanel />
                </div>
            )}
            <div
                className={`
        flex flex-col items-center transition-opacity
        ${showLoading ? "opacity-0" : "opacity-100"} duration-500`}
            >
                {chapters}
            </div>
        </div>
    );
}
