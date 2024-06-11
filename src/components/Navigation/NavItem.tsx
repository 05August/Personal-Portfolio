const NavItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <li>
      <a href={link} className="text-2xl text-terminal-green">
        .{label}()
      </a>
    </li>
  );
};

export default NavItem;
