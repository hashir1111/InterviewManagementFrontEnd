import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import axios from "axios";

const Apply = ({ user }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("part-time");
  const [error, setError] = useState("");

  const handleApply = async (e) => {
    // Rest of the code...
    e.preventDefault();
    console.log(fullname,email,position,education,type, experience);

    if (
      !fullname ||
      !email ||
      !position ||
      !education ||
      !type ||
      !experience
    ) {
      setError("All fields are required");
      return;
    }

    // if (registerPassword !== registerConfirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }

    try {
      // Make a POST request to the signup endpoint with registerEmail, registerPassword, and registerName
      const response = await axios.post(
        "http://localhost:5000/api/v1/applications",
        {
          candidate_name : fullname,
          candidate_email: email,
          position: position,
          education : education,
          type: type,
          experience: experience

        }
      );

      // Assuming the API returns a success message or any relevant response
      const { message } = response.data;

      console.log(message);

      // Display a success message, show a notification, etc.

      // Redirect to the apply page
      window.location.href = "/apply";
    } catch (error) {
      console.log("error !");
    }
  };

  return (
    <div>
      <Navbar />

      <form className="container mx-auto px-4 mt-8">
        {/* Rest of the code... */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-medium mb-2">
            Candidate Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-1/2 px-4 py-2 border rounded"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Candidate Email
          </label>
          <input
            type="email"
            id="email"
            className="w-1/2 px-4 py-2 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-lg font-medium mb-2">
            Position
          </label>
          <select
            id="position"
            className="w-1/2 px-4 py-2 border rounded"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            {/* Rest of the options */}
            <option value="">Select Position</option>

            <option value="Front End">Front End</option>
            <option value="Backend">Backend</option>
            <option value="SQA">SQA</option>
            <option value="Software Engineer">Software Engineer</option>
            
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="education" className="block text-lg font-medium mb-2">
            Education
          </label>
          <input
            type="text"
            id="education"
            className="w-1/2 px-4 py-2 border rounded"
            required
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="experience" className="block text-lg font-medium mb-2">
            Experience
          </label>
          <input
            type="text"
            id="experience"
            className="w-1/2 px-4 py-2 border rounded"
            required
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-lg font-medium mb-2">
            Type
          </label>
          <div className="flex items-center">
            <input
              type="radio"
              id="partTime"
              name="type"
              className="mr-2"
              checked={type === "part-time"}
              onChange={() => setType("part-time")}
            />
            <label htmlFor="partTime" className="mr-4">
              Part-time
            </label>
            <input
              type="radio"
              id="fullTime"
              name="type"
              className="mr-2"
              checked={type === "full-time"}
              onChange={() => setType("full-time")}
            />
            <label htmlFor="fullTime">Full-time</label>
          </div>
        </div>
        <div className="flex justify-center">
        {error && <p className="text-red-500">{error}</p>}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
