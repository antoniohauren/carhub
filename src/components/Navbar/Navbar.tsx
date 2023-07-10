import Image from "next/image";
import Link from "next/link";
import { NavbarProps } from ".";
import { CustomButton } from "../CustomButton";

export function Navbar({}: NavbarProps) {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm;px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="Car Hub logo"
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}
