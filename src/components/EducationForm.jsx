import React from "react";
import { Link } from "react-router-dom";

const EducationForm = () => {
  return (
    <>
      <div className="d-flex col-4" id="educationform">
        <div className="col-md-12">
          <form className="p-2">
            <h3 className="text-info m-0 display-5 fw-semibold">Education</h3>
            <p className="">Give a detailed look into your academic history.</p>
            <hr className="m-auto mb-2 text-light-subtle" />
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button border-0 fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                   <i class="bi bi-three-dots-vertical text-secondary"></i> School / Institute
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <td className="p-2" colSpan="2">
                          <div className="">
                            <label className="form-label text-secondary">
                              School
                            </label>
                            <input
                              type="text"
                              className="form-control p-2 bg-secondary-subtle"
                              id="name"
                              placeholder="What you complete higher education ?"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-2">
                          <div className="">
                            <label className="form-label text-secondary">
                              Degree
                            </label>
                            <input
                              type="text"
                              className="form-control bg-secondary-subtle"
                              id="degree"
                              placeholder="Which degree ?"
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
                              Start Date
                            </label>
                            <input
                              type="date"
                              className="form-control bg-secondary-subtle"
                              id="startdate"
                            />
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="">
                            <label className="form-label text-secondary">
                              End Date
                            </label>
                            <input
                              type="date"
                              className="form-control bg-secondary-subtle"
                              id="end date"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-2" colSpan="2">
                          <div className="">
                            <label className="form-label text-secondary">
                              Description
                            </label>
                            <textarea
                              type="text"
                              className="form-control p-2 bg-secondary-subtle"
                              id="name"
                              rows="5"
                              placeholder="Describe a little about your study.."
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <hr className="m-auto mb-2 text-light-subtle" />

              <div class="accordion-item border-0">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                   <i class="bi bi-three-dots-vertical text-secondary"></i> School / Institute
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                >
                  <div class="accordion-body">
                    <table>
                      <tr>
                        <td className="p-2" colSpan="2">
                          <div className="">
                            <label className="form-label text-secondary">
                              School
                            </label>
                            <input
                              type="text"
                              className="form-control p-2 bg-secondary-subtle"
                              id="name"
                              placeholder="What you complete higher education ?"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-2">
                          <div className="">
                            <label className="form-label text-secondary">
                              Degree
                            </label>
                            <input
                              type="text"
                              className="form-control bg-secondary-subtle"
                              id="degree"
                              placeholder="Which degree ?"
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
                              Start Date
                            </label>
                            <input
                              type="date"
                              className="form-control bg-secondary-subtle"
                              id="startdate"
                            />
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="">
                            <label className="form-label text-secondary">
                              End Date
                            </label>
                            <input
                              type="date"
                              className="form-control bg-secondary-subtle"
                              id="end date"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="p-2" colSpan="2">
                          <div className="">
                            <label className="form-label text-secondary">
                              Description
                            </label>
                            <textarea
                              type="text"
                              className="form-control p-2 bg-secondary-subtle"
                              id="name"
                              rows="5"
                              placeholder="Describe a little about your study.."
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <hr className="m-auto mb-2 text-light-subtle" />

            <div className="pt-4">
            <Link to={'/experience'}><button className="btn btn-info py-1 px-4 text-white fs-4">Next</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EducationForm;
