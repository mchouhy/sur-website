import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <form
      action="submit"
      className="relative flex h-11 w-full max-w-[70rem] items-center rounded-md bg-[#EBEBEB]"
    >
      <Input
        className="h-full border-transparent px-6 text-[#747474] focus-visible:ring-[2px] focus-visible:ring-gray-300"
        placeholder="Buscar mesas, sillas y más"
      />
      <SearchIcon strokeWidth={1.5} size={20} className="absolute right-3" />
    </form>
  );
}
