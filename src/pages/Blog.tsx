import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Зошто е важно животното осигурување?",
      excerpt: "Животното осигурување не е само полиса, туку инвестиција во финансиската сигурност на вашето семејство...",
      category: "Животно Осигурување",
      date: "15 Јануари 2025",
      readTime: "5 мин",
    },
    {
      id: 2,
      title: "Како да изберете правилно автомобилско осигурување",
      excerpt: "Изборот на правилно автомобилско осигурување може да биде предизвик. Еве водич за она што треба да го знаете...",
      category: "Авто Осигурување",
      date: "10 Јануари 2025",
      readTime: "7 мин",
    },
    {
      id: 3,
      title: "Топ 5 причини зошто ви треба имотно осигурување",
      excerpt: "Вашиот дом е веројатно вашата најголема инвестиција. Дознајте зошто е важно да го заштитите...",
      category: "Имотно Осигурување",
      date: "5 Јануари 2025",
      readTime: "6 мин",
    },
    {
      id: 4,
      title: "Здравствено осигурување: Што треба да знаете",
      excerpt: "Здравствените трошоци можат да бидат значителни. Дознајте како правилното здравствено осигурување може да ви помогне...",
      category: "Здравство",
      date: "1 Јануари 2025",
      readTime: "8 мин",
    },
    {
      id: 5,
      title: "Осигурување за бизнис: Заштита на вашата компанија",
      excerpt: "Секој бизнис се соочува со ризици. Дознајте како правилното осигурување може да ја заштити вашата компанија...",
      category: "Деловно Осигурување",
      date: "28 Декември 2024",
      readTime: "10 мин",
    },
    {
      id: 6,
      title: "Патно осигурување: Безбедно патување",
      excerpt: "Планирате патување? Дознајте зошто патното осигурување е есенцијално за безгрижно патување...",
      category: "Патно Осигурување",
      date: "20 Декември 2024",
      readTime: "4 мин",
    },
  ];

  const categories = [
    "Сите",
    "Животно Осигурување",
    "Авто Осигурување",
    "Имотно Осигурување",
    "Здравство",
    "Деловно Осигурување",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Блог</h1>
            <p className="text-lg opacity-90">
              Совети, водичи и најнови информации од светот на осигурувањето
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Сите" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="h-full border-border hover:border-primary transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-3 flex items-center justify-between">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {post.date}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Останете Информирани
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Претплатете се на нашиот билтен за најнови совети и понуди
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
