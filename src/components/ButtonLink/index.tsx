import Link from "next/link";

const ButtonLink = ({
  label,
  link,
  className = "",
}: {
  label: string;
  link: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={`w-fit inline-flex px-3 py-2 text-black bg-terminal-green cursor-pointer ${className}`}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
