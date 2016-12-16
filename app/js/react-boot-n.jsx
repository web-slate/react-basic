// Nav Bar

var NavBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Osprey</a>

                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Loan History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Loan Activity</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">App Query</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Download Contract</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

// Banner

var Banner = React.createClass({
    render: function () {
        return (<div className="jumbotron text-center">
          <h1>Osprey</h1>
          <p>Account Look Up</p>
        </div>);
    }
});

// Input Box

var InputBox = React.createClass({
    render: function () {
        return (<div className="form-group">
                        <label for="inFix">Mathmatical Expression</label>
                        <input type="text" className="form-control input-lg" id="inFix" aria-describedby="inFixHelp" placeholder="Enter Expression" />
                        <small id="inFixHelp" className="form-text text-muted">Please enter mathematical expression.</small>
                    </div>);
    }
});

// Submit Button

var SubmitButton = React.createClass({
    render: function () {
        return (<div className="pull-right">
            <button type="submit" className="btn btn-lg btn-primary">Calculate</button>
        </div>);
    }
});

// Look Up Form

var LookUpForm = React.createClass({
    render: function () {
        return (
                <div>
                    <NavBar />
                    <Banner />

                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-lg-6">

                                    <InputBox />
                                    <SubmitButton />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>);
    }
});

ReactDOM.render(<LookUpForm />, document.getElementById('react-boot-n'));
