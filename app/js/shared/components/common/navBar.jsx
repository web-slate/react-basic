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
