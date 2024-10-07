import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";


// components
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import ProfileDashboard from "./Pages/ProfileDashboard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/logout" element={<Logout />}/>
          <Route exact path="/dashboard" element={<ProfileDashboard />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
