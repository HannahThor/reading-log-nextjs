"use client";

import Avatar from "@/components/Avatar";
import Link from "next/link";
import BookCollection from "@/components/BookCollection";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

const Profile = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Link href="/">
          <Button
            variant="outline"
            size="lg"
            className="transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Home
          </Button>
        </Link>

        <Link href="/profile/search">
          <Avatar
            src="/books.png"
            alt="Book Search"
            className="w-[100px] h-auto rounded-full"
          />
        </Link>
        <ModeToggle />
      </nav>
      <h1 className="text-xl font-light py-5">Hi, Enchanted Reader</h1>
      <Avatar
        src="/ProfileAvatar.png"
        alt="Profile Avatar"
        className="w-[200px] h-auto rounded-full border-solid border-black border-1 flex justify-end"
      />
      <BookCollection />
    </div>
  );
};

export default Profile;
