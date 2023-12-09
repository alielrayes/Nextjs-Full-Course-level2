"use client";

import { useState } from "react";

const RegisterForm = () => {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  const handleSubmit = async (eo) => {
    eo.preventDefault();

   

    const response = await fetch("api/register", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, password }), // body data type must match "Content-Type" header
    });


    console.log(response)


    if (response.ok) {
      console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeee")
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          onChange={(eo) => {
            setname(eo.target.value);
          }}
          required
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(eo) => {
            setemail(eo.target.value);
          }}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
