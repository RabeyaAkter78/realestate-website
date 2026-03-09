"use client";
import img1 from "../../"
import { Check } from "lucide-react";

const features = [
  "Customer-specific services, pricing, and permissions",
  "Custom post styles, sign configurations, and install options",
  "Personalized ordering instructions, notifications, and automated messages",
];

export function TailoredExperienceSection() {
  return (
    <section className="py-16 bg-[#eff7fc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          A Tailored Experience for Every Customer
            </h2>
            <p className="text-gray-600">
         InstaSignTracker gives you the flexibility to design an ordering experience that matches how your customers do business. From pricing to communication, everything can be customized to fit each client relationship.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#2196F3] mt-0.5 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Laptop Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Laptop Frame */}
              <div className="relative bg-gray-800 rounded-t-xl p-4 shadow-2xl">
                {/* Screen */}
                <div className="relative w-full max-w-md aspect-video bg-white rounded overflow-hidden">
                  {/* Dashboard UI Mock */}
                  <div className="h-full flex">
                    {/* Sidebar */}
                    <div className="w-16 bg-gray-100 h-full flex flex-col items-center py-4 gap-3">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-lg" />
                      <div className="w-6 h-6 bg-gray-300 rounded" />
                      <div className="w-6 h-6 bg-gray-300 rounded" />
                      <div className="w-6 h-6 bg-gray-300 rounded" />
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 p-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-4 w-24 bg-gray-200 rounded" />
                        <div className="h-8 w-8 bg-gray-200 rounded-full" />
                      </div>
                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="h-3 w-12 bg-blue-200 rounded mb-2" />
                          <div className="h-6 w-16 bg-blue-300 rounded" />
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="h-3 w-12 bg-green-200 rounded mb-2" />
                          <div className="h-6 w-16 bg-green-300 rounded" />
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="h-3 w-12 bg-purple-200 rounded mb-2" />
                          <div className="h-6 w-16 bg-purple-300 rounded" />
                        </div>
                      </div>
                      {/* Chart Area */}
                      <div className="bg-gray-50 rounded-lg p-4 h-32">
                        <div className="flex items-end justify-between h-full gap-2">
                          <div className="w-full bg-blue-200 rounded-t" style={{ height: '40%' }} />
                          <div className="w-full bg-blue-300 rounded-t" style={{ height: '60%' }} />
                          <div className="w-full bg-blue-400 rounded-t" style={{ height: '45%' }} />
                          <div className="w-full bg-blue-500 rounded-t" style={{ height: '80%' }} />
                          <div className="w-full bg-blue-600 rounded-t" style={{ height: '65%' }} />
                          <div className="w-full bg-blue-700 rounded-t" style={{ height: '90%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div className="relative">
                <div className="h-3 bg-gray-700 rounded-b-lg mx-4" />
                <div className="h-1 bg-gray-600 rounded-full mx-auto w-1/3 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
