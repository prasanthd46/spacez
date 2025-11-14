import Image from "next/image";

const navItems = [
  { name: "Explore", icon: "/search.svg" },
  { name: "Offers", icon: "/offer-BOLD.svg" },
  { name: "Bookings", icon: "/bookings.svg" },
  { name: "Wishlist", icon: "/favorite.svg" },
  { name: "Profile", icon: "/profile.svg" },
];

export default function BottomNav() {
  const activeItem = "Offers";

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-10 
                   flex justify-between items-center 
                   bg-white
                   h-[76px] // <-- YOUR 76px height
                   py-4 px-5 // <-- YOUR 16px/20px padding
                   border-t border-gray-200"
    >
      {navItems.map((item) => {
        const isActive = item.name === activeItem;

        return (
          <a
            href="#"
            key={item.name}
            className="flex flex-col items-center justify-center 
                       w-[60px] h-[44px] gap-1"
          >
            <Image src={item.icon} alt={item.name} width={24} height={24} />

            <span
              className={`font-lexend text-sm
                ${
                  isActive
                    ? "font-semibold text-[#9A5632]"
                    : "font-normal text-[#7D817D]"
                }
              `}
            >
              {item.name}
            </span>
          </a>
        );
      })}
    </footer>
  );
}
