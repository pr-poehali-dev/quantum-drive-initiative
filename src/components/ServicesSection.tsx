import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Дизайн на Tilda",
    description:
      "Создаём визуально мощные сайты, от которых не хочется уходить. Каждый пиксель продуман, каждый блок на своём месте. Ваш бренд будет выглядеть дорого.",
  },
  {
    icon: Palette,
    title: "Лендинги",
    description:
      "Одностраничники, которые реально продают. Не просто красивая картинка, а продуманная воронка с правильными CTA и структурой, что ведёт к заявке.",
  },
  {
    icon: Code,
    title: "Интернет-магазины",
    description:
      "Каталоги, корзины, оплата — всё на Tilda и без лишней головной боли. Настроим так, чтобы клиенты покупали, а не путались в интерфейсе.",
  },
  {
    icon: Share2,
    title: "Анимации и Zero-блоки",
    description:
      "Интерактив, который цепляет и запоминается. Zero-блоки, параллакс, плавные переходы — сделаем сайт, который хочется скроллить снова и снова.",
  },
  {
    icon: Target,
    title: "SEO-настройка",
    description:
      "Чтобы Google вас нашёл, а не прятал на десятой странице. Мета-теги, alt-тексты, скорость загрузки — прокачаем всё, что влияет на позиции.",
  },
  {
    icon: Search,
    title: "Поддержка и прокачка",
    description:
      "Сайт запущен, но нужно допилить? Обновить контент, добавить блоки, поменять структуру? Мы на связи и готовы прокачивать ваш сайт дальше.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что мы умеем
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Наши <span className="text-primary">суперсилы</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Всё, что нужно для крутого сайта на Tilda — от дизайна до SEO. Берём задачу и делаем так, чтобы вы сказали "вау".
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
