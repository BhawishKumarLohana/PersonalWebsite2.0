import { getPostBySlug, getAllPosts } from "@/app/lib/getPosts";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params: { slug } }) {
    const { metadata, content } = getPostBySlug(slug);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();
    console.log(contentHtml);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      {/* Blog Post Title */}
      <h1 className="text-5xl font-bold text-center mb-4">{metadata.title}</h1>
      
      {/* Blog Post Date */}
      <p className="text-gray-500 text-center mb-6">{metadata.date}</p>
      
      {/* Blog Post Content */}
      <div 
        className="mt-6 prose prose-lg mx-auto" 
        dangerouslySetInnerHTML={{ __html: processedContent.toString() }} 
      />
    </div>
  );
}