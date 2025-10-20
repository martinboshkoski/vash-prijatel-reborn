import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import heroBg from "@/assets/hero-bg.png";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Cover Image */}
        <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: post.coverImage ? `url(${post.coverImage})` : `url(${heroBg})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-4xl">
              <Link to="/blog">
                <Button variant="outline" size="sm" className="mb-6 bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground text-primary-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Назад до Блог
                </Button>
              </Link>
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} читање
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-primary text-center">
                Имате Прашања?
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <Phone className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Телефон</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">048 400 098</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Mail className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Е-маил</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">info@vashprijatel.mk</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MapPin className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Адреса</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      ул. Кузман Јосифоски Питу бр. 8 Прилеп
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <Button asChild size="lg">
                  <Link to="/contact">Контактирајте Нè</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                Поврзани Статии
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {blogPosts
                  .filter((p) => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                      <Card className="h-full border-border hover:border-primary transition-all hover:shadow-lg">
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit mb-2">
                            {relatedPost.category}
                          </Badge>
                          <CardTitle className="text-xl hover:text-primary transition-colors">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            {relatedPost.date}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
