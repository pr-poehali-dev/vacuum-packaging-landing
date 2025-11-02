import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Коммерческое предложение придёт на email, менеджер свяжется в течение 15 минут",
    });
  };

  const advantages = [
    { icon: 'Package', title: 'В наличии', desc: 'Для мяса, рыбы, сыра' },
    { icon: 'Grid3x3', title: 'Линейка моделей', desc: 'Настольные/напольные, 1/2 камеры' },
    { icon: 'Shield', title: 'Гарантия до 3 лет', desc: 'Надёжность и стабильность' },
    { icon: 'Settings', title: 'Полная комплектация', desc: 'Газонаполнение, запайка/обрезка' },
    { icon: 'Lock', title: 'Герметичный пакет', desc: 'Защита от окисления и влаги' },
    { icon: 'Boxes', title: 'Универсальность', desc: 'Пищевые и непищевые товары' },
    { icon: 'Zap', title: 'Автопрограммы', desc: 'Быстрая настройка упаковки' },
    { icon: 'Wrench', title: 'Оперативный сервис', desc: 'Расходники на складе' },
    { icon: 'Gauge', title: 'Мощные насосы', desc: 'Высокая производительность' },
    { icon: 'Layers', title: 'Двойной шов', desc: 'Идеально для мяса и рыбы' },
    { icon: 'CheckCircle', title: 'Сертификация', desc: 'CE, ISO 9001' },
    { icon: 'Clock', title: 'Работа 24/7', desc: 'Стабильная непрерывная работа' },
  ];

  const models = [
    {
      id: 1,
      name: 'HVC-400/2T (DZ-400/2T)',
      type: 'tabletop',
      chambers: 2,
      application: 'universal',
      image: 'https://cdn.poehali.dev/files/9c7ca575-7502-41a8-bb53-38a599d3d21b.png',
      voltage: '220 В',
      power: '900 Вт',
      sealingBars: '2',
      sealLength: '400 мм',
      sealWidth: '10 мм',
      pump: '20 м³/ч',
      sealPower: '500 Вт',
      chamberSize: '400×350×70 мм',
      externalChamber: '440×420×135 мм',
      weight: '94 кг',
      packageSize: '680×610×630 мм',
      inStock: true,
      warranty: '3 года',
      price: 'Запросить цену',
    },
  ];

  const filteredModels = models;

  const applications = [
    {
      title: 'Идеально для мяса',
      benefits: ['Увеличение срока хранения до 3x', 'Защита от окисления', 'Презентабельный вид', 'Сохранение вкуса и структуры'],
      icon: 'Beef',
    },
    {
      title: 'Идеально для рыбы',
      benefits: ['Защита от обветривания', 'Герметичная упаковка', 'Сохранение свежести', 'Удобная презентация'],
      icon: 'Fish',
    },
    {
      title: 'Идеально для сыра',
      benefits: ['Контроль созревания', 'Защита от плесени', 'Товарный вид', 'Длительное хранение'],
      icon: 'Milk',
    },
    {
      title: 'Для непищевых товаров',
      benefits: ['Защита от влаги и пыли', 'Презентация продукции', 'Сохранность при транспортировке', 'Универсальность'],
      icon: 'Box',
    },
  ];

  const workflowSteps = [
    { step: '1', title: 'Загрузка', desc: 'Размещение продукта в камере', icon: 'PackageOpen' },
    { step: '2', title: 'Настройка', desc: 'Выбор программы на панели', icon: 'Settings2' },
    { step: '3', title: 'Вакуумирование', desc: 'Откачка воздуха из пакета', icon: 'Wind' },
    { step: '4', title: 'Газонаполнение', desc: 'MAP - замена воздуха газом (опция)', icon: 'Droplets' },
    { step: '5', title: 'Запайка', desc: 'Двойной шов, обрезка края', icon: 'Scissors' },
    { step: '6', title: 'Контроль', desc: 'Проверка герметичности шва', icon: 'CheckCircle2' },
  ];

  const faqs = [
    {
      q: 'Чем отличается однокамерная и двухкамерная модель?',
      a: 'Двухкамерные модели обеспечивают в 2 раза большую производительность за счёт параллельной работы камер. Подходят для крупных производств с высоким потоком упаковки.',
    },
    {
      q: 'Зачем газонаполнение и когда оно нужно?',
      a: 'Газонаполнение (MAP) замещает воздух инертным газом, что снижает окисление и увеличивает срок хранения до 5 раз. Критично для красного мяса, полуфабрикатов и деликатесов.',
    },
    {
      q: 'Насколько надёжен двойной шов?',
      a: 'Двойной шов создаёт две параллельные линии запайки, обеспечивая 100% герметичность даже при упаковке мяса с костями или острых краёв. Исключает разгерметизацию при транспортировке.',
    },
    {
      q: 'Какие пакеты подходят и как выбрать размер?',
      a: 'Используются специальные вакуумные пакеты с рифлением или гладкие плёнки. Размер выбирается исходя из габаритов продукта + 5-7 см запаса на запайку. Наши специалисты помогут подобрать оптимальный тип.',
    },
    {
      q: 'Сроки поставки и условия гарантии?',
      a: 'Оборудование в наличии на складе — отгрузка в день оплаты. Доставка по РФ 2-7 дней. Гарантия до 3 лет на оборудование, бесплатная пусконаладка включена.',
    },
    {
      q: 'Как организована пусконаладка и обучение?',
      a: 'Инженер проводит установку, настройку оборудования и обучение персонала на объекте клиента в течение 1 дня. Услуга включена в стоимость оборудования.',
    },
    {
      q: 'Как обслуживать насос и планку запайки?',
      a: 'Регламент обслуживания включает: проверку уровня масла в насосе раз в месяц, очистку планки запайки после смены, замену тефлоновой ленты раз в 3-6 месяцев. Обучение включено, сервис по договору.',
    },
    {
      q: 'Какие есть сертификаты?',
      a: 'Все модели имеют сертификаты CE (европейский стандарт безопасности), ISO 9001 (система менеджмента качества), декларацию соответствия ТР ТС для работы в РФ и СНГ.',
    },
    {
      q: 'Есть ли лизинг и рассрочка?',
      a: 'Да, работаем с ведущими лизинговыми компаниями. Рассрочка до 12 месяцев без переплаты. Оформление от 1 дня.',
    },
  ];

  const compareData = [
    { feature: 'Тип', t300: 'Настольная', f500: 'Напольная', f600d: 'Напольная' },
    { feature: 'Камеры', t300: '1', f500: '1', f600d: '2' },
    { feature: 'Размер камеры', t300: '300×250×100', f500: '500×400×150', f600d: '600×500×200' },
    { feature: 'Производительность', t300: '2-3 цикла/мин', f500: '3-4 цикла/мин', f600d: '5-6 циклов/мин' },
    { feature: 'Насос', t300: '20 м³/ч', f500: '40 м³/ч', f600d: '63 м³/ч' },
    { feature: 'Запайка', t300: '300 мм', f500: '500 мм', f600d: '600 мм' },
    { feature: 'Газонаполнение', t300: '✓', f500: '✓', f600d: '✓' },
    { feature: 'Цена', t300: 'от 150 000 ₽', f500: 'от 280 000 ₽', f600d: 'от 420 000 ₽' },
  ];

  const options = [
    {
      title: 'Газонаполнение (MAP)',
      desc: 'Модифицированная атмосфера с инертным газом увеличивает срок годности в 3-5 раз',
      benefits: ['Снижение окисления на 90%', 'Сохранение цвета мяса', 'Защита от бактерий'],
      icon: 'Droplets',
    },
    {
      title: 'Автоматическая запайка/обрезка',
      desc: 'Двойной шов и чистая обрезка края пакета за один цикл',
      benefits: ['Идеальный товарный вид', 'Экономия времени', '100% герметичность'],
      icon: 'Scissors',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl text-primary">VacuumPro</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#equipment" className="text-sm hover:text-primary transition-colors">Оборудование</a>
            <a href="#advantages" className="text-sm hover:text-primary transition-colors">Преимущества</a>
            <a href="#application" className="text-sm hover:text-primary transition-colors">Применение</a>
            <a href="#options" className="text-sm hover:text-primary transition-colors">Опции</a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">Как работает</a>
            <a href="#service" className="text-sm hover:text-primary transition-colors">Сервис</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Промышленные вакуум-упаковщики в наличии — настольные и напольные, 1/2 камеры
              </h1>
              <p className="text-lg mb-4 text-white/90">
                Гарантия до 3 лет • Автоматические программы • Мощные насосы • Двойной шов
              </p>
              <p className="text-base mb-8 text-white/80">
                Бесплатное тестирование в демозале
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <Icon name="FileText" size={18} className="mr-2" />
                  Получить цену за 15 минут
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Записаться в демозал
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="ShieldCheck" size={20} />
                  <span>CE, ISO 9001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  <span>24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Truck" size={20} />
                  <span>Доставка РФ и СНГ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Settings" size={20} />
                  <span>Пусконаладка бесплатно</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/9c7ca575-7502-41a8-bb53-38a599d3d21b.png"
                alt="Вакуумный упаковщик HVC-400/2T"
                className="rounded-lg shadow-2xl w-full bg-white p-8"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">3 года</div>
                <div className="text-sm">гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества оборудования</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{adv.title}</h3>
                  <p className="text-xs text-muted-foreground">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Search" size={16} className="mr-2" />
              Подобрать модель под вашу задачу
            </Button>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Каталог моделей</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8 mb-12">
            {filteredModels.map((model) => (
              <Card key={model.id} className="hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative bg-white p-8 flex items-center justify-center">
                    <img src={model.image} alt={model.name} className="w-full max-w-md object-contain" />
                    {model.inStock && (
                      <Badge className="absolute top-3 right-3 bg-green-500">В наличии</Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold">{model.name}</h3>
                        <Badge variant="outline">{model.warranty}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {model.type === 'tabletop' ? 'Настольная' : 'Напольная'} • {model.chambers} запаивающие планки
                      </p>
                    </div>

                    <div className="space-y-3 text-sm mb-6">
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Напряжение:</span>
                        <span className="font-medium">{model.voltage}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Мощность двигателя:</span>
                        <span className="font-medium">{model.power}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Запаивающие планки:</span>
                        <span className="font-medium">{model.sealingBars}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Длина запайки:</span>
                        <span className="font-medium">{model.sealLength}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Ширина шва:</span>
                        <span className="font-medium">{model.sealWidth}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Насос:</span>
                        <span className="font-medium">{model.pump}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Мощность запайки:</span>
                        <span className="font-medium">{model.sealPower}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Размер камеры:</span>
                        <span className="font-medium">{model.chamberSize}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Внешние размеры камеры:</span>
                        <span className="font-medium">{model.externalChamber}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Вес:</span>
                        <span className="font-medium">{model.weight}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-muted-foreground">Габариты в упаковке:</span>
                        <span className="font-medium">{model.packageSize}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t">
                        <span className="text-muted-foreground font-semibold">Цена:</span>
                        <span className="font-bold text-primary text-lg">{model.price}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-accent hover:bg-accent/90">
                        Получить КП
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Download" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Сравнение моделей</CardTitle>
              <CardDescription>Выберите оптимальную конфигурацию для вашего производства</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Характеристика</TableHead>
                      <TableHead>VacPack T-300</TableHead>
                      <TableHead>VacPack F-500</TableHead>
                      <TableHead>VacPack F-600D</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {compareData.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell>{row.t300}</TableCell>
                        <TableCell>{row.f500}</TableCell>
                        <TableCell>{row.f600d}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="application" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Применение</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {applications.map((app, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={app.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Получить рекомендации по упаковке вашего продукта
            </Button>
          </div>
        </div>
      </section>

      <section id="options" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Опции и расходные материалы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {options.map((option, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={option.icon} size={32} className="text-accent" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {option.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Добавить в КП
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg">
              <Icon name="Package" size={18} className="mr-2" />
              Заказать расходники со склада
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Как это работает</h2>
          <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
            Полный цикл вакуумной упаковки с автоматическими программами и контролем качества
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {workflowSteps.map((step, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name={step.icon} size={20} className="text-accent" />
                        <h3 className="font-bold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-white/80">{step.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center space-x-4">
            <Button variant="secondary" size="lg">
              <Icon name="Play" size={18} className="mr-2" />
              Посмотреть демонстрацию
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20">
              <Icon name="Calendar" size={18} className="mr-2" />
              Записаться в демозал
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Гарантии и сертификаты</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="ShieldCheck" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Гарантия до 3 лет</div>
                    <div className="text-sm text-muted-foreground">На всё оборудование с бесплатной пусконаладкой</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Сертификация CE, ISO 9001</div>
                    <div className="text-sm text-muted-foreground">Соответствие международным стандартам качества</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="FileCheck" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Декларация соответствия</div>
                    <div className="text-sm text-muted-foreground">Документы для работы на территории РФ и СНГ</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать сертификаты
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/e84451af-a3eb-4cf9-b3aa-82334790c296/files/88d93b4a-e419-4108-bf09-f5248ad02197.jpg"
                alt="Упакованная продукция"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Сервис и доставка</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Сеть сервисных центров</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">По всей России с большим складом запчастей</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Truck" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Доставка РФ и СНГ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Экспресс-отправка со склада в день оплаты</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="GraduationCap" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Инструктаж на объекте клиента включён</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="CreditCard" size={32} className="text-primary mb-2" />
                <CardTitle className="text-lg">Лизинг и рассрочка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Гибкие условия оплаты и финансирования</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Button variant="outline">
              <Icon name="HelpCircle" size={18} className="mr-2" />
              Не нашли ответ? Задайте вопрос
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">Получить коммерческое предложение</h2>
          <p className="text-center mb-8 text-white/80">Заполните форму — менеджер свяжется в течение 15 минут</p>
          <form onSubmit={handleFormSubmit} className="bg-white rounded-lg p-8 text-foreground">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input id="name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input id="phone" type="tel" required className="mt-1" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="company">Компания</Label>
                <Input id="company" className="mt-1" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="product-type">Тип продукта</Label>
                <Select>
                  <SelectTrigger id="product-type" className="mt-1">
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meat">Мясо</SelectItem>
                    <SelectItem value="fish">Рыба</SelectItem>
                    <SelectItem value="cheese">Сыр</SelectItem>
                    <SelectItem value="other">Непищевой</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="model-type">Тип модели</Label>
                <Select>
                  <SelectTrigger id="model-type" className="mt-1">
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tabletop-1">Настольная, 1 камера</SelectItem>
                    <SelectItem value="tabletop-2">Настольная, 2 камеры</SelectItem>
                    <SelectItem value="floor-1">Напольная, 1 камера</SelectItem>
                    <SelectItem value="floor-2">Напольная, 2 камеры</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea id="comment" rows={3} className="mt-1" />
            </div>
            <div className="flex items-start gap-2 mb-6">
              <input type="checkbox" id="consent" required className="mt-1" />
              <Label htmlFor="consent" className="text-sm text-muted-foreground">
                Согласен на обработку персональных данных
              </Label>
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
              <Icon name="Send" size={18} className="mr-2" />
              Получить коммерческое предложение
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">VacuumPro</h3>
              <p className="text-sm text-white/70">
                Промышленное вакуум-упаковочное оборудование от проверенных производителей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Меню</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#equipment" className="text-white/70 hover:text-white transition-colors">Оборудование</a></li>
                <li><a href="#advantages" className="text-white/70 hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#application" className="text-white/70 hover:text-white transition-colors">Применение</a></li>
                <li><a href="#service" className="text-white/70 hover:text-white transition-colors">Сервис</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сертификаты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>CE</li>
                <li>ISO 9001</li>
                <li>Декларация соответствия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="text-white/70 hover:text-white transition-colors">+7 (800) 123-45-67</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@vacuumpro.ru" className="text-white/70 hover:text-white transition-colors">info@vacuumpro.ru</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-white/70">Москва, ул. Промышленная, 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/60">
            <p>© 2024 VacuumPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;