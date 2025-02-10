import React from "react";
import { footer } from "../lib/definitions";

const Footer = () => {
  return (
    <footer className="mt-8 text-right text-[12px] italic opacity-50">
      <p> — Made with NextJS, TailwindCSS and &lt;3</p>
      <p>
        © {new Date().getFullYear()}, {footer.text}
      </p>
    </footer>
  );
};

export default Footer;
