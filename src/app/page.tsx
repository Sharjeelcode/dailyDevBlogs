import { client } from "@/sanity/lib/client";
import Header from "./components/Header";
import Image from "next/image";
import Btn from "./components/Btn";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  body: any;
};

export default async function Home() {
  const query = '*[_type == "post"]';
  const posts: Post[] = await client.fetch(query);
  const postData = await JSON.stringify(posts);
  console.log(postData);

  return (
    <>
      <div className="text-center flex flex-col items-center justify-center h-[90vh] gap-2 px-2">
        <h2 className="text-3xl md:text-[40px] font-bold leading-snug">
          Where developers
          <br />
          <span className="text-5xl md:text-[60px] font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            suffer together
          </span>
        </h2>
        <h1></h1>
        <p className="text-lg md:text-xl">
          We know how hard it is to be a developer. It doesn’t have to be.
          <br />
          Personalized news feed, dev communities and search, much better than
          what’s <br /> out there. Maybe ;)
        </p>
        <Link href="/blogs">
          <Btn content={"Start Reading Blogs"} />
        </Link>
      </div>
    </>
  );
}
