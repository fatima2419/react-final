import React from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MyForm from './Form'; // Import your contact form component
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
export default function Details(props) {
  const location = useLocation();
  const prop = location.state;

  const hoursOptions = prop.Hours || [];
  const days = ['on site', 'on site', 'on site', 'on site', 'on site', 'not on site', 'on site'];
  const circleBorderStyle = {
    listStyle: 'none',
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <h1>{prop.name}</h1>
                <p>معلومات إضافية:</p>
                <p>{prop.phone}</p>
                <p>{prop.email}</p>
                <p>{prop.location}</p>

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
                <Link to="/Top3" state={prop}>
                  <Button variant="contained" color="primary" style={{ margin: '1%' }}>
                    Go to Top3
                  </Button>
                </Link>
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
          <div className="col-md-8">
            <MyForm />
          </div>
          <div className='col-md-4'>
            <h5>موقع المجمع السكني</h5>
            {/* Integrate your Google Maps component and pass the location prop */}
            {/* <Map
              google={props.google}
              initialCenter={{ lat: prop.N, lng: prop.E }}
            >
              <Marker
                name={prop.name}
                position={{ lat: prop.N, lng: prop.E }}
              />
            </Map> */}
          </div>
        </div>
      </div>
    </div>
  );
}

