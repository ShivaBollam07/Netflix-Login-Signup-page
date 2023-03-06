import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<Login />} />
      <Route exact path="/Netflix" element={<Netflix />} />
      <Route exact path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
