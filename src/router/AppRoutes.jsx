import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/auth/login/Login';
import VerificationCode from '../pages/auth/verificationCode/verificationCode';
import ChangePassword from '../pages/auth/changePassword/ChangePassword';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<ChangePassword />} path="/enter-your-phone-number" />
      <Route
        element={<VerificationCode />}
        path="/enter-your-phone-number/:phone"
      />
    </Routes>
  );
}

export default AppRoutes;
