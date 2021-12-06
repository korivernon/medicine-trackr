import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Card, Row, Col } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function Medications() {
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
      <>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Insulin</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Two shots a day</Card.Subtitle>
      <Card.Text>
      Controls the amount of sugar in the blood by moving it into the cells, where it can be used by the body for energy.
     For my Type 2 Diabetes.
      </Card.Text>
    
    </Card.Body>
  </Card> 
<br></br>

   <Card style={{ width: '18rem' }}>
   <Card.Body>
     <Card.Title>Carbamazepine</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">Up to 4 times a day</Card.Subtitle>
     <Card.Text>
    
     Used to prevent and control seizures, anticonvulsant. 
     </Card.Text>
    
      <small className="text-muted">* Conflicts with Asthma Inhaler, do not take within 4 hours of eachother</small>
    
   </Card.Body>
 </Card>
<br></br>
  
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Asthma Inhaler</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">As needed</Card.Subtitle>
    <Card.Text>
    Oral inhalation is used to prevent difficulty breathing, chest tightness, wheezing, and coughing. 
    corticosteroids.
    </Card.Text>
  
  </Card.Body>
</Card>

</>
  )
  
}
