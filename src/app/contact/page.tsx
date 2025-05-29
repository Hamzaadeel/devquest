"use client";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageSquare,
  Send,
  User,
  ChevronDown,
  CheckCircle,
  Star,
  Code,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Plus,
  Briefcase,
  ArrowDown,
} from "lucide-react";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const subjectOptions = [
    { value: "", label: "Select a subject", icon: null },
    {
      value: "feature-recommendation",
      label: "Feature Recommendation",
      icon: <Plus className="w-4 h-4" />,
    },
    {
      value: "topic-suggestion",
      label: "Topic Suggestion",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      value: "career",
      label: "Career Guidance",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      value: "query",
      label: "General Query",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      value: "bug-report",
      label: "Bug Report",
      icon: <Code className="w-4 h-4" />,
    },
    {
      value: "collaboration",
      label: "Collaboration",
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      value: "other",
      label: "Other",
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("sending");

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_mex5cto", //Service ID
        "template_tnbhrjz", // Template ID
        formRef.current,
        "jvmn4T_paUuoBkXh4" // Public key
      );

      setStatus("sent");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get in touch via email",
      detail: "support@devquest.com",
      color: "text-blue-400",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Quick Response",
      description: "We typically respond within",
      detail: "24 hours",
      color: "text-purple-400",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Open Source",
      description: "Contribute on GitHub",
      detail: "github.com/devquest",
      color: "text-blue-400",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-white/80 text-lg">
            Thanks for reaching out. We'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-blue-600/15 backdrop-blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">We're Here to Help</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Have questions, suggestions, or feedback? We'd love to hear from
            you. Let's build the future of interview preparation together.
          </p>
          <div
            className="mt-16 animate-bounce cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ArrowDown className="w-10 h-10 text-white rounded-full border dark:border-gray-300 mx-auto" />
          </div>
        </div>
      </section>

      {/* Contact Info Cards
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`${info.color} mb-4 flex justify-center`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-white/60 text-sm mb-2">{info.description}</p>
                <p className="text-white/80 font-medium">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="px-6 py-20 bg-black/30 dark:bg-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-white/80 font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-white/80 font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="group">
                <label className="block text-white/80 font-medium mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    {subjectOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-slate-800 text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-white/80 font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-white/40 group-focus-within:text-purple-400 transition-colors duration-300" />
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/40 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
              </div>

              {/* Status Messages */}
              {status === "error" && (
                <div className="text-red-400 text-center bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                  Failed to send message. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="cursor-pointer flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info Section
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
            Other Ways to Connect
          </h3>
          <p className="text-white/80 mb-8 leading-relaxed">
            Join our community of developers and stay updated with the latest
            interview preparation resources.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-sm text-white/70 mb-1">
                Follow us for updates
              </div>
              <div className="text-white font-medium">@DevQuest</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <div className="text-sm text-white/70 mb-1">
                Join our community
              </div>
              <div className="text-white font-medium">Discord Server</div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
