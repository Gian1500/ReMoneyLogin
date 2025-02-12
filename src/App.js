import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import RegisterForm from './components/RegisterForm';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [view, setView] = useState("login");

  return (
    <div className="flex w-full h-screen">
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        {view === "login" && <Form onSwitch={() => setView("register")} onSwitchForgot={() => setView("forgot")} />}
        {view === "register" && <RegisterForm onSwitch={() => setView("login")} />}
        {view === "forgot" && <ForgotPassword onSwitch={() => setView("login")} />}
      </div>
    </div>
  );
}

export default App;
