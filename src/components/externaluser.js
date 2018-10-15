import React from 'react';

class ExternalUser extends React.Component{
    constructor(){
        super();

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
        return (
            <div className="container-fluid">
                <div className="col-sm-12 col-md-12 text-center">
                    <p>
                        <span className="text-danger font-weight-bold">Disclaimer: </span>
                        By submitting this request you agree to sponsor the individual’s access to Kier systems and data relevant to their role, and you have ensured they are fully aware of their responsibilities to the security of Kier systems and data under the contract they have signed with Kier. You also agree to contact the Kier IT Service Desk to disable their account once the access is no longer required.
                    </p>
                    <p>
                        Please note that all access issues experienced after the account is created should be reported to the Kier IT Service Desk on 0333 005 0499, option 1
                    </p>

                    <p className="text-danger font-weight-bold">* Indicates a mandatory field.</p>

                </div>

                <div></div>

                <div className="col-sm-12 col-md-6" style={{margin: "0 auto"}}>
                    <form>
                            <div className="form-group">
                                <label>Request sponsor (you)</label>
                                <input type="text" className="form-control" value="grant.tapp@kier.co.uk" readOnly={true}></input>
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
                                <label>Their employing company<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" placeholder="Kier"></input>
                            </div>
                            <div className="form-group">
                                <label>Employing company address (including postcode)<span className="text-danger">*</span></label>
                                <textarea className="form-control" placeholder="Kier 123 HomeTown nn6 9er" style={{height: 150}}></textarea>
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

export default ExternalUser;

