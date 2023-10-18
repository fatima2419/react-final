import React from 'react';

const Map = ({ latitude, longitude }) => {
  const embedSrc = `https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${latitude},${longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Map"
          className="gmap_iframe"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={embedSrc}
        ></iframe>
        <a href="https://connectionsgame.org/">Connections Unlimited</a>
      </div>
      <style>
        {`
          .mapouter {
            position: relative;
            text-align: right;
            width: 100%;
            height: 400px;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
          }
          .gmap_iframe {
            height: 400px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Map;
