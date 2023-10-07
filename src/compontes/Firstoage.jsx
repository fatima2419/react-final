import React from "react";
import "../App.css";
import bulid from "./bulid.png";

export default function Firstoage() {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h3>complex iq your choice for A safe home</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus deserunt culpa modi officia qui doloribus reiciendis
                recusandae, quod voluptas velit, sequi magnam aliquid excepturi
                illo vero nihil consequatur blanditiis non!
              </p>
              <div className="button1">
                <button className="btn btn-primary book">Booking Now</button>
                <button className="btn btn-secondary see">See all Complex</button>
              </div>
              <div className="pro">
                <h4>300+</h4>
                <h4>900+</h4>
                <h4>20+</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgmain">
              <img src={bulid} alt="img" width="100%" height="100%" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
