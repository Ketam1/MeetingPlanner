import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import Register from './pages/Users/Register';
import Manage from './pages/Users/Manage';

function App() {
  return (
    <Router>
      <div>
        <AppLayout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/users" element={<Users />}>
              <Route path="register" element={<Register />} />
              <Route path="manage" element={<Manage />} />
            </Route>
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;
