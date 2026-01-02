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
            <Card className="mb-12 shadow-lg border-0">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="text-2xl text-primary">
                  Лични Застапници
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableHead className="font-bold text-foreground py-4 px-6 text-center w-16">П. Бр.</TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[150px]">Име и презиме</TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[280px]">
                          Бр и датум на решение (лиценца)
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[180px]">
                          Вид на договор
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[200px]">
                          Бр. и датум на договор
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[250px]">
                          Друштво за осигурување
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 text-center min-w-[100px]">
                          Класи
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {personalRepresentatives.map((rep, index) => (
                        <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                          <TableCell className="py-4 px-6 text-center font-medium text-muted-foreground">{index + 1}.</TableCell>
                          <TableCell className="py-4 px-6 font-semibold text-foreground">{rep.name}</TableCell>
                          <TableCell className="py-4 px-6 text-sm text-muted-foreground">{rep.decisionNumber}</TableCell>
                          <TableCell className="py-4 px-6">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {rep.contractType}
                            </span>
                          </TableCell>
                          <TableCell className="py-4 px-6 text-sm">{rep.contractDate}</TableCell>
                          <TableCell className="py-4 px-6 text-sm">{rep.company}</TableCell>
                          <TableCell className="py-4 px-6 text-center">
                            <span className="inline-flex items-center rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                              {rep.classes}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Companies Table */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-primary/5 border-b">
                <CardTitle className="text-2xl text-primary">
                  Друштва за Осигурување
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableHead className="font-bold text-foreground py-4 px-6 text-center w-16">П. Бр.</TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[200px]">Назив на друштвото</TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[200px]">
                          Седиште
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[180px]">
                          Број и датум на договор
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 min-w-[200px]">
                          Класи на осигурување
                        </TableHead>
                        <TableHead className="font-bold text-foreground py-4 px-6 text-center min-w-[120px]">
                          Веб-сајт
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {companies.map((company, index) => (
                        <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                          <TableCell className="py-4 px-6 text-center font-medium text-muted-foreground">{index + 1}.</TableCell>
                          <TableCell className="py-4 px-6 font-semibold text-foreground">{company.name}</TableCell>
                          <TableCell className="py-4 px-6 text-sm whitespace-pre-line text-muted-foreground">{company.address || "—"}</TableCell>
                          <TableCell className="py-4 px-6 text-sm">{company.contractDate || "—"}</TableCell>
                          <TableCell className="py-4 px-6 text-sm">{company.classes}</TableCell>
                          <TableCell className="py-4 px-6 text-center">
                            {company.website ? (
                              <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                                <span>Посети</span>
                              </a>
                            ) : (
                              <span className="text-muted-foreground">—</span>
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
