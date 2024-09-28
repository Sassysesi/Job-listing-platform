
import React from 'react';
import { Link } from 'react-router-dom';




const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    location: 'Johannesburg',
    description: 'Develop and maintain software applications.',
    image: './assets/Software Engineer.jpg'
  },
  {
    id: 2,
    title: 'Data Scientist',
    location: 'Cape Town',
    description: 'Analyze and interpret complex data sets.',
    image: './assets/data scientist.jpg'
  },
  {
    id: 3,
    title: 'Project Manager',
    location: 'Durban',
    description: 'Lead project teams and ensure successful delivery.',
    image: 'https://via.placeholder.com/600x400.png?text=Project+Manager'
  },
];

function JobList() {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="job-card">
            <img src={job.image} alt={job.title} className="job-image" />
            <h3>{job.title} - {job.location}</h3>
            <p>{job.description}</p>
            <Link to={`/jobs/${job.id}`}>More Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
