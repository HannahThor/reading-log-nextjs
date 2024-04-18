import Image from "next/image";

// Add type here for BookData

const Background = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center p-5">
      <Image
        src="/books.png"
        width={200}
        height={200}
        alt="book"
        className="pt-20"
      />
    </div>
  );
};
export default Background;
