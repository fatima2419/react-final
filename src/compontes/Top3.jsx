import React from 'react';

import '../App.css';

export default function Top3() {
  
  const complexServices = [
    {
      title: 'Modern Apartments',
      description: 'We offer a variety of modern apartments equipped with the latest amenities and technologies.',
      image: '\bulid.png',
    },
    {
      title: 'Swimming Pools',
      description: 'Enjoy our large swimming pools with clean water, sunbathing areas, and lifeguards on duty.',
      image: '\bulid.png',
    },
    {
      title: 'Fitness Center',
      description: 'Stay active and healthy with our well-equipped fitness center and professional trainers.',
      image: '\bulid.png',
    },
    {
      title: '24/7 Security',
      description: 'Your safety is our top priority. We provide 24/7 security services and surveillance.',
      image: '\bulid.png',
    },
    {
      title: 'Beautiful Landscaping',
      description: 'Relax in our beautifully landscaped gardens with scenic views and seating areas.',
      image: '\bulid.png',
    },
    {
      title: 'Children’s Playground',
      description: 'Our complex includes a safe and fun playground for children to enjoy.',
      image: 'playground-image.jpg',
    },
  ];

  return (
    <div className="container">
      <div id="cardSlider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {complexServices.map((service, index) => (
            <li
              key={index}
              data-target="#cardSlider"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {complexServices.map((service, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={service.image} className="d-block w-100" alt={service.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#cardSlider" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#cardSlider" role="button" data-slide="next">
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
