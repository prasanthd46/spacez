import Image from "next/image";
import { Lexend_Deca, Libre_Caslon_Text } from "next/font/google";
import toast from "react-hot-toast";

type PaymentOfferCardProps = {
  discountText: string;
  bankName: string;
  description: string;
  logoSrc: string;
  bannerBgColor?: string;
};

export default function PaymentOfferCard({
  discountText,
  bankName,
  description,
  logoSrc,
  bannerBgColor = "bg-[#3464B8]",
}: PaymentOfferCardProps) {
  return (
    <div className="flex  overflow-hidden  ">
      <div
        className={`flex items-center justify-center w-[56px] min-h-[182px] px-0 py-0 ${bannerBgColor} border-r-2 border-dashed border-[#FFFFFF]`}
      >
        <span
          className="text-[32px] text-white  font-bold leading-none -rotate-90 whitespace-nowrap"
          style={{ fontFamily: "'Libre Caslon Text', serif" }}
        >
          {discountText}
        </span>
      </div>

      <div className="flex flex-col justify-between p-[16px]  w-[330px] bg-[#FDF9F7]  gap-4  ">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="./image.svg"
            alt={bankName}
            width={36}
            height={36}
            className="inline rounded"
          />
          <span className="font-sans text-[16px] font-semibold text-[#242526]">
            {bankName}
          </span>
        </div>
        <div className="flex flex-col justify-between ">
          <p className=" text-[14px] text-[#7D817D] mb-1">{description}</p>

          <div className="w-full h-px bg-gray-200 my-1"></div>

          <button
            className="w-max px-0 py-0 focus:outline-none"
            onClick={() => toast("Displaying terms...")}
          >
            <span className="font-sans font-semibold text-[14px] text-[#7D817D]">
              Read more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
