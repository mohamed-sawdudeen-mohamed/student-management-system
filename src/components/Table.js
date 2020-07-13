import React from "react";

class Table extends React.Component {
  state = {};

  render() {
    const { students } = this.props;
    return (
      <div>
        <h3>Managment Table</h3>
        <hr />

        <div className="form-group">
          <input
            type="text"
            id="search"
            className="form-control"
            placeholder="Search..."
          />
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Birth Day</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.fName}</td>
                    <td>{student.lName}</td>
                    <td>{student.email}</td>
                    <td className="text-center">
                      {student.gender === "f" ? (
                        <i className="fa fa-female" />
                      ) : (
                        <i className="fa fa-male" />
                      )}
                    </td>
                    <td>{student.bYear}</td>
                    <td>
                      <span className="btn">
                        <i className="fa fa-trash" />
                      </span>

                      <span className="btn">
                        <i className="fa fa-pencil" />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
