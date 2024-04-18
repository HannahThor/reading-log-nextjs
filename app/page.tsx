import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Avatar
        src="/MagicBookQuest.jpg"
        alt="Profile Avatar"
        className="w-[500px] h-auto flex justify-end pt-20 pb-2"
      />
      <div className="py-2 flex flex-row justify-between w-60">
        <Button
          text="Profile"
          href="/profile"
          type="button"
          className="bg-teal text-bold"
        />
        <Button text="Add New Book" href="/profile/search" type="button" />
      </div>
    </main>
  );
};
export default LandingPage;
