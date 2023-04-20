import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCalendar, faGamepad, faHeadphones, faTicket } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import './All.css';

export default function Page2() {
    return (
        <>
            <div className="container-fluid main09">
                <div className="container">&nbsp;
                    <div className="row d-flex text-light">
                        <div className="col-lg-1 p2r6">
                            <FontAwesomeIcon icon={faBagShopping} className="ico18" />
                        </div>
                        <div className="col-lg-4 p2r5 text-left">
                            <h3>For Organizers</h3>
                            <h6>Five stage of Events</h6>
                        </div>
                        <div className="col-lg-7">&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 p2r1 ">
                            <div className="card card01">
                                <FontAwesomeIcon icon={faCalendar} className="ico27" />
                                <h3>01</h3>
                                <h5>Create Events</h5>
                            </div>
                        </div>
                        <div className="col-lg-3  p2r2">
                            <div className="card card02">
                                <FontAwesomeIcon icon={faTicket} className="ico30" />
                                <h3>02</h3>
                                <h5>Manage Tickets</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 p2r3">
                            <div className="card card03">
                                <FontAwesomeIcon icon={faBell} className="ico30" />
                                <h3>03</h3>
                                <h5>Event Promotion</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 p2r4">
                            <div className="card card04">
                                <FontAwesomeIcon icon={faHeadphones} className="ico30" />
                                <h3>04</h3>
                                <h5>24 X 7 Customer Support</h5>
                            </div>
                        </div>
                    </div>&nbsp;
                    <div className="row text-light">
                        <div className="col-lg-7">&nbsp;</div>
                        <div className="col-lg-1 p2r8">
                            <FontAwesomeIcon icon={faGamepad} className="ico18" />
                        </div>
                        <div className="col-lg-4 p2r7 text-right">
                            <h3>For Stadium Owners</h3>
                            <h6>About Venues</h6>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-lg-3 p2r9 text-center ">
                            <h5 className="head44" >01</h5>
                            <h1 className="dott p2r91"></h1>
                            <p className="text-light mt-5">Customize Slots</p>
                        </div>
                        <div className="col-lg-3 p2r10 text-center">
                            <h5 className="head44">02</h5>
                            <h1 className="dott1 p2r101"></h1>
                            <p className="text-light mt-5">Manage Booking</p>
                        </div>
                        <div className="col-lg-3 p2r11 text-center">
                            <h5 className="head44">03</h5>
                            <h1 className="dott2 p2r111"></h1>
                            <p className="text-light mt-5">Indivudual Application</p>
                        </div>
                        <div className="col-lg-3 p2r12 text-center">
                            <h5 className="head44">04</h5>
                            <h1 className="dott3 p2r121"></h1>
                            <p className="text-light mt-5">24 X 7 Customer Support</p>
                        </div>
                    </div>
                </div>&nbsp;
            </div >

        </>
    )
}
