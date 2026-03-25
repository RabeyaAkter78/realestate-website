import React from "react";
import chosebg from "../../assets/cbg.jpg";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import Image from "next/image";
const WhyChoose = () => {
  const feature = [
    {
      title: "Centralized Order Management",
      description:
        "InstaSignTracker keeps all orders in one place. From installation to removal, you can easily track every job, status, location, and service request without juggling spreadsheets, texts, or emails.",
      img: c1,
    },
    {
      title: "Real-Time Installation Tracking & Verification",
      description:
        "Get instant notifications the moment a sign is placed. Our mobile-first architecture allows installers to upload GPS-tagged photos of every installed sign, giving you 100% transparency and a 24/7 digital portfolio of your active listings.",
      img: c2,
    },
    {
      title: "Efficient Technician Dispatch",
      description:
        "Quickly assign and manage installers or service drivers from one dashboard. This helps ensure jobs are completed faster and reduces confusion about who is responsible for each service.",
      img: c3,
    },
    {
      title: "Inventory Optimization",
      description:
        "From installation to removal, inventory is monitored so businesses always know what equipment is deployed and what is available. This improves efficiency, reduces lost items, and ensures the right inventory is ready for every job.",
      img: c4,
    },
    {
      title: "Scaling Income Streams",
      description:
        "By keeping operations organized and efficient, businesses can handle more orders, offer more services to agents, and maximize revenue from each listing—helping them scale operations without adding unnecessary complexity.",
      img: c5,
    },
    {
      title: "Accounting Integration",
      description:
        "Integrating InstaSignTracker with QuickBooks Online automates billing by syncing orders and invoices directly. This eliminates manual bookkeeping, reduces errors, and provides real-time financial insights to help you scale.",
      img: c6,
    },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover object-cover"
          style={{
            backgroundImage: `url(${chosebg.src})`,
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 font-opensans">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-12 text-center">
          Why Choose <span className="text-primary">InstaSignTracker</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feature.map((f, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-3xl border border-white/30 p-6 rounded-xl shadow-xl font-opnsans hover:scale-105 transition-all duration-300 text-center text-white/80 border-opacity-50"
            >
              <Image
                src={f.img.src}
                alt={f.title}
                width={100}
                height={100}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-start">
                {f.title}
              </h3>
              <p className="text-start">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
