import React, { useState } from "react";
import { Link } from "react-router-dom";
import Result from "./Result";


const AboutForm = () => {
  const [formData, setFormData] = useState({
    image:null,
    fname: '',
    lname: '',
    designation: '',
    address: '',
    city : '',
    email: '',
    phone: '',
    summary: ''
  });
  const [image, setImage] = useState("https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=");
  
 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFormData({
          ...formData,  
          image:file
        })
      };
      reader.readAsDataURL(file);
    }

   
  };

  

  // Step 2: Handle changes to the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Form data:', formData);
    localStorage.setItem('aboutData',JSON.stringify(formData))
    setFormData({
      ...formData,
      image: null,
      name:''

    })
    // You can now use the formData as needed, e.g., send it to a server
  };


  
   
    // setData(aboutData)
  return (
    <>
    
      <div className="d-flex col-4" id="aboutform">
        <div className="col-md-12">
         
          <form className="p-2" onSubmit={handleSubmit}>
            <h3 className="text-info m-0 display-5 fw-semibold">
              About Yourself
            </h3>
            <p className="">Fill out Your Primary Information</p>
            <hr className="m-auto text-light-subtle" />
            <div className="my-2 w-75 d-flex justify-content-evenly position-relative align-items-center">
              <div className="profile-image">
                <img
                  src={image}
                  alt="image"
                  className="rounded-circle"
                  width="100%"
                  height="100%"
                />
              </div>
              <input
                type="file"
                className="form-control w-50 position-relative"
                name="image"
                accept="image/*"
                required
                onChange={handleImageChange}
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
                      id="fname"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      placeholder="Enter Your First Name"
                      required
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
                      id="lname"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChange}
                      placeholder="Enter Your Last Name"
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-2" colSpan="2">
                  <div className="">
                    <label className="form-label text-secondary">
                      Designation
                    </label>
                    <input
                      type="text"
                      className="form-control p-2 bg-secondary-subtle"
                      id="name"
                      name="designation"
                      onChange={handleChange}
                      value={formData.designation}
                      placeholder="What you are ?"
                      required
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
                      name="address"
                      onChange={handleChange}
                      value={formData.address}
                      placeholder="Where you live ?"
                      required
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
                      name="city"
                      onChange={handleChange}
                      value={formData.city}
                      placeholder="Enter Your City"
                      required
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
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      placeholder="Where do i email you ?"
                      required
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
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      placeholder="How do I contact you ?"
                      required
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
                      name="summary"
                      onChange={handleChange}
                      value={formData.summary}
                      placeholder="Summarize Yourself..."
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="pt-4">
                  {/* <Link to={'/education'}> */}
                  <button type="submit" className="btn btn-info py-1 px-4 text-white fs-4">Next</button>
                  {/* </Link> */}
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

// export {aboutData}
export default AboutForm;



