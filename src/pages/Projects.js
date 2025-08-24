import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Explore the examples and mini-projects you build during your learning.</p>
      <ul>
        <li><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
        <li><Link to="/hooks-practice">Hooks Practice</Link></li>
      </ul>
      <hr />
      <p>
        To add a new example:
      </p>
      <ol>
        <li>Create a new page under <code>src/pages/</code> (e.g., <code>src/pages/FormsPlayground.js</code>).</li>
        <li>Add a corresponding <code>&lt;Route&gt;</code> in <code>src/App.js</code>.</li>
        <li>Add a navigation link in <code>src/components/Navbar.js</code> and/or list it here.</li>
      </ol>
    </div>
  );
};

export default Projects;
