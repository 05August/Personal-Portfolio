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
    <a
      href={link}
      className={`w-fit inline-flex px-3 py-2 text-black bg-terminal-green cursor-pointer ${className}`}
    >
      {label}
    </a>
  );
};

export default ButtonLink;
