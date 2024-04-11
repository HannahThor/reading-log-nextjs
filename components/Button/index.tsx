import Link from "next/link";
import classNames from "classnames";

type ButtonType = "submit" | "button";

type LinkButtonProps = {
  text?: string;
  href: string;
  onClick?: never;
  icon?: never;
  type?: ButtonType;
  className: string;
};

type NormalButtonProps = {
  text: string;
  onClick: () => void;
  href?: never;
  icon?: never;
  type?: ButtonType;
  className: string;
};

type IconButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  text?: never;
  href?: never;
  type?: ButtonType;
  className: string;
};

type ButtonProps = LinkButtonProps | NormalButtonProps | IconButtonProps;

const Button = ({
  text,
  onClick,
  href,
  icon,
  type = "button",
  className,
}: ButtonProps) => {
  const StyledButton = () => (
    <button
      type={type}
      className={classNames(
        "rounded py-1 px-2",
        text && "border-solid border-gray-300 rounded-2xl border"
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
