import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Add from "./Add"
import About from "./About"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Medications from "./Medications"
import Navigation from "./Navigation"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <>
    <AuthProvider>
    <Navigation/>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          
          
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/add-medication" component={Add} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/my-medications" component={Medications} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          
        </Router>
      </div>
    </Container>
    </AuthProvider>
    </>
  )
}

export default App
