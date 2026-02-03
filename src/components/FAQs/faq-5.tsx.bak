"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  faqs: FAQItem[]; // שיניתי למערך אחד כדי שנוכל לחלק אותו דינמית
  className?: string;
}

export function FAQSection({
  title = "שאלות נפוצות",
  subtitle = "תמיכה ושירות",
  description = "קבלו תשובות מיידיות לשאלות הנפוצות ביותר על התוכניות, האימונים והחשבון שלכם.",
  buttonLabel = "לכל השאלות והתשובות ←",
  onButtonClick,
  faqs,
  className,
}: FAQSectionProps) {
  
  // פונקציית עזר לחלוקת המערך לשתי עמודות באופן שווה
  const midPoint = Math.ceil(faqs.length / 2);
  const faqsLeft = faqs.slice(0, midPoint);
  const faqsRight = faqs.slice(midPoint);

  return (
    <section 
      className={cn("w-full max-w-6xl mx-auto py-16 px-4 font-sans", className)} 
      dir="rtl"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-600 font-semibold tracking-wide uppercase mb-2">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="rounded-full border-blue-200 hover:bg-blue-50 transition-all px-8" 
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </div>

      {/* FAQs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 text-right">
        {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
          <Accordion
            key={columnIndex}
            type="single"
            collapsible
            className="w-full"
          >
            {faqColumn.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${columnIndex}-${i}`}
                className="border-b border-slate-100 py-2 last:border-0"
              >
                <AccordionTrigger className="text-right text-lg font-medium hover:text-blue-600 hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-600 leading-relaxed pb-4">
                  <div className="pt-2">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}