"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Title */}
      <section className="py-16 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-purple-500">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Get in touch with our team to discuss your digital marketing needs
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg border border-purple-900/20">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-purple-900/30 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-purple-900/30 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-purple-900/30 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-gray-800 border-purple-900/30 focus:border-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-purple-900/20">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">
                  Contact Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-purple-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-purple-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-400">info@markova.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-purple-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        Address
                      </h3>
                      <p className="text-gray-400">
                        123 Digital Avenue, Tech City, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-gray-900 p-8 rounded-lg border border-purple-900/20">
                <h2 className="text-2xl font-bold mb-6 text-purple-400">
                  Connect With Us
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-300">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-300">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-300">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-gray-300">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
