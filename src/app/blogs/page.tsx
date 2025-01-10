import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_QUERY = `*[ _type == "post" && defined(slug.current) ]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  image
}`;
const options = { next: { revalidate: 30 } };

export default async function Page() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-8">
        {posts.map((post) => (
          <li key={post._id} className="flex gap-4">
            <Image
              src={urlFor(post.image).url()}
              alt={post.title || "Post Image"}
              className="w-12 h-12"
              width={20}
              height={20}
            />
            <div>
              <Link href={`/${post.slug.current}`}>
                <h2 className="text-xl font-semibold hover:underline">
                  {post.title}
                </h2>
                <p>{post.body}</p>
              </Link>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
