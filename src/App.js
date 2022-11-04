import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layout';
import HomePage from './pages/HomePage';
import Branch from './pages/Calendars';
import Meetings from './pages/Calendars/Meetings';

function App() {
  return (
    <Router>
      <div>
        <AppLayout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/branch" element={<Branch />}>
              <Route path="meetings" element={<Meetings />} />
            </Route>
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;
