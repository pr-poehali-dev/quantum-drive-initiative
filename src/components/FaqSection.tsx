import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqItems = [
  {
    question: "Почему именно Tilda?",
    answer:
      "Tilda — это мощный конструктор, который позволяет делать сайты уровня кастомной разработки, но быстрее и дешевле. Плюс вы сами сможете менять тексты и картинки после запуска. Не нужен программист для каждой мелочи.",
  },
  {
    question: "Сколько времени занимает создание сайта?",
    answer:
      "Зависит от программы. Простой лендинг — 5-7 дней. Многостраничный сайт с Zero-блоками — 2-3 недели. Легендарный проект с нуля — обсуждаем индивидуально. Мы не тянем время, но и не халтурим.",
  },
  {
    question: "Можно ли потом редактировать самому?",
    answer:
      "Конечно! Это же Tilda. После сдачи проекта мы проведём короткий инструктаж — покажем, как менять тексты, картинки и добавлять новые блоки. Справится даже тот, кто боится слова 'код'.",
  },
  {
    question: "А если мне не понравится дизайн?",
    answer:
      "Мы показываем промежуточные результаты на каждом этапе. Если что-то не так — вносим правки сразу, а не в конце. В каждую программу входят раунды правок, так что финальный результат вас точно устроит.",
  },
  {
    question: "Что входит в поддержку?",
    answer:
      "Исправление багов, мелкие правки по контенту, консультации по работе с сайтом. Если нужно что-то серьёзное — добавить новые страницы или переделать структуру — обсудим отдельно. Но по мелочам всегда поможем.",
  },
  {
    question: "Работаете ли вы с другими платформами?",
    answer:
      "Наш конёк — Tilda. Мы знаем её вдоль и поперёк и делаем на ней вещи, от которых другие студии отказываются. Если вашему проекту нужна другая платформа — честно скажем и порекомендуем коллег.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <HelpCircle className="h-4 w-4" />
            Вопросы перед боссом
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            FAQ — <span className="text-primary">частые вопросы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Собрали ответы на всё, что обычно спрашивают перед стартом. Если вашего вопроса тут нет — смело пишите нам.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:text-primary hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
