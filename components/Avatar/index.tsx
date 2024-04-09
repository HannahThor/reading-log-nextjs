import Image from "next/image";

type AvatarProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Avatar() {
  return (
    <Image
      src="/avatar.png"
      width={100}
      height={100}
      alt="Avatar"
      className="w-[100px] h-[100px] rounded-full border-solid border-black border-2 flex justify-end"
    />
  );
}
