import img1 from "../../assets/m1.png";
import img2 from "../../assets/m2.png";
import img3 from "../../assets/m3.png";
import img4 from "../../assets/m4.png";
import Image from "next/image";
const WeManage = () => {
  const operations = [
    {
      title: "Media Services",
      desc: "Each sign stays active from install to removal — including all service calls. Orders",
      img: img1,
    },
    {
      title: "Open House Services",
      desc: "Track rider changes, repairs, and replacements with photo proof.",
      img: img2,
    },
    {
      title: "Courier Services ",
      desc: "Know exactly which agent owns which signs — in the field or in storage.",
      img: img3,
    },
    {
      title: "Printing Services",
      desc: "Mandatory photos on install, service, and removal.",
      img: img4,
    },
  ];
  return (
    <section className="py-16 bg-[#eff7fc]">
      <div className="container mx-auto font-opensans px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">  We Manage</span>
         More Than Signs
        </h2>
        <p className="text-gray-600 mb-12">Accept and manage media service requests like photography and open house setup — all from one dashboard</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-12 ">
          {operations.map((op, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300 ">
              <Image src={op.img} alt={op.title} className=" " />
              <h3 className="text-xl font-semibold mb-4 mt-3 text-start ">{op.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeManage;
