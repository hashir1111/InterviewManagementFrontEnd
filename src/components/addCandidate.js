import React, { useState } from 'react';
import axios from 'axios';

const AddCandidate = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role_id, setRoleId] = useState('');

  const handleAddCandidate = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API to add a new user
      const response = await axios.post('http://localhost:5000/api/v1/users', {
        username: username,
        password: password,
        email: email,
        role_id: role_id,
      });

      // Assuming the API returns a success message or any relevant response
      const message  = response.data;

      // Display a success message, show a notification, etc.
      console.log('User added successfully:', message);

      window.location.href = "/dashboard";
    } catch (error) {
      console.log('Error adding user:', error);
      // Display an error message or perform any error handling
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Add Candidate</h2>
      <form onSubmit={handleAddCandidate}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-4 py-2 border rounded"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role_id" className="block text-lg font-medium mb-2">
            Role ID
          </label>
          <input
            type="text"
            id="role_id"
            className="w-full px-4 py-2 border rounded"
            required
            value={role_id}
            onChange={(e) => setRoleId(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Candidate
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;
