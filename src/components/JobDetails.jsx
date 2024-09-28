
import React from 'react';
import { useParams } from 'react-router-dom';

const jobs = [
  { id: 1, title: 'Software Engineer', location: 'Johannesburg', description: 'Develop and maintain software applications.' },
  { id: 2, title: 'Data Scientist', location: 'Cape Town', description: 'Analyze and interpret complex data sets.' },
  { id: 3, title: 'Project Manager', location: 'Durban', description: 'Lead project teams and ensure successful delivery.' },
];

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
    </div>
  );
}

export default JobDetails;
