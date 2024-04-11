import Avatar from "@/components/Avatar";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-1xl font-light">Hi, Enchanted Reader</h1>
      <Avatar
        src="/ProfileAvatar.png"
        width={200}
        height={200}
        alt="Profile Avatar"
        className="rounded-full border-solid border-black border-1 flex justify-end"
      />
    </div>
  );
};

export default Profile;
