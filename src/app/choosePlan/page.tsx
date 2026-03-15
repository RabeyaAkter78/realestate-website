"use client";

import { useRouter } from "next/navigation";
import { Check, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    description: "Kick off your AI journey with all the basics to spark your creativity",
    price: "6.00",
    features: [
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
    ],
    buttonText: "Get Basic",
  },
  {
    name: "Pro",
    description: "Kick off your AI journey with all the basics to spark your creativity",
    price: "6.00",
    features: [
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
    ],
    buttonText: "Get Basic",
  },
  {
    name: "Enterprise",
    description: "Kick off your AI journey with all the basics to spark your creativity",
    price: "6.00",
    features: [
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
    ],
    buttonText: "Get Basic",
  },
];

export default function ChoosePlanPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-opensans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Choose plan
          </h1>
          <button
            onClick={() => router.push("/")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Plan Header */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  AI Suite With:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mt-6 mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    {plan.price}$
                  </span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Billed monthly</p>
              </div>

              {/* Button */}
              <Button
                onClick={() => router.push("/payment")}
                className="w-full h-11 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg"
              >
                {plan.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}