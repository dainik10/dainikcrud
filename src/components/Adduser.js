import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_no: ""
  });

  const { name, email, phone_no } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!name || !email || !phone_no) {
      toast.error("Please fill all input field!!!", {
        position: "top-left",
        autoClose: 1000,
        theme: "colored"
      });
    }
    else {
      await axios.post("https://638458fd4ce192ac6054d38e.mockapi.io/dainikcrudapp", user);
      toast.success("Added successfully!!", {
        position: "top-left",
        autoClose: 1000,
        theme: "colored"
      });
      setTimeout(() => history("/"), 2000);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container my-5 py-3">
        <div className="w-75 mx-auto border border-3 border-secondary rounded-3 p-5 bg">
          <h2 className="mb-4">Add User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                name="name" value={name} onChange={e => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Phone No.</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                name="phone_no" value={phone_no} onChange={e => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                name="email" value={email} onChange={e => onInputChange(e)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;