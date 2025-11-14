"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import OfferTabs, { TabName } from "@/app/components/OfferTabs";
import CouponCard from "@/app/components/CouponCard";
import toast, { Toaster } from "react-hot-toast";
import GiftCard from "@/app/components/GiftCard";
import PaymentOfferCard from "@/app/components/PaymentOfferCard";
import BottomNav from "@/app/components/BottomNav";
import { Lexend_Deca, Libre_Caslon_Text } from "next/font/google";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabName>("Coupons");
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
    const sectionMap: Record<TabName, string> = {
      Coupons: "coupons",
      Giftcards: "giftcards",
      "Payment Offers": "payment-offers",
    };
    const sectionId = sectionMap[tab];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white flex flex-col h-screen">
      <Toaster position="top-center" toastOptions={{
    
    style: {
      fontFamily: "var(--font-lexend)",
    },
    
    success: {
      style: {
        background: '#C16B3E', 
        color: 'white',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#C16B3E',
      },
    },
  }}/>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
        
        <div className="pt-4  20">
          <h1 className="text-xl px-[24px]  font-semibold text-[#4B4E4B] ">Offers</h1>
          <div className="py-[16px] px-[24px] flex flex-col gap-4">
          <p className=" text-sm font-normal text-[#4B4E4B] leading-5 ">
            {isSignedIn
              ? "Sign in to unlock exclusive additional rewards"
              : "Book directly with us to get exclusive benefits"}
          </p>
          {!isSignedIn && (
            <button className="w-full h-10 bg-[#C16B3E] rounded-[2px] flex items-center justify-center outline-none"
              onClick={()=>{
                setIsSignedIn(true)
                toast.success("Signed in successfully!")
              }}
            >
              <span className="text-base font-normal text-white leading-6">
                Sign in
              </span>
            </button>
          )}
          </div>
        </div>
        
        <OfferTabs activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div className="flex-1 overflow-y-auto pb-[76px]">
        
        <section id="coupons" className="p-6 flex flex-col gap-4">
          <h2 className="font-lexend font-semibold text-[#4B4E4B] text-[16px]">
            Sitewide coupons:
          </h2>
          <CouponCard
            discountValue="₹1,500"
            discountName="LONGSTAY"
            description="15% off when you book for 5 days or more and 20% off when you book for 30 days or more."
          />
          <CouponCard
            discountValue="₹3,000"
            discountName="EARLYBIRD"
            description="25% off when you book for 5 days or more and 20% off when you book for 30 days or more."
          />
          <CouponCard
            discountValue="Flat 10%"
            discountName="RUSHDEAL"
            description="25% off when you book for 5 days or more and 20% off when you book for 30 days or more."
          />
        </section>
        
        <section id="giftcards" className="p-6 flex flex-col gap-4">
          <div>
            <h2 className="font-lexend font-semibold text-[#4B4E4B]">
              Bonus gift cards:
            </h2>
            <span className="font-lexend font-semibold text-[#7D7D7D] text-[14px]">
              Collect multiple of these:
            </span>
          </div>
          {isSignedIn ? (
            <div className="flex flex-col gap-4">
              <GiftCard
                discountValue="₹1500"
                brandName="Myntra"
                description="Get this gift voucher on booking above ₹2000"
                logoSrc="/myntra.svg"
                bannerBgColor="bg-[#D41C9B]"
              />
              <GiftCard
                discountValue="₹1000"
                brandName="Hammer"
                description="Get this gift voucher on booking above ₹1500"
                logoSrc="/hammer.svg"
                bannerBgColor="bg-black"
              />
            </div>
          ) : (
            <div className="font-lexend flex flex-col gap-7 w-[345px] ">
              <div className="bg-[#FEF9F8] w-[345px] h-[100px] flex justify-between items-center">
                <div className="p-5">
                  <p className="text-[#874B2C] font-semibold text-base">
                    Assured vouchers up to
                  </p>
                  <p className="text-2xl font-bold text-[#874B2C]">₹1000✨</p>
                  <p className=" text-[#4B4E4B] font-normal text-[14px]">
                    of trending brands
                  </p>
                </div>
                <Image
                  src="./card.svg"
                  alt={"GiftCard"}
                  width={125}
                  height={111}
                  className="inline rounded"
                />
              </div>
              <button className="w-full h-10 bg-[#C16B3E] rounded-[2px] flex items-center justify-center outline-none"
                onClick={()=>toast.success("Claimed Gift Card")}>
                <span className="text-base font-normal text-white leading-6">
                  Claim gift cards
                  <svg
                    width="15"
                    height="8"
                    viewBox="0 0 22 18"
                    className="inline ml-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3L12 9L7 15"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 3L18 9L13 15"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </section>
        
        <section id="payment-offers" className="p-6 flex flex-col gap-4 ">
          <h2 className="font-lexend font-semibold text-[#4B4E4B]">
            Payment offers:
          </h2>
          {isSignedIn ? (
            
            <PaymentOfferCard
              discountText="10% OFF"
              bankName="HDFC BANK"
              description="Get 10% off on booking above ₹1500"
              logoSrc="/hdfc-logo.svg"
              bannerBgColor="bg-[#3367CC]"
            />
          ) : (
            <div className="font-lexend flex flex-col gap-7 w-[345px]">
              <div className="bg-[#FEF9F8] w-[345px] h-[100px] flex justify-between items-center pr-[14px] py-[12px] ">
                <div className="p-5">
                  <p className="text-[#4B4E4B] font-normal">
                    Save more on your bookings
                  </p>
                  <div className="text-[24px] font-bold text-[#874B2C]">
                    upto 15% Off
                    <span className="block text-[#874B2C] font-[600] text-[15px]">
                      on select payment methods
                    </span>
                  </div>
                </div>
                <Image
                  src="./payment.svg"
                  alt={"payment"}
                  width={81}
                  height={74}
                  className="inline rounded"
                />
              </div>
              <button className="w-full h-10 bg-[#C16B3E] rounded-[2px] flex items-center justify-center outline-none"
                onClick={()=>toast.success("Unlocked Offers")}>
                <span className="text-base font-normal text-white leading-6">
                  Unlock Offers
                  <svg
                    width="15"
                    height="8"
                    viewBox="0 0 22 18"
                    className="inline ml-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 3L12 9L7 15"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 3L18 9L13 15"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
