// import React from 'react';

// const Map = ({ latitude, longitude }) => {
//   const embedSrc = `https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${latitude},${longitude}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

//   return (
//     <div className="mapouter">
//       <div className="gmap_canvas">
//         <iframe
//           title="Google Map"
//           className="gmap_iframe"
//           width="100%"
//           height="400"
//           frameBorder="0"
//           scrolling="no"
//           marginHeight="0"
//           marginWidth="0"
//           src={embedSrc}
//         ></iframe>
//         <a href="https://connectionsgame.org/">Connections Unlimited</a>
//       </div>
//       <style>
//         {`
//           .mapouter {
//             position: relative;
//             text-align: right;
//             width: 100%;
//             height: 400px;
//           }
//           .gmap_canvas {
//             overflow: hidden;
//             background: none !important;
//             width: 100%;
//             height: 400px;
//           }
//           .gmap_iframe {
//             height: 400px !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Map;

import React, { useEffect } from 'react';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWJyYWhpbTEzIiwiYSI6ImNsbW5pOWFicjB4bHQyaXBna3d3dm52dWoifQ.Jg6B4PEbbNm1dyv3U192sw';

const Map = ({ lat, lng }) => {
    useEffect(() => {
        console.log('lat:', lat);
        console.log('lng:', lng);
      
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: 12,
        });
      
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
      
        return () => map.remove();
      }, [lat, lng]);
       

  return (
    <div id="map" style={{ width: '100%', maxWidth: '600px', height: '300px', margin: '0 auto' }}>
    </div>
  );
};

export default Map;