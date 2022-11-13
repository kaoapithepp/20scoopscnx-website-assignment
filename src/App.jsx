import { Routes, Route } from 'react-router-dom';

// import global styles
import Reset from './styles/Reset';
import Fonts from './styles/Fonts';
import Variables from './styles/Variables';

// import modules
import Login from './modules/login/pages/Login';
import LoginComplete from './modules/welcome/pages/LoginComplete';
import Registration from './modules/register/pages/Registration';
import RegistrationComplete from './modules/register/pages/RegistrationComplete';



function App() {
  return (
   <>
    <Reset />
    <Fonts />
    <Variables />
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />
      <Route path="/welcome/:id" element={<LoginComplete />} />

      {/* Registration */}
      <Route path="/sign-up" element={<Registration />} />
      <Route path="/sign-up-complete" element={<RegistrationComplete />} />
    </Routes>
   </>
  );
}

export default App;
