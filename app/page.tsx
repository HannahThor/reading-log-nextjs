import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h2>Welcome to the</h2>
      <h1>Magic Book Quest</h1>
      <Avatar
        src="/sisters-reading.png"
        width={200}
        height={200}
        alt="Profile Avatar"
        className="rounded-full border-solid border-black border-1 flex justify-end"
      />
      <div>
        <Button text="Go to profile" href="/profile" type="button" />
        <Button text="Add Book" href="/profile/search" type="button" />
      </div>
    </main>
  );
};
export default LandingPage;
