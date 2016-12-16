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
