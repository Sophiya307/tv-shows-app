import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetails';
import TicketBookingForm from './components/TicketBookingForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ShowList} />
        <Route path="/show/:id" Component={ShowDetail} />
        <Route path="/book/:id" Component={TicketBookingForm} />
      </Routes>
    </Router>
  );
};

export default App;
