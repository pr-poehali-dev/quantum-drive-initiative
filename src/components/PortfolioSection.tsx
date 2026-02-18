import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Лендинг для фитнес-студии",
    category: "Лендинг под ключ",
    image: "/placeholder.svg",
    description:
      "Мощный одностраничник для фитнес-студии с анимациями, расписанием занятий и онлайн-записью. Конверсия выросла на 40% после запуска.",
    url: "#",
    tags: ["Tilda", "Zero-блок", "Анимации", "Адаптив"],
  },
  {
    title: "Интернет-магазин косметики",
    category: "E-commerce на Tilda",
    image: "/placeholder.svg",
    description:
      "Полноценный каталог с фильтрами, корзиной и интеграцией оплаты. Минималистичный дизайн, который подчёркивает продукт и не мешает покупать.",
    url: "#",
    tags: ["Tilda", "Каталог", "Корзина", "Адаптив"],
  },
  {
    title: "Корпоративный сайт IT-компании",
    category: "Многостраничный сайт",
    image: "/placeholder.svg",
    description:
      "Строгий и технологичный сайт с кастомными Zero-блоками, анимированными графиками и интерактивной картой офисов. Выглядит как на React, а сделан на Tilda.",
    url: "#",
    tags: ["Tilda", "Zero-блок", "Многостраничный", "SEO"],
  },
  {
    title: "Лендинг для онлайн-курса",
    category: "Продающий лендинг",
    image: "/placeholder.svg",
    description:
      "Длинный продающий лендинг с прогревом, отзывами, таймером и формой оплаты. Продуманная структура, которая ведёт к покупке шаг за шагом.",
    url: "#",
    tags: ["Tilda", "Анимации", "Формы", "Адаптив"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Мы это реально сделали. Вот подборка проектов, которыми мы гордимся — каждый собран на Tilda с душой и вниманием к деталям.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Смотреть кейс <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
