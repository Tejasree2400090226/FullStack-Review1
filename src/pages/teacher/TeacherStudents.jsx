function TeacherStudents() {
  return (
    <>
      <div className="topbar">
        <div>
          <h1>Students</h1>
          <p>Manage and review student details</p>
        </div>
      </div>

      <div className="content-area">

        <div className="card">
          <h3>Student List</h3>

          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Projects</th>
                <th>Submissions</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tejasree</td>
                <td>3</td>
                <td>6</td>
                <td>78%</td>
                <td><button className="view-btn">View</button></td>
              </tr>

              <tr>
                <td>Rahul</td>
                <td>2</td>
                <td>4</td>
                <td>65%</td>
                <td><button className="view-btn">View</button></td>
              </tr>

              <tr>
                <td>Ananya</td>
                <td>4</td>
                <td>8</td>
                <td>90%</td>
                <td><button className="view-btn">View</button></td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </>
  );
}

export default TeacherStudents;