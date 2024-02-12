import Image from "next/image";
import Link from "next/link";
import LoadChapter from "~/components/LoadChapter";

const getPanels = (fullPage: string) => {
    const regex = /https:\/\/cdn.onepiecechapters.com.*?\.(jpg|png)/g;

    const imgUrls = fullPage.match(regex);

    if (imgUrls) return imgUrls;
    else return null;
};

const getNavigation = (fullPage: string) => {
    const regex = /(?<=")(\/chapters|\/mangas).*?(?=")/g;

    const reqUrls = fullPage.match(regex);

    if (reqUrls) return reqUrls;
    else return null;
};

const getChapter = async (params: { chapter: string[] }) => {
    const { chapter } = params;

    const res = await fetch(`https://tcb.abhayaby.com/${chapter.join("/")}`);

    const fullPage = await res.text();

    const imgUrls = getPanels(fullPage);
    const navigation = getNavigation(fullPage);
    const panels = imgUrls
        ? imgUrls.map((src, i) => {
              return (
                  <Image
                      src={src}
                      key={i}
                      alt={`Page ${i + 1} of chapter`}
                      className="w-5/6"
                      width={1000}
                      height={1000}
                  />
              );
          })
        : null;
    const nav = navigation
        ? [
              <Link
                  key={"home"}
                  className="border-r break-words px-2 border-slate-500 "
                  href={"/"}
              >
                  Home
              </Link>,
              ...navigation.slice(0, navigation.length / 2).map((url, i) => {
                  if (url.includes("mangas")) {
                      return (
                          <Link
                              className="break-words px-2"
                              key={i}
                              href="/jujutsu-kaisen"
                          >
                              All
                          </Link>
                      );
                  }

                  if (i === 0 && url.includes("chapters")) {
                      return (
                          <Link
                              key={i}
                              className="border-r break-words px-2 border-slate-500 "
                              href={`/jujutsu-kaisen${url}`}
                          >
                              Prev
                          </Link>
                      );
                  }

                  if (url.includes("chapters")) {
                      return (
                          <Link
                              className="break-words px-2 border-l border-slate-500"
                              key={i}
                              href={`/jujutsu-kaisen${url}`}
                          >
                              Next
                          </Link>
                      );
                  }
              }),
          ]
        : null;

    if (imgUrls && navigation) {
        return (
            <>
                <nav className="flex gap-2 shrink bg-[#1C1C1E] border border-slate-200 rounded-lg p-2 m-5">
                    {nav}
                </nav>
                {panels}
                <nav className="flex gap-2 shrink bg-[#1C1C1E] border border-slate-200 rounded-lg p-2 m-5">
                    {nav}
                </nav>
            </>
        );
    } else return null;
};

export default async function Chapter({
    params,
}: {
    params: { chapter: string[] };
}) {
    const imgUrls = await getChapter(params);

    return <LoadChapter chapters={imgUrls} />;
}
