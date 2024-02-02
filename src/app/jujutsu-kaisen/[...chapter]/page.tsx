import Image from "next/image";

const getPanels = (fullPage: string) => {
    const regex = /https:\/\/cdn.onepiecechapters.com.*?.jpg/g;

    const imgUrls = fullPage.match(regex);

    console.log(imgUrls);
    if (imgUrls) return imgUrls;
    else return null;
};

const getChapter = async (params: { chapter: string[] }) => {
    const { chapter } = params;

    const res = await fetch(`https://tcb.abhayaby.com/${chapter.join("/")}`);

    const fullPage = await res.text();

    const imgUrls = getPanels(fullPage);

    if (imgUrls) {
        return imgUrls.map((src, i) => {
            return (
                <Image
                    src={src}
                    key={i}
                    alt={`Page ${i + 1} of chapter`}
                    className="max-h-screen w-fit"
                    width={1000}
                    height={1000}
                />
            );
        });
    } else return null;
};

export default async function Chapter({
    params,
}: {
    params: { chapter: string[] };
}) {
    const imgUrls = await getChapter(params);

    return <div className="flex flex-col items-center">{imgUrls}</div>;
}
