import Link from "next/link";
import { getAllPosts } from "@/app/lib/getPosts";
import HeroSection from "@/components/BlogHero"


export default async function Blog() {
  const posts = getAllPosts(); // Fetch Markdown posts

  return (
    <div className="w-full min-h-screen">
      <HeroSection/>
     
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">All Posts</h2>
  <ol className="space-y-6">
    {posts.map((post, index) => (
      <li
        key={post.slug}
        className="p-6 bg-white rounded-lg shadow-md border border-gray-200 transition transform hover:scale-105"
      >
        <div className="flex items-start">
          {/* Display the ordered number */}
          <span className="text-xl font-bold text-gray-800 mr-3">{index + 1}.</span>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.metadata.title}
              </Link>
            </h3>
            <p className="text-gray-500 text-sm mt-1">{post.metadata.date}</p>
            <p className="mt-3 text-gray-700">{post.metadata.description}</p>
          </div>
        </div>
      </li>
    ))}
  </ol>
</div>
    </div>
  );
}
