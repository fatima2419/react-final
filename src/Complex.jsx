// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { db } from './Firebase';
// import { collection, query, onSnapshot } from 'firebase/firestore';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// export default function Complex() {
//   const [complexData, setComplexData] = useState([]);

//   useEffect(() => {
//     const q = query(collection(db, 'complex'));
//     onSnapshot(q, (data) => {
//       const finaldata = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setComplexData(finaldata); 
//       console.log(finaldata) });
//   }, []);

//   return (
//     <div>
   
//    <Grid container spacing={3} justifyContent="center">
//         {complexData.map((complex) => (
//           <Grid item xs={6} key={complex.id}>
//             <Card style={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {complex.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {complex.description}
//                 </Typography>
//                 <Button component={Link} to={`/details/${complex.id}`} variant="contained" color="primary">
//                   View Details
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { db } from './Firebase';
// import { collection, query, onSnapshot } from 'firebase/firestore';

// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';

// import Carde from './Card';

// export default function Complex() {
//   const [complexData, setComplexData] = useState([]);

//   useEffect(() => {
//     const q = query(collection(db, 'complex'));
//     onSnapshot(q, (data) => {
//       const finaldata = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setComplexData(finaldata);
//     });
//   }, []);

//   return (
//     <div>
//       <Grid container spacing={3} justifyContent="center">
//         {complexData.map((complex) => (
//           <Grid item xs={6} key={complex.id}>
//             <Carde complex={complex} />
//             <CardActions>
//               <IconButton
//                 component={Link}
//                 to={`/details/${complex.id}`}
//                 aria-label="View Details"
//                 color="primary"
//               >
//                 View Details
//               </IconButton>
//             </CardActions>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

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
        {complexData.map((complex) => (
          <Grid item xs={4} key={complex.id}>
            <Card sx={{ maxWidth: 500 }}>
              <CardHeader
                
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="200"
                image="src\compontes\aff19b80-65ca-468e-ab21-34352f111464.webp"
                alt={complex.name}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
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
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography>
                  {/* Add more content here */}
                </CardContent>
              </Collapse>
            </Card>
            <CardActions>
              <IconButton
                component={Link}
                to={`/details/${complex.id}`}
                aria-label="View Details"
                color="primary"
              >
                View Details
              </IconButton>
            </CardActions>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}