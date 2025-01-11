import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Card from "../components/Card";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}`;
const options = { next: { revalidate: 30 } };

export default async function Page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen  p-8">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <ul className="flex flex-col gap-y-8">
        {posts.map((post) => (
          <li key={post._id} className="flex gap-4">
            <Card
              imageSrc={urlFor(post.image).url()}
              title={post.title}
              body={post.body[0].children[0].text}
              href={`/${post.slug.current}`}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
