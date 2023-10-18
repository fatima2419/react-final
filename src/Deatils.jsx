import React from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

import Map from './Map'
import Review from './Review'
const Details = (props)=> {
  const location = useLocation();
  const prop = location.state;

  const hoursOptions = prop.Hours || [];
  const days = ['on site', 'on site', 'on site', 'on site', 'on site', 'not on site', 'on site'];
  const circleBorderStyle = {
    listStyle: 'none',
  };

  const latitude = prop.N;
  const longitude =prop.E; 
console.log(prop.N)

  return (<>
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body style={{ textAlign: "right" }}>
                <h1>{prop.name}</h1>
                <p>معلومات إضافية:</p>
                <p> {prop.phone} : رقم المبيعات </p>
                <p>{prop.email} : الايميل </p>
                <p> موقع المجمع : {prop.location} </p>
                <p>{prop.num} : عدد البنايات في المجمع </p>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    اوقات العمل
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {hoursOptions.map((Hours, index) => (
                      <Dropdown.Item key={index}>
                        {days[index]} - {Hours}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
               
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-8">
            <img className="d-block w-100" src={prop.photo} alt="main" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Carousel>
              {prop.photoo.map((photoo, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={photoo} alt={`Slide ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-6" style={{ textAlign: "right" }}>
            <p>{prop.description}</p>
            <h5>مواصفات المجمع السكني</h5>
            <ul style={circleBorderStyle}>
              {prop.feat.map((feature, index) => (
                <li key={index}>
                  <span style={circleBorderStyle}></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
        
        <div  className="col-md-6">  <Review/></div>
          <div className="col-md-6">
            <div className="map" style={{ width: '100%', height: '50%' }}>
            <Map latitude={latitude} longitude={longitude} />
          
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Details;
