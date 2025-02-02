import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function Footer(props) {
  const iconSize = 28;
  return (
    <section className="footerSection">
      <div className="socialmediaIcons">
        <a
          className="footerHyperlink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/huh_ca/"
        >
          <AiOutlineInstagram size={iconSize} />
        </a>
        <a
          className="footerHyperlink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://howuniversehowls.myportfolio.com/"
        >
          <IoPerson size={iconSize / 1.2} />
        </a>
        <a
          className="footerHyperlink"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:howuniversehowls@gmail.com"
        >
          <CiMail size={iconSize} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
