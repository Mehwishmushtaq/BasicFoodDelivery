import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";
import UpdateUser from  "./components/updateUser";
import UserHome from "./components/userHome";
import SendEmail from "./components/sendEmail"; // Import your SendEmail component
import PlaceOrder from "./components/placeOrder";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/checkout" element={<Navigate to="/userDetails" />} />
          <Route path="/sendEmail" element={<SendEmail />} />
          <Route path="/placeOrder" element={<PlaceOrder/>} />



        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
