import React from 'react';

import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './hoc/Dashboard.layout';
import HomeLayout from './hoc/Home.layout';
import Home from './pages/home/Home';
import GlobalStyle from './globalStyles';

function App() {

  return (
    <>
    <GlobalStyle />
      <Routes>
        <Route path="/*" element={<HomeLayout></HomeLayout>} >
          <Route path="" element={<Home />} />
        </Route>
            
        <Route path="/dashboard/" element={<DashboardLayout></DashboardLayout>} >
          
        </Route>

      </Routes>
    </>
  );
}

export default App;




