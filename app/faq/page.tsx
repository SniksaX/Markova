"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Markova Digital Marketing offer?",
      answer:
        "Markova offers a comprehensive range of digital marketing services including Digital Ads Management, Search Engine Optimization (SEO), Content Management, Social Media Management, E-commerce Website Design, and Data Analysis. We also provide innovative services like Virtual Reality (VR), Augmented Reality (AR), AI-Powered Marketing, and 3D Visualization.",
    },
    {
      question: "How can digital marketing help my business?",
      answer:
        "Digital marketing can help your business by increasing online visibility, generating more leads, improving brand awareness, engaging with your target audience, and ultimately driving more sales and revenue. It provides measurable results and allows for targeted marketing strategies that traditional marketing methods cannot offer.",
    },
    {
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "The timeline for seeing results from digital marketing varies depending on the specific strategies implemented. Some tactics like paid advertising can show immediate results, while others like SEO and content marketing are long-term strategies that may take 3-6 months to show significant results. We provide regular reports and updates to track progress.",
    },
    {
      question:
        "What makes Markova different from other digital marketing agencies?",
      answer:
        "Markova stands out due to our innovative approach, data-driven strategies, expert team, and results-oriented focus. We leverage cutting-edge technologies like VR, AR, and AI to provide unique marketing solutions. Our comprehensive service offering allows us to create integrated marketing strategies tailored to your specific business needs.",
    },
    {
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "We measure success through various key performance indicators (KPIs) depending on your business goals. These may include website traffic, conversion rates, engagement metrics, lead generation, return on ad spend (ROAS), and ultimately, revenue growth. We provide detailed analytics and reports to track performance.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with businesses of all sizes, from startups to large enterprises. Our strategies are tailored to meet the specific needs, goals, and budget of each client, ensuring that businesses of any size can benefit from our services.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing varies based on the services required, the scope of the project, and your specific business needs. We offer customized packages and flexible pricing options. Contact us for a free consultation to discuss your requirements and receive a detailed quote.",
    },
    {
      question: "How do I get started with Markova Digital Marketing?",
      answer:
        "Getting started is easy! Simply contact us through our website, email, or phone to schedule a free consultation. During this initial meeting, we'll discuss your business goals, current marketing efforts, and how our services can help you achieve your objectives. From there, we'll develop a customized strategy tailored to your needs.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <section className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">
            FAQ - Frequently Asked Questions
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Find answers to common questions about our digital marketing
            services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900 rounded-lg border border-purple-900/20 px-6"
              >
                <AccordionTrigger className="text-lg font-medium text-purple-400 hover:text-purple-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
