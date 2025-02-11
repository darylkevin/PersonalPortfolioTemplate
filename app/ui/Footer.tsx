import React from "react";
import { footer } from "../lib/definitions";
import Profiles from "./Profiles";

const Footer = () => {
  return (
    <footer className="w-full mt-8 max-md:text-right md:text-left text-[8px] italic flex justify-between">
      <div className="opacity-50">
      <p> — Made with NextJS, TailwindCSS, Motion and &lt;3</p>
      <p>
        © {new Date().getFullYear()}, {footer.text}
      </p>
      </div>
      <Profiles />
    </footer>
  );
};

export default Footer;
