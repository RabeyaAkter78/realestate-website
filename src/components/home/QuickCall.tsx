import { Calendar, Phone } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/logo.png";
const QuickCall = () => {
  return (
    <div className="py-8 bg-[#eaf2f7] font-opensans px-4 sm:px-6 ">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100  container mx-auto">
        {/* Logo */}{" "}
        <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
          <Phone className="w-4 h-4" />
          Call Us Now
        </button>
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="InstaSignTracker"
            width={100}
            height={100}
            className="h-12 w-auto"
          />
        </div>
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md">
            <Calendar className="w-4 h-4" />
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickCall;
