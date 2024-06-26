import NavItem from "./NavItem";
import Hamburger from "./Hamburger";

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
        <a
          href="/"
          className="md:text-3xl text-2xl text-terminal-green font-bold"
        >
          Elliott.Chong()
        </a>
        <ul className="gap-4 hidden md:flex ml-8">
          {links.map((link) => (
            <NavItem key={link.label} label={link.label} link={link.link} />
          ))}
        </ul>
        <ul className="ml-auto hidden md:flex gap-3">
          <a
            href="https://github.com/Elliott-Chong"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/github-icon.svg"
              alt="GitHub Icon"
              className="social-icon"
            />
          </a>
          <a
            href="https://instagram.com/elliottchong_"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/instagram-icon.svg"
              alt="Instagram Icon"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elliott-chong-566a98224/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/linkedin-icon.svg"
              alt="LinkedIn Icon"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCnb5XvHP--EklbZCu_WvAGQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/youtube-icon.png"
              alt="YouTube Icon"
              className="social-icon"
            />
          </a>
        </ul>
        <Hamburger links={links} className="md:hidden ml-8" />
      </nav>

      <style jsx>{`
        .social-icon {
          font-size: 2.5rem;
          width: 35px !important;
          height: 35px !important;
          filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(327deg)
            brightness(109%) contrast(103%);
          transition: filter 300ms;
          cursor: pointer;
        }
        .social-icon:hover {
          filter: invert(53%) sepia(89%) saturate(1045%) hue-rotate(90deg)
            brightness(115%) contrast(111%);
        }
      `}</style>
    </div>
  );
};

export default Navigation;
