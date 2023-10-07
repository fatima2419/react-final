
import React from "react";
import "../App.css";
import slide from "./11.jpeg";
import location from "./Group 34.png";

export default function Top3(){
    return(<>
    <div className="seemore">
        <h3>HOW TO CHOSE YOUR PERFECT COMPLEX</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, iste,
          magnam molestiae
          <br></br>exercitationem inventore suscipit maxime repellendus omnis
          officia quibusdam sequi dolores.
          <br></br>Ut fugiat beatae quasi praesentium architecto nihil
          temporibus.
        </p>
        <div className="pro">
          <div>
            <img src={location} alt="location" />
            <h3>Choose Location</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              <br></br>elit. Aperiam praesentium illum placeat quit?
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="86"
            viewBox="0 0 356 86"
            fill="none"
          >
            <path
              d="M354.762 6.40637C355.035 6.44557 355.289 6.25576 355.328 5.98241C355.367 5.70907 355.177 5.4557 354.904 5.41649L354.762 6.40637ZM0.1535 80.8734C42.2229 88.2405 72.144 85.3534 96.6946 77.3322C121.228 69.3166 140.371 56.1793 160.847 43.133C181.333 30.081 203.189 17.0933 233.223 9.26705C263.258 1.44071 301.504 -1.23176 354.762 6.40637L354.904 5.41649C301.545 -2.2361 263.161 0.432499 232.971 8.29936C202.78 16.1663 180.817 29.2239 160.31 42.2897C139.794 55.3613 120.77 68.4142 96.384 76.3817C72.0148 84.3436 42.2628 87.2323 0.325993 79.8884L0.1535 80.8734Z"
              fill="#1A202C"
            />
          </svg>
          <div>
            <img src={location} alt="location" />
            <h3>Choose Location</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              <br></br>elit. Aperiam praesentium illum placeat quit?
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="86"
            viewBox="0 0 356 86"
            fill="none"
            className="line"
          >
            <path
              d="M354.762 6.40637C355.035 6.44557 355.289 6.25576 355.328 5.98241C355.367 5.70907 355.177 5.4557 354.904 5.41649L354.762 6.40637ZM0.1535 80.8734C42.2229 88.2405 72.144 85.3534 96.6946 77.3322C121.228 69.3166 140.371 56.1793 160.847 43.133C181.333 30.081 203.189 17.0933 233.223 9.26705C263.258 1.44071 301.504 -1.23176 354.762 6.40637L354.904 5.41649C301.545 -2.2361 263.161 0.432499 232.971 8.29936C202.78 16.1663 180.817 29.2239 160.31 42.2897C139.794 55.3613 120.77 68.4142 96.384 76.3817C72.0148 84.3436 42.2628 87.2323 0.325993 79.8884L0.1535 80.8734Z"
              fill="#1A202C"
            />
          </svg>
          <div>
            <img src={location} alt="location" />
            <h3>Choose Location</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              <br></br>elit. Aperiam praesentium illum placeat quit?
            </p>
          </div>
        </div>
        <div className="firsttop">
          <h4>OUR TOP COMPLEXES</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic atque
            error libero qui omnis molestias nam, odio obcaecati! Possimus culpa
            atque veniam ut nulla optio repellendus voluptatem illum quia
            repudiandae!
          </p>
        </div>
        <div className="t3">
          <div className="pic1">
            <img src={slide} alt="pic1"  />
         
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              debitis ratione dicta vitae quaerat ipsa, autem laboriosam at nisi
              illo totam odio sapiente esse expedita fugit maxime voluptatem
              cupiditate explicabo!
            </p>
          </div>
          <div className="pic1">
            <img src={slide} alt="pic1"  />
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              debitis ratione dicta vitae quaerat ipsa, autem laboriosam at nisi
              illo totam odio sapiente esse expedita fugit maxime voluptatem
              cupiditate explicabo!
            </p>
          </div>
          <div className="pic1">
            <img src={slide} alt="pic1"  />
           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              debitis ratione dicta vitae quaerat ipsa, autem laboriosam at nisi
              illo totam odio sapiente esse expedita fugit maxime voluptatem
              cupiditate explicabo!
            </p>
          </div>
        </div>
      </div></>);
}