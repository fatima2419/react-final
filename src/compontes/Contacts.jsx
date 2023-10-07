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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              aut at dolore impedit eveniet, ipsum accusantium quibusdam
              consequuntur neque iste. Voluptates modi obcaecati incidunt
              suscipit ratione, quidem perferendis nam mollitia! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ullam, veniam, rerum
              facilis sit ad exercitationem eaque vitae laborum, dolores nulla
              atque recusandae praesentium. Minus fuga perspiciatis minima
              laborum veritatis praesentium!Lorem;
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
    </div>
  );
}
