import Link from "next/link";
import Image from "next/image";
const Header = () => {
  <style></style>;
  return (
    <div className="w-full h-[70px] bg-black text-[14px] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center ">
      <div className="flex  w-[1240px] m-auto justify-between items-center text-center">
        <div className=" text-white flex">
          <Link href={"/"}>
            <div className="overflow-hidden">
              <Image
                src={"/images/logo1.svg"}
                width={70}
                height={70}
                alt="logo"
              ></Image>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="overflow-hidden">
              <Image
                src={"/images/logo2.svg"}
                width={70}
                height={70}
                alt="logo"
              ></Image>
            </div>
          </Link>
        </div>
        <nav className=" ">
          <ul className="flex ">
            <Link href={"/"}>
              <li className="p-[15px] relative cursor-pointer text-center  text-white ">
                <div className=" text-white p-[5px] ">Home</div>
              </li>
            </Link>

            <Link href={"product"}>
              <li className="p-[15px] relative cursor-pointer text-center  text-white">
                <div className=" text-white p-[5px] ">Product</div>
              </li>
            </Link>
            <Link href={"about"}>
              <li className="p-[15px] relative cursor-pointer text-center  text-white">
                <div className=" text-white p-[5px] ">About Us</div>
              </li>
            </Link>
            <Link href={"service"}>
              <li className="p-[15px] relative cursor-pointer text-center  text-white">
                <div className=" text-white p-[5px] ">Service</div>
              </li>
            </Link>
            <Link href={"contact"}>
              <li className="p-[15px] relative cursor-pointer text-center  text-white">
                <div className=" text-white p-[5px] ">Contact</div>
              </li>
            </Link>
            <Link href={"store"}>
              <li className="p-[15px] relative cursor-pointer text-center  text-white">
                <div className=" text-white p-[5px] ">Store</div>
              </li>
            </Link>
          </ul>
        </nav>

        <div className="flex">
          <div className="px-[20px]  text-white cursor-pointer">User</div>
          <div className="px-[20px]  text-white cursor-pointer">Category</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
