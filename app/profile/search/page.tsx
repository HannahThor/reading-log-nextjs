import Avatar from "@/components/Avatar";
import Link from "next/link";
import BookSearch from "@/components/BookSearch";
import { Button } from "@/components/ui/button";

// Add type here for BookData

const Search = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Link href="/">
          <Button
            variant="outline"
            size="sm"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Home
          </Button>
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
