"use client";

import img1 from "../../assets/p1.png";
import img2 from "../../assets/p2.png";
import img3 from "../../assets/p3.png";
import img4 from "../../assets/p4.png";
import img5 from "../../assets/p5.png";

import { Dot } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "Insta Sign Tracker®",
    description:
      "Sign Installation Management platform that provides comprehensive, user-friendly, and configurable tools to manage every aspect of sign installation operations.",
    image: img1,
    features: [
      "Sign installation workflows including vehicle routing, utility marking, vacations, customer order review and approval, and multi-office enterprise support",
      "Accurate and flexible inventory tracking for signs, lockboxes, and service items",
      "Integrated billing with Stripe prepayment and terms billing",
      "Office and agent cost splitting and cost centers",
      "Multi-rate sales tax collection",
      "Credit limits and QuickBooks export support",
    ],
  },
  {
    id: 2,
    title: "Insta Print Tracker®",
    description:
      "Integrated printing solution inside Insta Sign Tracker allowing agents to order printed signs directly within the platform.",
    image: img2,
    features: [
      "Order signs from standard customer rider inventory",
      "Create custom signs from templates",
      "Upload new designs with instant quoting",
      "Automatically add printed items into agent inventory",
      "Generate print-ready files for production",
    ],
  },
  {
    id: 3,
    title: "Insta Open House Tracker®",
    description:
      "Integrated open house management system that helps generate recurring revenue and strengthen relationships with agents.",
    image: img3,
    features: [
      "Purchase open house packages",
      "Add upsell options",
      "Reorder previous setups with one click",
      "Schedule multi-day open houses",
      "Manage multiple events per listing",
    ],
  },
  {
    id: 4,
    title: "Insta Courier Tracker®",
    description:
      "Integrated courier service system for secure delivery of documents requiring wet signatures and verified chain-of-custody.",
    image: img4,
    features: [
      "Charge by package type, urgency, distance",
      "Schedule pickups and drop-offs",
      "Real-time driver status notifications",
      "Photo documentation of deliveries",
      "Full transit details and wait times",
    ],
  },
  {
    id: 5,
    title: "Insta Photo Tracker®",
    description:
      "Integrated real estate photography management system within Insta Sign Tracker.",
    image: img5,
    features: [
      "Schedule installation and photography together",
      "Order photography, drone imagery, and 360° views",
      "Integrated billing with cost centers",
      "Network of professional photographers",
    ],
  },
];

export function IntegratedProducts() {
  return (
 <section className="py-20">
      <div className="container mx-auto px-4 space-y-5  md:space-y-28">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col lg:flex-row w-full md:h-135.25 gap-6 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 h-full">
              <Image
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 h-full bg-white p-4 md:p-10 rounded-xl shadow-lg flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {section.description}
              </p>

              <ul className="space-y-3">
                {section.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Dot className="w-6 h-6 text-primary mt-1" />
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