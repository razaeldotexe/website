import { useContent } from "@/components/content-provider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Blog = () => {
  const { posts } = useContent();

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">
          Welcome to my blog! Here I share my thoughts on various topics.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            No posts yet. Check back later!
          </div>
        ) : (
          posts.map((post) => {
            // Strip markdown for preview
            const plainText = post.content.replace(/[#*`_~\[\]()]/g, "");
            const preview =
              plainText.length > 150
                ? plainText.substring(0, 150) + "..."
                : plainText;

            return (
              <article
                key={post.id}
                className="p-6 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="mb-4 text-foreground/80">{preview}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/blog/${post.id}`}>Read More →</Link>
                </Button>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Blog;
