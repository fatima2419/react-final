import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './Firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
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

  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpandClick = (cardId) => {
    setExpandedCard(cardId === expandedCard ? null : cardId);
  };

  return (
    <div>
      
      <Grid container spacing={2} justifyContent="center" alignItems="center" margin="2%">
        {complexData.map((complex) => {
          let prop={
            name:complex.name
          };
        return  <Grid item xs={4} key={complex.id}>
            <Card sx={{ maxWidth: 400 , maxHeight: 700 }}>
              <CardHeader
                
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={complex.name}
                subheader={complex.location}
              />
              <CardMedia
                component="img"
                height="300"
                image={complex.photo}
                alt={complex.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" className='box'>
                  {complex.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleExpandClick(complex.id)}
                  aria-expanded={expandedCard === complex.id}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expandedCard === complex.id} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>contact</Typography>
                  <Typography paragraph className='infoo'>
                   {complex.phone}
                   {complex.email}
                   {complex.location}
                  </Typography>
                  
                </CardContent>
              </Collapse>
            </Card>
            <CardActions>
              <Link to={`/Deatils`} state={prop}>
              <IconButton
                aria-label="View Details"
                color="primary"
              >
                View Details
              </IconButton>
              
              </Link>
          
            </CardActions>
          </Grid>
})}
      </Grid>

    </div>
  );
}