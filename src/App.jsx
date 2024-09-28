
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddJob from './components/AddJob';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';


function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-job">Add Job</Link>
            <Link to="/jobs">Job Listings</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
