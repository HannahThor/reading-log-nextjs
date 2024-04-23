import Avatar from "@/components/Avatar";
import { ButtonShadcn } from "@/components/ui/buttonshadcn";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Avatar
        src="/MagicBookQuest.png"
        alt="Profile Avatar"
        className="w-[500px] h-auto flex justify-end pt-20 pb-2"
      />
      <div className="flex justify-between w-70">
        <Link href="/profile">
          <ButtonShadcn variant="outline" size="lg">
            Profile
          </ButtonShadcn>
        </Link>
        <Link href="/profile/search">
          <ButtonShadcn variant="outline" size="lg">
            Add Book
          </ButtonShadcn>
        </Link>
      </div>
    </main>
  );
};
export default LandingPage;
