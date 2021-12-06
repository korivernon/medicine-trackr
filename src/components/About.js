import React from "react"
import { Card, } from "react-bootstrap"
import img from '../img/placeholder.png';
export default function About() {

  return (
    <>
       <Card>
       <Card.Body>
       <Card.Title>Group 01</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Kori Vernon, Rachel Ombok, Thy-Lan Gale</Card.Subtitle>
    <Card.Img variant="top" src={img} />
    </Card.Body>

    <Card.Body>
    
      <Card.Text>
        *Summary*
      </Card.Text>
      <Card.Link href="https://github.com/korivernon/medicine-trackr">Github Link</Card.Link>
    
    </Card.Body>
  </Card>
  
    </>
  )
}
