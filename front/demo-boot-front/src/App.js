import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegistrationPage from "./components/login/RegistrationPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<UserList />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/home" element={<RegistrationPage />}></Route>
            {/* <Route path="/add/:id" element={<Create />}></Route>
            <Route path="/view/:id" element={<View />}></Route> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
