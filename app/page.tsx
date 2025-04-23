import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Lightbulb,
  Users,
  TrendingUp,
  LayoutGrid,
  Search,
  FileText,
  Share2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-br from-black to-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
            Towards an advanced digital future
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
            We are a leading company in the field of digital marketing, aiming
            to provide innovative solutions that help companies stand out and
            grow in the digital market. We offer comprehensive and diverse
            services to meet your business needs, focusing on using the latest
            technologies to maximize digital opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 rounded-md"
          >
            <Link href="/contact">Request a Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">
            Our Key Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<LayoutGrid className="h-10 w-10 text-purple-500" />}
              title="Digital Ads Management"
              description="Strategic planning and execution of digital advertising campaigns across multiple platforms."
            />
            <ServiceCard
              icon={<Search className="h-10 w-10 text-purple-500" />}
              title="Search Engine Optimization"
              description="Improve your website's visibility and ranking in search engine results pages."
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10 text-purple-500" />}
              title="Content Management"
              description="Create and manage engaging content that resonates with your target audience."
            />
            <ServiceCard
              icon={<Share2 className="h-10 w-10 text-purple-500" />}
              title="Social Media Management"
              description="Build and maintain your brand presence across social media platforms."
            />
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Markova Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">
            Why Choose Markova?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Lightbulb className="h-10 w-10 text-purple-500" />}
              title="Innovative Solutions"
              description="We leverage cutting-edge technologies to deliver innovative marketing solutions."
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-purple-500" />}
              title="Data-Driven Strategies"
              description="Our strategies are backed by comprehensive data analysis and insights."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-500" />}
              title="Expert Team"
              description="Our team consists of industry experts with years of experience in digital marketing."
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10 text-purple-500" />}
              title="Results-Oriented Approach"
              description="We focus on delivering measurable results that drive business growth."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-purple-900/20 hover:border-purple-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 bg-purple-900/20 p-4 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
