import type React from "react";
import { Users, Code, BarChart3, FileText } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <section className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Learn more about Markova Digital Marketing and our expert team
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-purple-500">
            About Markova Digital Marketing
          </h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-purple-900/20">
            <p className="text-gray-300 text-lg leading-relaxed">
              Markova Digital Marketing is a leading company that provides
              advanced services in promoting products or services online, using
              advanced digital strategies and technologies such as search engine
              optimization, social media marketing, and virtual reality. This is
              to enhance brand awareness, improve communication with customers,
              and increase sales, while offering innovative digital solutions
              and effective data analysis to achieve company goals.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Team Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamSection
              icon={<Users className="h-12 w-12 text-purple-500" />}
              title="Digital Project Managers"
              description="Responsible for coordinating operations, our project managers ensure that all digital marketing initiatives are executed efficiently and effectively. They serve as the bridge between clients and our technical teams, ensuring clear communication and project success."
            />
            <TeamSection
              icon={<Code className="h-12 w-12 text-purple-500" />}
              title="Web Developers"
              description="Specialized in website design and development, our web developers create responsive, user-friendly websites that not only look great but also perform exceptionally well. They are proficient in the latest web technologies and best practices for SEO and user experience."
            />
            <TeamSection
              icon={<BarChart3 className="h-12 w-12 text-purple-500" />}
              title="Data Analysts"
              description="Responsible for analyzing data and providing accurate reports, our data analysts help businesses make informed decisions based on concrete insights. They transform complex data into actionable strategies that drive business growth and marketing success."
            />
            <TeamSection
              icon={<FileText className="h-12 w-12 text-purple-500" />}
              title="Content Writers and Designers"
              description="Responsible for creating high-quality marketing content, our writers and designers work together to produce compelling visual and written content that resonates with target audiences. They ensure that all content aligns with brand identity and marketing objectives."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function TeamSection({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-purple-900/20">
      <div className="flex items-center mb-4">
        <div className="mr-4 bg-purple-900/20 p-3 rounded-full">{icon}</div>
        <h3 className="text-2xl font-semibold text-purple-400">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
