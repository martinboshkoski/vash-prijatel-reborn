import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Phone, MessageCircle, ArrowRight, Share2, Bookmark, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const currentUrl = `https://vashprijatel.mk/blog/${id}`;

  // Convert Macedonian date format to ISO
  const convertMacedonianDate = (dateStr: string): string => {
    const monthMap: { [key: string]: string } = {
      'Јануари': '01', 'Февруари': '02', 'Март': '03', 'Април': '04',
      'Мај': '05', 'Јуни': '06', 'Јули': '07', 'Август': '08',
      'Септември': '09', 'Октомври': '10', 'Ноември': '11', 'Декември': '12'
    };

    // Parse "15 Јануари 2025" format
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = monthMap[parts[1]] || '01';
      const year = parts[2];
      return `${year}-${month}-${day}T12:00:00+02:00`; // Macedonia timezone
    }

    // Fallback to current date if parsing fails
    return new Date().toISOString();
  };

  const publishedDate = convertMacedonianDate(post.date);

  // Generate SEO keywords based on category and content
  const generateKeywords = () => {
    const baseKeywords = "осигурување, Прилеп, Македонија, Ваш Пријател";
    const categoryKeywords = {
      "Животно Осигурување": "животно осигурување, животно осигурување Прилеп, животно осигурување Македонија, полиса животно осигурување",
      "Авто Осигурување": "осигурување од автоодговорност, каско, АО ГО, осигурување за Вашиот автомобил Прилеп, каско осигурување Македонија",
      "Имотно Осигурување": "имотно осигурување, осигурување на дом, осигурување на куќа, имотно осигурување Прилеп",
      "Здравство": "здравствено осигурување, здравствена заштита, здравствено осигурување Прилеп, приватно здравствено осигурување",
      "Деловно Осигурување": "деловно осигурување, осигурување на фирма, бизнис осигурување, деловно осигурување Прилеп",
      "Патничко Осигурување": "патничко осигурување, патно осигурување, осигурување за патување, патничко осигурување Македонија"
    };

    return `${baseKeywords}, ${categoryKeywords[post.category as keyof typeof categoryKeywords] || post.category}`;
  };

  // Structured Data for Article (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${currentUrl}#article`,
        "headline": post.title,
        "description": post.excerpt,
        "image": post.coverImage,
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "author": {
          "@type": "Organization",
          "name": "Ваш Пријател АД",
          "url": "https://vashprijatel.mk",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vashprijatel.mk/logo.png"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ваш Пријател АД",
          "url": "https://vashprijatel.mk",
          "logo": {
            "@type": "ImageObject",
            "url": "https://vashprijatel.mk/logo.png"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Кузман Јосифоски Питу бр. 8",
            "addressLocality": "Прилеп",
            "postalCode": "7500",
            "addressCountry": "MK"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+389-48-400-098",
            "contactType": "customer service",
            "areaServed": "MK",
            "availableLanguage": "Macedonian"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        },
        "articleSection": post.category,
        "inLanguage": "mk-MK",
        "keywords": generateKeywords()
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Почетна",
            "item": "https://vashprijatel.mk"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Блог",
            "item": "https://vashprijatel.mk/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": currentUrl
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://vashprijatel.mk/#organization",
        "name": "Ваш Пријател АД",
        "image": "https://vashprijatel.mk/logo.png",
        "telephone": "+389-48-400-098",
        "email": "info@vashprijatel.mk",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Кузман Јосифоски Питу бр. 8",
          "addressLocality": "Прилеп",
          "postalCode": "7500",
          "addressCountry": "MK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.3443,
          "longitude": 21.551203
        },
        "url": "https://vashprijatel.mk",
        "priceRange": "$$",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 41.3443,
            "longitude": 21.551203
          },
          "geoRadius": "50000"
        }
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SEO
        title={`${post.title} | Ваш Пријател АД - Осигурување Прилеп`}
        description={`${post.excerpt} Стручен совет од експертите на Ваш Пријател АД Прилеп.`}
        image={post.coverImage}
        url={currentUrl}
        type="article"
        keywords={generateKeywords()}
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        article={{
          category: post.category,
          tags: [post.category, "осигурување", "Прилеп", "совети"]
        }}
        structuredData={structuredData}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 py-20 lg:py-28 text-primary-foreground">
          {post.coverImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-4xl">
              {/* Breadcrumbs */}
              <nav className="mb-8 flex items-center gap-2 text-sm text-primary-foreground/80" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary-foreground transition-colors">
                  Почетна
                </Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-primary-foreground transition-colors">
                  Блог
                </Link>
                <span>/</span>
                <span className="text-primary-foreground font-medium line-clamp-1">{post.category}</span>
              </nav>
              <Link to="/blog">
                <Button variant="ghost" size="sm" className="mb-8 hover:bg-primary-foreground/10 text-primary-foreground/80 hover:text-primary-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Сите статии
                </Button>
              </Link>
              <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-0 text-sm px-4 py-1.5">
                {post.category}
              </Badge>
              <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <Separator orientation="vertical" className="h-4 bg-primary-foreground/30" />
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} читање</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-12 gap-12">
                
                {/* Article Content */}
                <div className="lg:col-span-9">
                  {/* Article Body */}
                  <article
                    className="prose prose-lg lg:prose-xl max-w-none
                      prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                      prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border prose-h2:font-bold
                      prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-10 prose-h3:mb-4
                      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base prose-p:sm:text-lg prose-p:my-[10px]
                      prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-foreground prose-strong:font-semibold
                      prose-ul:my-8 prose-ul:space-y-3 prose-ul:pl-0
                      prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:text-base prose-li:sm:text-lg prose-li:pl-0
                      [&_ul]:list-none [&_li]:relative [&_li]:pl-8
                      [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2.5
                      [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:bg-primary [&_li]:before:rounded-full
                      [&_.lead]:text-lg [&_.lead]:sm:text-xl [&_.lead]:lg:text-2xl [&_.lead]:text-foreground
                      [&_.lead]:font-normal [&_.lead]:leading-relaxed [&_.lead]:mb-10
                      [&_.lead]:py-6 [&_.lead]:px-8 [&_.lead]:bg-muted/50 [&_.lead]:rounded-xl [&_.lead]:border-l-4 [&_.lead]:border-primary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Share Section */}
                  <div className="mt-16 pt-8 border-t border-border">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <p className="text-muted-foreground font-medium">Сподели ја статијата:</p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Share2 className="h-4 w-4" />
                          Сподели
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Bookmark className="h-4 w-4" />
                          Зачувај
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-3">
                  <div className="sticky top-8 space-y-8">
                    
                    {/* CTA Card */}
                    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                      <CardContent className="p-8">
                        <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-0">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-4">{post.ctaTitle}</h3>
                        <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
                          {post.ctaDescription}
                        </p>
                        <div className="space-y-3">
                          <Button asChild size="lg" variant="secondary" className="w-full justify-start">
                            <Link to="/contact">
                              <MessageCircle className="mr-3 h-5 w-5" />
                              Контактирајте нè
                            </Link>
                          </Button>
                          <Button asChild size="lg" variant="outline" className="w-full justify-start bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
                            <a href="tel:048400098">
                              <Phone className="mr-3 h-5 w-5" />
                              048 400 098
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Benefits Card */}
                    <Card className="border shadow-lg">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-4">Зошто да не изберете?</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">Бесплатна консултација без обврска</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">Персонализирани понуди за вашите потреби</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">Повеќе од 10 години искуство</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">Брза обработка на штети</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Related Posts */}
                    {blogPosts.filter((p) => p.id !== post.id && p.category === post.category).length > 0 && (
                      <div>
                        <h4 className="font-bold text-foreground mb-4">Поврзани статии</h4>
                        <div className="space-y-4">
                          {blogPosts
                            .filter((p) => p.id !== post.id && p.category === post.category)
                            .slice(0, 2)
                            .map((relatedPost) => (
                              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                                <Card className="group hover:shadow-lg transition-all border hover:border-primary/50 overflow-hidden">
                                  {relatedPost.coverImage && (
                                    <div className="h-32 overflow-hidden">
                                      <img 
                                        src={relatedPost.coverImage} 
                                        alt={relatedPost.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      />
                                    </div>
                                  )}
                                  <CardContent className="p-4">
                                    <h5 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                      {relatedPost.title}
                                    </h5>
                                    <p className="text-xs text-muted-foreground mt-2">{relatedPost.readTime} читање</p>
                                  </CardContent>
                                </Card>
                              </Link>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {post.ctaTitle}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                {post.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8">
                  <Link to="/contact">
                    {post.ctaButtonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8">
                  <a href="tel:048400098">
                    <Phone className="mr-2 h-5 w-5" />
                    Јавете се веднаш
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* More Articles */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Повеќе статии
                </h2>
                <Button asChild variant="outline">
                  <Link to="/blog">
                    Сите статии
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                      <Card className="h-full group hover:shadow-xl transition-all border hover:border-primary/50 overflow-hidden">
                        {relatedPost.coverImage && (
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={relatedPost.coverImage} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-3">
                            {relatedPost.category}
                          </Badge>
                          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-2 h-4 w-4" />
                            {relatedPost.readTime} читање
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
