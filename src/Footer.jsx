import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contacts-container2">
      <div className="info2">
 
    <p>
      موقع كومبلكس هو وسيط عقاري اونلاين يساعدكم حتى تتواصلون ويه اصحاب المجمعات السكنية وتعرفون معلوماتهم
      وكلشي يخص المجمع بدون تاخير ويساعدكم على التواصل المباشر وياهم
    </p>
 
  </div>
  <div className="social-media-icons">
    <a href="https://www.facebook.com">
      <FontAwesomeIcon
        icon={faFacebook}
        size="lg"
        style={{ color: "white", margin: "1%" }}
      />
    </a>
    <a href="https://www.twitter.com">
      <FontAwesomeIcon
        icon={faTwitter}
        size="lg"
        style={{ color: "white", margin: "1%" }}
      />
    </a>
    <a href="https://www.instagram.com">
      <FontAwesomeIcon
        icon={faInstagram}
        size="lg"
        style={{ color: "white", margin: "1%" }}
      />
    </a>
    <a href="https://www.linkedin.com">
      <FontAwesomeIcon
        icon={faLinkedin}
        size="lg"
        style={{ color: "white", margin: "1%" }}
      />
    </a>
  </div>


      </div>
    </div>
  );
}
