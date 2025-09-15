"use client";

import React, { useEffect, useState } from "react";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
}

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const data: Job[] = [
        { id: 1, title: "Frontend Developer", description: "Build UI components", location: "Remote" },
        { id: 2, title: "Backend Developer", description: "Work on server APIs", location: "Bangalore" },
        { id: 3, title: "UI/UX Designer", description: "Design interfaces", location: "Hyderabad" },
      ];
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <main className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="mt-2">{job.description}</p>
            <p className="mt-2 text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
