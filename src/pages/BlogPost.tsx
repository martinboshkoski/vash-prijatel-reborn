import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

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
        <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
          {post.coverImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-4xl">
              <Link to="/blog">
                <Button variant="outline" size="sm" className="mb-6 bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Назад до Блог
                </Button>
              </Link>
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
                {post.category}
              </Badge>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm opacity-90">
                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} читање
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.coverImage && (
          <section className="relative -mt-8 pb-8">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <article 
                className="prose prose-lg max-w-none 
                  prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-12 prose-headings:mb-6
                  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                  prose-h3:text-xl prose-h3:md:text-2xl
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-li:text-muted-foreground prose-li:leading-relaxed
                  [&_.lead]:text-xl [&_.lead]:md:text-2xl [&_.lead]:text-foreground [&_.lead]:font-medium [&_.lead]:leading-relaxed [&_.lead]:mb-8 [&_.lead]:border-l-4 [&_.lead]:border-primary/30 [&_.lead]:pl-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Category-Specific CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-3 p-8 md:p-12">
                    <Badge variant="secondary" className="mb-4">
                      {post.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {post.ctaTitle}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {post.ctaDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="group">
                        <Link to="/contact">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          {post.ctaButtonText}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <a href="tel:048400098">
                          <Phone className="mr-2 h-5 w-5" />
                          048 400 098
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-primary/10 p-8 md:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">1</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Бесплатна консултација</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">2</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Персонализирана понуда</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">3</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Брза активација на полиса</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Поврзани Статии
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {blogPosts
                  .filter((p) => p.id !== post.id && p.category === post.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                      <Card className="h-full border-border hover:border-primary transition-all hover:shadow-xl group overflow-hidden">
                        {relatedPost.coverImage && (
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={relatedPost.coverImage} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <Badge variant="secondary" className="w-fit mb-2">
                            {relatedPost.category}
                          </Badge>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
