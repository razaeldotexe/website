import { useParams, Link, useNavigate } from "react-router-dom";
import { useContent } from "@/components/content-provider";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const { posts } = useContent();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 text-center py-20">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p className="text-muted-foreground">
          The blog post you're looking for doesn't exist.
        </p>
        <Button variant="outline" asChild>
          <Link to="/blog">← Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <article className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="whitespace-pre-wrap text-foreground leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
