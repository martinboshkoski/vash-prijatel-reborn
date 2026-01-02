import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Home, Heart, Briefcase, Users, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Автомобилско Осигурување",
      description: "Комплетна заштита за вашето возило - каско и автоодговорност",
      features: ["Каско осигурување", "Автоодговорност", "Помош на пат", "Брза ликвидација на штети"],
    },
    {
      icon: Home,
      title: "Имотно Осигурување",
      description: "Заштитете го вашиот дом и имот од непредвидени настани",
      features: ["Станбен простор", "Куќи и викендици", "Опрема", "Одговорност"],
    },
    {
      icon: Heart,
      title: "Животно Осигурување",
      description: "Финансиска сигурност за вас и вашето семејство",
      features: ["Осигурување на живот", "Дополнително здравствено", "Спестување", "Пензија"],
    },
    {
      icon: Briefcase,
      title: "Осигурување на Вашата бизнис дејност",
      description: "Комплетни решенија за вашиот бизнис",
      features: ["Имот", "Одговорност", "Вработени", "Прекин на работа"],
    },
    {
      icon: Users,
      title: "Здравствено Осигурување",
      description: "Пакети за целото семејство",
      features: ["Здравствено покритие", "Незгоди", "Патничко осигурување", "Флексибилни пакети"],
    },
    {
      icon: Shield,
      title: "Специјализирано Осигурување",
      description: "Прилагодени решенија за специфични потреби",
      features: ["Градежништво", "Транспорт", "Земјоделство", "Професионална одговорност"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Наши Услуги</h1>
            <p className="text-lg opacity-90">
              Широк спектар на осигурителни услуги за сите ваши потреби
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
              Не сте сигурни што ви треба?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Контактирајте нè за бесплатна консултација и ќе ви помогнеме да го најдете најдобриот пакет за вас
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
