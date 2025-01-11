import { PortableText, type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await client.fetch(POST_QUERY, params);
  console.log(params.slug);

  return (
    <main className="container md:mx-12 min-h-screen max-w-3xl p-4 flex flex-col gap-4">
      <Link href="/blogs" className="hover:underline">
        ← Back to posts
      </Link>

      <h1 className="text-2xl md:text-4xl font-bold mb-2">{post.title}</h1>
      <Image
        src={urlFor(post.image).url()}
        alt={post.title || "Post Image"}
        className="w-full h-96 rounded-lg"
        width={20}
        height={20}
      />
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}
