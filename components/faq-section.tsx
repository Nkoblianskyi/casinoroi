import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Os casinos online são legais em Portugal?",
    answer:
      "Sim, os casinos online são completamente legais em Portugal desde 2015. Todos os operadores devem ter licença do SRIJ (Serviço de Regulação e Inspeção de Jogos) para operar legalmente no país.",
  },
  {
    question: "Como posso verificar se um casino é licenciado?",
    answer:
      "Pode verificar se um casino tem licença portuguesa consultando a lista oficial no site do SRIJ ou procurando o número de licença no rodapé do site do casino. Todos os casinos que recomendamos são licenciados.",
  },
  {
    question: "Que métodos de pagamento posso usar?",
    answer:
      "Os casinos portugueses oferecem vários métodos: cartões de crédito/débito, MB Way, transferência bancária, Neteller, Skrill e outros e-wallets. Os depósitos são geralmente instantâneos.",
  },
  {
    question: "Quanto tempo demoram os levantamentos?",
    answer:
      "Os tempos variam por método: e-wallets (0-24h), cartões (1-3 dias), transferências bancárias (1-5 dias). Casinos licenciados devem processar levantamentos dentro de prazos razoáveis.",
  },
  {
    question: "Posso jogar no telemóvel?",
    answer:
      "Sim, todos os casinos modernos têm versões móveis otimizadas ou apps dedicadas. Pode jogar a partir de qualquer smartphone ou tablet com ligação à internet.",
  },
  {
    question: "Como funcionam os bónus de boas-vindas?",
    answer:
      "Os bónus de boas-vindas são ofertas para novos jogadores, geralmente matching do primeiro depósito. Têm sempre requisitos de apostas que deve cumprir antes de levantar os ganhos.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-yellow-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-yellow-500/20">
                <AccordionTrigger className="text-left text-white hover:text-yellow-400 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
