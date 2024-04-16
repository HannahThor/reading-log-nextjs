"use client";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import BookCollection from "@/components/BookCollection";

const Profile = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <nav className="flex flex-row justify-between w-full mb-4 px-5">
        <Button text="Back" href="/" type="button" />
        <Link href="/profile/search">
          <Avatar
            src="/books.png"
            width={50}
            height={50}
            alt="Book Search"
            className="rounded-full border-solid border-black border-1 "
          />
        </Link>
      </nav>
      <h1 className="text-xl font-light py-5">Hi, Enchanted Reader</h1>
      <Avatar
        src="/ProfileAvatar.png"
        width={200}
        height={200}
        alt="Profile Avatar"
        className="rounded-full border-solid border-black border-1 flex justify-end"
      />
      <p className="text-lg font-light py-5">Your page count is ...</p>
      <section>
        <BookCollection />
      </section>
    </div>
  );
};

export default Profile;
