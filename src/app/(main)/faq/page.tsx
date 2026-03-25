import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqImg from "../../../assets/faq.jpg";
import { HelpCircle } from "lucide-react";
const faqs = [
  {
    question: "Is This Built For Real Estate Agents?",
    answer:
      "Yes, InstaSignTracker is specifically designed for real estate agents and sign installation companies. It helps track sign orders from installation through service calls to final removal.",
  },
  {
    question: "Can I Use This For My Own Sign Business Only?",
    answer:
      "Absolutely! InstaSignTracker works perfectly for independent sign installation businesses. You can manage your own operations without needing to connect to real estate agencies.",
  },
  {
    question: "Do Installers Need Paid Accounts?",
    answer:
      "No, installer accounts are free. You can add unlimited installers to your account at no extra cost. Only administrators and managers need paid licenses.",
  },
  {
    question: "Do Installers Need Paid Accounts?",
    answer:
      "Installer accounts are completely free. They can use the mobile app to receive job assignments, upload photos, and track their work without any subscription fees.",
  },
  {
    question: "Do Installers Need Paid Accounts?",
    answer:
      "Installers don't need paid accounts. They download the free installer app and can start working immediately once you add them to your team.",
  },
  {
    question: "Do Installers Need Paid Accounts?",
    answer:
      "No paid accounts are required for installers. The installer mobile app is free to download and use with your company's subscription.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#fdf2f2] via-white to-[#ecf7fe] py-20 md:py-28 font-opensans pt-10 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about InstaSign Tracker and how it works.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="text-left text-gray-900 font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image */}
          <div className="relative lg:sticky lg:top-8">
            <Image
              src={faqImg}
              alt="Real Estate Sign"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              width={600}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
