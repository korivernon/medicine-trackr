import React, { useState } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function Add() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [checked, setCheck] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      //await function for adding new medication data
      history.push("/")
    } catch {
      setError("Failed to create new medication")
    }

    setLoading(false)
  }

  const handleChange = (event) => {
     setCheck(event.target.checked);
  }

  return (
    <>
      <Card>
        
        <Card.Body>
        <Card.Title>Add a Medication</Card.Title>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Medicine Name</Form.Label>
    <Form.Control type="text" placeholder="Name" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Medicine Notes and Purpose</Form.Label>
    <Form.Control type="text" placeholder="Notes" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Medicine Interval</Form.Label>
    <Form.Control type="number" placeholder="Interval" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Prescriber</Form.Label>
    <Form.Control type="text" placeholder="Interval" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="SMS Notifications"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Has Conflict?" onChange={handleChange.bind(this)}/>
  </Form.Group>
  {checked && 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Describe Conflicts </Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group> }
  <Button variant="primary" type="submit" disabled={loading}>
    Submit
  </Button>
</Form>
        </Card.Body>
      </Card>
     
    </>
  )
}
