import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Absolutely not! That's the whole point of our service. We handle everything technical — you just tell us what you want, and we make it happen. No logins to remember, no software to learn.",
  },
  {
    question: "What happens if I need to update my website?",
    answer:
      "Simply send us an email or message with what you'd like changed. Depending on your package, we'll update your site within the agreed timeframe. Updates included in your package cost nothing extra.",
  },
  {
    question: "Where is my website hosted?",
    answer:
      "Your website is hosted on secure, modern cloud infrastructure. We handle all hosting, security certificates (SSL), and backups. Your site will load quickly and stay online 24/7.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Yes! If you already own a domain (e.g., yourbusiness.co.uk), we can connect it to your new website. If you don't have one yet, we can help you purchase and set one up.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "We don't believe in long contracts. You can cancel your subscription with 30 days' notice. We'll help you transition smoothly if you decide to move on.",
  },
  {
    question: "How long does it take to get my website live?",
    answer:
      "Most websites are ready within 1-2 weeks, depending on how quickly you can provide content (text, images, logos). Simple info sites can often be completed even faster.",
  },
  {
    question: "What about email marketing? How does that work?",
    answer:
      "With our Engage packages, we can set up a mailing list for your business. You provide the content, and we design and send professional email campaigns to your subscribers.",
  },
  {
    question: "Is there a contract or minimum term?",
    answer:
      "No long-term contracts. Your subscription runs month-to-month after the initial setup. The setup fee covers the design and build work, then you simply pay monthly to keep your site live and updated.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. If you don't see what you're looking 
            for, just get in touch.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border data-[state=open]:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
