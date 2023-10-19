import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './Firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Complex() {
  const [complexData, setComplexData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'complex'));
    onSnapshot(q, (data) => {
      const finaldata = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComplexData(finaldata);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (<>
    <div className='spa' style={{margin:'5%'}}>
      <div className="call">
        <Grid container spacing={3}>
          {complexData.map((complex) => {
            let prop = {
              name: complex.name,
              photoo: complex.photoo,
              photo: complex.photo,
              phone: complex.phone,
              email: complex.email,
              feat: complex.feat,
              description: complex.description,
              Hours: complex.Hours,
              location: complex.location,
              N: complex.N,
              E: complex.E,
              num: complex.numberOfBuildings,
            };

            return (
              <Grid item xs={12} sm={6} key={complex.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    width="500"
                    image={complex.photo}
                    alt={complex.name}
                  />
                  <div style={{ textAlign: 'right', margin: '2%' }}>
                    <Typography variant="h5" component="div">
                      {complex.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="box">
                      {complex.description}
                    </Typography>
                    <Link to={`/Deatils`} state={prop}>
                      <Button variant="contained" color="primary" style={{ margin: '1%' }}>
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
  
    </div>
    <Footer />
    </>
  );
}
