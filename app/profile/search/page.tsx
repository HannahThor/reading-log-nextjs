import Avatar from "@/components/Avatar";
import Link from "next/link";
import BookSearch from "@/components/BookSearch";
import { ButtonShadcn } from "@/components/ui/buttonshadcn";

// Add type here for BookData

const Search = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Link href="/">
          <ButtonShadcn variant="outline" size="sm">
            Home
          </ButtonShadcn>
        </Link>
        <Link href="/profile">
          <Avatar
            src="/ProfileAvatar.png"
            alt="Profile Avatar"
            className="w-[100px] h-auto rounded-full border-solid border-black border-1 "
          />
        </Link>
      </nav>

      <BookSearch />
    </div>
  );
};
export default Search;
