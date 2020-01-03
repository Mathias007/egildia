import React, { Component } from "react";

class EditSelectedNews extends Component {
    componentDidMount() {
        console.log(this.props.match.params._id);
    }
    render() {
        return <div>Edit news</div>;
    }
}
export default EditSelectedNews;
