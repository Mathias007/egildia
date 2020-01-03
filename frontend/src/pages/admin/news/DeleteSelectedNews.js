import React, { Component } from "react";

class DeleteSelectedNews extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
    }
    render() {
        return <div>Delete News</div>;
    }
}

export default DeleteSelectedNews;
