import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Representatives = () => {
  const personalRepresentatives = [
    {
      name: "Васе Стефаноска",
      decisionNumber: "ЗО-1090 од, УП 19-3468 од 27.03.2015 година",
      contractType: "Договор за вработување",
      contractDate: "02/2015 од 13.07.2015",
      company: "АД Осигурителна Полиса – Национална Групација за осигурување",
      classes: "1,2,3,6,7,8,9,10,12,13,18",
    },
    {
      name: "Васе Стефаноска",
      decisionNumber: "ЗО-1090 од, УП 19-3468 од 27.03.2015 година",
      contractType: "Договор за вработување",
      contractDate: "02/2015 од 13.07.2015",
      company: "АД Осигурителна Полиса – Национална Групација за осигурување",
      classes: "19",
    },
  ];

  const companies = [
    {
      name: "Национална групација за осигурување АД Осигурителна полиса Скопје",
      company: "Национална групација за осигурување АД Осигурителна полиса Скопје",
      address: "Бул. Св. Климент Охридски бр. 26\n1000 Скопје",
      contractDate: "",
      classes: "АД Осигурителна Полиса – Национална Групација за осигурување",
      website: "https://ospol.mk/",
    },
    {
      name: "ВИННЕР Лајф – Виена Иншуренс Груп Скопје",
      company: "ВИННЕР Лајф – Виена Иншуренс Груп Скопје",
      address: "",
      contractDate: "",
      classes: "ВИННЕР Лајф – Виена Иншуренс Груп Скопје",
      website: "https://winnerlife.mk/",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Застапници</h1>
            <p className="text-lg opacity-90">
              Информации за овластени застапници за осигурување
            </p>
          </div>
        </section>

        {/* Personal Representatives Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Лични Застапници
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">П. Бр.</TableHead>
                        <TableHead className="font-semibold">Име и презиме</TableHead>
                        <TableHead className="font-semibold">
                          Бр и датум на решение (лиценца за вршење на работи за застапување во осигурување)
                        </TableHead>
                        <TableHead className="font-semibold">
                          Вид на договор склучен со застапникот
                        </TableHead>
                        <TableHead className="font-semibold">
                          Бр. и датум на договор за застапување или вработување
                        </TableHead>
                        <TableHead className="font-semibold">
                          Друштво за осигурување (за кое лицето е овластено да врши работи на застапување)
                        </TableHead>
                        <TableHead className="font-semibold">
                          Класи на осигурување (за кое лицето е овластено да врши работи на застапување)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {personalRepresentatives.map((rep, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}.</TableCell>
                          <TableCell className="font-medium">{rep.name}</TableCell>
                          <TableCell>{rep.decisionNumber}</TableCell>
                          <TableCell>{rep.contractType}</TableCell>
                          <TableCell>{rep.contractDate}</TableCell>
                          <TableCell>{rep.company}</TableCell>
                          <TableCell>{rep.classes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Companies Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Друштва за Осигурување
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">П. Бр.</TableHead>
                        <TableHead className="font-semibold">Име и презиме</TableHead>
                        <TableHead className="font-semibold">
                          Назив на друштвото за осигурување
                        </TableHead>
                        <TableHead className="font-semibold">
                          Седиште на друштвото за осигурување
                        </TableHead>
                        <TableHead className="font-semibold">
                          Број и датум на договор (за вршење работи на застапување во осигурувањето)
                        </TableHead>
                        <TableHead className="font-semibold">
                          Класи на осигурување (за кое друштвото за застапување во осиг. Е овластено да врши работи на застапување)
                        </TableHead>
                        <TableHead className="font-semibold">
                          Интернет страница на друштвото за осигурување
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companies.map((company, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}.</TableCell>
                          <TableCell className="font-medium">{company.name}</TableCell>
                          <TableCell>{company.company}</TableCell>
                          <TableCell className="whitespace-pre-line">{company.address}</TableCell>
                          <TableCell>{company.contractDate}</TableCell>
                          <TableCell>{company.classes}</TableCell>
                          <TableCell>
                            {company.website && (
                              <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-primary hover:underline"
                              >
                                <ExternalLink className="h-4 w-4" />
                                <span>Веб-сајт</span>
                              </a>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground">
                Сите застапници се овластени и регистрирани во согласност со Законот за супервизија на осигурување 
                на Република Северна Македонија. За дополнителни информации, ве молиме контактирајте не.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Representatives;
