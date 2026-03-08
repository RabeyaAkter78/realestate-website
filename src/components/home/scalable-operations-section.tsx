"use client";

import { Check } from "lucide-react";

const features = [
  "Designed for businesses of all sizes, from local teams to multi-market operations",
  "Intelligent, multi-level inventory tracking that updates automatically",
  "Custom workflows, permissions, and business logic you control. Supports multiple ordering, team structures, and sign categories for maximum efficiency",
];

export function ScalableOperationsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built on Powerful, Scalable Operations
            </h2>
            <p className="text-gray-600">
              InstaSignTracker is engineered to support real-world sign operations and complex team structures. Built with scale in mind.
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
                  {/* Operations Dashboard UI Mock */}
                  <div className="h-full flex">
                    {/* Sidebar */}
                    <div className="w-16 bg-gray-900 h-full flex flex-col items-center py-4 gap-3">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-lg" />
                      <div className="w-6 h-6 bg-gray-700 rounded" />
                      <div className="w-6 h-6 bg-gray-700 rounded" />
                      <div className="w-6 h-6 bg-gray-700 rounded" />
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 p-4 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-4 w-32 bg-gray-200 rounded" />
                        <div className="h-8 w-20 bg-[#2196F3] rounded" />
                      </div>
                      {/* Calendar/Schedule View */}
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="flex gap-1 mb-3">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                            <div key={day} className="flex-1 text-center">
                              <div className="text-xs text-gray-500 mb-1">{day}</div>
                              <div className={`h-16 rounded-lg ${
                                i === 2 ? 'bg-blue-100 border-2 border-blue-300' : 'bg-gray-100'
                              }`}>
                                {i === 2 && (
                                  <div className="p-1">
                                    <div className="h-2 w-full bg-blue-400 rounded mb-1" />
                                    <div className="h-2 w-2/3 bg-blue-300 rounded" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Team Members */}
                        <div className="space-y-2 mt-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-400 rounded-full" />
                            <div className="h-3 w-20 bg-gray-200 rounded" />
                            <div className="ml-auto h-4 w-12 bg-green-100 rounded text-xs flex items-center justify-center text-green-600">
                              Active
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-400 rounded-full" />
                            <div className="h-3 w-20 bg-gray-200 rounded" />
                            <div className="ml-auto h-4 w-12 bg-blue-100 rounded text-xs flex items-center justify-center text-blue-600">
                              On Job
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-orange-400 rounded-full" />
                            <div className="h-3 w-20 bg-gray-200 rounded" />
                            <div className="ml-auto h-4 w-12 bg-orange-100 rounded text-xs flex items-center justify-center text-orange-600">
                              Break
                            </div>
                          </div>
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
