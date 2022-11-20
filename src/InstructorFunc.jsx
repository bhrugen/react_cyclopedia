import React from "react";
import { useEffect } from "react";

const InstructorFunc = (props) => {
  useEffect(() => {
    return () => {
      //console.log("Instructor - UNMOUNTED");
    };
  }, []);

  return (
    <div className="">
      Name: {props.instructor.name} <br />
      Email : {props.instructor.email}
      <br />
      Phone : {props.instructor.phone}
      <br />
    </div>
  );
};

export default InstructorFunc;
