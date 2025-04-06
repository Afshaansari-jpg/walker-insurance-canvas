
import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I know which insurance policy is right for me?",
    answer: "Our advisors will conduct a thorough needs analysis to understand your specific situation, goals, and budget. Based on this assessment, we'll recommend the most appropriate coverage options tailored to your requirements. We always explain the pros and cons of each option so you can make an informed decision.",
  },
  {
    question: "Are there ways to reduce my insurance premiums?",
    answer: "Yes, there are several ways to potentially lower your premiums. These include bundling multiple policies, increasing deductibles, improving your health status, paying annually instead of monthly, and taking advantage of group discounts. Our advisors can review your specific situation and suggest the most effective strategies to reduce your costs without sacrificing important coverage.",
  },
  {
    question: "What happens if I miss a premium payment?",
    answer: "Most insurance policies include a grace period (typically 30 days) during which you can make your payment without losing coverage. If payment isn't made during this grace period, your policy may lapse, and you could lose your coverage. If this happens, you might need to reapply and may face higher premiums. We recommend setting up automatic payments to avoid this situation.",
  },
  {
    question: "How long does the insurance application process take?",
    answer: "The timeline varies depending on the type of insurance and your individual circumstances. Simple policies might be approved within days, while those requiring medical underwriting can take several weeks. Our team works to expedite the process and keeps you informed at every stage. We also offer some 'simplified issue' products that provide faster approvals for eligible applicants.",
  },
  {
    question: "Can I make changes to my policy after it's been issued?",
    answer: "Yes, many insurance policies can be modified after issuance. Common changes include updating beneficiaries, increasing or decreasing coverage amounts, adding riders, or adjusting payment methods. Some changes may require additional underwriting. We recommend reviewing your policies annually or whenever you experience major life events to ensure your coverage remains aligned with your needs.",
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.scroll-animation');
            animatedElements?.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="faq" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about insurance coverage and our services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto scroll-animation">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-4 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-gray-900 hover:text-walkerblue transition-colors bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
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

export default FAQSection;
