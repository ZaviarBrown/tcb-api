import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
            {/* <Link href={"/one-piece"}>One Piece</Link> */}
            <Link href={"/jujutsu-kaisen"}>Jujutsu Kaisen</Link>
        </div>
    );
}
