import { useState } from "react";

function Signup() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-dark">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card bg-white">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Register
                </button>
                <p className="text-center mt-3 mb-0">Already have an account? <a href="#">Login</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

