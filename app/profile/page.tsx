"use client";

import Avatar from "@/components/Avatar";
import Link from "next/link";
import BookCollection from "@/components/BookCollection";
import { ButtonShadcn } from "@/components/ui/buttonshadcn";

const Profile = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Link href="/">
          <ButtonShadcn variant="outline" size="sm">
            Home
          </ButtonShadcn>
        </Link>

        <Link href="/profile/search">
          <Avatar
            src="/books.png"
            alt="Book Search"
            className="w-[100px] h-auto rounded-full"
          />
        </Link>
      </nav>
      <h1 className="text-xl font-light py-5">Hi, Enchanted Reader</h1>
      <Avatar
        src="/ProfileAvatar.png"
        alt="Profile Avatar"
        className="w-[200px] h-auto rounded-full border-solid border-black border-1 flex justify-end"
      />
      <p className="text-lg font-light py-5">Your page count is ...</p>

      <BookCollection />
    </div>
  );
};

export default Profile;
