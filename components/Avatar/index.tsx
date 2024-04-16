import Image from "next/image";

type AvatarProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Avatar({
  className,
  src,
  alt,
  width,
  height,
}: AvatarProps) {
  return (
    <Image
      src={src || src}
      width={width}
      height={width}
      alt={alt}
      className={className}
    />
  );
}

//
