import React from "react";

class Instructor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    //console.log("Update - Instructor");
  }
  componentDidMount() {
    //console.log("Mounted - Instructor");
  }
  componentWillUnmount() {
    //console.log("UnMount - Instructor");
  }

  render() {
    //console.log("Render - Instructor");
    return (
      <div className="">
        Name: {this.props.instructor.name} <br />
        Email : {this.props.instructor.email}
        <br />
        Phone : {this.props.instructor.phone}
        <br />
      </div>
    );
  }
}

export default Instructor;
