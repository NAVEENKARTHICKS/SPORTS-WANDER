import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './All.css';
import { FaApple,FaAndroid, FaCloud, FaPhoneAlt, FaMailBulk, FaCommentDots } from "react-icons/fa";

export default function Page3() {
  return (
    <>
      <div className="container-fluid">
        <div className="container  text-center mt-5 ">
          <h3>Available on All your devices</h3>
          <div className="row mt-5">
            <div className="col-lg-2 ">&nbsp;</div>
            <div className="col-lg-3 p3r1">
            <FaAndroid size="40%" className="icon1"/>
              <h5 className="mt-3">Android</h5>
            </div>
            <div className="col-lg-3 p3r2">
            <FaApple size="40%" className="icon1"/>
              <h5 className="mt-3">iOS</h5>
            </div>
            <div className="col-lg-3 p3r3">
            <FaCloud size="40%" className="icon1"/>
              <h5 className="mt-3">Web</h5>
            </div>
            <div className="col-lg-1">&nbsp;</div>
          </div>&nbsp;
          <div className="row pg3bg">
            <div className="col-lg-4 text-start">
            <FaCommentDots className="icon1"/>
              <h5>Reach us</h5>
              <p>Via Mobile, Email</p>
              <p>Feel free to contact us, we are happy to <br/> help you for sure.</p>
            </div>
            <div className="col-lg-4 mt-5 text-center">
              <h6><FaPhoneAlt className="icon1"/> +91 96987 39898</h6>
            </div>
            <div className="col-lg-4 mt-5 text-center">
              <h6><FaMailBulk className="icon1"/> admin@sportswander@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
