import React, { useEffect, useState } from "react";

type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
};

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
