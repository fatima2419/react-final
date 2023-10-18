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


export default function Complex() {
  const [complexData, setComplexData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'complex'));
    onSnapshot(q, (data) => {
      const finaldata = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComplexData(finaldata);
    });
  }, []);

  return (<>
    <div className='call'>
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
          N:complex.N,
          E: complex.E,
        };

        return (
          <div key={complex.id} className="complex-item">
            <Grid container justifyContent="right" alignItems="right" margin="2%">
              <Grid item xs={8}>
                <div style={{ textAlign: 'right', margin: '2%' }}>
                  <Typography variant="h5" component="div">
                    {complex.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className='box'>
                    {complex.description}
                  </Typography>
                  <Link to={`/Deatils`} state={prop}>
                    <Button variant="contained" color="primary" style={{ margin: '1%' }}>
                      View Details
                    </Button>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ width: 350 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={complex.photo}
                    alt={complex.name}
                  />
                </Card>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
    </>
  );
}
