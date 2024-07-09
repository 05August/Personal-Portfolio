import Link from "next/link";

const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <li>
      <Link href={link} className="text-2xl text-terminal-green">
        .{label}()
      </Link>
    </li>
  );
};

export default NavItem;
