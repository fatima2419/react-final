import React from "react";
import "../App.css";
import slide from "./11.jpeg";
import Footer from '../Footer'
import Top3 from './Top3';
export default function about() {
  return (<>
    <div className="container">
      <div className="about">
        <div className="imgabout">
          <img src={slide} alt="img" width="575px" height="470.455px" />
        </div>
        <div className="chose">
        <h3>شنو هدف الموقع وليش نستخدمة</h3>
        <p>
        يمكن للمستخدمين البحث عن مجمعات السكن والعثور على معلومات حولها، مثل الصور ووصف المجمع وميزاته.

عرض الصور والمعلومات: يمكن للموقع عرض صور المجمعات والمعلومات المتعلقة بها بما في ذلك موقع المجمع وأوقات العمل وعدد البنايات وتقييمات المستخدمين.

التقييمات والآراء: يمكن للمستخدمين تقديم تقييماتهم وآرائهم حول المجمعات التي زاروها، وبالتالي يمكن للمستخدمين الآخرين الاستفادة من هذه التقييمات عند اتخاذ قرارهم.

تواصل مع البائعين: يمكن للمستخدمين الاتصال بالبائعين أو مسؤولي المجمعات للحصول على مزيد من المعلومات أو لترتيب زيارة
        </p>
        </div>
      </div>
    </div>
    <Top3/>
    <Footer/>
    </>
  );
}
