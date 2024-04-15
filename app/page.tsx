import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="pt-20 text-lg font-light">Welcome to the</h2>
      <h1 className="pt-2 pb-2 text-2xl font-semibold">Magic Book Quest</h1>
      <Avatar
        src="/sisters-reading.png"
        width={400}
        height={400}
        alt="Profile Avatar"
        className="rounded-full border-solid border-black border-1 flex justify-end py-2"
      />
      <div className="py-2 flex flex-row justify-between w-60">
        <Button text="Profile" href="/profile" type="button" />
        <Button text="Add New Book" href="/profile/search" type="button" />
      </div>
    </main>
  );
};
export default LandingPage;
