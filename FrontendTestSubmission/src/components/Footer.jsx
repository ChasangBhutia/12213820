import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-400 w-full text-center h-10 pt-3 text-zinc-500">
      <p>@Url-Shortner - {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
