"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const op = "https://tcb.abhayaby.com/mangas/5/one-piece";
const jjk = "https://tcb.abhayaby.com/mangas/4/jujutsu-kaisen";

export default function Index() {
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
