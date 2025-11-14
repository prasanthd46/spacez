import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full flex justify-between items-center bg-white 
                      border-b border-gray-200 
                      pt-4 pb-4 pl-6 pr-5 sticky "
    >
      <Image
        src="/logo.svg"
        alt="Spacez Logo"
        width={114}
        height={24}
        priority
      />

      <button>
        <Image src="/menu.svg" alt="Menu" width={16} height={10} />
      </button>
    </header>
  );
}
