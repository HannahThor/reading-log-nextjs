"use client";
import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";
import { useTheme } from "next-themes";

const LandingPage = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-10">
        <ModeToggle></ModeToggle>
      </div>
      <Avatar
        src="/MagicBookQuest.png"
        alt="Profile Avatar"
        className="w-[500px] h-auto flex justify-end pt-20 pb-2"
      />
      <div className="w-1/4 flex justify-center">
        <Link href="/profile">
          <Button
            variant="outline"
            size="lg"
            className="m-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Profile
          </Button>
        </Link>
        <Link href="/profile/search">
          <Button
            variant="outline"
            size="lg"
            className="m-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Add Book
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;

<button>Set Goal</button>;
