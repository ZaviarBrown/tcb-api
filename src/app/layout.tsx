import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Do you wanna fight?",
    description: "Yes I do",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex w-screen flex-col justify-center text-white">
                {children}
            </body>
        </html>
    );
}
