"use client";

import img1 from "../../assets/tailored.png";
import img2 from "../../assets/order.png";
import img3 from "../../assets/operation.png";
import img4 from "../../assets/revenue.png";
import { Dot } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    title: "A Tailored Experience for Every Customer",
    desc: "InstaSignTracker gives you the flexibility to design an ordering experience that matches how your customers do business.",
    img: img1,
    features: [
      "Customer-specific services, pricing, and permissions",
      "Custom post styles, sign configurations, and install options",
      "Personalized ordering instructions, notifications, and automated messages",
    ],
  },
  {
    title: "Order Anywhere. Work Everywhere.",
    desc: "InstaSignTracker is built for modern, on-the-go teams making it easy for customers and installers to stay connected from any device, anywhere.",
    img: img2,
    features: [
      "Dedicated experiences for Agents, Admins, and Installers",
      "Works seamlessly across phones, tablets, and desktops",
      "Web-based access with no software downloads required",
    ],
  },
  {
    title: "Built on Powerful, Scalable Operations ",
    desc: "InstaSignTracker is engineered to support real-world sign operations and continues to evolve as your business grows.",
    img: img3,
    features: [
      "Designed for businesses of all sizes",
      "Intelligent multi-level inventory tracking",
      "Custom workflows and service rules",
    ],
  },
  {
    title: "Built for More Than One Revenue Stream",
    desc: "Your business doesn’t stop at sign installs and neither does InstaSignTracker.",
    img: img4,
    features: [
      "Easily manage offices, agents, installs, and inventory",
      "Promote featured services and add-ons",
      "Expand into new revenue streams",
    ],
  },
];

export function TailoredExperienceSection() {
  return (
    <section className="py-16 bg-[#eff7fc]">
      <div className="container mx-auto px-4 space-y-20">

        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12  font-opensans md:mb-28 hover:scale-105 transition-all duration-300  ${
              index % 2 === 0 ? "lg:flex-row-reverse justify-end" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1 ">
              <Image src={section.img} alt={section.title} />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {section.title}
              </h2>

              <p className="text-gray-600">{section.desc}</p>

              <ul className="space-y-3">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Dot className="h-7 w-7 text-primary" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}