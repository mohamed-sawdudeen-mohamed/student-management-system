import React, { Component } from "react";

class Form extends Component {
  state = {
    fName: "",
    lName: "",
    email: "",
    gender: "",
    bYear: "",
  };
  render() {
    const { fName, lName, email, gender, bYear } = this.state;
    const { onSubmit } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Value", e);
          onSubmit({ fName, lName, email, gender, bYear });
          this.setState({
            fName: "",
            lName: "",
            email: "",
            gender: "",
            bYear: "",
          });
        }}
      >
        <h3>Add Student</h3>
        <hr />

        <div className="form-group">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            name="fName"
            className="form-control"
            onChange={(e) => {
              this.setState({ fName: e.target.value });
            }}
            value={fName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            className="form-control"
            onChange={(e) => {
              this.setState({ lName: e.target.value });
            }}
            value={lName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            value={email}
          />
        </div>

        <div className="radio mb-2">
          <p>Gender</p>
          <label className="radio-inline mx-3">
            <input
              type="radio"
              name="gender"
              onChange={(e) => {
                this.setState({ gender: "m" });
              }}
              checked={gender === "m"}
            />{" "}
            Male
          </label>
          <label className="radio-inline mx-3">
            <input
              type="radio"
              name="gender"
              onChange={(e) => {
                this.setState({ gender: "f" });
              }}
              checked={gender === "f"}
            />{" "}
            FeMale
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="bYear">Birth Year</label>
          <select
            className="form-control"
            id="bYear"
            onChange={(e) => {
              this.setState({ bYear: parseInt(e.target.value) });
            }}
            value={bYear}
          >
            {Array(201)
              .fill()
              .map((item, index) => (
                <option key={index}>{index + 1900}</option>
              ))}
          </select>
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            name="submit"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    );
  }
}

export default Form;
