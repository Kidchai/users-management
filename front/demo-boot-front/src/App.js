import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/user_list/UserList";
import Create from "./components/create-update/Create";
import Update from "./components/create-update/Update";
import View from "./components/View";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<UserList />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/add/:id" element={<Create />}></Route>
            <Route path="/edit/:id" element={<Update />}></Route>
            <Route path="/view/:id" element={<View />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
