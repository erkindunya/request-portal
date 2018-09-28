import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import $ from 'jquery';

// import "~/node_modules/bootstrap/dist/css/bootstrap.css";
import "../scss/index.scss";
import causeway from "../images/Causeway.jpg"
import externalUser from "../images/externaluseraccount.jpg";
import quotation from "../images/Quotation.jpg";

class HomePage extends React.Component{
    render(){
        return (
            <div>

                <div className="question-header text-center">External User Account for Kier JV & Partner Employees, Causeway Account & Quotation for Hardware & Software</div>
                
                <div  className="container-fluid pt-5">
                                    
                    <div className="row">

                    <a href="#externaluser" className="col-sm-12 col-md-4 image-hover" onClick={() => {$('.externalForm').toggle(); console.log("fef")}}>
                        <div className="image-background" style={{backgroundImage: `url(${externalUser})`}}>
                        </div>
                        <div className="image-text-overlay">
                            <div className="image-text-overlay-title font-weight-bold text-center">External User Account</div>
                            <div className="image-text-overlay-content text-center">Request the creation of an external user account for Kier Joint Venture (JV) and Kier Partner employees.</div>
                        </div>
                    </a>

                    <a href="#causeway" className="col-sm-12 col-md-4 image-hover">
                        <div className="image-background" style={{backgroundImage: `url(${causeway})`}}>
                        </div>
                        <div className="image-text-overlay">
                            <div className="image-text-overlay-title font-weight-bold text-center">Causeway Account</div>
                            <div className="image-text-overlay-content text-center">Request the creation of a Causeway user account.</div>
                        </div>
                    </a>

                    <a href="#quotation" className="col-sm-12 col-md-4 image-hover">
                        <div className="image-background" style={{backgroundImage: `url(${quotation})`}}>
                        </div>
                        <div className="image-text-overlay">
                            <div className="image-text-overlay-title font-weight-bold text-center">Quotation for Hardware or Software</div>
                            <div className="image-text-overlay-content text-center">Request a quotation for non-standard, off-catalogue hardware and software items.</div>
                        </div>
                    </a>

    </div>

                </div>

                <div className="externalForm" style={{display: "none"}} >external form</div>
                <div className="causewayForm" style={{display: "none"}}>Causeway form</div>
                <div className="quotationForm" style={{display: "none"}}>Quotation form</div>
              
            </div>
        )
    }
}

export default HomePage; 