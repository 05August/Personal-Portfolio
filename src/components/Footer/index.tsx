'use client';

import { useState } from 'react';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="border-t border-gray-600 py-2 mt-6">
      <div className="flex flex-col items-center mt-4">
        <ul className="flex md:hidden gap-3">
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
        </ul>
        <p className="text-gray-400 text-sm inline-flex mt-4 md:mt-0 text-center">
          © {year} Elliott Chong. All rights reserved.
        </p>
      </div>
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
    </footer>
  );
};

export default Footer;
