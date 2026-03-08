"use client";

import { Check } from "lucide-react";

const features = [
  "Easily import and manage offices, agents, installs, and inventory",
  "Add-ons and premium service tiers, each with their own price list and access to the platform",
  "Expand into new revenue-generating workflow without changing systems",
];

export function RevenueStreamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Laptop Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Laptop Frame */}
              <div className="relative bg-gray-800 rounded-t-xl p-4 shadow-2xl">
                {/* Screen */}
                <div className="relative w-full max-w-md aspect-video bg-gray-50 rounded overflow-hidden">
                  {/* Revenue Dashboard UI Mock */}
                  <div className="h-full p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 w-24 bg-gray-200 rounded" />
                      <div className="h-6 w-16 bg-green-100 rounded" />
                    </div>
                    {/* Revenue Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
                        <div className="h-6 w-20 bg-green-400 rounded" />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
                        <div className="h-6 w-20 bg-blue-400 rounded" />
                      </div>
                    </div>
                    {/* Services List */}
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg" />
                          <div>
                            <div className="h-3 w-20 bg-gray-200 rounded mb-1" />
                            <div className="h-2 w-16 bg-gray-100 rounded" />
                          </div>
                        </div>
                        <div className="h-6 w-16 bg-purple-100 rounded text-xs flex items-center justify-center text-purple-600">
                          Premium
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg" />
                          <div>
                            <div className="h-3 w-20 bg-gray-200 rounded mb-1" />
                            <div className="h-2 w-16 bg-gray-100 rounded" />
                          </div>
                        </div>
                        <div className="h-6 w-16 bg-blue-100 rounded text-xs flex items-center justify-center text-blue-600">
                          Standard
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-lg" />
                          <div>
                            <div className="h-3 w-20 bg-gray-200 rounded mb-1" />
                            <div className="h-2 w-16 bg-gray-100 rounded" />
                          </div>
                        </div>
                        <div className="h-6 w-16 bg-orange-100 rounded text-xs flex items-center justify-center text-orange-600">
                          Add-on
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

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built for More Than One Revenue Stream
            </h2>
            <p className="text-gray-600">
              Your business does not stop at sign installs and neither does InstaSignTracker.
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
        </div>
      </div>
    </section>
  );
}
