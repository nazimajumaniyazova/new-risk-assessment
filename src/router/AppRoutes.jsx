import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home';
import Login from '../pages/auth/login/Login';
import ChangePassword from '../pages/auth/changePassword/ChangePassword';
import SignUp from '../pages/auth/signUp/SignUp';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<ChangePassword />} path="/enter-your-phone-number" />
      <Route element={<SignUp />} path="/signup" />
    </Routes>
  );
}

export default AppRoutes;
