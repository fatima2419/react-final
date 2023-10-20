import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';

const Top3 = () => {
  const items = [
    {
      title: 'Item 1',
      content: 'This is the content of Item 1.',
    },
    {
      title: 'Item 2',
      content: 'This is the content of Item 2.',
    },
    {
      title: 'Item 3',
      content: 'This is the content of Item 3.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div>
      <Carousel
        autoPlay={false}
        animation="slide"
        index={activeIndex}
        timeout={500}
      >
        {items.map((item, index) => (
          <Paper key={index}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body1">{item.content}</Typography>
          </Paper>
        ))}
      </Carousel>
      <div>
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default Top3;
