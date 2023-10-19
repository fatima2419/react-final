import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Contacts() {
  return (
    <div className="all">
      <div className="contacts-container">
        <div className="info">
          <div>
            <h7>genral idea of the project</h7>
            <p>
            "كومبليكس" هو مصدر مفيد لأولئك الذين يبحثون عن منزل جديد للعيش في مناطق مختلفة من بغداد. يقدم الموقع معلومات مفصلة ومفيدة عن مجمعات السكن ويساعد الأفراد في اتخاذ قرارات مستنيرة بشأن اختيار المنزل المناسب لهم.
            </p>
          </div>
          <div className="social-media-icons2">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "white", margin: "5%" }}
              />
            </a>
            <a href="https://www.twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                style={{ color: "white", margin: "5%" }}
              />
            </a>
            <a href="https://www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "white", margin: "5%" }}
              />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ color: "white", margin: "5%" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
