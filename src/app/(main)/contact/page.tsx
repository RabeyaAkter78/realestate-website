/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#fdf2f2] via-white to-[#ecf7fe] py-20 md:py-32 font-opensans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
          {/* Email */}
          <div className="flex items-start justify-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <div className='flex justify-center'>
              <span className="text-primary font-medium">Email :</span>
              <div className="space-y-1 ml-1">
                <a href="mailto:Instasigntracker@gmail.com" className="text-gray-600 hover:text-primary transition-colors block">
                  Instasigntracker@gmail.com
                </a>
                <a href="mailto:letstalk@gmail.com" className="text-gray-600 hover:text-primary transition-colors block">
                  letstalk@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <div className='flex justify-center'>
              <span className="text-primary font-medium">Phone :</span>
              <div className="space-y-1 ml-1">
                <a href="tel:+14046946924" className="text-gray-600 hover:text-primary transition-colors block">
                  #404-694-6924
                </a>
                <a href="tel:+18887853986" className="text-gray-600 hover:text-primary transition-colors block">
                  (+1) (888) 785-3986
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Have a question?
          </h2>
          <p className="text-gray-600 mb-8">
            Tell us about your needs. We'd love to see how we can help you.
          </p>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/30"
            >
              Send
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}