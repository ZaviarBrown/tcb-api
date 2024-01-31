import Image from "next/image";

const getPage = async () => {
    const res = await fetch(
        "https://tcb.abhayaby.com/chapters/1899/jujutsu-kaisen-chapter-61-review-1688065291?date=31-1-2024-2",
    );

    const fullPage = await res.text();
    let content = fullPage.slice(
        fullPage.indexOf("https://cdn.onepiecechapters.com"),
        fullPage.lastIndexOf("</picture>"),
    );

    const imgURLs: string[] = [];

    let start = content.indexOf("https://cdn.onepiecechapters.com");

    while (start !== -1) {
        const end = content.indexOf('" alt=');

        imgURLs.push(content.slice(start, end));

        content = content.slice(end);

        start = content.indexOf("https://cdn.onepiecechapters.com");

        content = content.slice(start);
        start = content.indexOf("https://cdn.onepiecechapters.com");
    }
    return imgURLs;
};

export default async function Page() {
    const page = await getPage();

    console.log(page);

    return (
        <>
            <h1>Hey</h1>
            <Image
                src={
                    "https://cdn.onepiecechapters.com/file/CDN-M-A-N/op_1105_d_001.png"
                }
                alt="chapter"
                fill
            />
        </>
    );
}
