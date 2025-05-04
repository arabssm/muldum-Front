import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import React from 'react';
import Onboarding from './pages/onboarding/onboarding.tsx';
import Login from './pages/login/login.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Onboarding />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </BrowserRouter>
)
