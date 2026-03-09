/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import img1 from "../../assets/p6.png";
import img2 from "../../assets/p7.png";
import img3 from "../../assets/p8.png";
const Brokerage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Real Estate Brokerages Section */}
      <div>
        <h3 className="text-3xl font-bold mb-8 text-black/80 text-center">
          Real Estate Brokerages{" "}
        </h3>
        <p className="text-black/60 text-center mb-12">
          Brokerages operating their own internal sign installation departments
          can use a SignTraker Enterprise License®, featuring:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Enterprise Portal Card */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center bg-white">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src={img1} alt="Enterprise Portal" className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-black/80">
              A fully branded enterprise portal
            </h4>
            <p className="text-gray-600 text-sm">
              Custom-branded platform tailored to your brokerage's unique
              identity and requirements
            </p>
          </div>

          {/* Platinum Diamond Mix Card */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center bg-white">
            <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
              <Image
                src={img2}
                alt="Platinum Diamond Mix"
                className="w-8 h-8"
              />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-black/80">
              A tailored mix of Platinum and Diamond features!
            </h4>
            <p className="text-gray-600 text-sm">
              Flexible combination of premium features customized for your
              specific business needs
            </p>
          </div>

          {/* Management Tools Card */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center bg-white">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src={img3} alt="Management Tools" className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-semibold mb-3 text-black/80">
              Complete Management Tools
            </h4>
            <p className="text-gray-600 text-sm">
              Comprehensive suite of tools to manage agents, properties, and
              transactions efficiently
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
