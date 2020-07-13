import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends React.Component {
  state = {
    students: [
      {
        id: 1,
        fName: "Mehnaz",
        lName: "Mohamed",
        email: "msmohamed99@yahoo.com",
        gender: "f",
        bYear: 2015,
      },

      {
        id: 2,
        fName: "Mohamed",
        lName: "Sawdudeen",
        email: "msmohamed99@yahoo.com",
        gender: "m",
        bYear: 1988,
      },
    ],
  };

  handleSubmit = (student) => {
    const { students } = this.state;
    this.setState({
      students: [...students, student],
    });
  };

  render() {
    return (
      <div className="container-fluid bg-light main-container">
        <h2 className="text-center py-3 text-primary">
          Student Management System
        </h2>
        <div className="row">
          <div className="col-md-4 border-right">
            <Form onSubmit={this.handleSubmit} />
          </div>
          <div className="col-md-8">
            <Table students={this.state.students} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
