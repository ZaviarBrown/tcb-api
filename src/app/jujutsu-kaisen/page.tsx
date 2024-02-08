import Link from "next/link";

const getChapterList = async () => {
    const regex = /\/chapters\/\d+/g;
    const res = await fetch("https://tcb.abhayaby.com/mangas/4/jujutsu-kaisen");

    const fullPage = await res.text();

    const chapters = fullPage.match(regex);

    console.log(chapters);
    if (chapters) return chapters.reverse();
    else return null;
};

export default async function TableOfContents() {
    const chapterList = await getChapterList();

    return (
        <div className="grid grid-cols-3 gap-4 px-4 py-10">
            {chapterList
                ? chapterList.map((chapter: string, i: number) => {
                      return (
                          <Link href={`/jujutsu-kaisen${chapter}`} key={i}>
                              Chapter {i + 1}
                          </Link>
                      );
                  })
                : null}
        </div>
    );
}