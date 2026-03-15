"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-opensans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Payment
          </h1>
          <button
            onClick={() => router.push("/")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Details */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Payment Details
            </h2>

            <form className="space-y-4">
              {/* Card Holder Name */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Card Holder Name
                </label>
                <Input
                  type="text"
                  placeholder="Nur Mohammad Sujon"
                  value={cardHolderName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardHolderName(e.target.value)}
                  className="w-full h-11 bg-gray-100 border-0"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <Input
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={cardNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}
                  className="w-full h-11 bg-gray-100 border-0"
                />
              </div>

              {/* Expiry Date and CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <Input
                    type="text"
                    placeholder="MM/DD"
                    value={expiryDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiryDate(e.target.value)}
                    className="w-full h-11 bg-gray-100 border-0"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <Input
                    type="text"
                    placeholder="XXX"
                    value={cvc}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCvc(e.target.value)}
                    className="w-full h-11 bg-gray-100 border-0"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Plan Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Plan Info
            </h2>

            <div className="space-y-4">
              {/* Plan Name */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Basic Plan</h3>
              </div>

              {/* Price Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Price :</span>
                  <span className="text-sm font-medium text-blue-600">$9.99</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Billing Frequency :</span>
                  <span className="text-sm text-blue-600">Monthly</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Start Date :</span>
                  <span className="text-sm text-gray-400">08 | 16 | 2025</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Renewal Date :</span>
                  <span className="text-sm text-gray-400">09 | 16 | 2025</span>
                </div>
              </div>

              {/* Pay Now Button */}
              <div className="pt-4">
                <Button
                  onClick={() => router.push("/")}
                  className="w-full h-11 bg-primary hover:bg-blue-700 text-white font-semibold rounded-lg"
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}