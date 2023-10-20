
import "../App.css";
import slide from "./11.jpeg";
import Footer from '../Footer';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Grid } from '@mui/material';
export default function About() {
  const items = [
    {
      title: 'خدمات سريعة',
      content: '  يمكن للمستخدمين تقديم تقييماتهم وآرائهم حول المجمعات التي زاروها. يساعد ذلك المستخدمين الآخرين على اتخاذ قرارات مستنيرة عند اختيار مكان السكن المستخدم راح يكدر يتواصصل بشكل سريع وبه فريق المبيعات الخاص بكل مجمع ب الاضافة يكدر من خلالنا نكون حلقة تواصل ويه المجمع ',
      logo: require('./undraw_World_re_768g.png'), 
    },
    {
      title: 'معلومات مباشرة',
      content: '  المستخدم راح يكدر يعرف معلومات عن المجمعات بسهولة مثل الموقع وخطط الشقق   يوفر الموقع معلومات مفصلة حول كل مجمع سكني. يمكنك العثور على معلومات حول الموقع وأوقات العمل وعدد البنايات والخدمات المتاحه والموقع واراء المستخدمين  ',
      logo: require('./undraw_World_re_768g.png'), 
    },
    {
      title: 'فريق مبيعات متواجد 24',
      content: 'تكدرون تتواصلون ويه فريق المبيعات 24 ساعه حيكونون متوفرين بالاضاقة تكدرون تطون افتراحات باضافة المجماعات الجديدة واي خدمات تحبوها ',
      logo: require('./undraw_World_re_768g.png'), 
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  return (<>
    <div className="container">
      <div className="row">
      
        <div className="col-md-6 chose"  style={{textAlign:'right'}}>
          <h3>شنو هدف الموقع وليش نستخدمة</h3>
          <p>
            يمكن للمستخدمين البحث عن مجمعات السكن والعثور على معلومات حولها، مثل الصور ووصف المجمع وميزاته.

            عرض الصور والمعلومات: يمكن للموقع عرض صور المجمعات والمعلومات المتعلقة بها بما في ذلك موقع المجمع وأوقات العمل وعدد البنايات وتقييمات المستخدمين.

            التقييمات والآراء: يمكن للمستخدمين تقديم تقييماتهم وآرائهم حول المجمعات التي زاروها، وبالتالي يمكن للمستخدمين الآخرين الاستفادة من هذه التقييمات عند اتخاذ قرارهم.

            تواصل مع البائعين: يمكن للمستخدمين الاتصال بالبائعين أو مسؤولي المجمعات للحصول على مزيد من المعلومات أو لترتيب زيارة
          </p>
        </div>
        <div className="col-md-6">
          <img src={slide} alt="img" width="100%" />
        </div>
      </div>
         </div>
         <div className='caro'>
    <div   style={{alignItems:'center',justifyContent:'center',textAlign:'center',marginTop:'5%'}}>
    
      <Carousel autoPlay={true} animation="slide" index={activeIndex} timeout={5000} style={{alignItems:'center',justifyContent:'center',textAlign:'center'}}>
        {items.map((item, index) => (
          <Paper className="pap" key={index} > 
            <h3>مميزات موقع كومبليكس</h3>
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
    <Footer />
    </>
  );
}
