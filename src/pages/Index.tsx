import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ПК ВОЗРОЖДЕНИЕ</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: "home", label: "Главная" },
                { id: "about", label: "О кооперативе" },
                { id: "membership", label: "Членство" },
                { id: "news", label: "Новости" },
                { id: "faq", label: "Вопросы и ответы" },
                { id: "documents", label: "Документы" },
                { id: "contacts", label: "Контакты" }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Потребительский кооператив<br />
                <span className="text-accent">«ВОЗРОЖДЕНИЕ»</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Объединение людей для улучшения жизни членов кооператива через деятельность в области права
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("membership")} className="bg-primary hover:bg-primary/90">
                  Стать членом
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("about")}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/27de1689-1819-4c50-9d69-165aebd51293/files/c9993c59-5631-41dd-a921-3900fb448fd6.jpg"
                alt="Кооператив Возрождение"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Users", title: "Взаимопомощь", desc: "Поддержка и помощь каждому члену кооператива" },
              { icon: "Shield", title: "Защита прав", desc: "Профессиональная юридическая поддержка" },
              { icon: "TrendingUp", title: "Развитие", desc: "Постоянное улучшение качества жизни участников" }
            ].map((item, i) => (
              <Card key={i} className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <Icon name={item.icon as any} className="text-accent mb-4" size={48} />
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">О кооперативе</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg">
            <p className="animate-fade-in">
              Потребительский кооператив «ВОЗРОЖДЕНИЕ» — это добровольное объединение граждан на основе членства 
              с целью удовлетворения материальных и иных потребностей участников через деятельность в области права.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Мы создаём условия для улучшения качества жизни наших членов, обеспечивая доступ к квалифицированной 
              юридической помощи, образовательным программам и возможностям взаимной поддержки.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Card className="animate-slide-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Target" className="text-accent" />
                    Наши цели
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Защита прав и законных интересов членов</p>
                  <p>• Обеспечение доступа к юридическим услугам</p>
                  <p>• Взаимная поддержка участников</p>
                  <p>• Повышение правовой грамотности</p>
                </CardContent>
              </Card>
              <Card className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-accent" />
                    Наши принципы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• Прозрачность деятельности</p>
                  <p>• Демократическое управление</p>
                  <p>• Равные права всех членов</p>
                  <p>• Законность и добросовестность</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Членство в кооперативе</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Преимущества членства</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                    <p>Юридическая консультация и поддержка</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                    <p>Участие в принятии решений кооператива</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                    <p>Доступ к образовательным программам</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                    <p>Взаимная поддержка членов кооператива</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1" size={20} />
                    <p>Прозрачность финансовой деятельности</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Условия вступления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-primary mt-1" size={20} />
                    <p>Заявление о вступлении в кооператив</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-primary mt-1" size={20} />
                    <p>Паспорт гражданина РФ</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-primary mt-1" size={20} />
                    <p>Согласие с Уставом кооператива</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" className="text-primary mt-1" size={20} />
                    <p>Уплата вступительного и паевого взноса</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="animate-fade-in bg-primary text-primary-foreground" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Как стать членом кооператива?</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Ознакомьтесь с Уставом и документами кооператива</li>
                  <li>Заполните заявление о вступлении</li>
                  <li>Предоставьте необходимые документы</li>
                  <li>Внесите вступительный и паевой взнос</li>
                  <li>Дождитесь решения правления кооператива</li>
                </ol>
                <Button className="mt-6 bg-accent hover:bg-accent/90 text-white" onClick={() => scrollToSection("contacts")}>
                  Подать заявление
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Новости кооператива</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                date: "15 ноября 2024",
                title: "Общее собрание членов кооператива",
                desc: "Приглашаем всех членов на очередное общее собрание для обсуждения текущих вопросов и планов развития."
              },
              {
                date: "8 ноября 2024",
                title: "Семинар по правовой грамотности",
                desc: "Состоялся образовательный семинар для членов кооператива по актуальным вопросам защиты прав потребителей."
              },
              {
                date: "1 ноября 2024",
                title: "Новые услуги для членов",
                desc: "Кооператив расширяет спектр юридических консультаций. Теперь доступна помощь по жилищным вопросам."
              }
            ].map((news, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <CardDescription className="flex items-center gap-2 text-accent">
                    <Icon name="Calendar" size={16} />
                    {news.date}
                  </CardDescription>
                  <CardTitle className="text-xl">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Что такое потребительский кооператив?",
                  a: "Потребительский кооператив — это добровольное объединение граждан на основе членства для удовлетворения материальных и иных потребностей участников. Наш кооператив специализируется на деятельности в области права."
                },
                {
                  q: "Кто может стать членом кооператива?",
                  a: "Членом кооператива может стать любой дееспособный гражданин Российской Федерации, достигший 18 лет, согласный с Уставом кооператива и готовый внести вступительный и паевой взнос."
                },
                {
                  q: "Какие взносы необходимо платить?",
                  a: "При вступлении необходимо внести вступительный взнос и паевой взнос. Размеры взносов определены Уставом кооператива. Также члены кооператива вносят регулярные членские взносы для обеспечения деятельности кооператива."
                },
                {
                  q: "Какие услуги предоставляет кооператив?",
                  a: "Кооператив предоставляет юридические консультации, помощь в защите прав и законных интересов членов, образовательные программы по правовой грамотности, а также возможность участия в управлении кооперативом."
                },
                {
                  q: "Как выйти из кооператива?",
                  a: "Член кооператива может выйти из него в любое время, подав письменное заявление. При выходе член получает свой паевой взнос в порядке, установленном Уставом кооператива."
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-background rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Документы кооператива</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { name: "Устав кооператива", icon: "FileText" },
              { name: "Положение о членстве", icon: "FileCheck" },
              { name: "Положение о взносах", icon: "Receipt" },
              { name: "Правила кооператива", icon: "BookOpen" },
              { name: "Протоколы собраний", icon: "FileSignature" },
              { name: "Финансовая отчётность", icon: "BarChart" }
            ].map((doc, i) => (
              <Card key={i} className="animate-fade-in hover:shadow-lg transition-all hover:scale-105 cursor-pointer group" style={{ animationDelay: `${i * 0.05}s` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon name={doc.icon as any} className="text-accent group-hover:scale-110 transition-transform" />
                    {doc.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Контакты</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Ваш вопрос или комментарий..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in space-y-6" style={{ animationDelay: "0.1s" }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-accent" />
                    Адрес офиса
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1, офис 100</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-accent" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Пн-Пт: 9:00 - 18:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-accent" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@vozrozhdenie-pk.ru</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-accent" />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Суббота: 10:00 - 15:00</p>
                  <p className="text-muted-foreground">Воскресенье: выходной</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={28} />
                <span className="text-xl font-bold">ПК ВОЗРОЖДЕНИЕ</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Потребительский кооператив по деятельности в области права
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p className="cursor-pointer hover:text-primary-foreground transition-colors" onClick={() => scrollToSection("about")}>О кооперативе</p>
                <p className="cursor-pointer hover:text-primary-foreground transition-colors" onClick={() => scrollToSection("membership")}>Членство</p>
                <p className="cursor-pointer hover:text-primary-foreground transition-colors" onClick={() => scrollToSection("documents")}>Документы</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>г. Москва, ул. Примерная, д. 1</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@vozrozhdenie-pk.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 Потребительский кооператив «ВОЗРОЖДЕНИЕ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
