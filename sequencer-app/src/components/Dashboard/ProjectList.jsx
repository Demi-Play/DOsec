import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/Projects';

function ProjectList({ token }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(token);
      setProjects(data);
    };

    fetchProjects();
  }, [token]);

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
