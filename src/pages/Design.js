import React, { useEffect, useState } from 'react';
import { fetchDesignProjects, createDesignOrder } from '../services/api';
export default function Design() {
  const [projects, setProjects] = useState([]);
  useEffect(() => { fetchDesignProjects().then(setProjects); }, []);
  return (
    <div>
      <h1>Design Services</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.design_type} — Client: {p.name}</li>
        ))}
      </ul>
    </div>
  );
}