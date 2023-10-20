import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Grid } from '@mui/material';
import'../App.css';
const Top3 = () => {
  const items = [
    {
      title: 'خدمات سريعة',
      content: 'المستخدم راح يكدر يتواصصل بشكل سريع وبه فريق المبيعات الخاص بكل مجمع ب الاضافة يكدر من خلالنا نكون حلقة تواصل ويه المجمع ',
      logo: require('./undraw_Speed_test_re_pe1f.png'), // Add the correct image path here
    },
    {
      title: 'معلومات مباشرة',
      content: ' المستخدم راح يكدر يعرف معلومات عن المجمعات بسهولة مثل الموقع وخطط الشقق والموقع واراء المستخدمين  ',
      logo: require('./undraw_World_re_768g.png'), // Add the correct image path here
    },
    {
      title: 'فريق مبيعات متواجد 24',
      content: 'تكدرون تتواصلون ويه فريق المبيعات 24 ساعه حيكونون متوفرين بالاضاقة تكدرون تطون افتراحات باضافة المجماعات الجديدة واي خدمات تحبوها ',
      logo: require('./undraw_Team_up_re_84ok.png'), // Add the correct image path here
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (<div className='caro'>
    <div   style={{alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'red'}}>
      <h4>مميزات موقع كومبليكس</h4>
      <Carousel autoPlay={true} animation="slide" index={activeIndex} timeout={5000} style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        {items.map((item, index) => (
          <Paper  key={index} style={{ height: '500px' ,width:'60%'}}> 
            <Grid container direction="column" alignItems="center" justifyContent="center">
              <img src={item.logo} alt={item.title} style={{ width: '50%', height: '50%' }} />
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body1">{item.content}</Typography>
            </Grid>
          </Paper>
        ))}
      </Carousel>
      <div>
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
    </div>
  );
};

export default Top3;
