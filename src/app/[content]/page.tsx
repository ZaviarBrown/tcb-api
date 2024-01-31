"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
    const { content } = useParams();
    return (
        <>
            <h1>Hey</h1>
            <Link href={`/${(content as string) || "jujutsu-kaisen"}/61`}>
                61
            </Link>
        </>
    );
}
