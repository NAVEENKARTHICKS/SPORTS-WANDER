import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './All.css';
import pho2 from './pho6.png';
import app from './app.png';
import gp from './gp.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing, faGamepad, faPersonWalking, faSmile, faThunderstorm } from "@fortawesome/free-solid-svg-icons";

export default function Page1() {
    return (
        <>
            <div className="container-fluid main10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-light p1al">
                            <h5 className="mt-5 ">Enabling People to book</h5>
                            <h1 className="mt-3 ">Sport Events, Venues</h1>
                            <h1><span className="sp16 mt-2">& Explore </span>Sports Ecosystem</h1>
                            <a href="https://play.google.com/store/apps/details?id=com.nutz.sportswander&hl=en&gl=US&pli=1">
                                <img src={gp} className="mt-5 imggp" /></a>
                            <img src={app} className="mt-5 imgapp" />
                        </div>
                        <div className="zoom col-lg-6 mt-5">
                            <img src={pho2} className=" img21" />
                        </div>
                    </div>
                    <div className="row mt-2 d-flex">
                        <div className="col-lg-2 p1r1">
                            <div className="card text-center">
                                <FontAwesomeIcon icon={faGamepad} className="gam30 mt-2" />
                                <h3 className="mt-1">789K+</h3>
                                <h5>Venues</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 p1r2">
                            <div className="card text-center">
                                <FontAwesomeIcon icon={faSmile} className="gam30 mt-2" />
                                <h3 className="mt-1">789K+</h3>
                                <h5>Users</h5>
                            </div>
                        </div>
                        <div className="col-lg-8">&nbsp;</div>
                    </div>
                    <div className="row mt-1 d-flex">
                        <div className="col-lg-2 p1r3 ">
                            <div className="card text-center">
                                <FontAwesomeIcon icon={faChessKing} className="gam30 mt-2" />
                                <h3 className="mt-1">789K+</h3>
                                <h5>Events</h5>
                            </div>
                        </div>
                        <div className="col-lg-2 p1r4">
                            <div className="card text-center">
                                <FontAwesomeIcon icon={faPersonWalking} className="gam30 mt-2" />
                                <h3 className="mt-1">200+</h3>
                                <h5>Sports</h5>
                            </div>
                        </div>
                        <div className="col-lg-1">&nbsp;</div>
                        <div className="col-lg-3 text-center p1r5">
                            <FontAwesomeIcon icon={faThunderstorm} className="gam62 " />
                            <h3 className="text-light">Important Insights</h3>
                        </div>
                        <div className="col-lg-5">&nbsp;</div>
                    </div>
                </div>
            </div>
        </>
    )
}
