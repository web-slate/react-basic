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
