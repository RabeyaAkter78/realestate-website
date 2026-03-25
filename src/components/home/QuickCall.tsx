"use client";

import { useState } from "react";
import { Calendar, Phone, X } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const QuickCall = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div
      className={`
        ${
          isClosed
            ? "relative w-full"
            : "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[90%]"
        } 
        transition-all duration-300 ease-in-out
      `}
    >
      <div
        className={`
        relative bg-[#eaf2f7] font-opensans px-4 sm:px-6 py-3 
        shadow-lg border border-gray-200 rounded-2xl
        ${isClosed ? "" : "rounded-2xl"}
      `}
      >
        {/* Close Button - only show when floating */}
        {!isClosed && (
          <button
            onClick={() => setIsClosed(true)}
            className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="flex  items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 container mx-auto">
          {/* Call Button */}
          <button className="inline-flex items-center md:gap-2 bg-primary hover:bg-primary/80 text-white px-2 py-1 sm:px-5 sm:py-2.5 rounded-lg text-sm font-medium transition-colors">
            <Phone className="hidden sm:block w-4 h-4" />
            Call Us Now
          </button>

          {/* Logo */}
          <div className="hidden sm:block  items-center gap-2">
            <Image
              src={logo}
              alt="InstaSignTracker"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </div>

          {/* Schedule Demo Button */}
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-4 py-1 sm:px-5 sm:py-2.5 rounded-lg text-sm font-medium transition-all shadow-md">
            <Calendar className="hidden sm:block w-4 h-4" />
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickCall;
