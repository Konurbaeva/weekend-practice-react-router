import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomeView />} />
      <Route path='events' element={<EventsView />}>
        <Route path=':eventId' element={<EventSubView />} />
      </Route>
      <Route path='events/:eventId/details' element={<EventDetailsView />} />
      <Route path='*' element={<NotFoundView />} />
    </Route>
  </Routes>
}


export default App;
