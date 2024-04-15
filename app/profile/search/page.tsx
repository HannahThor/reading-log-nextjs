import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import BookSearch from "@/components/BookSearch";

// Add type here for BookData

const Search = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Button text="Back" href="/profile" type="button" className="" />
        <Link href="/profile">
          <Avatar
            src="/ProfileAvatar.png"
            width={50}
            height={50}
            alt="Profile Avatar"
            className="rounded-full border-solid border-black border-1 "
          />
        </Link>
      </nav>

      <BookSearch />
    </div>
  );
};
export default Search;
