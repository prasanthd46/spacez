import Image from "next/image";
import toast from "react-hot-toast";
type GiftCardProps = {
  discountValue: string;
  brandName: string;
  description: string;
  logoSrc: string;
  bannerBgColor: string;
};

export default function GiftCard({
  discountValue,
  brandName,
  description,
  logoSrc,
  bannerBgColor,
}: GiftCardProps) {
  return (
    <div className="flex w-full overflow-hidden min-h-[182px]">
      <div
        className={`flex items-center justify-center w-[65px] shrink-0 px-3 py-5 gap-4 ${bannerBgColor}`}
        style={{ borderRight: "2px dashed #FFFFFF" }}
      >
        <span
          className="font-semibold text-white text-[32px] leading-[44px] -rotate-90"
          style={{ fontFamily: "'Libre Caslon Text', serif" }}
        >
          {discountValue}
        </span>
      </div>

      <div
        className="flex flex-col bg-[#FDF9F7]
                   p-[20px] justify-between "
      >
        <div className="flex justify-between itemsw-center">
          <div className="flex items-center gap-2">
            <Image src={logoSrc} alt={brandName} width={30} height={30} />
            <div className="font-lexend  font-semibold text-[16px] text-[#4B4E4B] ">
              {brandName}
            </div>
          </div>

          <button
            className="flex items-center gap-1"
            onClick={() => toast.success(`${brandName} voucher collected!`)}
          >
            <span
              className={`font-lexend font-semibold 
                          text-base text-[#C16B3E]`}
            >
              Collect
            </span>
          </button>
        </div>
        <div className="flex flex-col  items-start">
          <p className="font-lexend font-normal text-[14px] leading-5 text-[#7D817D]">
            {description}
          </p>

          <div className="w-full h-px bg-gray-200 my-1"></div>

          <button onClick={() => toast("Displaying terms...")}>
            <span className="font-lexend font-semibold text-[14px] leading-5 text-[#7D817D]">
              Read more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
