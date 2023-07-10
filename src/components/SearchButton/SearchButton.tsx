import Image from "next/image";
import { SearchButtonProps } from ".";

export function SearchButton({ otherClasses }: SearchButtonProps) {
  return (
    <button type="submit" className={`-ml-3 z-0 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
}
