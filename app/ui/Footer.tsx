import React from "react";
import { footer } from "../lib/definitions";
import Profiles from "./Profiles";

const Footer = () => {
  return (
    <footer className="mt-8 flex w-full justify-between text-left text-[8px] italic">
      <div className="opacity-50">
        <p>{footer.text}</p>
        <p>
          © {new Date().getFullYear()}, {footer.afterCopyright}
        </p>
      </div>

      <div className="md:hidden lg:block">
        <Profiles />
      </div>
    </footer>
  );
};

export default Footer;
