"use client";

import Link from "next/link";
import { useState } from "react";

import GithubIcon from "/public/icons/github.svg";
import LinkedinIcon from "/public/icons/linkedin.svg";
import FacebookIcon from "/public/icons/facebook.svg";
import InstagramIcon from "/public/icons/instagram.svg";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="border-t border-gray-600 py-2 mt-6">
      <div className="flex flex-col items-center mt-4">
        <ul className="flex md:hidden gap-3">
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
        <p className="text-gray-400 text-sm inline-flex mt-4 md:mt-0 text-center">
          © {year} Augustt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
