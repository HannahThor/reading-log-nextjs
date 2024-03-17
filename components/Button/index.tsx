import Link from "next/link";
import classNames from "classnames";

type ButtonType = "submit" | "button";

type LinkButtonProps = {
  text?: string;
  href: string;
  onClick?: never;
  icon?: never;
  type?: ButtonType;
};

type NormalButtonProps = {
  text: string;
  onClick: () => void;
  href?: never;
  icon?: never;
  type?: ButtonType;
};

type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  text?: never;
  href?: never;
  type?: ButtonType;
};

type ButtonProps = LinkButtonProps | NormalButtonProps | IconButtonProps;

const Button = ({
  text,
  onClick,
  href,
  icon,
  type = "button",
}: ButtonProps) => {
  const StyledButton = () => (
    <button
      type={type}
      // className="border-solid border-black border rounded py-1 px-2"
      className={classNames(
        "rounded py-1 px-2",
        text && "border-solid border-black border"
      )}
    >
      {icon ?? text}
    </button>
  );
  if (onClick) {
    return <StyledButton />;
  }

  return (
    <Link href={href}>
      <StyledButton />
    </Link>
  );
};
export default Button;
