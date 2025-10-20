import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Контакт</h1>
            <p className="text-lg opacity-90">
              Контактирајте нè за било какви прашања или понуди
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Испратете Порака</CardTitle>
                  <CardDescription>
                    Пополнете ја формата и ние ќе ве контактираме најбрзо можно
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          Име
                        </label>
                        <Input id="firstName" placeholder="Вашето име" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Презиме
                        </label>
                        <Input id="lastName" placeholder="Вашето презиме" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Е-маил
                      </label>
                      <Input id="email" type="email" placeholder="vasha@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон
                      </label>
                      <Input id="phone" type="tel" placeholder="+389 XX XXX XXX" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Порака
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Вашата порака..."
                        className="min-h-32"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Испрати Порака
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Контакт Информации</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Телефон</h3>
                        <p className="text-muted-foreground">048 400 098</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Е-маил</h3>
                        <p className="text-muted-foreground">info@vashprijatel.mk</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Адреса</h3>
                        <p className="text-muted-foreground">
                          ул. Кузман Јосифоски Питу бр. 8 Прилеп
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Работно Време</h3>
                        <p className="text-muted-foreground">
                          Понеделник - Петок: 08:00 - 16:00
                          <br />
                          Сабота: 09:00 - 13:00
                          <br />
                          Недела: Затворено
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Локација</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47621.54676834717!2d21.38900895!3d41.99645975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541455e3a0b0d5%3A0x7a1e7b5c5b5e7a1e!2sSkopje!5e0!3m2!1sen!2smk!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Локација на Ваш Пријател"
                      ></iframe>
                    </div>
                  </CardContent>
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

export default Contact;
