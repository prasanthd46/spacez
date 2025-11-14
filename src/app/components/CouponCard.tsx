import Image from "next/image";
import toast from "react-hot-toast";
type CouponCardProps = {
  discountValue: string;
  discountName: string;
  description: string;
};

export default function CouponCard({
  discountValue,
  discountName,
  description,
}: CouponCardProps) {
  return (
    <div className="flex w-full overflow-hidden min-h-[184px]">
      <div className="flex items-center justify-center bg-[#C16B3E] max-h-[184px] max-w-[68px] px-[12px] py-[20px]">
        <span
          className="text-white text-[32px] whitespace-nowrap font-bold  -rotate-90"
          style={{ fontFamily: "'Libre Caslon Text', serif" }}
        >
          {discountValue}
        </span>
      </div>
      <div
        className="flex flex-col  bg-[#FDF9F7] gap-[10px] pt-[20px] pb-[16px] pl-[20px] pr-[16px] w-[500px]"
        style={{ borderLeft: "2px dashed #AD6038" }}
      >
        <div className="flex justify-between items-center ">
          <span className="font-lexend font-bold text-[18px] text-[#4B4E4B]">
            {discountName}
          </span>
          <button
            className="flex items-center gap-[6px]"
            onClick={() => toast.success(`Coupon "${discountName}" copied!`)}
          >
            <Image src="/copy-icon.svg" alt="Copy" width={16} height={16} />
            <span className="font-lexend font-semibold text-base text-[#874B2C]">
              Copy
            </span>
          </button>
        </div>
        <p className="font-lexend font-normal text-[14px] text-[#7D817D]">
          {description}
        </p>
        <div className="w-full h-px bg-gray-200 "></div>
        <button
          className="py-[4px]"
          onClick={() => toast("Displaying terms...")}
        >
          <span className="flex font-lexend font-semibold text-sm leading-5 text-[#7D817D]">
            Read more
          </span>
        </button>
      </div>
    </div>
  );
}
