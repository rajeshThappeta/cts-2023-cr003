import "./UsersList.css";
import { useState } from "react";
import axios from "axios";

function UsersList() {
  //state
  let [user, setUser] = useState({
    username: "",
    dob: "",
    email: "",
  });

  let [users, setUsers] = useState([]);

  //read users from local API
  function getUsers() {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("err in reading usets", err));
  }

  //handler of user state
  function handleUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  //handler of form submit
  function handleSubmit(e) {
    e.preventDefault();
    //create(save) user in local API

    axios
      .post("http://localhost:4000/users", user)
      .then((res) => getUsers())
      .catch((err) => console.log("err in reading usets", err));
  }

  return (
    <div>
      <h1 className="text-info display-3 text-center">Add New User</h1>
      {/* user registration form */}
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            onChange={handleUser}
          />
        </div>
        {/* dob */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="form-control"
            onChange={handleUser}
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={handleUser}
          />
        </div>
        {/* submit button */}
        <button className="btn btn-info text-white">Add user</button>
      </form>

      {/* users table */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Date of birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.username}</td>
              <td>{userObj.dob}</td>
              <td>{userObj.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
