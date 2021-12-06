import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function Navigation() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")
    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Basic Medicine Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        <Nav.Link href="/add-medication">Add Medication</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        {currentUser ? 
        <NavDropdown title="Account" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/profile-settings">View Profile</NavDropdown.Item>
          <NavDropdown.Item href="/update-profile">Update Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
         
        </NavDropdown> : 
        <><Nav.Link>Sign In </Nav.Link>
        <Nav.Link>Sign Up </Nav.Link></>
        }
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
  
}
