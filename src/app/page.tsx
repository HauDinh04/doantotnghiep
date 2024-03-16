import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-200 pb-[40px]">
      <div className="w-[1240px] mx-auto pt-[40px] mb-[40px] relative">
        <Image className="rounded-3xl" src={"/images/slide1.webp"} width={1240} height={300} alt="slide"></Image>
        <div className="w-[30px] h-[30px] absolute bg-neutral-700 bg-opacity-30 rounded-full top-[150px] left-[10px]">
          <Image src={"/images/prev.png"} width={30} height={28} alt="prev"></Image>
        </div>
        <div className="w-[30px] h-[30px] absolute bg-neutral-700 bg-opacity-30 rounded-full top-[150px] right-[10px]">
          <Image src={"/images/next.png"} width={30} height={28} alt="prev"></Image>
        </div>
      </div>
      {/* start flash-sale */}
      <div className="w-[1120px] h-[370px] relative mx-auto mb-5">
        <div className="w-[1040px] h-[370px] mx-auto bg-neutral-900 rounded-xl shadow">
          <div className="w-[1040px] h-[90px] mb-[20px] flex">
            <div className="w-[400px] h-[90px] ">
              <Image src={"/images/fl-sale.png"} width={390} height={90} alt="fl-sale"></Image>
            </div>
            <div className="w-[600px] h-[70px] my-5 mr-10 flex justify-between">
              <div className="w-[185px] h-[70px] ">
                <div className="w-[185px] h-[38px] text-center text-white text-xl font-semibold font-['Inter']">KẾT THÚC TRONG</div>
                <div className="w-[185px] h-8 text-center text-white text-xl font-normal font-['Inter'] tracking-[4px]">00:00:00</div>
              </div>
              <div className="w-[185px] h-[70px] ">
                <div className="w-[185px] h-[38px] text-center text-white text-xl font-semibold font-['Inter']">DIỄN RA TRONG</div>
                <div className="w-[185px] h-8 text-center text-white text-xl font-semibold font-['Inter'] tracking-[4px]">00:00:00</div>
              </div>
              <div className="w-[185px] h-[70px] ">
                <div className="w-[185px] h-[38px] text-center text-white text-xl font-semibold font-['Inter']">NGÀY MAI</div>
                <div className="w-[185px] h-8 text-center text-white text-xl font-normal font-['Inter'] tracking-[4px]">00:00:00</div>
              </div>
            </div>
          </div>
          <div className="w-[960px] h-[240px] mx-auto mb-[20px] flex justify-between">
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
          </div>
        </div>
        <div className="w-[30px] h-[30px] absolute bg-neutral-700 bg-opacity-30 rounded-full top-[150px] left-[3px]">
          <Image src={"/images/prev.png"} width={30} height={28} alt="prev"></Image>
        </div>
        <div className="w-[30px] h-[30px] absolute bg-neutral-700 bg-opacity-30 rounded-full top-[150px] right-[3px]">
          <Image src={"/images/next.png"} width={30} height={28} alt="prev"></Image>
        </div>
      </div>
      {/* end flash-sale */}
      {/* start hot-product */}
      <div className="w-[1120px] h-[370px] relative mx-auto">
        <div className="w-[1040px] h-[370px] mx-auto bg-white rounded-xl shadow">
          <div className="w-[1040px] h-[70px] pt-5 my-[20px]">
            <div className="w-[400px] h-[70px] mx-auto text-center text-3xl font-bold font-['Inter']">SẢN PHẨM NỔI BẬT</div>
          </div>
          <div className="w-[960px] h-[240px] mx-auto mb-[20px] flex justify-between">
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
            <div className="w-[230px] h-[240px] bg-zinc-800 rounded-[20px]">
              <Image className="mx-auto mt-2.5" src={"/images/iphone-15-pro-max.webp"} width={150} height={150} alt="sp"></Image>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-sm font-normal font-['Inter']">iPhone 15 Pro Max</div>
              <div className="w-[230px] h-5 mt-2.5 text-center text-white text-[15px] font-normal font-['Inter']">30.990.000₫ <span className="text-white text-[15px] font-normal font-['Inter'] line-through">34.990.000₫</span> -11%</div>
            </div>
          </div>
        </div>
        <div className="w-[30px] h-[30px] absolute bg-neutral-700 bg-opacity-30 rounded-full top-[150px] left-[3px]">
          <Image src={"/images/prev.png"} width={30} height={28} alt="prev"></Image>
        </div>
        <div className="w-[30px] h-[30px] absolute bg-neutral-700 bg-opacity-30 rounded-full top-[150px] right-[3px]">
          <Image src={"/images/next.png"} width={30} height={28} alt="prev"></Image>
        </div>
      </div>
      {/* end hot-product */}
      <div className="w-[1040px] h-[306px] mx-auto mt-5 relative">
        <div className="w-[386px] h-[74.64px] absolute left-[350px] top-5 text-center text-neutral-200 text-3xl font-semibold font-['Inter']">IPhone 15 Pro Max<br /><span className="text-neutral-200 text-xl font-normal font-['Inter']">Titan. Thật bền chắc. Thật nhẹ. Thật Pro</span></div>
        <Image className="rounded-xl" src={"/images/banner1.png"} width={1040} height={306} alt="banner1"></Image>
      </div>
      <div className="w-[1040px] h-[306px] mx-auto mt-5 relative">
        <div className="w-[386px] h-[74.64px] absolute left-[350px] top-5 text-center text-zinc-800 text-3xl font-semibold font-['Inter']">IPhone 15 Pro<br /><span className="text-zinc-800 text-xl font-normal font-['Inter']">Camera mới. Thiết kế mới. Mới lịm tim</span></div>
        <Image className="rounded-xl" src={"/images/banner3.png"} width={1040} height={306} alt="banner3"></Image>
      </div>
      <div className="w-[1040px] h-[283px] mx-auto mt-5 flex justify-between">
        <Image className="rounded-xl" src={"/images/banner-mac.png"} width={514} height={283} alt="banner-mac"></Image>
        <Image className="rounded-xl" src={"/images/banner-ipad.png"} width={514} height={283} alt="banner-ipad"></Image>
      </div>
      <div className="w-[1040px] h-[283px] mx-auto mt-5 flex justify-between">
        <Image className="rounded-xl" src={"/images/banner-airpod.png"} width={514} height={283} alt="banner-airpod"></Image>
        <Image className="rounded-xl" src={"/images/banner-watch.png"} width={514} height={283} alt="banner-watch"></Image>
      </div>
    </main>
  );
}
