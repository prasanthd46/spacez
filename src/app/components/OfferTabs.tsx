"use client";

export type TabName = "Coupons" | "Giftcards" | "Payment Offers";

const tabLinks = {
  Coupons: "#coupons",
  Giftcards: "#giftcards",
  "Payment Offers": "#payment-offers",
};

type OfferTabsProps = {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
};

export default function OfferTabs({ activeTab, onTabChange }: OfferTabsProps) {
  return (
    <nav className="w-full border-b border-[#E5E6E5] bg-white ">
      <div className="w-full flex justify-between items-center px-6">
        {(Object.keys(tabLinks) as TabName[]).map((tab) => {
          const isActive = tab === activeTab;
          return (
            <a
              key={tab}
              href={tabLinks[tab]}
              onClick={(e) => {
                e.preventDefault();
                onTabChange(tab);

                const targetId = tabLinks[tab].replace("#", "");
                const section = document.getElementById(targetId);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`
                font-lexend text-xs leading-[18px] 
                pt-3 pb-2 border-b-2 -mb-px 
                ${
                  isActive
                    ? "font-semibold text-text-primary border-text-primary"
                    : "font-normal text-[#7D817D] border-transparent"
                }
              `}
            >
              {tab}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
