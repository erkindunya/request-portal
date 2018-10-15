import React from 'react';

class Causeway extends React.Component{
    constructor(props){
        super(props);
        this.state = {loaded: false}
    }

    sendDataToParent(){
        this.setState({loaded: true});
        this.props.callfromparent(this.state);
    }

    componentDidMount(){
        this.sendDataToParent();
        console.log(this.state)
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="col-sm-12 text-center">
                   <p className="text-danger font-weight-bold">* Indicates a mandatory field.</p>
                </div>

                <div className="col-sm-12 col-md-6" style={{margin: "0 auto"}}>
                    <form>
                            <div className="form-group">
                                    <label>Request sponsor (you)</label>
                                    <input type="text" className="form-control" value="grant.tapp@kier.co.uk" readOnly={true}  ></input>
                                </div>
                                <div className="form-group">
                                    <label>Access required for <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="grant.tapp"></input>
                                </div>
                                <div className="form-group">
                                    <label>Their email address <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="grant.tapp@kier.co.uk"></input>
                                </div>
                                <div className="form-group">
                                    <label>Their contact number <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="07540336996"></input>
                                </div>
                                <div className="form-group">
                                    <label>Their reporting unit<span className="text-danger">*</span></label>
                                    <select className="form-control" defaultValue="Please Select...">
                                        <option>Please Select...</option>
                                        <option>Smart Motorways</option>
                                        <option>Other Highways</option>
                                        <option>Utilities</option>
                                    </select>
                                    
                                </div>
                                <div className="form-group">
                                    <label>Causeway applications they require<span className="text-danger">*</span></label>
                                    <div className="form-check form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">ECM (Causeway Enterprise Content Management) 
                                        </label>
                                    </div>
                                    <div className="form-check form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">CPA (Causeway Project Accounting) </label>
                                    </div>
                                    <div className="form-check form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">CFA (Causeway Financial Accounting) </label>
                                    </div>
                                    <div className="form-check form-check">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">Vision (Infor Query & Analysis)</label>
                                    </div>
                                    <br></br>
                                    <div className="">
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">Completed Causeway request pdf file to attach? * </label>
                                        <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <label className="form-check-label" htmlFor="exampleRadios1">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                <label className="form-check-label" htmlFor="exampleRadios2">
                                                    No
                                                </label>
                                            </div>

                                            <input type="file" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <select className="form-control" defaultValue="Please Select...">
                                        <option>Please Select...</option>
                                        <option>Bid Partners (SharePoint)</option>
                                        <option>Client Council & Highways England (SharePoint)</option>
                                        <option>Highways Supply Chain (Causeway & SharePoint)</option>
                                        <option>Off-network Kier JV Employee (Causeway, MyKier, BOOST, SharePoint, Heartbeat,
                                        etc)</option>
                                        <option>Utilities Partners (Causeway)</option>
                                    </select>
                            </div>

                            <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Causeway;