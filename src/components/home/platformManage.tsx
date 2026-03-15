import img1 from "../../assets/Icon.png";
import img2 from "../../assets/3.png";
import img3 from "../../assets/Icon (1).png";
import img4 from "../../assets/Icon (2).png";
import Image from "next/image";
const PlatformManage = () => {
  const operations = [
    {
      title: "Sign Installation",
      desc: "Each sign stays active from install to removal — including all service calls. Orders",
      img: img1,
    },
    {
      title: " Service Requests",
      desc: "Track rider changes, repairs, and replacements with photo proof.",
      img: img2,
    },
    {
      title: "Agent-Based Inventory",
      desc: "Know exactly which agent owns which signs — in the field or in storage.",
      img: img3,
    },
    {
      title: "Installer Proof",
      desc: "Mandatory photos on install, service, and removal.",
      img: img4,
    },
  ];
  return (
    <section className="py-16 bg-[#eff7fc]">
      <div className="container mx-auto font-opensans px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          One platform to manage your entire{" "}
          <span className="text-primary"> Sign Installation Operation</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-12 ">
          {operations.map((op, index) => (
            <div key={index} className="bg-white  p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 ">
              <Image src={op.img} alt={op.title} className=" " />
              <h3 className="text-xl font-semibold mb-4 mt-3 text-start text-black">{op.title}</h3>
              <p className="text-gray-600 text-start">{op.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformManage;
