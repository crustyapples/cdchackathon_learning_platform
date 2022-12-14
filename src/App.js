import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import DevCom from "./components/DevCom/DevCom";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CoursePage from "./components/CoursePage/CoursePage";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import AuthProvider from "./contexts/AuthProvider";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/AdminPanel/Dashboard/Dashboard";
import SyncLoader from "react-spinners/SyncLoader";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect, useState } from "react";

function App() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   return (

            <>
               <Router>
                  <Header />
                  <Switch>
                     <Route exact path="/">
                        <Main />
                     </Route>
                     <Route path="/home">
                        <Main />
                     </Route>
                     <Route path="/about">
                        <About />
                     </Route>
                     <Route path="/courses">
                        <CoursePage />
                     </Route>
                     <Route path="/course/:courseId">
                        <CourseDetails />
                     </Route>
                     <Route path="/contact">
                        <Contact />
                     </Route>
                     <Route path="/login">
                        <Login />
                     </Route>
                     <Route path="/register">
                        <Register />
                     </Route>
                     <Route path="/devcom">
                        <DevCom />
                     </Route>
                     <PrivateRoute path="/cart">
                        <Cart />
                     </PrivateRoute>
                     <PrivateRoute path="/admin">
                        <Dashboard />
                     </PrivateRoute>
                     <Route path="*">
                        <Main />
                     </Route>
                  </Switch>
                  <Footer />
               </Router>
            </>
      
   );
}

export default App;

