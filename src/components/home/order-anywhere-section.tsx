"use client";

import { Check } from "lucide-react";

const features = [
  "Dedicated owner logins for Agents, Admins, and Installers",
  "Works seamlessly across phones, tablets, and desktops",
  "Rich web interface accessible from tablets, laptops, and desktops. Web-based access with no software to install. Install via",
];

export function OrderAnywhereSection() {
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
                  {/* Orders Dashboard UI Mock */}
                  <div className="h-full p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 w-24 bg-gray-200 rounded" />
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-blue-100 rounded" />
                        <div className="h-6 w-16 bg-green-100 rounded" />
                      </div>
                    </div>
                    {/* Orders Table */}
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                          <div className="w-8 h-8 bg-gray-200 rounded-full" />
                          <div className="flex-1">
                            <div className="h-3 w-24 bg-gray-200 rounded mb-1" />
                            <div className="h-2 w-32 bg-gray-100 rounded" />
                          </div>
                          <div className={`h-6 w-16 rounded text-xs flex items-center justify-center ${
                            i % 2 === 0 ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {i % 2 === 0 ? 'Active' : 'Pending'}
                          </div>
                        </div>
                      ))}
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
              Order Anywhere. Work Everywhere.
            </h2>
            <p className="text-gray-600">
              InstaSignTracker is built for flexibility, unlike any other existing solution today for contractors. From office to field, everything is accessible wherever you are.
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
