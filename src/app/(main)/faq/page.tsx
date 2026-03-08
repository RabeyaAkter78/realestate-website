import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does InstaSignTracker work?",
    answer: "InstaSignTracker uses GPS-enabled devices attached to your real estate signs. These devices communicate with our cloud platform, allowing you to track sign locations, monitor battery levels, and receive alerts in real-time through our web dashboard and mobile apps.",
  },
  {
    question: "What types of signs can I track?",
    answer: "You can track virtually any type of real estate sign including for-sale signs, open house signs, directional signs, and custom promotional signs. Our tracking devices are weather-resistant and designed for outdoor use.",
  },
  {
    question: "How long does the battery last?",
    answer: "Our tracking devices feature long-lasting batteries that typically last 6-12 months depending on tracking frequency and usage. You'll receive low-battery notifications well in advance, and replacement batteries are easy to install.",
  },
  {
    question: "Can I add team members or assistants?",
    answer: "Yes! Real Estate Agents can add assistants to their account and assign specific permissions. Assistants can help manage signs, update information, and receive notifications while agents maintain full control.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we offer full-featured iOS and Android apps that provide all the functionality of our web platform. You can track signs, receive notifications, and manage your account from anywhere.",
  },
  {
    question: "What happens if a sign is moved or stolen?",
    answer: "You'll receive instant notifications when a sign moves unexpectedly or leaves a designated area. Our system tracks the sign's location history, helping you recover signs quickly and deter theft.",
  },
  {
    question: "Do you offer customer support?",
    answer: "We provide multiple support options including email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also offer comprehensive documentation and video tutorials.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Absolutely! We offer a 14-day free trial with no credit card required. You can explore all features and see how InstaSignTracker can benefit your real estate business before committing.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about InstaSignTracker
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
