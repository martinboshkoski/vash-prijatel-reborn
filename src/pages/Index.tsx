import { Link } from "react-router-dom";
import { Shield, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Сигурност",
      description: "Најдобра заштита за вас и вашето семејство",
    },
    {
      icon: Users,
      title: "Искусен Тим",
      description: "Професионален тим со години искуство",
    },
    {
      icon: Clock,
      title: "Брза Обработка",
      description: "Ефикасна и брза обработка на барања",
    },
    {
      icon: Award,
      title: "Квалитет",
      description: "Висок квалитет на услуги и поддршка",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Вашиот Пријател за Сигурна Иднина
            </h1>
            <p className="mb-8 text-lg md:text-xl opacity-90">
              Осигурување што ви дава мир и сигурност за вас и вашите најблиски
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/services">Наши Услуги</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground text-primary-foreground">
                <Link to="/contact">Контактирајте Нè</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Зошто Ние?</h2>
            <p className="text-muted-foreground">
              Вашиот доверлив партнер за осигурување
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Заштитете Го Она Што е Најважно
          </h2>
          <p className="mb-8 text-muted-foreground">
            Контактирајте нè денес за бесплатна консултација
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Побарајте Понуда</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
