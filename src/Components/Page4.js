import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import photo4 from './sw.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAndroid, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaAppStoreIos, FaCopyright } from "react-icons/fa";


export default function Page4() {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mt-5">
                            <img src={photo4} className="text-center " />
                            <p className="text-end">Copyright <FaCopyright/> 2023</p>
                            <div className="row ">
                                <div className="d-flex ">
                                    <div className="col-lg-4 text-right mt-4">
                                        <h6>Install now</h6>
                                        <div className="row">
                                            <div className="d-flex">
                                                <div className="col-lg-6 mt-3">
                                                    <FaAndroid size="75%" color="green" />
                                                </div>
                                                <div className="col-lg-6 mt-3">
                                                    <FaAppStoreIos size="75%" color="darkblue" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 mt-4">
                                        <h6 className="text-center">Follow us on</h6>
                                        <div className="row mt-3">
                                            <div className="d-flex justify-content-around">
                                                <div className="col-lg-2  text-end mt-2">
                                                    <FaFacebook size="75%" color="black" />
                                                </div>
                                                <div className="col-lg-1">&nbsp;</div>
                                                <div className="col-lg-2 mt-2">
                                                    <FaInstagram size="75%" color="brown" />
                                                </div>
                                                <div className="col-lg-1">&nbsp;</div>
                                                <div className="col-lg-2 mt-2">
                                                    <FaTwitter size="75%" color="skyblue" />
                                                </div>
                                                <div className="col-lg-1">&nbsp;</div>
                                                <div className="col-lg-2 mt-2">
                                                    <FaLinkedin size="75%" color="blue" />
                                                </div>
                                                <div className="col-lg-1">&nbsp;</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 mt-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="d-flex justify-content-around">
                                            <div className="col-lg-5 ">
                                                <h4 className="mt-5">Our Products</h4>
                                                <h6 className="mt-4">NutCommerZ</h6>
                                                <h6 className="mt-4" >Meshit</h6>
                                                <h6 className="mt-4" >c-lk.in</h6>
                                            </div>
                                            <div className="col-lg-2">&nbsp;</div>
                                            <div className="col-lg-5 ">
                                                <h4 className="mt-5">Company</h4>
                                                <h6 className="mt-4">About</h6>
                                                <h6 className="mt-4">FAQs</h6>
                                                <h6 className="mt-4">Contact Support</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div className="row">
                                        <div className="d-flex justify-content-around">
                                            <div className="col-lg-5">
                                                <h4 className="mt-5">Learn more</h4>
                                                <h6 className="mt-4">Pricing</h6>
                                                <h6 className="mt-4">Terms & Conditions</h6>
                                                <h6 className="mt-4">Developer API</h6>
                                            </div>
                                            <div className="col-lg-2">&nbsp;</div>
                                            <div className="col-lg-5 ">
                                                <h4 className="mt-5">Policies</h4>
                                                <h6 className="mt-4">Delivery Policy</h6>
                                                <h6 className="mt-4">Cancellation Policy</h6>
                                                <h6 className="mt-4">Privacy Policy</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
