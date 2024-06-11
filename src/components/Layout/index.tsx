'use client';

import "@fontsource/space-mono";
import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <div>
        <Navigation />
        <div className="content-container">
          {children}
          <Footer />
        </div>
      </div>
      <style jsx global>{`
        html {
          background-color: #0d0208;
        }
        * {
          font-family: "Space Mono", monospace;
          color: white;
        }
        .content-container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 16px;
        }
      `}</style>
    </>
  );
};

export default Layout;
