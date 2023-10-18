import React from "react";
import "../App.css";
import bulid from "./bulid.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Firstoage() {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h3>ابحث عن منزل أحلامك في أفضل مجمعات السكن المتوفرة</h3>
              <p>
                كومبليكس هو موقع على الإنترنت يهدف إلى مساعدتك في البحث عن منازل
                وشقق في بغداد. يمكنك البحث عن معلومات حول مجمعات سكنية مختلفة
                والعثور على تفاصيل مثل الصور والمزيد. يمكن للمستخدمين أيضًا
                تقديم تقييماتهم وآرائهم حول هذه المجمعات. يعد كومبليكس مصدرًا
                مفيدًا لأولئك الذين يبحثون عن منزل جديد للعيش
              </p>
              <div className="button1">
                <Link to="/complex">
                  <button className="btn btn-primary book">
                    المجمعات السكنية
                  </button>
                </Link>
                <Link to="/Form">
                
                <button className="btn btn-secondary see">تواصل ويانا</button>
                </Link>

              </div>
              <div className="pro ">
                <div
                  className="mini"
                  style={{
                    marginRight: "10%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <h4>300+</h4>
                  <p>
                    بيت او شقة <br></br>تم ايجادها{" "}
                  </p>
                </div>
                <div
                  style={{
                    marginRight: "10%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <h4>900+</h4>
                  <p>
                    مستحدم في<br></br> الموقع
                  </p>
                </div>
                <div
                  style={{
                    marginRight: "10%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <h4>20+</h4>
                  <p>مجمع سكني </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgmain">
              <img src={bulid} alt="img" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
