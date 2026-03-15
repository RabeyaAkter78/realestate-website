/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import img1 from "../../assets/Icon.png";
import img2 from "../../assets/p7.png";
import img3 from "../../assets/p8.png";
import { ArrowRight } from "lucide-react";
const differentiators = [
  {
    icon: img1,
    title: "A fully branded enterprise portal",
    description:
      "Customize the platform with your brokerage's branding and identity",
  },
  {
    icon: img2,
    title: "A tailored mix of Platinum and Diamond featuresl",
    description:
      "Get a customized combination of Platinum and Diamond tier capabilities",
  },
  {
    icon: img3,
    title: "Complete Management Tools",
    description:
      "Manage orders, inventory, billing, and internal teams all in one place",
  },
];

export default function Brokerage() {
  return (
    <div className=" font-opensans">
      {/* WHAT MAKES US DIFFERENT Section */}
      <section className="bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Real Estate Brokerages
          </h2>
          <p className="text-neutral-500 text-center mb-12">
            Brokerages operating their own internal sign installation <br />
            departments can use a SignTraker Enterprise License®, featuring:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="text-5xl mb-6 flex justify-center items-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  ></Image>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
