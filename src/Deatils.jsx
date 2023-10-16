import React from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function Details() {
  const location = useLocation();
  const prop = location.state;

  const hoursOptions = prop.Hours || [];
  const days = ['on site', 'on site', 'on site', 'on site', 'on site', 'not on site', 'on site'];

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body >
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
            <img
              className="d-block w-100"
              src={prop.photo}
              alt="main"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Carousel>
              {prop.photoo.map((photoo, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={photoo}
                    alt={`Slide ${index}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
