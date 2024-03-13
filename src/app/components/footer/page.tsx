import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full min-h-[500px] bg-black ">
      <div className=" w-[1240px] mx-auto text-white  ">
        <div className=" text-white flex ">
          <Link href={"/"}>
            <div className="overflow-hidden my-[45px]">
              <Image
                src={"/images/logo1.svg"}
                width={70}
                height={70}
                alt="logo"
              ></Image>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="overflow-hidden  my-[45px]">
              <Image
                src={"/images/logo2.svg"}
                width={70}
                height={70}
                alt="logo"
              ></Image>
            </div>
          </Link>
        </div>
        <div className="flex justify-between text-[14px] border-b-[1px] border-gray-500 py-[20px]">
          <div className="text-white">
            <div className="text-white my-[10px] font-bold">Tổng đài</div>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Mua hàng :{" "}
                <div className="text-blue-500 my-[1px]">1900.9696.42</div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Mua hàng :{" "}
                <div className="text-blue-500 my-[1px]">1900.9696.42</div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Kết nối với chúng tôi
              </div>
            </Link>
          </div>
          <div className="text-white">
            <div className="text-white my-[10px] font-bold">
              Hệ thống cửa hàng
            </div>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">Xem 97 cửa hàng</div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">Nội quy cửa hàng</div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">Chất lượng dịch vụ</div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Chính sách bảo hành đổi trả
              </div>
            </Link>
          </div>
          <div className="text-white">
            <div className="text-white my-[10px] font-bold">
              Hỗ trợ khách hàng
            </div>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Điều kiện giao dịch chung
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Hướng dẫn mua hàng online
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Chính sách giao hàng
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Hướng dẫn thanh toán
              </div>
            </Link>
          </div>
          <div className="text-white">
            <div className="text-white my-[10px] font-bold">
              Về thương hiệu iTech
            </div>
            <Link href={"/"}>
              <div className="text-white  my-[1px]">
                <div className="text-blue-500 my-[1px]">Tích điểm quà tặng</div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Giới thiệu về iTech
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Bán hàng doanh nghiệp
              </div>
            </Link>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Chính sách xử lý dữ liệu cá nhân
              </div>
            </Link>
          </div>
          <div className="text-white">
            <div className="text-white my-[10px] font-bold">
              Trung tâm bảo hành iTech
            </div>
            <Link href={"/"}>
              <div className="text-white flex my-[1px]">
                Giới thiệu iTechCare
              </div>
            </Link>
          </div>
        </div>
        <div className="my-[10px] flex">
          <div className="text-gray-600 text-[10px] w-[60%]">
            © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở
            KH & ĐT TP.HCM cấp ngày 02/01/2007.Địa chỉ: 128 Trần Quang Khải,
            P.Tân Định, Q.1, TP. Hồ Chí Minh. Điện thoại: 028 38125960. Địa chỉ
            liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú,
            TP.Thủ Đức, TP.Hồ Chí Minh. Chịu trách nhiệm nội dung: Huỳnh Văn
            Tốt. Email: Tot.huynhvan@thegioididong.com.
          </div>
          <div className="flex justify-between w-[40%]">
            <div className="">
              <Image
                src={"/images/announcement.svg"}
                width={100}
                height={100}
                alt="announment"
              ></Image>
            </div>
            <div className="">
              <Image
                src={"/images/dmca.svg"}
                width={100}
                height={100}
                alt="dmca"
              ></Image>
            </div>
            <div className="">
              <Image
                src={"/images/ncsc.svg"}
                width={100}
                height={100}
                alt="ncsc"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;