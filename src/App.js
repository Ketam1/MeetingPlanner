import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loadLocations } from 'ducks/locations';
import AppLayout from 'layout';
import HomePage from 'pages/HomePage';
import Branch from 'pages/Calendars';
import MeetingsCalendar from 'pages/Calendars/CalendarPage';
import {
  Home,
} from '@mui/icons-material';

function App() {
  const dispatch = useDispatch();
  const {
      locations,
      loadingLocations,
      errorLoadLocations,
      successLoadLocations,
  } = useSelector(store => store.locations);
  const [itemsView, setItemsView] = useState();
  useEffect(() => {
    dispatch(loadLocations());
  }, []);

  const formatItems = (locations) => {
    return locations.map(location => {
      var rooms = location.rooms.map(room => {
        return {
          label: room.roomName,
          Icon: Home,
          to: `room${room.roomId}`
        }
      });

      return {
        label: location.locationName,
        Icon: Home,
        to: `/branch${location.locationId}`,
        children: rooms
      };
    })
  };

  useEffect(() => {
    if(locations){
      setItemsView(formatItems(locations));
    }
  }, [locations]);

  return (
    <Router>
      <div>
        <AppLayout items={itemsView}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            {locations.map(location => (
              <Route path={`/branch${location.locationId}`} element={<Branch />}>
              {location.rooms.map(room => (
                <Route 
                  path={`room${room.roomId}`} 
                  element={
                    <MeetingsCalendar 
                      locationId={location.locationId}
                      roomId={room.roomId}
                    />
                  } 
                />
              ))}
            </Route>
            ))}
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}

export default App;
