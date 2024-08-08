import React from "react";
import { Link } from "react-router-dom";

const AboutForm = () => {
  return (
    <>
      <div className="d-flex col-4" id="aboutform">
        <div className="col-md-12">
          <form className="p-2">
            <h3 className="text-info m-0 display-5 fw-semibold">
              About Yourself
            </h3>
            <p className="">Fill out Your Primary Information</p>
            <hr className="m-auto text-light-subtle" />
            <div className="my-2 w-75 d-flex justify-content-evenly position-relative align-items-center">
              <div className="profile-image">
                <img
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt="image"
                  className="rounded-circle"
                  width="100%"
                  height="100%"
                />
              </div>
              <input
                type="file"
                className="form-control w-50 position-relative"
              />
              <button className="btn btn-secondary bg-info uplaod-overlap">
                <i class="bi bi-upload"></i> Uploads File
              </button>
            </div>
            <table>
              <tr>
                <td className="p-2">
                  <div className="">
                    <label className="form-label text-secondary">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="name"
                      placeholder="Enter Your"
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="name"
                      placeholder="Enter Your"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2" colSpan="2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Desination
                    </label>
                    <input
                      type="text"
                      className="form-control p-2 bg-secondary-subtle"
                      id="name"
                      placeholder="What you are ?"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="name"
                      placeholder="Where you live ?"
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="">
                    <label className="form-label text-secondary">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="city"
                      placeholder="Enter Your City"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Email
                    </label>
                    <input
                      type="Email"
                      className="form-control bg-secondary-subtle"
                      id="email"
                      placeholder="Where do i email you ?"
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="phone"
                      placeholder="How do I contact you ?"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2" colSpan="2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Summary
                    </label>
                    <textarea
                      type="text"
                      className="form-control p-2 bg-secondary-subtle"
                      id="name" rows="5"
                      placeholder="Summarize Yourself..."
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  <Link to={'/education'}><button className="btn btn-info py-1 px-4 text-white fs-4">Next</button></Link>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutForm;
