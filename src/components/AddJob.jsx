
import React, { useState } from 'react';

function AddJob() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(job);
    
  };

  return (
    <div>
      <h2>Add a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title:</label>
        <input type="text" name="title" value={job.title} onChange={handleChange} required />
        
        <label>Job Description:</label>
        <textarea name="description" value={job.description} onChange={handleChange} required />
        
        <label>Location:</label>
        <input type="text" name="location" value={job.location} onChange={handleChange} required />
        
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;
