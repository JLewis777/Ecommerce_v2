import React from "react";
import "./Footer.css";

const footer = () => (
  <footer className="footer">
    <p className="top-text">
      Ericzander Guitars | Phone: 555-555-5555 | Email:
      Josh.Ericzander@protonmail.com
    </p>
    <a
      href="https://facebook.com"
      aria-label="Facebook"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-facebook-f fa-2x"></span>
    </a>
    <a
      href="https://instagram.com"
      aria-label="Instagram"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-instagram fa-2x"></span>
    </a>
    <a
      href="https://twitter.com"
      aria-label="Twitter"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-twitter fa-2x"></span>
    </a>
    <a
      href="https://youtube.com"
      aria-label="Youtube"
      target="_blank"
      rel="noreferrer"
    >
      <span className="fab fa-youtube fa-2x"></span>
    </a>
    <p className="bottom-text">
      &#169;Ericzander Guitars 2020 | Designed and developed by Joshua Lewis
    </p>
    {/* <p>
      <a
        href="https://jigsaw.w3.org/css-validator/check/referer"
        aria-label="css-validator"
        target="_blank"
        rel="noopener"
      >
        <img
          style="border: 0; width: 88px; height: 31px"
          src="https://jigsaw.w3.org/css-validator/images/vcss"
          alt="Valid CSS!"
        />
      </a>
    </p> */}
  </footer>
);

export default footer;
