"use client";

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Real Estate{" "}
            <span className="inline-flex items-center gap-1">
              <span className="bg-[#2196F3] text-white px-3 py-1 rounded">1920</span>
              <span className="text-gray-400">=</span>
              <span className="bg-[#2196F3] text-white px-3 py-1 rounded">1080</span>
            </span>{" "}
            Companies Choose InstaSignTracker?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            InstaSignTracker is the all-in-one platform built to help real estate sign companies win realtors, scale faster, and unlock new revenue while giving you total control of your operations today and the flexibility to grow without limits tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
