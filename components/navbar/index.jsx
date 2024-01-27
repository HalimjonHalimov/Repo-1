import Image from "next/image";
import logo from "@/public/bi_cloud-check.png";
import search from "@/public/search-refraction.png";
import bell from "@/public/bell-01.png";
import user from "@/public/user-image.png";

export default function Navbar() {
  return (
    <div className="grid grid-cols-2 py-4">
      <div className="flex justify-start items-center gap-4">
        <div className="flex justify-start items-center gap-2">
          <Image src={logo} alt="Logo" />
          <div className="capitalize text-[18px] font-semibold">
            <span className="text-[#6200EE]">Books</span> list
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 opacity-80">
          <Image src={search} alt="Logo" />
          <div className="text-[16px] font-sans text-slate-200">
            Search for any training you want
          </div>
        </div>
      </div>
      <div className="justify-self-end text-black flex justify-start items-center gap-4 pr-2">
        <div>
          <Image src={bell} alt="Logo" />
        </div>
        <div>
          <Image src={user} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
