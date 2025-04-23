import type React from "react";
import {
  LayoutGrid,
  Search,
  FileText,
  Share2,
  ShoppingCart,
  BarChart3,
  Glasses,
  Smartphone,
  Brain,
  CuboidIcon as Cube,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <section className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Comprehensive digital marketing solutions tailored to your business
            needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <ServiceSection
              icon={<LayoutGrid className="h-10 w-10 text-purple-500" />}
              title="Digital Ads Management"
              description="We create and manage targeted advertising campaigns across various digital platforms including Google Ads, Facebook Ads, Instagram Ads, and more. Our team optimizes your ad spend to maximize ROI and reach your target audience effectively."
            />
            <ServiceSection
              icon={<Search className="h-10 w-10 text-purple-500" />}
              title="Search Engine Optimization (SEO)"
              description="Our SEO services help improve your website's visibility in search engine results. We conduct thorough keyword research, optimize on-page elements, build quality backlinks, and provide regular performance reports to ensure your website ranks higher."
            />
            <ServiceSection
              icon={<FileText className="h-10 w-10 text-purple-500" />}
              title="Content Management"
              description="Our content management services include creating, publishing, and maintaining high-quality content that engages your audience and drives conversions. We develop content strategies aligned with your business goals and brand voice."
            />
            <ServiceSection
              icon={<Share2 className="h-10 w-10 text-purple-500" />}
              title="Social Media Management"
              description="We help you build and maintain a strong presence across social media platforms. Our team creates engaging content, manages community interactions, and analyzes performance to continuously improve your social media strategy."
            />
            <ServiceSection
              icon={<ShoppingCart className="h-10 w-10 text-purple-500" />}
              title="E-commerce Website Design"
              description="We design and develop user-friendly e-commerce websites that provide seamless shopping experiences. Our designs focus on conversion optimization, mobile responsiveness, and integration with various payment gateways and shipping solutions."
            />
            <ServiceSection
              icon={<BarChart3 className="h-10 w-10 text-purple-500" />}
              title="Data Analysis & Decision Making"
              description="Our data analysis services help you make informed business decisions. We collect and analyze data from various sources, identify trends and patterns, and provide actionable insights to improve your marketing strategies and business operations."
            />
          </div>
        </div>
      </section>

      {/* Innovative Services */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-500">
            Innovative Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InnovativeServiceCard
              icon={<Glasses className="h-10 w-10 text-purple-500" />}
              title="Virtual Reality (VR)"
              description="Immersive marketing experiences using virtual reality technology to showcase products and services in a completely new dimension."
            />
            <InnovativeServiceCard
              icon={<Smartphone className="h-10 w-10 text-purple-500" />}
              title="Augmented Reality (AR)"
              description="Enhance real-world environments with digital overlays to create interactive and engaging marketing campaigns."
            />
            <InnovativeServiceCard
              icon={<Brain className="h-10 w-10 text-purple-500" />}
              title="AI-Powered Marketing"
              description="Leverage artificial intelligence and digital twins to create personalized marketing strategies and predict consumer behavior."
            />
            <InnovativeServiceCard
              icon={<Cube className="h-10 w-10 text-purple-500" />}
              title="3D Visualization"
              description="Create stunning 3D visualizations of products and services to enhance marketing materials and customer engagement."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({
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
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-purple-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function InnovativeServiceCard({
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
