import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Calendar } from "lucide-react";

export default function BlogPosts() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
