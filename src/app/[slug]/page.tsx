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
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>

      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
        <Image
          src={urlFor(post.image).url()}
          alt={post.title || "Post Image"}
          className="w-12 h-12"
          width={20}
          height={20}
        />
      </div>
    </main>
  );
}
