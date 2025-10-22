import { Link } from "react-router-dom";
import { Shield, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.png";

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

      {/* Hero Section with Chatbot */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                Вашиот Пријател за Сигурна Иднина
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Прашајте го нашиот AI асистент за било што поврзано со осигурување
              </p>
            </div>
            
            {/* Chat Interface */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-1">
                  <textarea
                    placeholder="Напишете ја вашата порака овде... (на пр. Кои видови осигурување нудите?)"
                    className="w-full min-h-[120px] p-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Напишете ја вашата порака и притиснете Испрати
                </p>
                <Button size="lg" className="px-8">
                  Испрати
                </Button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
