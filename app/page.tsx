"use client";
import Avatar from "@/components/Avatar";
import { ButtonShadcn } from "@/components/ui/buttonshadcn";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";
import { useTheme } from "next-themes";

const LandingPage = () => {
  const { setTheme } = useTheme();
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mt-10">
        <ModeToggle></ModeToggle>
      </div>
      <Avatar
        src="/MagicBookQuest.png"
        alt="Profile Avatar"
        className="w-[500px] h-auto flex justify-end pt-20 pb-2"
      />
      <div className="flex justify-between w-70">
        <Link href="/profile">
          <ButtonShadcn
            variant="outline"
            size="lg"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Profile
          </ButtonShadcn>
        </Link>
        <Link href="/profile/search">
          <ButtonShadcn
            variant="outline"
            size="lg"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          >
            Add Book
          </ButtonShadcn>
        </Link>
      </div>
    </main>
  );
};
export default LandingPage;

<button>Set Goal</button>;
