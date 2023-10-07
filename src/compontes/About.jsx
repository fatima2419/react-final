import React from "react";
import "../App.css";
import slide from "./11.jpeg";


export default function about() {
  return (<>
    <div className="container">
      <div className="about">
        <div className="imgabout">
          <img src={slide} alt="img" width="575px" height="470.455px" />
        </div>
        <h3>OUR STORY WHO WE ARE</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos sed
          recusandae sapiente ratione, quas eligendi velit expedita incidunt
          eaque error assumenda eveniet quasi inventore corporis quisquam
          praesentium possimus illo minima! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda repellendus aut pariatur
          impedit nisi eum vero iure iusto, autem magni consequuntur harum,
          eaque deleniti veniam iste nostrum. Soluta, officiis a.
        </p>
        <button className="button login">See More</button>
      </div>
    
    </div>
    </>
  );
}
