import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vaseStefanoska from "@/assets/vase-stefanoska.png";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">За Нас</h1>
            <p className="text-lg opacity-90">
              Вашиот партнер за сигурна иднина
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-primary">Нашата Мисија</h2>
                <p className="mb-4 text-lg text-muted-foreground">
                  Ваш Пријател АД-Осигурување е посветена на обезбедување квалитетни осигурителни услуги 
                  кои им даваат мир и сигурност на нашите клиенти. Со години искуство во индустријата, 
                  ние разбираме колку е важно да се заштити она што е најважно за вас.
                </p>
                <p className="text-lg text-muted-foreground">
                  Нашиот тим на професионалци е тука да ви помогне да ја најдете најдобрата осигурителна 
                  полиса која одговара на вашите потреби и буџет.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-primary">Наши Вредности</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-2 text-xl font-semibold">Доверба</h3>
                      <p className="text-muted-foreground">
                        Ги градиме односите базирани на доверба и транспарентност
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-2 text-xl font-semibold">Професионализам</h3>
                      <p className="text-muted-foreground">
                        Висок стандард на професионални услуги
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-2 text-xl font-semibold">Иновација</h3>
                      <p className="text-muted-foreground">
                        Користиме најнови технологии за подобри услуги
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="mb-2 text-xl font-semibold">Посветеност</h3>
                      <p className="text-muted-foreground">
                        Посветени на задоволството на нашите клиенти
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Team Section */}
              <div>
                <h2 className="mb-8 text-3xl font-bold text-primary">Наш Тим</h2>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="flex items-center justify-center bg-muted p-8">
                      <img
                        src={vaseStefanoska}
                        alt="Васе Стефаноска"
                        className="h-64 w-64 rounded-full object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-center p-8">
                      <h3 className="mb-2 text-2xl font-bold">Васе Стефаноска</h3>
                      <p className="mb-4 text-lg text-secondary">Директор</p>
                      <p className="text-muted-foreground">
                        Со над 20 години искуство во осигурителната индустрија, Васе е посветена 
                        на обезбедување најдобри решенија за нашите клиенти. Нејзината експертиза 
                        и посветеност им помагаат на стотици семејства да најдат соодветна заштита.
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
