import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  return (
    <form
      action="submit"
      className={`relative h-11 items-center rounded-md bg-[#EBEBEB] ${className}`}
    >
      <Input
        className="h-full border-transparent px-8 py-0 !text-lg text-[#747474] focus-visible:ring-[2px] focus-visible:ring-gray-300"
        placeholder="Buscar mesas, sillas y más"
      />
      <SearchIcon strokeWidth={1.5} size={20} className="absolute right-3" />
    </form>
  );
}
