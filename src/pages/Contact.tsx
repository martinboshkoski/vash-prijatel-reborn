import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.1!2d21.551203!3d41.3443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1356ebe13575df9f%3A0xa870a48a56a5f420!2z0JLQkNCo0JAg0J_QoNCY0IjQkNCi0JXQmyDQkNCUINCf0YDQuNC70LXQvw!5e0!3m2!1sen!2smk!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Локација на Ваш Пријател - Прилеп"
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
