/*
    TODO
    Send email
    Connect to Support Works
    Check on mobile
    
*/

import React from 'react';
import ReactDom from 'react-dom';
import bootstrap from 'bootstrap';
import $ from 'jquery';

// import "~/node_modules/bootstrap/dist/css/bootstrap.css";
import "../scss/index.scss";
import causeway from "../images/Causeway.jpg"
import externalUser from "../images/externaluseraccount.jpg";
import quotation from "../images/Quotation.jpg";
import ExternalUser from './externaluser';
import Causeway from './causeway';
import Quotation from './quotation';

class HomePage extends React.Component{

    constructor() {
        super();
        this.state = {
            isShowing: false,
            query: window.location.search,
            activeForm: "",
            previousForm: ""
        }

        this.clickHandler = this.clickHandler.bind(this);
        this.queryHandler = this.queryHandler.bind(this);
    }

    updateForm(form){
        // this.setState({
        //     activeForm: form
        // });
    }

    componentDidMount(){
        this.queryHandler();
    }

    queryHandler() {
        switch (this.state.query) {
            case "?page=external":
                this.clickHandler(".externalForm");
                break;
            case "?page=causeway":
                this.clickHandler(".causewayForm");
                break;
            case "?page=quotation":
                this.clickHandler(".quotationForm");
                break;
        }
    }

    showForm(element){
        $(element).show();
        $(element).css("opacity", "1");
        this.setState({
            isShowing: true
        })
    }

    hideForm(element){
        $(element).css("opacity", "0");
        this.setState({
            isShowing: false
        })
        setTimeout(() => {
            $(element).hide();
            console.log("fe")
            this.showForm(this.state.activeForm);
        }, 1000);

    }

    clickHandler(element){

        if (this.state.isShowing) {
          this.hideForm(`${this.state.previousForm || this.state.activeForm}`);
        } else {
            this.showForm(element);
        }

        this.setState((prevState) => {
            return{
                activeForm: element,
                previousForm: prevState.activeForm
            }
        });
    }

    render(){
        return (
            <div>

                <div className="question-header text-center" onClick={() => {console.log(this.state); }}>External User Account for Kier JV & Partner Employees, Causeway Account & Quotation for Hardware & Software</div>
                
                <div  className="container-fluid pt-5">
                                    
                    <div className="row">

                    <a className="col-sm-12 col-md-4 image-hover" onClick={() => {this.clickHandler(".externalForm")} }>
                        <div className="image-background" style={{backgroundImage: `url(${externalUser})`}}>
                        </div>
                        <div className="image-text-overlay">
                            <div className="image-text-overlay-title font-weight-bold text-center">External User Account</div>
                            <div className="image-text-overlay-content text-center">Request the creation of an external user account for Kier Joint Venture (JV) and Kier Partner employees.</div>
                        </div>
                    </a>

                    <a className="col-sm-12 col-md-4 image-hover">
                        <div className="image-background" style={{backgroundImage: `url(${causeway})`}} onClick={() => this.clickHandler(".causewayForm")}>
                        </div>
                        <div className="image-text-overlay">
                            <div className="image-text-overlay-title font-weight-bold text-center">Causeway Account</div>
                            <div className="image-text-overlay-content text-center">Request the creation of a Causeway user account.</div>
                        </div>
                    </a>

                    <a className="col-sm-12 col-md-4 image-hover">
                        <div className="image-background" style={{backgroundImage: `url(${quotation})`}} onClick={() => this.clickHandler(".quotationForm")}>
                        </div>
                        <div className="image-text-overlay">
                            <div className="image-text-overlay-title font-weight-bold text-center">Quotation for Hardware or Software</div>
                            <div className="image-text-overlay-content text-center">Request a quotation for non-standard, off-catalogue hardware and software items.</div>
                        </div>
                    </a>

    </div>

                </div>

                <div className="externalForm p-4 pre-fade" style={{display: "none"}} ><ExternalUser callfromparent={this.updateForm.bind(this)}/></div>
                <div className="causewayForm p-4 pre-fade" style={{display: "none"}}><Causeway  callfromparent={this.updateForm.bind(this)}/></div>
                <div className="quotationForm" style={{display: "none"}}>< Quotation /></div>
              
            </div>
        )
    }
}

export default HomePage; 