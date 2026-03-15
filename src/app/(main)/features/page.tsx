/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import f1 from "../../../assets/f1.png";
import f2 from "../../../assets/f2.png";
import f3 from "../../../assets/f3.png";
import f4 from "../../../assets/f4.png";
import f5 from "../../../assets/f5.png";
import img1 from "../../../assets/f6.png";
import img2 from "../../../assets/f7.png";
import img3 from "../../../assets/f8.png";
import img4 from "../../../assets/f9.png";
const bulletPoints = [
  "Install orders don't end after installation",
  "Service calls are tracked in texts & emails",
  "Inventory gets lost or miscounted",
  "No photo proof for disputes",
  "Installers don't know what's billable",
];
const operations = [
  {
    title: "Admin",
    desc: "Full Business visibility",
    img: img1,
  },
  {
    title: " Manager",
    desc: "Manage teams & agents",
    img: img2,
  },
  {
    title: "Agent",
    desc: "Orders, inventory, invoices",
    img: img3,
  },
  {
    title: "Installer ",
    desc: "Jobs & photo uploads",
    img: img4,
  },
];

const BulletList = () => (
  <ul className="space-y-3">
    {bulletPoints.map((point, index) => (
      <li key={index} className="flex items-start gap-3 ">
        <span className="w-2 h-2 rounded-full bg-[#1E88E5] mt-2 shrink-0"></span>
        <span className="text-gray-500  leading-relaxed ">{point}</span>
      </li>
    ))}
  </ul>
);

export default function FeaturesPage() {
  return (
    <div className="min-h-screen font-opensans">
      {/* Hero Section - Original */}
      <section className="py-20 md:mt-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl font-bold mb-4 font-opensans">
              Everything You Need To Run A Real Estate <br />
              <span className="text-[#1E88E5]">Sign Installation</span> Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From installation to service calls, removals, inventory, and
              billing — all in one platform.
            </p>
          </div>

          <div className="my-20 animate-fade-in-up">
            <Image
              src={f1}
              alt="f1"
              className="mx-auto object-cover"
              height={800}
              width={1344}
            />
          </div>
        </div>
      </section>

      {/* Section 1: Outstanding orders - Pink/Red background */}
      <section className="py-28 bg-linear-to-b from-[#fbf2f4] to-[#ecf7fe] animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Outstanding orders that stay open until removal
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                A sign installation isn't a one-time job. Every order stays
                active from install through service calls and final removal.
              </p>
              <BulletList />
            </div>
            <div className="relative animate-slide-right">
              <Image
                src={f2}
                alt="Order Management Dashboard"
                className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Handle service requests - Light blue/white background */}
      <section className="bg-white py-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 animate-slide-left">
              <Image
                src={f3}
                alt="Service Request Management"
                className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </div>
            <div className="max-w-xl order-1 lg:order-2 animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Handle service requests without confusion
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                A sign installation isn't a one-time job. Every order stays
                active from install through service calls and final removal.
              </p>
              <BulletList />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mobile-friendly installer workflow - Light blue background */}
      <section className="bg-[#f8fcff] py-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl animate-slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Mobile-friendly installer workflow
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Installers receive clear job assignments and upload photo proof
                directly from the field.
              </p>
              <BulletList />
            </div>
            <div className="relative animate-slide-right">
              <Image
                src={f4}
                alt="Mobile Installer Workflow"
                className="rounded-lg h-175 hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Agent-based sign inventory tracking - White background */}
      <section className="bg-white py-20 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1 animate-slide-left">
              <Image
                src={f5}
                alt="Agent-based Inventory Tracking"
                className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-300"
                width={600}
                height={400}
              />
            </div>
            <div className="max-w-xl order-1 lg:order-2 animate-slide-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Agent-based sign inventory tracking
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Track inventory per real estate agent — not just globally.
              </p>
              <BulletList />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#eff7fc] animate-fade-in">
        <div className="container mx-auto font-opensans px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black animate-slide-up">
            One platform to manage your entire{" "}
            <span className="text-primary"> Sign Installation Operation</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-12 ">
            {operations.map((op, index) => (
              <div
                key={index}
                className="bg-white  p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image src={op.img} alt={op.title} className=" " />
                <h3 className="text-xl font-semibold mb-4 mt-3 text-start text-black">
                  {op.title}
                </h3>
                <p className="text-gray-600 text-start">{op.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
