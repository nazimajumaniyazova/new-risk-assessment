import { Route, Routes } from 'react-router-dom';
import ChangePassword from '../pages/changePassword/ChangePassword';
import Home from '../pages/home/Home';
import Login from '../pages/auth/login/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<ChangePassword />} path="/enter-your-phone-number" />
    </Routes>
  );
}

export default AppRoutes;
