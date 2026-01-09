import { Link } from "react-router-dom";
import { Shield, Users, Clock, Award, CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
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

  const services = [
    { name: "Животно Осигурување", description: "Финансиска сигурност за вашето семејство" },
    { name: "Осигурување на автоодговорност", description: "Законска обврска за секој возач" },
    { name: "Каско осигурување", description: "Комплетна заштита за вашето возило" },
    { name: "Имотно Осигурување", description: "Заштита на вашиот дом и имот" },
    { name: "Здравствено Осигурување", description: "Пристап до квалитетна здравствена нега" },
    { name: "Патничко Осигурување", description: "Безгрижно патување секогаш" },
    { name: "Осигурување од пожар и природни непогоди", description: "Заштита на вашиот дом и имот од пожар и природни непогоди" },
    { name: "Осигурување на посеви и плодови", description: "Заштита на Вашата макотрпна работа" },
    { name: "Останати видови осигурување", description: "Сите останати видови на неживотно осигурување" },
  ];

  const stats = [
    { number: "10+", label: "Години Искуство" },
    { number: "5000+", label: "Задоволни Клиенти" },
    { number: "24/7", label: "Поддршка" },
    { number: "100%", label: "Посветеност" },
  ];

  // Local Business Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": "https://vashprijatel.mk/#organization",
    "name": "Ваш Пријател АД",
    "alternateName": "Vash Prijatel AD",
    "url": "https://vashprijatel.mk",
    "logo": "https://vashprijatel.mk/logo.png",
    "image": "https://vashprijatel.mk/hero-bg.png",
    "description": "Ваш Пријател АД е водечка компанија за осигурување во Прилеп, Македонија. Нудиме животно, автомобилско, имотно, здравствено, деловно и патничко осигурување со повеќе од 10 години искуство.",
    "telephone": "+389-48-400-098",
    "email": "info@vashprijatel.mk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Кузман Јосифоски Питу бр. 8",
      "addressLocality": "Прилеп",
      "addressRegion": "Пелагониски регион",
      "postalCode": "7500",
      "addressCountry": "MK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3443,
      "longitude": 21.551203
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Прилеп"
      },
      {
        "@type": "Country",
        "name": "Македонија"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги за Осигурување",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Животно Осигурување",
            "description": "Финансиска сигурност за вашето семејство"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Осигурување на автоодговорност",
            "description": "Комплетна заштита за вашето возило - Каско, АО/ГО, Мини Каско"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Имотно Осигурување",
            "description": "Заштита на вашиот дом и имот"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Здравствено Осигурување",
            "description": "Пристап до квалитетна здравствена нега"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Деловно Осигурување",
            "description": "Заштита за вашиот бизнис"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Патничко Осигурување",
            "description": "Безгрижно патување секогаш"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "sameAs": [
      "https://www.facebook.com/vashprijatel"
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SEO
        title="Ваш Пријател АД - Осигурување Прилеп | Животно, Автомобилско, Имотно, Здравствено"
        description="Водечка компанија за осигурување во Прилеп, Македонија. Нудиме животно, автомобилско, имотно, здравствено, деловно и патничко осигурување. Повеќе од 10 години искуство. ☎ 048 400 098"
        url="https://vashprijatel.mk/"
        type="website"
        keywords="осигурување Прилеп, животно осигурување, осигурување на автоодговорност, каско, АО ГО, имотно осигурување, здравствено осигурување, деловно осигурување, патничко осигурување, Ваш Пријател, осигурување Македонија, осигурителна компанија Прилеп"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 py-20 lg:py-32 text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                Вашиот Доверлив Партнер за Осигурување
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Заштита За Она Што Најмногу Ви Значи
              </h1>
              <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed">
                Со повеќе од 10 години искуство, нудиме сеопфатни решенија за осигурување приспособени на вашите потреби. Вашата сигурност е наш приоритет.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button asChild size="lg" variant="secondary" className="text-base px-8">
                  <Link to="/services">
                    Погледнете Услуги
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground text-primary-foreground text-base px-8">
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Контактирајте Нè
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Бесплатна Консултација</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Брза Обработка</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Стручна Поддршка</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                <h3 className="text-2xl font-bold mb-6">Прашајте го нашиот AI асистент</h3>
                <p className="text-lg opacity-90 mb-6">
                  Добијте моментални одговори на вашите прашања за осигурување. Нашиот AI асистент е достапен 24/7.
                </p>
                <div className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/20">
                  <p className="text-sm opacity-75 mb-4">Кликнете на иконата за разговор во долниот десен агол 👉</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">AI Асистент</p>
                      <p className="text-sm opacity-75">Секогаш достапен за помош</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-primary-foreground/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">Наши Услуги</Badge>
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-primary">Сеопфатни Решенија за Осигурување</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Од животно до секое неживотно осигурување, нудиме широк спектар на услуги приспособени на вашите потреби
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button asChild variant="ghost" size="sm" className="group-hover:text-primary">
                    <Link to="/services">
                      Дознајте повеќе
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                Погледнете Ги Сите Услуги
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-primary">Зошто Да Не Изберете?</h2>
            <p className="text-lg text-muted-foreground">
              Вашиот доверлив партнер за осигурување
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all hover:shadow-lg text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold">
            Заштитете Го Она Што Ви е Најважно
          </h2>
          <p className="mb-8 text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Контактирајте нè денес за бесплатна консултација и персонализирана понуда приспособена на вашите потреби
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <Link to="/contact">
                Побарајте Понуда
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground text-primary-foreground text-base px-8">
              <a href="tel:048400098">
                <Phone className="mr-2 h-5 w-5" />
                048 400 098
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
