import NavItem from "./NavItem";
import Hamburger from "./Hamburger";
import Link from "next/link";

import GithubIcon from "/public/icons/github.svg";
import LinkedinIcon from "/public/icons/linkedin.svg";
import FacebookIcon from "/public/icons/facebook.svg";
import InstagramIcon from "/public/icons/instagram.svg";

const links = [
  {
    label: "projects",
    link: "/projects",
  },
];

const Navigation = () => {
  return (
    <div className="w-full">
      <nav className="lg:max-w-screen-lg text-white flex mx-auto items-end py-4 w-fit md:w-full max-w-screen-sm">
        <Link
          href="/"
          className="md:text-3xl text-2xl text-terminal-green font-bold"
        >
          Augustt()
        </Link>
        <ul className="gap-4 hidden md:flex ml-8">
          {links.map((link) => (
            <NavItem key={link.label} label={link.label} link={link.link} />
          ))}
        </ul>
        <ul className="ml-auto hidden md:flex gap-3">
          <Link
            href="https://github.com/05August"
            target="_blank"
            className="social-icon"
          >
            <GithubIcon />
            <p className="sr-only">Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/thieu-thuan-2861b5269/"
            target="_blank"
            className="social-icon"
          >
            <LinkedinIcon />
            <p className="sr-only">Linkedin</p>
          </Link>
          <Link
            href="https://www.facebook.com/cowfrust.eiii/"
            target="_blank"
            className="social-icon"
          >
            <FacebookIcon />
            <p className="sr-only">Facebook</p>
          </Link>
          <Link
            href="https://www.instagram.com/_cowfrust/"
            target="_blank"
            className="social-icon"
          >
            <InstagramIcon />
            <p className="sr-only">Instagram</p>
          </Link>
        </ul>
        <Hamburger links={links} className="md:hidden ml-8" />
      </nav>
    </div>
  );
};

export default Navigation;
